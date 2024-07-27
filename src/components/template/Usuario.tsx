"use client";

import { useState, useEffect, useRef } from "react";
import { IconUser, IconList, IconLogout } from "@tabler/icons-react";
import Link from "next/link";
import useCarrinho from "@/data/hooks/useCarrinho";

export default function Usuario() {
  const { user, logout } = useCarrinho();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
    <div className="relative z-10">
      <div
        className="flex items-center border border-white p-2 rounded-full text-white cursor-pointer"
        onClick={toggleMenu}
      >
        <IconUser size={24} stroke={1} className="mr-1" />
        <p className="text-xs">{user ? "Ola, " + user.email : "Entre"}</p>
      </div>
      {menuOpen && (
        <div
          ref={menuRef}
          className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20"
        >
          <Link
            href={user ? "/usuario/meu-perfil" : "/usuario/login"}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center transition-colors"
          >
            <IconUser size={20} stroke={1.5} className="mr-2" />
            Meu Perfil
          </Link>
          <Link
            href={user ? "/usuario/meus-pedidos" : "/usuario/login"}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center transition-colors"
          >
            <IconList size={20} stroke={1.5} className="mr-2" />
            Meus Pedidos
          </Link>
          {user ? (
            <button
              onClick={logout}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center transition-colors"
            >
              <IconLogout size={20} stroke={1.5} className="mr-2" />
              Sair
            </button>
          ) : (
            <Link
              href="/usuario/login"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center transition-colors"
            >
              <IconLogout size={20} stroke={1.5} className="mr-2" />
              Entrar
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
