import Layout from "@/components/Base/Layout";
import { UserIcon } from "@heroicons/react/24/outline";

const products = [
  {
    id: 1,
    name: "Women's Basic Tee",
    href: "#",
    price: "R$32,00",
    color: "Cinza",
    size: "G",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/checkout-page-05-product-01.jpg",
    imageAlt: "Detalhes do Basic Tee feminino em sua cor cinza.",
  },
];

const Details = () => {
  return (
    <Layout title="Detalhes do produto">
      <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
        <div className="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
          <div className="ml-4 mt-4">
            <h3 className="text-2xl font-bold leading-8 text-gray-900">
              Job Postings
            </h3>
            <nav className="flex" aria-label="Breadcrumb">
              <ol role="list" className="flex items-center space-x-4">
                <li>
                  <div>
                    <a></a>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Details;
