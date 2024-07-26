import React, { useEffect, useRef, useState } from "react";
import {
  IconList,
  IconLogout,
  IconMenu,
  IconUser,
  IconX,
} from "@tabler/icons-react";
import Carrinho from "./Carrinho";
import Logo from "./Logo";
import Usuario from "./Usuario";
import Link from "next/link";
import useCarrinho from "@/data/hooks/useCarrinho";

export default function Navbar() {
  const { user, logout } = useCarrinho();
  const categorias = [
    "Eletrônicos",
    "Computadores",
    "Acessórios",
    "Wearables",
    "Fotografia",
    "Impressoras",
    "Eletrodomésticos",
    "Roupas e Calçados",
  ];
  const menuRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="flex justify-between items-center bg-zinc-800 h-20 px-10 relative">
      <div className="flex items-center">
        <Logo />
      </div>
      <div className="hidden md:flex flex-1 justify-center items-center space-x-3">
        {categorias.map((categoria) => (
          <button
            key={categoria}
            className="text-white text-sm py-4 px-2 border-b-2 border-transparent hover:border-white hover:bg-zinc-600 transition-colors"
          >
            {categoria}
          </button>
        ))}
      </div>
      <div className="flex items-center space-x-3">
        <Carrinho />
        <div className="hidden md:block">
          <Usuario />
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <IconX className="text-white" size={24} />
            ) : (
              <IconMenu className="text-white" size={24} />
            )}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div
          ref={menuRef}
          className="absolute z-20 top-16 right-0 w-full bg-zinc-800 p-5 flex flex-col items-start space-y-2 md:hidden"
        >
          <h2 className="text-white text-lg font-bold mb-2">Categorias</h2>
          {categorias.map((categoria) => (
            <button
              key={categoria}
              className="text-white text-sm py-2 px-4 border-b-2 border-transparent hover:border-white hover:bg-zinc-600 transition-colors w-full text-left"
            >
              {categoria}
            </button>
          ))}
          <div className="w-full border-t border-gray-600 mt-4"></div>
          <h2 className="text-white text-lg font-bold mt-2 mb-2">
            Área do Usuário
          </h2>
          <Link
            href={user ? "/usuario/meu-perfil" : "/usuario/login"}
            className="text-white block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center transition-colors"
          >
            <IconUser size={20} stroke={1.5} className="mr-2" />
            Meu Perfil
          </Link>
          <Link
            href={user ? "/usuario/meus-pedidos" : "/usuario/login"}
            className="text-white block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center transition-colors"
          >
            <IconList size={20} stroke={1.5} className="mr-2" />
            Meus Pedidos
          </Link>
          {user ? (
            <button
              onClick={logout}
              className="text-white block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center transition-colors"
            >
              <IconLogout size={20} stroke={1.5} className="mr-2" />
              Sair
            </button>
          ) : (
            <Link
              href="/usuario/login"
              className="text-white block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center transition-colors"
            >
              <IconLogout size={20} stroke={1.5} className="mr-2" />
              Logar
            </Link>
          )}
        </div>
      )}
    </header>
  );
}
