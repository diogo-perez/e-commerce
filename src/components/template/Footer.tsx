import React from "react";
import Logo from "./Logo";
import { IconBrandFacebook, IconBrandInstagram } from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-800 px-10 py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start md:items-center">
        <div className="flex flex-col items-center md:flex-row md:items-center md:space-x-2">
          <Logo />

          <p className="font-bold text-white md:ml-2">
            E-commerce
            <br />
          </p>
          <div className="text-white md:ml-10 md:order-2">
            <span>
              Rua Exemplo, 123, Cidade, Estado
              <br />
              CEP: 12345-678
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
