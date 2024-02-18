import Layout from "@/components/Base/Layout";
import { Fragment, useEffect, useRef, useState } from "react";
import Combobox from "@/components/Inputs/Combobox";
import fetcher from "@/lib/fetcher";
import toast from "@/lib/toastify";
import useSWR from "swr";
import axios from "@/lib/axios";
import { Popover, Transition } from "@headlessui/react";
import { BiFilterAlt } from "react-icons/bi";
import { BsCart, BsCartCheck } from "react-icons/bs";
import { FaMoneyBillTransfer, FaMoneyBillTrendUp } from "react-icons/fa6"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import formatToBRL from "@/utils/formatToBRL";
import Card from "@/components/Card";
import Loading from "@/components/Loading";
import OrderStatus from "@/utils/orderStatus";

export async function getServerSideProps(context) {
  if (!context.req.headers.cookie) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

const Admin = () => {
  const [stores, setStores] = useState([{ id: 0, name: "Todas as lojas" }]);
  const [status, setStatus] = useState([{ key: "", name: "Todos os status" }]);
  const [selectedStore, setSelectedStore] = useState(stores[stores.length - 1]);
  const [currentOrderStatus, setCurrentOrderStatus] = useState([]);
  const [tempSearch, setTempSearch] = useState("");
  const [page, setPage] = useState(1);
  const [date, setDate] = useState({
    startDate: "",
    endDate: "",
  });

  const { data, error, isLoading } = useSWR(
    `dashboard/adminDash?startDate=${date.startDate}&endDate=${date.endDate}`,
    fetcher
  );
  if (error)
    toast.error(error?.response?.data?.msg || "Erro ao carregar os dados.");

  const dateFilterRef = useRef(null);

  const DateFilter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    setDate({
      startDate: formData.get("startDate").toString(),
      endDate: formData.get("endDate").toString(),
    });
  };

  const handleClearFilter = () => {
    setDate({
      startDate: "",
      endDate: "",
    });
    dateFilterRef.current.reset();
  };

  useEffect(() => {
    axios
      .get("/stores/list")
      .then((res) => {
        setStores((prev) => [...prev, ...res.data?.data?.stores]);
        setSelectedStore(stores[stores.length - 1]);
      })
      .catch((err) => {
        toast.error(err?.response?.data?.msg || "Algo deu errado");
      });

    if (currentOrderStatus.length === 0 || status.length) {
      Object.keys(OrderStatus).forEach((key) => {
        setStatus((prev) => [...prev, { key, name: OrderStatus[key].name }]);
        setCurrentOrderStatus((prev) => [
          ...prev,
          { key, name: OrderStatus[key].name },
        ]);
      });
    }
  }, []);

  return (
    <Layout title="Dashboard administrativo">
      {isLoading && <Loading />}
      <div className="flex flex-col space-y-4 px-4 sm:px-6 lg:px-8">
        <div className="pb-2 sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-900">
              Dashboard - Administrativo
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Confira os dados da sua loja referente a dados administrativos
            </p>
          </div>
          <Combobox
            label="Loja"
            options={stores}
            value={selectedStore}
            onChange={(item) => setSelectedStore(item)}
          />
          <div className="pt-6 sm:mt-0 sm:ml-2 sm:flex-none">
            <Popover className="relative z-10">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={`
                     ${open ? "" : "text-opacity-90"}
                     mt-2 inline-flex w-full items-center justify-center rounded-md border border-solid border-gray-300 bg-white px-3 py-2 text-sm font-medium text-black shadow-sm hover:bg-gray-100`}
                  >
                    <span className="inline-flex">
                      <BiFilterAlt
                        className={`${open ? "" : "text-opacity-70"}
                         mr-2 mt-0 h-5 w-5 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                        aria-hidden="true"
                      />
                      Filtros
                    </span>
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute right-0 mt-2 w-56 origin-top-right items-center justify-center rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <form
                          ref={dateFilterRef}
                          className="relative flex flex-col gap-1 space-y-1 bg-white p-4 lg:grid-cols-2"
                          onSubmit={DateFilter}
                          method="POST"
                        >
                          <div className="border-b">
                            <label className="block text-sm font-medium text-gray-500">
                              Data Inicial
                            </label>
                            <input
                              name="startDate"
                              type="date"
                              className="inline-flex py-0.5 text-base text-gray-900"
                            />
                          </div>

                          <div className="border-b">
                            <label className="block text-sm font-medium text-gray-500">
                              Data Final
                            </label>
                            <input
                              name="endDate"
                              type="date"
                              className="inline-flex py-0.5 text-base text-gray-900"
                            />
                          </div>

                          <div className="inline-flex">
                            <p
                              onClick={handleClearFilter}
                              className="mt-2 mr-1 flex h-6 w-full cursor-pointer items-center justify-between text-sm font-medium text-indigo-600 hover:text-indigo-900"
                            >
                              Limpar tudo
                            </p>
                            <button
                              type="submit"
                              className="flex h-9 w-full cursor-pointer items-center justify-center rounded-lg bg-indigo-600 text-sm text-white shadow-sm hover:bg-indigo-700"
                            >
                              <MagnifyingGlassIcon
                                className="-ml-1 mr-2 h-5 w-5"
                                aria-hidden="true"
                              />
                              Filtrar
                            </button>
                          </div>
                        </form>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </div>
        </div>
        <Card
          cards={[
            {
              icon: <BsCart className="h-6 w-6 text-white" />,
              id: 1,
              name: "Quantidade de pedidos",
              stat: data?.data?.OrderCount,
            },
            {
              icon: <BsCartCheck className="h-6 w-6 text-white" />,
              id: 2,
              name: "Pedidos pagos",
              stat: `${data?.data?.PaidOrders.quantity} · ${formatToBRL(
                data?.data?.PaidOrders.value
              )}`,
            },
            {
              icon: <FaMoneyBillTrendUp className="h-6 w-6 text-white" />,
              id: 3,
              name: "Total depositado",
              stat: formatToBRL(data?.data?.TotalDeposited),
            },
            {
              icon: <FaMoneyBillTransfer className="h-6 w-6 text-white" />,
              id: 4,
              name: "Pedidos pendentes",
              stat: formatToBRL(data?.data?.Pending.quantity),
            },
          ]}
        />
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="py-3.5 sm:flex-auto">
                <h1 className="text-xl font-semibold text-gray-900">
                  Top 5 SKUs mais vendidos
                </h1>
              </div>
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        SKU
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Quantidade de pedidos
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {data?.data?.TierSKUS.map((item) => (
                      <tr key={item[1]}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {item[0]}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {item[1]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Admin;
