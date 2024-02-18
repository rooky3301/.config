import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  HomeIcon,
  Bars3Icon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  XMarkIcon,
  PencilIcon,
  ArrowLeftOnRectangleIcon,
  LinkIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import Head from "next/head";
import Image from "next/image";
import { NavigationItem, NavigationItemProps } from "./NavigationItem";
import { useAuth } from "@/contexts/AuthContext";

type Props = {
  title?: string;
  children?: React.ReactNode;
};

const navigation: NavigationItemProps[] = [
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon },
  { name: "Pedidos", href: "/orders", icon: ShoppingBagIcon },
  { name: "Carrinhos abandonados", href: "/abandoned-cart", icon: XMarkIcon },
  { name: "Produtos", icon: Bars3Icon, href: "/products" },
  {
    name: "Configurações",
    icon: Cog6ToothIcon,
    submenus: [
      { name: "Geral", href: "/generalSettingsStore" },
      { name: "Personalizar loja", href: "/config/personalize" },
      { name: "Integrações", href: "/config/integrations" },
    ],
  },
  {
    name: "Marketing", icon: ShoppingCartIcon,
    submenus: [
      { name: "Cupons", href: "/marketing/cupom" },
      { name: "Order Bump", href: "/marketing/order-bumps" },
      { name: "Pixels", href: "/marketing/pixels" },
  ]}
];

const Layout: React.FC<Props> = ({ title = "XPay - Front", children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { signOut } = useAuth();

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 md:hidden"
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
              <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
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
                      className="ml-1 flex items-center justify-center h-10 w-10"
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
                <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                  <div className="flex-shrink-0 flex items-center px-4">
                    <Image
                      src="/logo.svg"
                      alt="logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <nav className="mt-5 px-2 space-y-1">
                    {navigation.map((item, index) => (
                      // @ts-ignore
                      <NavigationItem key={index} {...item} />
                    ))}
                  </nav>
                </div>
                <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                  <button
                    className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full"
                    onClick={() => {}}
                  >
                    <ArrowLeftOnRectangleIcon
                      className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6"
                      aria-hidden="true"
                    />
                    <span>Deslogar</span>
                  </button>
                </div>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14"></div>
          </Dialog>
        </Transition.Root>

        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
          <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex justify-center items-center flex-shrink-0 px-4">
                <Image
                  src="/logo.svg"
                  alt="logo"
                  width={150}
                  height={100}
                />
              </div>
              <nav className="mt-5 flex-1 px-2 bg-white space-y-1">
                {navigation.map((item, index) => (
                  <NavigationItem key={index} {...item} />
                ))}
              </nav>
            </div>
            <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
              <button
                className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full"
                onClick={() => {
                  signOut()
                }}
              >
                <ArrowLeftOnRectangleIcon
                  className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6"
                  aria-hidden="true"
                />
                <span>Deslogar</span>
              </button>
            </div>
          </div>
        </div>
        <div className="md:pl-64 flex flex-col flex-1">
          <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="inline-flex justify-center items-center align-middle py-2 px-28">
              <Image
                className="inline-flex justify-between min-"
                src="/logo.svg"
                alt="logo"
                width={90}
                height={90}
              />
            </div>
          </div>
          <main className="flex-1">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
              <div className="py-6">{children}</div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
