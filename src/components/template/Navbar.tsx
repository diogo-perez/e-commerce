import Carrinho from "./Carrinho";
import Logo from "./Logo";
import Usuario from "./Usuario";

export interface NavbarProps {
  pesquisaProduto?: React.ReactNode;
}

export default function Navbar({ pesquisaProduto }: NavbarProps) {
  return (
    <header className="flex justify-between items-center bg-zinc-800 h-20 px-10">
      <div className="flex items-center">
        <Logo />
      </div>
      {pesquisaProduto}
      <div className="flex items-center space-x-7">
        <Carrinho />
        <Usuario />
      </div>
    </header>
  );
}
