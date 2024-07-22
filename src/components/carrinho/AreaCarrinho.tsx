import ItemCarrinho from "@/data/model/ItemCarrinho";
import { IconMinus, IconPlus, IconX } from "@tabler/icons-react";
import Image from "next/image";

export interface AreaCarrinhoProps {
  item: ItemCarrinho;
  adicionar?: (item: ItemCarrinho) => void;
  remover?: (item: ItemCarrinho) => void;
}
const formatPreco = (preco: number) => {
  return preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
};

export default function AreaCarrinho(props: AreaCarrinhoProps) {
  return (
    <div className="flex items-center gap-5 bg-zinc-900 rounded-md overflow-hidden">
      <div className="relative w-28 h-28 sm:mb-0 sm:mr-4">
        <Image
          src={props.item.produto.imagem}
          alt={props.item.produto.nome}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-center flex-1">
        <span className="text-xl font-bold">{props.item.produto.nome}</span>
        <span className="text-sm text-zinc-400">
          {props.item.produto.descricao}
        </span>
        <div className="flex items-center gap-2 mt-2 text-zinc-400 text-lg font-bold">
          <span>{formatPreco(props.item.produto.preco)}</span>
          <IconX size={20} />
          <span>{props.item.quantidade}</span>
          <span>=</span>
          <span className="text-yellow-500">
            {formatPreco(props.item.produto.preco * props.item.quantidade)}
          </span>
        </div>
      </div>
      <div className="flex gap-2 items-center px-5">
        <button onClick={() => props.remover?.(props.item)}>
          <IconMinus />
        </button>
        <span className="flex px-4 py-2 rounded-md bg-black">
          {props.item.quantidade}
        </span>
        <button onClick={() => props.adicionar?.(props.item)}>
          <IconPlus />
        </button>
      </div>
    </div>
  );
}
