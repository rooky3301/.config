import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import toast from "@/lib/toastify";
import { useAuth } from "@/components/AuthContext";
import Image from "next/image";
import Head from "next/head";
import { GetServerSideProps } from "next";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Input } from "@/components/Input";
import { emailPattern } from "@/utils/regex";
import api from "@/lib/axios";

export default function Login() {
  const router = useRouter();
  const { signIn } = useAuth();
  const [loading, setLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (info: any) => {
    try {
      setLoading(true);
      const { data } = await api.post("/auth/login", {
        email: info.email,
        password: info.password,
      });
      Cookies.set("token", data?.data.access_token);
      router.push("/area_de_membros/SalesReport");
      toast.success("Login efetuado com sucesso.");
    } catch (e) {
      toast.error(e.response.data.msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>XPay &#183; Login</title>
      </Head>
      <div className="bg-[#01041e] min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="mx-auto sm:w-full sm:max-w-md">
          <Image
            className="mx-auto"
            src="/logotipo.png"
            width={150}
            height={100}
            alt="Logo XPay"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-100">
            Bem-vindo à XPay
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-[#f7f7f7] py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={onSubmit} method="POST">
              <Input
                label="E-mail"
                input={{
                  ...register("email", {
                    required: true,
                    pattern: emailPattern,
                  }),
                  placeholder: "Insira seu e-mail",
                  disabled: loading,
                }}
                id="email"
                type="email"
                error={!!errors.email}
                errorMessage={
                  errors.email?.type === "pattern"
                    ? "Email inválido"
                    : "Por favor, preencha este campo"
                }
              />

              <Input
                label="Senha"
                input={{
                  ...register("password", {
                    required: true,
                  }),
                  placeholder: "Insira sua senha",
                  disabled: loading,
                }}
                id="senha"
                isPassword
                error={!!errors.password}
                errorMessage={
                  errors.password?.type === "pattern"
                    ? "Senha inválida"
                    : "Por favor, preencha este campo"
                }
              />

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#01041e] hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Logar-se
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { token } = req.cookies;

  if (token) {
    return {
      redirect: {
        destination: "/area_de_membros/SalesReport",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
