"use client";
import Pagina from "@/components/template/Pagina";
import MeusPedidos from "@/components/usuario/MeusPedidos";
import PedidoVazio from "@/components/usuario/PedidosVazio";
import useCarrinho from "@/data/hooks/useCarrinho";

export default function PageMeusPedidos() {
  const { compras } = useCarrinho();

  return (
    <Pagina className="flex flex-col gap-10 pb-24">
      <div className="flex flex-col gap-5 pb-24">
        {compras.length === 0 ? <PedidoVazio /> : <MeusPedidos />}
      </div>
    </Pagina>
  );
}
