import Layout from "@/components/Base/Layout";
import { Input } from "@/components/Input";
import toast from "@/lib/toastify";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/router";

const Settings = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  return (
    <Layout title="XPay &#183; Configurações">
      <div className="min-h-screen bg-white sm:p-4 lg:p-6">
        <form className="space-y-8 divide-y divide-gray-200">
          <div className="space-y-8 divide-y divide-gray-200">
            <div>
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Configurações
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Altere suas informações pessoais de sua conta XPay
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-4 space-y-3">
                  <Input
                    label="Razão Social"
                    input={{
                      ...register("companyName", {
                        required: true,
                      }),
                      placeholder: "Insira o nome da sua companhia",
                      disabled: loading,
                    }}
                    id="text"
                    type="text"
                  />

                  <Input
                    label="E-mail"
                    input={{
                      ...register("email", {
                        required: true,
                      }),
                      placeholder: "Insira seu email",
                      disabled: loading,
                    }}
                    id="email"
                    type="email"
                  />

                  <Input
                    label="Telefone"
                    input={{
                      ...register("phone", {
                        required: true,
                      }),
                      placeholder: "Insira seu número de telefone",
                      disabled: loading,
                    }}
                    id="phone"
                    type="text"
                  />

                  <Input
                    label="GUID Token"
                    input={{
                      ...register("guid_token", {
                        required: true,
                      }),
                      disabled: true,
                    }}
                    id="token"
                  />

                  <Input
                    label="CNPJ"
                    input={{
                      ...register("CNPJ", {
                        required: true,
                      }),
                      disabled: true,
                    }}
                    id="CNPJ"
                  />
                </div>
              </div>
            </div>

            <div className="pt-5">
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-100"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 outline-none"
                >
                  Salvar alterações
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Settings;
