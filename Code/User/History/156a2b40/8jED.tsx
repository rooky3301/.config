import Layout from "@/components/Base/Layout";
import Card from "@/components/Card";
import { IoIosStats } from "react-icons/io";
import { AiOutlineCalendar } from "react-icons/ai";
import { BiCog } from "react-icons/bi";
import { BsBagCheck, BsCartCheck } from "react-icons/bs";
import { TbTrendingUp } from "react-icons/tb";
import { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import toast from "@/lib/toastify";
import formatToBRL from "@/utils/formatToBRL";

const salesReport = () => {
  const [date, setDate] = useState({
    startDate: "",
    endDate: "",
  });

  const { data, error, isLoading } = useSWR(
    `dashboard/total-selling?startDate=${date.startDate}&endDate=${date.endDate}`,
    fetcher
  );
  if (error) toast.error(error?.response?.data?.message || "Algo deu errado");

  return (
    <Layout title="XPay &#183; Vendas">
      <div className="flex flex-col space-y-4 px-4 sm:px-6 lg:px-8 sm:py-4 lg:py-6 bg-[#01041E] min-h-screen">
        <div className="pb-2 sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <Card
              cards={[
                {
                  icon: <IoIosStats className="h-6 w-6 text-white" />,
                  id: 1,
                  name: "Vendas",
                  stat: `${formatToBRL(data?.data?.amount || 0)} - ${
                    data?.data?.qty || 0
                  }`,
                },
                {
                  icon: <AiOutlineCalendar className="h-6 w-6 text-white" />,
                  id: 2,
                  name: "Período",
                  stat: "30 dias",
                },
                {
                  icon: <BiCog className="h-6 w-6 text-white" />,
                  id: 3,
                  name: "Configurações",
                  stat: "acesso rápido",
                },
                {
                  icon: <BsCartCheck className="h-6 w-6 text-white" />,
                  id: 4,
                  name: "Vendas pagas",
                  stat: `${formatToBRL(data?.data?.amount)} - ${
                    data?.data?.qty || 0
                  }`,
                },
                {
                  icon: <BsBagCheck className="h-6 w-6 text-white" />,
                  id: 5,
                  name: "Vendas geradas",
                  stat: `${formatToBRL(data?.data?.amount)} - ${
                    data?.data?.qty || 0
                  }`,
                },
              ]}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default salesReport;
