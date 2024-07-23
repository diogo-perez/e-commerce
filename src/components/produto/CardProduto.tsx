import useCarrinho from "@/data/hooks/useCarrinho";
import Produto from "@/data/model/Produto";
import Image from "next/image";
import { motion } from "framer-motion";
import { IconShoppingCartPlus } from "@tabler/icons-react";

export interface CardProdutoProps {
  produto: Produto;
}

const formatPreco = (preco: number) => {
  return preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
};

const cardVariants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function CardProduto(props: CardProdutoProps) {
  const { carrinho } = useCarrinho();
  const { descricao, imagem, nome, preco, desconto } = props.produto;

  return (
    <motion.ul
      className="flex flex-col w-full sm:w-72 bg-zinc-900 rounded-lg overflow-hidden shadow-lg"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.li className="item" variants={item}>
        <div className="relative w-full h-60">
          <Image src={imagem} alt={nome} fill className="object-cover" />
        </div>
        <div className="flex-1 flex flex-col gap-3 p-5">
          <h2 className="text-start font-bold text-white">{nome}</h2>
          <p className="flex-1 text-sm text-zinc-400">{descricao}</p>
          <div className="flex justify-between items-center">
            <div className="flex flex-col sm:flex-col justify-between items-start ">
              <span className="text-sm font-sans  mt-2 text-white line-through">
                De: {formatPreco(preco)}
              </span>
              <span className="text-lg font-semibold mt-2 text-white">
                {formatPreco(preco - desconto)}
              </span>
            </div>
            <button
              onClick={() => carrinho.adicionar(props.produto)}
              className="flex items-center border rounded-full px-4 py-2 text-sm text-white bg-green-600 hover:bg-zinc-600 transition-colors"
            >
              <IconShoppingCartPlus size={16} className="mr-2" />{" "}
              {/* Ícone adicionado */}
              Adicionar
            </button>
          </div>
        </div>
      </motion.li>
    </motion.ul>
  );
}
