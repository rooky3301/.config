import Layout from "@/components/Base/Layout";
import Card from "@/components/Card";
import { useState } from "react";
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";
import { MdAttachMoney } from "react-icons/md";
import useSWR from "swr";
import axios from "@/lib/axios";
import fetcher from "@/lib/fetcher";
import toast from "@/lib/toastify";
import formatToBRL from "@/utils/formatToBRL";

const Finance = () => {
  const [date, setDate] = useState({
    startDate: "",
    endDate: "",
  });

  const { data, error, isLoading } = useSWR(
    `/dashboard/total-transfers-payed/get?startDate=${date.startDate}&endDate=${date.endDate}`,
    fetcher
  );
  if (error) toast.error(error?.response?.data?.message || "Algo deu errado");

  return (
    <Layout title="XPay &#183; Finanças">
      <div className="flex flex-col space-y-4 px-4 sm:px-6 lg:px-8 sm:py-4 lg:py-6 bg-cyan-950 min-h-screen">
        <div className="pb-2 sm:flex sm:items-center">
          <div className="sm:flex-auto grid grid-cols-1">
            <Card
              cards={[
                {
                  icon: <MdAttachMoney className="h-6 w-6 text-white" />,
                  id: 1,
                  name: "Disponível para saque",
                  stat: formatToBRL(data?.data?.amount),
                },
                {
                  icon: <MdAttachMoney className="h-6 w-6 text-white" />,
                  id: 2,
                  name: "Saques realizados",
                  stat: data?.data?.qty || 0,
                },
              ]}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Finance;
