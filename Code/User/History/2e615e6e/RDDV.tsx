import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import Toast from "@/lib/toastify";
import { useAuth } from "@/components/AuthContext";
import Image from "next/image";

const Login = () => {
  const router = useRouter();
  const { signIn } = useAuth();

 const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;

    await signIn(email, password);
  };

  return (
    <>
    <div className="bg-[#01041e] min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mx-auto sm:w-full sm:max-w-md">
        <Image
          className="mx-auto"
          src="/logotipo.png"
          width={150}
          height={100}
          alt="Logo XPay"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-100">Bem-vindo à XPay</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-[#f7f7f7] py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={onSubmit} method="POST">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-[#f7f7f7] rounded-md shadow-md text-black placeholder-gray-400 focus:outline-none focus:ring-[#01041e] focus:border-[#01041e] sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Senha
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-[#f7f7f7] rounded-md shadow-md text-black placeholder-gray-400 focus:outline-none focus:ring-[#01041e] focus:border-[#01041e] sm:text-sm"
                />
              </div>
            </div>

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
  )
}

export default Login;
