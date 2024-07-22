import { IconTruck } from "@tabler/icons-react";
import Link from "next/link";

export default function PedidoVazio() {
  return (
    <div className="flex flex-col items-center gap-4 text-zinc-500">
      <IconTruck size={150} stroke={0.5} />
      <div className="text-center">
        <h2 className="text-3xl ">Você ainda não realizou nenhuma compra!</h2>
        <p>Adicione produtos clicando no botão abaixo</p>
      </div>
      <Link href="/" className="bg-green-500 text-white rounded-sm px-4 py-2">
        Ver produtos
      </Link>
    </div>
  );
}
