"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Pagina from "@/components/template/Pagina";
import useCarrinho from "@/data/hooks/useCarrinho";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import Link from "next/link";

export default function Login() {
  const router = useRouter();
  const { login } = useCarrinho();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (validateEmail(email)) {
      login(email, password);
      setTimeout(() => {
        router.push("/");
      }, 1000);
    }
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      setEmailError("Por favor, insira um email válido.");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };

  return (
    <Pagina className="flex justify-center">
      <div className=" p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Entrar</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1">E-mail:</label>
            <input
              type="email"
              className="w-full p-2 border rounded text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
          </div>
          <div className="mb-4 relative">
            <label className="block mb-1">Senha:</label>
            <input
              type={showPassword ? "text" : "password"}
              className="w-full p-2 border rounded text-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-12 transform -translate-y-1/2"
            >
              {showPassword ? (
                <IconEyeOff className="text-black" size={24} />
              ) : (
                <IconEye className="text-black" size={24} />
              )}
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-2 rounded hover:bg-yellow-600 transition-colors"
          >
            Entrar
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm">
            Não tem uma conta?{" "}
            <Link
              href="/usuario/cadastro"
              className="text-blue-600 hover:underline"
            >
              Cadastrar-se
            </Link>
          </p>
        </div>
      </div>
    </Pagina>
  );
}
