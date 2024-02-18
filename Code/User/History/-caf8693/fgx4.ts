import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { User } from '@prisma/client';
import { GetDashboardInfoDto } from './dto/get-dashboard-info.dto';

@Injectable()
export class DashboardService {
  constructor(private prisma: PrismaService) {}

  async getData(
    user: User,
    query: GetDashboardInfoDto,
  ): Promise<Record<string, any>> {
    const userData = await this.prisma.user.findUnique({
      where: { id: user.id },
      select: {
        balance: true,
        Store: {
          select: {
            id: true,
            storeCategory: true,
            Order: {
              where: {
                status: 'PENDING',
                createdAt: {
                  gte: query?.startDate
                    ? new Date(query?.startDate)
                    : undefined,
                  lte: query?.endDate ? new Date(query?.endDate) : undefined,
                },
              },
              select: {
                OrderItems: {
                  select: {
                    quantity: true,
                    ProductVariations: {
                      select: {
                        Product: {
                          select: {
                            ProductStorePrice: true,
                            price_mastermind: true,
                            price_mentoring: true,
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    });

    const calculateTotalPrice = (orders: any): number => {
      let totalPrice = 0;

      for (const order of orders) {
        for (const item of order.OrderItems) {
          if (!item.ProductVariations) continue;

          const product = item.ProductVariations?.Product;
          const individualStorePrice =
            item.ProductVariations?.Product.ProductStorePrice?.[0]?.price;
          const categoryPrice =
            userData.Store.storeCategory === 'MASTERMIND'
              ? product?.price_mastermind
              : product?.price_mentoring;

          const price = individualStorePrice || categoryPrice;

          totalPrice += parseFloat(price) * item.quantity;
        }
      }

      return totalPrice;
    };

    const topProducts = await this.prisma.orderItems.findMany({
      where: {
        order: {
          storeId: userData.Store.id,
          createdAt: {
            gte: query?.startDate ? new Date(query?.startDate) : undefined,
            lte: query?.endDate ? new Date(query?.endDate) : undefined,
          },
        },
      },
      select: { 
        productName: true,
        quantity: true,
        ProductVariations: {
          select: {
            Product: {
              select: {
                ProductStorePrice: true,
                price_mastermind: true,
                price_mentoring: true,
              },
            },
          },
        },
      },
      orderBy: {
        quantity: 'desc',
      },
    });

    const filteredTopProducts = topProducts
      .map((item) => {
        const individualStorePrice =
          item.ProductVariations?.Product?.ProductStorePrice?.[0]?.price;

        const categoryPrice =
          userData.Store.storeCategory === 'MASTERMIND'
            ? item.ProductVariations?.Product?.price_mastermind
            : item.ProductVariations?.Product?.price_mentoring;

        return {
          productName: item.productName,
          quantity: item.quantity,
          price: individualStorePrice || categoryPrice,
        };
      })
      .reduce((acc, curr) => {
        const found = acc.find((item) => item.productName === curr.productName);
        if (found) {
          found.quantity += curr.quantity;
        } else {
          acc.push(curr);
        }
        return acc;
      }, [])
      .sort((a, b) => b.quantity - a.quantity)
      .slice(0, 5);

    return {
      status: 200,
      data: {
        balance: userData.balance,
        ordersPending: userData.Store.Order.length,
        debt: calculateTotalPrice(userData.Store.Order).toFixed(2),
        topProducts: filteredTopProducts,
      },
    };
  }

  private async GetUser(query) {
    const dataUser = await this.prisma.user.findMany({
      include: {
        Store: {
          include: {
            Order: {
              select: {
                state: true,
                status: true,
                TransactionHistory: {
                  select: {
                    amount: true,
                    type: true,
                  },
                  orderBy: { amount: 'desc' },
                },
                OrderItems: true,
              },
              where: {
                createdAt: {
                  gte: query?.startDate
                    ? new Date(query?.startDate)
                    : undefined,
                  lte: query?.endDate ? new Date(query?.endDate) : undefined,
                },
                id: query?.id,
              },
            },
            ProductStorePrice: {
              include: {
                Product: {
                  include: {
                    ProductVariations: true,
                  },
                },
              },
            },
          },
        },
        Payments: true,
      },
    });

    return dataUser;
  }

  private async GetTransitions(query) {
    const Transitions = await this.prisma.transactionHistory.findMany({
      where: {
        type: 'DEPOSIT',
        User: {
          Store: {
            id: {
              gte: query?.id,
            },
          },
        },
      },
    });

    return Transitions;
  }

  private GetTop(obj: any, count: number) {
    const Organize = Object.keys(obj)
      .sort((a, b) => obj[b] - obj[a])
      .reduce((acc, cur) => ({ ...acc, [cur]: obj[cur] }), {});

    return Object.entries(Organize).slice(0, count);
  }

  async dashBoardADM(query) {
    // Query Principal
    const dataUser = await this.GetUser(query);

    // Objectos a serem montados
    let orderCount = 0;
    const paidOrders = {
      quantity: 0,
      value: 0,
    };
    let totalDeposited = 0;
    const pending = {
      quantity: 0,
      value: 0,
    };
    const skuQuantities: { [sku: string]: number } = {};

    // Optimizar se possivel
    const statusToCalculate = ['PACKED', 'SENT', 'DELIVERED'];
    dataUser.forEach((user) => {
      const { Store } = user;

      const SKUS = [];

      if (Store) {
        Store.Order.forEach((ord) => {
          paidOrders.quantity += ord.TransactionHistory.length;
          (ord.TransactionHistory || []).forEach((trans) => {
            paidOrders.value += parseFloat(trans.amount.toString());
          });
          orderCount++;

          // Forcener Pedidos pendentes
          if (ord.status === 'PENDING') {
            ord.OrderItems.forEach((getPrices) => {
              if (getPrices.price) pending.value += getPrices.price.toNumber();
            });

            // Isso é full opcional lembre-se de tirar caso não queira o objeto e sim só o valor total em dinheiro
            pending.quantity += ord.OrderItems?.length || 0;
          }

          // Caso queira desconsiderar um produto pendente no top 5 SKUS é para retirar aqui
          if (
            ord.status === 'PENDING' ||
            statusToCalculate.includes(ord.status)
          ) {
            ord.OrderItems.forEach((GetSKU) => {
              if (GetSKU.sku !== null) SKUS.push(GetSKU.sku);
            });
          }
        });
      }

      SKUS.forEach((SKU) => {
        Store.ProductStorePrice.forEach((PriceProd) => {
          PriceProd.Product.ProductVariations.forEach((variantion) => {
            if (variantion.sku === SKU) {
              skuQuantities[SKU] = (skuQuantities[SKU] || 0) + 1;
            }
          });
        });
      });
    });

    const dataTransitions = await this.GetTransitions(query);
    dataTransitions.forEach((transitions) => {
      totalDeposited += transitions.amount.toNumber() || 0;
    });

    // formatar para as casas decimais
    pending.value = parseFloat(pending.value.toFixed(2));
    paidOrders.value = parseFloat(paidOrders.value.toFixed(2));

    return {
      status: 200,
      msg: 'OK',
      data: {
        OrderCount: orderCount,
        PaidOrders: paidOrders,
        TotalDeposited: totalDeposited,
        TierSKUS: this.GetTop(skuQuantities, 5),
        Pending: pending,
      },
    };
  }

  async dashBoardFinance(query) {
    // Query Principal
    const dataUser = await this.GetUser(query);

    const storePending = [];
    const storeScore = [];
    const pricesCust = [];
    let totalDeposited = 0;
    let Custer = 0;

    // Status a ser considerado
    const statusToCalculate = ['PACKED', 'SENT', 'DELIVERED'];

    dataUser.forEach((user) => {
      const { Store } = user;
      const SKUS = [];

      // Considerando as listas possiveis futuras
      const pendingOrders =
        Store?.Order?.filter((ord) => ord.status === 'PENDING') || [];

      if (pendingOrders.length > 0) {
        storePending[Store?.name] = pendingOrders.length;
      }

      const CustOrders = (Store?.Order || []).filter((ord) =>
        statusToCalculate.includes(ord.status),
      );

      // Pegar os SKUS dos pedidos
      CustOrders.forEach((ord) => {
        ord.OrderItems.forEach((GetSKU) => {
          if (GetSKU.sku !== null) SKUS.push(GetSKU.sku);
        });
      });

      //Loja com maiores pendencias
      if (pendingOrders.length > 0) {
        storePending[user.Store.name] = pendingOrders.length;
      }

      // Custo + OBjecto com loja caso necessario
      SKUS.forEach((SKU) => {
        Store.ProductStorePrice.forEach((ProductPrice) => {
          const matchingVariante = ProductPrice.Product.ProductVariations.find(
            (Variante) => Variante.sku === SKU,
          );

          if (matchingVariante) {
            pricesCust[Store?.name] =
              ProductPrice.Product.cost.toNumber() +
              (pricesCust[Store?.name] || 0);
            Custer += ProductPrice.Product.cost.toNumber();
          }
        });
      });

      // Loja com maior Score
      if (Store) {
        Store.Order.forEach((ord) => {
          (ord.TransactionHistory || []).forEach((trans) => {
            const score = parseFloat(
              parseFloat(
                (storeScore[Store.name] || 0) +
                  parseFloat(trans.amount.toString()),
              ).toFixed(2),
            );

            if (score > 0) {
              storeScore[Store?.name] = score;
            }
          });
        });
      }
    });
    const dataTransitions = await this.GetTransitions(query);
    dataTransitions.forEach((transitions) => {
      totalDeposited += transitions.amount.toNumber() || 0;
    });

    const tierPending = this.GetTop(storePending, 5);
    const tierScore = this.GetTop(storeScore, 5);

    return {
      status: 200,
      msg: 'OK',
      data: {
        TierStorePeding: tierPending,
        TierStoreDeposite: tierScore,
        PricesCust: Custer.toFixed(2),
        Receipts: totalDeposited.toFixed(2),
        Proft: (totalDeposited - Custer).toFixed(2),
      },
    };
  }
}
