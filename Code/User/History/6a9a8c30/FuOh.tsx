import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ArrowLeftOnRectangleIcon,
  Cog6ToothIcon,
  LockClosedIcon
} from "@heroicons/react/24/outline";
import { IoStatsChart } from "react-icons/io5";
import { GiProgression } from "react-icons/gi";
import { BsBank } from "react-icons/bs";
import { HiOutlineDocumentReport } from "react-icons/hi"
import { ImUsers } from "react-icons/im";
import Head from "next/head";
import Image from "next/image";
import { NavigationItem, NavigationItemProps } from "./NavigationItem";
import { useRouter } from "next/router";

type Props = {
  title?: string;
  children?: React.ReactNode;
};

const navigation: NavigationItemProps[] = [
  { name: "Estatísticas Gerais", href: "/membersArea/", icon: IoStatsChart },
  { name: "Relatório de vendas", href: "/membersArea/SalesReport", icon: HiOutlineDocumentReport },
  { name: "Financeiro", href: "/membersArea/finance", icon: BsBank },
  { name: "Meus clientes", href: "/membersArea/clients", icon: ImUsers },
  { name: "Meu Progresso", href: "/membersArea/progress", icon: GiProgression },
  { name: "Segurança", href: "/membersArea/security", icon: LockClosedIcon },
  { name: "Configurações", href: "/membersArea/settings", icon: Cog6ToothIcon },
];

const Layout: React.FC<Props> = ({ title = "XPay - Front", children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-40 flex md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex w-full max-w-xs flex-1 flex-col bg-[#01041e]">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex h-10 w-10 items-center justify-center"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                  <div className="flex flex-shrink-0 items-center px-4">
                    <Image
                      src="/logotipo.png"
                      width={906}
                      height={188}
                      alt="XPay logo"
                    />
                  </div>
                  <nav className="mt-5 space-y-1 px-2">
                    {navigation.map((item, index) => (
                      // @ts-ignore
                      <NavigationItem key={index} {...item} />
                    ))}
                  </nav>
                </div>
                <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
                  <button
                    className="group flex w-full items-center rounded-md px-2 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    onClick={() => router.push("/auth/login")}
                  >
                    <ArrowLeftOnRectangleIcon
                      className="mr-3 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span>Deslogar</span>
                  </button>
                </div>
              </div>
            </Transition.Child>
            <div className="w-14 flex-shrink-0"></div>
          </Dialog>
        </Transition.Root>

        <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
          <div className="flex flex-1 flex-col bg-[#01041e]">
            <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
              <div className="flex flex-shrink-0 justify-center items-center px-4">
                <Image src="/logotipo.png" width={150} height={100} alt="XPay - Logo" />
              </div>
              <nav className="mt-5 flex-1 space-y-1 bg-[#01041e] px-2">

                {navigation.map((item, index) => (
                  <NavigationItem key={index} {...item} />
                ))}
              </nav>
            </div>
            <div className="flex flex-shrink-0 p-4">
              <button
                onClick={() => router.push("/auth/login")}
                className="group flex w-full items-center rounded-md px-2 py-2 text-sm font-medium text-gray-100 hover:text-sky-500"
              >
                <ArrowLeftOnRectangleIcon
                  className="mr-3 h-6 w-6 flex-shrink-0 text-gray-100 group-hover:text-sky-500"
                  aria-hidden="true"
                />
                <span>Deslogar</span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col md:pl-64">
          <div className="sticky top-0 z-10 pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <main className="flex-1">
            <div>
              <div>{children}</div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
