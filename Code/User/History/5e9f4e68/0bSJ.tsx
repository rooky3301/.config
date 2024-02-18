import Layout from "@/components/Base/Layout";
import { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import toast from "@/lib/toastify";
import axios from "@/lib/axios";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  Cog8ToothIcon,
  EllipsisHorizontalIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

const Clients = () => {
  const [stores, setStores] = useState([{ id: 0, name: "Todas as lojas" }]);
  const [status, setStatus] = useState([{ key: "", name: "Todos os status" }]);
  const [currentOrderStatus, setCurrentOrderStatus] = useState([]);
  const [selectedStore, setSelectedStore] = useState(stores[stores.length - 1]);
  const [selectedStatus, setSelectedStatus] = useState(
    status[status.length - 1]
  );
  const [tempSearch, setTempSearch] = useState("");
  const [page, setPage] = useState(1);
  const [date, setDate] = useState({
    startDate: "",
    endDate: "",
  });

  const { data, error, isLoading, mutate } = useSWR(
    `/orders/list?skip=${
      (page - 1) * 20
    }&take=20&search=${tempSearch}&storeId=${selectedStore.id}&status=${
      selectedStatus.key
    }&startDate=${date.startDate}&endDate=${date.endDate}`,
    fetcher
  );
  if (error) toast.error(error?.response?.message || "Algo deu errado");

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
    <Layout title="XPay &#183; Clientes">
      <div className="bg-white p-4 sm:p-6 lg:p-8 min-h-screen">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto inline-flex">
            <h1 className="text-xl font-semibold text-gray-900">
              Meus clientes &#183;
            </h1>
            <p className="ml-1 mt-1 text-sm text-gray-700">700 clientes</p>
          </div>
        </div>
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr className="bg-gray-50">
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-medium text-gray-900 sm:pl-6"
                      >
                        Nome
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Data de cadastro
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        aaaaaaa
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        aaaaaaaa
                        <p>aaaaa</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                  <div className="flex-1 flex justify-between sm:hidden">
                    <Link
                      href="#"
                      className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-100"
                    >
                      Voltar
                    </Link>
                    <Link
                      href="#"
                      className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-100"
                    >
                      Próximo
                    </Link>
                  </div>
                  <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm text-gray-700">
                        Mostrando <span className="font-medium">1</span> até{" "}
                        <span className="font-medium">10</span> de{" "}
                        <span className="font-medium">20</span> resultados
                      </p>
                    </div>
                    <div>
                      <nav
                        className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                        aria-label="Paginação"
                      >
                        <Link
                          href="#"
                          className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-100"
                        >
                          <span className="sr-only">Voltar</span>
                          <ChevronLeftIcon
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                        </Link>
                        <Link
                          href="#"
                          aria-current="page"
                          className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                        >
                          1
                        </Link>
                        <Link
                          href="#"
                          className="bg-white border-gray-300 text-gray-500 hover:bg-gray-100 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                        >
                          2
                        </Link>
                        <Link
                          href="#"
                          className="bg-white border-gray-300 text-gray-500 hover:bg-gray-100 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
                        >
                          3
                        </Link>
                        <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                          ...
                        </span>
                        <Link
                          href="#"
                          className="bg-white border-gray-300 text-gray-500 hover:bg-gray-100 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
                        >
                          8
                        </Link>
                        <Link
                          href="#"
                          className="bg-white border-gray-300 text-gray-500 hover:bg-gray-100 relative inline-flex itmes-center px-4 py-2 border text-sm font-medium"
                        >
                          9
                        </Link>
                        <Link
                          href="#"
                          className="bg-white border-gray-300 text-gray-500 hover:bg-gray-100 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                        >
                          10
                        </Link>
                        <Link
                          href="#"
                          className="relative inline-flex px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-100"
                        >
                          <span className="sr-only">Próximo</span>
                          <ChevronRightIcon
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                        </Link>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Clients;
