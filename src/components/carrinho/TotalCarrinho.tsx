import ItemCarrinho from "@/data/model/ItemCarrinho";

export interface TotalCarrinhoProps {
  itens: ItemCarrinho[];
  onFinalizar: () => void;
}

const formatPreco = (preco: number) => {
  return preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
};

export default function TotalCarrinho(props: TotalCarrinhoProps) {
  const total = props.itens.reduce(
    (acc, item) => acc + item.produto.preco * item.quantidade,
    0
  );
  return (
    <div className="flex items-center justify-between bg-zinc-900 rounded-md p-7">
      <div className="flex flex-col justify-between">
        <span className=" text-zinc-500">Total</span>
        <span className="text-3xl font-bold text-yellow-500">
          {formatPreco(total)}
        </span>
      </div>
      <button
        onClick={props.onFinalizar}
        className="bg-green-600 px-4 py-3 rounded-md text-1xl"
      >
        Fechar pedido
      </button>
    </div>
  );
}
