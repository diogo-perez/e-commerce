"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Pagina from "@/components/template/Pagina";
import useCarrinho from "@/data/hooks/useCarrinho";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import Link from "next/link";

export default function Cadastro() {
  const router = useRouter();
  const { login } = useCarrinho();
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [dataNasc, setDataNasc] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [senhaVisivel, setSenhaVisivel] = useState(false);
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

  const toggleSenhaVisivel = () => setSenhaVisivel(!senhaVisivel);

  return (
    <div className=" p-6 rounded shadow-md w-full max-w-md">
      <div className="mb-10 text-center">
        <p className="text-sm">
          Já possui uma conta?{" "}
          <Link href="/usuario/login" className="text-blue-600 hover:underline">
            Entrar
          </Link>
        </p>
      </div>
      <h2 className="text-2xl font-bold mb-6 text-center">Cadastrar-se</h2>
      <form onSubmit={handleSubmit}>
        <div className="w-full max-w-md">
          <div className="flex flex-col gap-6">
            <div>
              <label
                htmlFor="nome"
                className="block text-sm font-medium text-white"
              >
                Nome
              </label>
              <input
                type="text"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-black py-2 px-3"
              />
            </div>
            <div>
              <label
                htmlFor="sobrenome"
                className="block text-sm font-medium text-white"
              >
                Sobrenome
              </label>
              <input
                type="text"
                id="sobrenome"
                value={sobrenome}
                onChange={(e) => setSobrenome(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-black py-2 px-3"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-black py-2 px-3"
              />
            </div>
            <div>
              <label
                htmlFor="dataNasc"
                className="block text-sm font-medium text-white"
              >
                Data de Nascimento
              </label>
              <input
                type="date"
                id="dataNasc"
                value={dataNasc}
                onChange={(e) => setDataNasc(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-black py-2 px-3"
              />
            </div>
            <div>
              <label
                htmlFor="senha"
                className="block text-sm font-medium text-white"
              >
                Senha
              </label>
              <div className="relative">
                <input
                  type={senhaVisivel ? "text" : "password"}
                  id="senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-black py-2 px-3"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-600"
                  onClick={toggleSenhaVisivel}
                >
                  {senhaVisivel ? (
                    <IconEye size={20} stroke={1.5} />
                  ) : (
                    <IconEyeOff size={20} stroke={1.5} />
                  )}
                </button>
              </div>
            </div>
          </div>
          <button
            onClick={() => alert("Função de salvar ainda não implementada")}
            type="submit"
            className="w-full bg-green-600 text-white p-2 rounded hover:bg-yellow-600 transition-colors mt-5"
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
}
