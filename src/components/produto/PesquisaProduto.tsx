import React, { useState } from "react";
import { IconSearch } from "@tabler/icons-react";
import Produto from "@/data/model/Produto";

export interface PesquisaProdutoProps {
  produtos: Produto[];
  onProdutosFiltrados?: (produtosFiltrados: Produto[]) => void;
}

export default function PesquisaProduto(props: PesquisaProdutoProps) {
  const [texto, setTexto] = useState("");
  const [produtosFiltrados, setProdutosFiltrados] = useState<Produto[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    setTexto(valor);
    if (valor.length > 0) {
      const filtrados = props.produtos.filter((produto) =>
        produto.nome.toLowerCase().includes(valor.toLowerCase())
      );
      setProdutosFiltrados(filtrados);
      props.onProdutosFiltrados?.(filtrados);
    } else {
      setProdutosFiltrados([]);
      props.onProdutosFiltrados?.([]);
    }
  };

  const handleProdutoSelecionado = (produto: Produto) => {
    props.onProdutosFiltrados?.([produto]);
    setTexto(produto.nome);
    setProdutosFiltrados([]);
  };

  return (
    <div className="absolute -mt-8 mb-0 left-1/2 transform -translate-x-1/2 w-full flex justify-center z-20">
      <div className="relative w-5/12 mb-8">
        <input
          type="text"
          value={texto}
          onChange={handleChange}
          className="w-full p-3 pl-10 bg-zinc-800 text-white placeholder-white focus:outline-none border-2 border-white rounded-full"
          placeholder="Pesquisar produtos..."
        />
        <IconSearch
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white"
          size={20}
        />
        {produtosFiltrados.length > 0 && (
          <ul className="absolute left-0 right-0 bg-zinc-800 mt-1 max-h-60 overflow-y-auto rounded-md shadow-lg z-10">
            {produtosFiltrados.map((produto) => (
              <li
                key={produto.id}
                className="p-2 cursor-pointer hover:bg-zinc-700 text-white"
                onClick={() => handleProdutoSelecionado(produto)}
              >
                {produto.nome}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
