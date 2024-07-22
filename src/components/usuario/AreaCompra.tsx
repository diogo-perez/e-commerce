import Produto from "@/data/model/Produto";

export interface AreaCompraProps {
  produto: Produto;
  quantidade: number;
}
const formatPreco = (preco: number) => {
  return preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
};

export default function AreaCompra({ produto, quantidade }: AreaCompraProps) {
  return (
    <div className="flex items-center gap-5 bg-zinc-900 rounded-md overflow-hidden">
      <div className="border p-4 rounded-md">
        <h3 className="text-lg font-semibold">{produto.nome}</h3>
        <p>Preço: R${formatPreco(produto.preco)}</p>
        <p>Quantidade: {quantidade}</p>
      </div>
    </div>
  );
}
