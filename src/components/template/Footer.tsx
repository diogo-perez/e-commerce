import React from "react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="flex justify-between items-center bg-zinc-800 h-20 px-10">
      <div className="flex items-center">
        <Logo />
      </div>
      <div className="flex-1 flex mt-10 justify-center items-center">
        <span>Todos os direitos reservados.</span>
      </div>
    </footer>
  );
}
