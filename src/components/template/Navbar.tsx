import Carrinho from "./Carrinho";
import Logo from "./Logo";
import Usuario from "./Usuario";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center bg-zinc-800 h-20 px-10">
      <div className="flex items-center">
        <Logo />
      </div>
      <div className="flex items-center space-x-7">
        <Carrinho />
        <Usuario />
      </div>
    </header>
  );
}
