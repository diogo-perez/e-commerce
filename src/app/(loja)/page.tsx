"use client";
import CardProduto from "@/components/produto/CardProduto";
import PesquisaProduto from "@/components/produto/PesquisaProduto";
import Pagina from "@/components/template/Pagina";
import produtos from "@/data/constants/produtos";
import Produto from "@/data/model/Produto";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const categoria = searchParams.get("categoria") || "Todos";
  const [produtosFiltrados, setProdutosFiltrados] =
    useState<Produto[]>(produtos);

  const handleProdutosFiltrados = (produtosFiltrados: Produto[]) => {
    setProdutosFiltrados(
      produtosFiltrados.length > 0 ? produtosFiltrados : produtos
    );
  };

  useEffect(() => {
    if (categoria && categoria !== "Todos") {
      setProdutosFiltrados(
        produtos.filter((produto) => produto.categoria === categoria)
      );
    } else {
      setProdutosFiltrados(produtos);
    }
  }, [categoria]);

  return (
    <Pagina>
      <PesquisaProduto
        produtos={produtos}
        onProdutosFiltrados={handleProdutosFiltrados}
      />
      <h3 className="flex mt-10 justify-start">Categoria: {categoria}</h3>
      <motion.div
        className="flex flex-wrap gap-5 justify-center mt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {produtosFiltrados.map((produto) => (
          <CardProduto key={produto.id} produto={produto} />
        ))}
      </motion.div>
    </Pagina>
  );
}
