import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import api from "@/lib/axios";
import toast from "@/lib/toastify";

type User = {
  email: string;
  name: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  user: User | null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const Router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;

      api
        .get("/users/me")
        .then(({ data }) => {
          const user = data?.data.user;
          if (user && user?.role != "ADMIN") {
            toast.error(
              "Este usuário não tem permissão para acessar o painel de administração"
            );
            Cookies.remove("token");
            setUser(null);
            Router.push("/auth/login");
          }
          setUser(user);
        })
        .catch(() => {
          Cookies.remove("token");
          setUser(null);
        });

      setLoading(false);
    }
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const { data } = await api.post("/auth/login", { email, password });
      const user = data?.data.user;
      if (user && user?.role != "ADMIN") {
        toast.error(
          "Este usuário não tem permissão para acessar o painel de administração."
        );
        return;
      }
      setUser(data?.data?.user);
      Cookies.set("token", data?.data?.access_token);
      api.defaults.headers.Authorization = `Bearer ${data?.data?.access_token}`;
      Router.push("/");
    } catch (err) {
      toast.error(err?.response?.data?.msg || "Erro ao fazer login.");
    }
  };

  const signOut = () => {
    Cookies.remove("token");
    setUser(null);
    Router.push("/");
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!user, user, signIn, signOut, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);