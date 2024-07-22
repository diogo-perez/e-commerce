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
      props.onProdutosFiltrados?.(filtrados); // Chama o callback com os produtos filtrados
    } else {
      setProdutosFiltrados([]);
      props.onProdutosFiltrados?.([]); // Chama o callback com uma lista vazia
    }
  };

  const handleProdutoSelecionado = (produto: Produto) => {
    props.onProdutosFiltrados?.([produto]); // Chama o callback com o produto selecionado
    setTexto(produto.nome); // Atualiza o texto no input com o nome do produto selecionado
    setProdutosFiltrados([]); // Limpa a lista de produtos filtrados
  };

  return (
    <div className="mb-1 relative w-60">
      <input
        type="text"
        value={texto}
        onChange={handleChange}
        className="w-full p-2 pl-10 bg-zinc-800 text-white placeholder-white focus:outline-none border-b-2 border-white"
        placeholder="Pesquisar produtos..."
      />
      <IconSearch
        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white"
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
  );
}
