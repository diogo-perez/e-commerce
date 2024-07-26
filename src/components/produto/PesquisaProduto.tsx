import React, { useState } from "react";
import { IconSearch, IconX } from "@tabler/icons-react";
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

  const handleClear = () => {
    setTexto("");
    setProdutosFiltrados([]);
    props.onProdutosFiltrados?.([]);
  };

  return (
    <div className="relative w-4/5 sm:w-3/5 left-1/2 transform -translate-x-1/2 flex z-30">
      <div className="relative w-full">
        <input
          type="text"
          value={texto}
          onChange={handleChange}
          className="w-full p-3 pl-10 pr-12 bg-zinc-800 text-white placeholder-white focus:outline-none border-2 border-white rounded-full"
          placeholder="Pesquisar produtos..."
        />
        <IconSearch
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white"
          size={20}
        />
        {texto && (
          <IconX
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white cursor-pointer"
            size={20}
            onClick={handleClear}
          />
        )}
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
