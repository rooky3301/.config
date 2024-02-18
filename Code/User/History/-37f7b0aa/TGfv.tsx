import Layout from "@/components/Base/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout title="XPay - Segurança">
      <div className="bg-white min-h-screen flex flex-col items-center justify-center space-y-2 py-20">
        <Image
          src="../blank.svg"
          alt="Picture of the author"
          width={320}
          height={320}
        />
        <span className="font-sans text-lg font-medium text-neutral-800">
          Desculpe, no momento está página se encontra em construção.
        </span>
      </div>
    </Layout>
  );
}
