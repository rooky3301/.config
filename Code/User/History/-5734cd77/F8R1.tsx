import Layout from "@/components/Base/Layout";
import { useLayoutEffect, useRef, useState } from "react";
import classNames from "@/utils/classNames";
import Image from "next/image";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  Cog8ToothIcon,
  EllipsisHorizontalIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

const people = [
  {
    name: "Maria Silva",
    title: "05/06/2023 - 12:22",
    department: "Há um mês",
  },
  {
    name: "João Lopes",
    title: "01/06/2023 - 17:32",
    department: "Há um mês",
  },
  {
    name: "José Gomes",
    title: "01/06/2023 - 17:30",
    department: "Há um mês",
  },
  {
    name: "Elizabeth Almeida",
    title: "05/06/2023 - 15:32",
    department: "Há um mês",
  },
  {
    name: "Kelly Silva",
    title: "04/06/2023 - 11:15",
    department: "Há um mês",
  },
];

type Props = {
  session: any;
  statusId: number | string;
};

const Clients: React.FC<Props> = ({}) => {
  const checkbox = useRef();
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedPeople, setSelectedPeople] = useState([]);

  useLayoutEffect(() => {
    const isIndeterminate =
      selectedPeople.length > 0 && selectedPeople.length < people.length;
    setChecked(selectedPeople.length === people.length);
    setIndeterminate(isIndeterminate);
    //checkbox.current.indeterminate = isIndeterminate
  }, [selectedPeople]);

  function toggleAll() {
    setSelectedPeople(checked || indeterminate ? [] : people);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }

  return (
    <Layout title="XPay &#183; Clientes">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center"></div>
      </div>
    </Layout>
  );
};

export default Clients;
