import React, { useEffect, useRef, useState } from "react";
import { IconMenu, IconX } from "@tabler/icons-react";
import Carrinho from "./Carrinho";
import Logo from "./Logo";
import Usuario from "./Usuario";

export default function Navbar() {
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
    <header className="flex justify-between items-center bg-zinc-800 h-20 px-10">
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
        <Usuario />
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
          className="absolute z-20 top-16 right-0 w-full bg-zinc-800 p-5 flex flex-col items-center space-y-2 md:h-1/2"
        >
          {categorias.map((categoria) => (
            <button
              key={categoria}
              className="text-white text-sm py-2 px-4 border-b-2 border-transparent hover:border-white hover:bg-zinc-600 transition-colors w-full text-center"
            >
              {categoria}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
