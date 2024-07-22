"use client";
import CardProduto from "@/components/produto/CardProduto";
import PesquisaProduto from "@/components/produto/PesquisaProduto";
import Pagina from "@/components/template/Pagina";
import produtos from "@/data/constants/produtos";
import Produto from "@/data/model/Produto";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [produtosFiltrados, setProdutosFiltrados] =
    useState<Produto[]>(produtos);

  const handleProdutosFiltrados = (produtosFiltrados: Produto[]) => {
    if (produtosFiltrados.length === 0) {
      setProdutosFiltrados(produtos);
    } else {
      setProdutosFiltrados(produtosFiltrados);
    }
  };

  return (
    <Pagina
      pesquisaProduto={
        <PesquisaProduto
          produtos={produtos}
          onProdutosFiltrados={handleProdutosFiltrados}
        />
      }
    >
      <motion.div
        className="flex flex-wrap gap-5 justify-center"
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
