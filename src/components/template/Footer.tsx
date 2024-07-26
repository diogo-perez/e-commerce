import React from "react";
import Logo from "./Logo";
import { IconBrandFacebook, IconBrandInstagram } from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="flex justify-between items-center bg-zinc-800 h-60 px-10">
      <div className="flex flex-col items-start">
        <div className="flex space-x-2 mb-2">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandInstagram className="text-white" size={24} />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandFacebook className="text-white" size={24} />
          </a>
        </div>
        <Logo />
        <div className="mt-4 text-white">
          <span>
            Rua Exemplo, 123, Cidade, Estado
            <br />
            CEP: 12345-678
            <br />
            Todos os direitos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
}
