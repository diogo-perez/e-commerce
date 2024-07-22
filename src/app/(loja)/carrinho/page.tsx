"use client";
import AreaCarrinho from "@/components/carrinho/AreaCarrinho";
import CarrinhoVazio from "@/components/carrinho/CarrinhoVazio";
import CheckoutModal from "@/components/carrinho/ModalCheckout";
import TotalCarrinho from "@/components/carrinho/TotalCarrinho";
import Pagina from "@/components/template/Pagina";
import useCarrinho from "@/data/hooks/useCarrinho";
import { useState } from "react";
import toast from "react-hot-toast";

export default function PageCarrinho() {
  const { carrinho } = useCarrinho();
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  const handleFinalizar = () => {
    setIsCheckoutModalOpen(true);
  };

  const handleSave = (
    cep: string,
    state: string,
    city: string,
    street: string,
    neighborhood: string,
    number: string,
    complement: string
  ) => {
    const dataAtual = new Date();
    carrinho.salvarCompra({
      cep,
      state,
      city,
      street,
      neighborhood,
      number,
      complement,
      data: dataAtual,
    });
    toast.success("Compra realizada com sucesso!");
    setIsCheckoutModalOpen(false);
  };

  const totalCarrinho = carrinho.itens.reduce(
    (acc, item) => acc + item.produto.preco * item.quantidade,
    0
  );

  return (
    <Pagina className="flex flex-col gap-10 pb-24">
      <CheckoutModal
        isOpen={isCheckoutModalOpen}
        onClose={() => setIsCheckoutModalOpen(false)}
        onSave={handleSave}
        totalCarrinho={totalCarrinho}
      />

      {carrinho.itens.length === 0 ? (
        <CarrinhoVazio />
      ) : (
        <>
          <div className="flex flex-col gap-5 pb-24">
            {carrinho.itens.map((item) => (
              <AreaCarrinho
                key={item.produto.id}
                item={item}
                adicionar={(item) => carrinho.adicionar(item.produto)}
                remover={(item) => carrinho.remover(item.produto)}
              />
            ))}
          </div>
          <div className="fixed bottom-0 left-0 right-0 bg-zinc-900 ">
            <TotalCarrinho
              itens={carrinho.itens}
              onFinalizar={handleFinalizar}
            />
          </div>
        </>
      )}
    </Pagina>
  );
}
