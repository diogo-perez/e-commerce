import React, { createContext, useEffect, useState } from "react";
import ItemCarrinho from "../model/ItemCarrinho";
import Produto from "../model/Produto";
import useLocalStorage from "../hooks/useLocalStorage";
import toast from "react-hot-toast";

// Definição dos contextos
interface ContextGlobalProps {
  carrinho: {
    itens: ItemCarrinho[];
    qtdeDeItens: number;
    adicionar: (produto: Produto) => void;
    remover: (produto: Produto) => void;
    clearCarrinho: () => void;
    salvarCompra: (endereco: any) => void;
  };
  compras: {
    endereco: {
      cep: string;
      state: string;
      city: string;
      street: string;
      neighborhood: string;
      number: string;
      complement: string;
      data: Date;
    };
    itens: ItemCarrinho[];
  }[];
  qtdeDeItens: number;
  clearCompras: () => void;
  updateCompras: (newCompras: any[]) => void;
  user: { email: string } | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const ContextGlobal = createContext<ContextGlobalProps>({} as any);

export function ProvedorGlobal({ children }: any) {
  const [user, setUser] = useState<{ email: string } | null>(null);
  const [carrinhoItens, setCarrinhoItens] = useState<ItemCarrinho[]>([]);
  const [compras, setCompras] = useState<
    {
      endereco: {
        cep: string;
        state: string;
        city: string;
        street: string;
        neighborhood: string;
        number: string;
        complement: string;
        data: Date;
      };
      itens: ItemCarrinho[];
    }[]
  >([]);
  const { get, set, remove } = useLocalStorage();

  useEffect(() => {
    const storedCarrinho = get("carrinho");
    const storedCompras = get("compras");
    const storedUser = get("user");

    if (storedCarrinho) {
      setCarrinhoItens(storedCarrinho);
    }

    if (storedCompras) {
      setCompras(storedCompras);
    }

    if (storedUser) {
      setUser(storedUser);
    }
  }, [get]);

  const adicionar = (produto: Produto) => {
    if (user) {
      const indice = carrinhoItens.findIndex(
        (i) => i.produto.id === produto.id
      );
      const novosItens = [...carrinhoItens];

      if (indice === -1) {
        novosItens.push({ produto, quantidade: 1 });
      } else {
        novosItens[indice].quantidade++;
      }

      setCarrinhoItens(novosItens);
      set("carrinho", novosItens);
      toast.success(`${produto.nome} adicionado ao carrinho!`);
    } else {
      toast("Realize o login para começar a adicionar");
    }
  };

  const remover = (produto: Produto) => {
    const novosItens = carrinhoItens
      .map((i) => {
        if (i.produto.id === produto.id) {
          i.quantidade--;
        }
        return i;
      })
      .filter((i) => i.quantidade > 0);

    setCarrinhoItens(novosItens);
    set("carrinho", novosItens);
    const quantidadeRestante =
      novosItens.find((i) => i.produto.id === produto.id)?.quantidade ?? 0;
    if (quantidadeRestante > 0) {
      toast(`${quantidadeRestante} ${produto.nome} removido do carrinho!`);
    } else {
      toast(`${produto.nome} removido do carrinho!`);
    }
  };

  const clearCarrinho = () => {
    setCarrinhoItens([]);
    remove("carrinho");
  };

  const salvarCompra = (endereco: {
    cep: string;
    state: string;
    city: string;
    street: string;
    neighborhood: string;
    number: string;
    complement: string;
    data: Date;
  }) => {
    const novaCompra = {
      endereco,
      itens: carrinhoItens,
    };
    const updatedCompras = [...(get("compras") || []), novaCompra];
    setCompras(updatedCompras);
    set("compras", updatedCompras);
    clearCarrinho();
  };

  const clearCompras = () => {
    setCompras([]);
    remove("compras");
  };

  const updateCompras = (newCompras: any[]) => {
    setCompras(newCompras);
    set("compras", newCompras);
  };

  const login = (email: string, password: string) => {
    const user = { email, password };
    set("user", user);
    setUser(user);
    toast.success("Login bem-sucedido!");
  };

  const logout = () => {
    remove("user");
    setUser(null);
    toast.success("Logout bem-sucedido!");
    window.location.reload();
  };
  return (
    <ContextGlobal.Provider
      value={{
        carrinho: {
          itens: carrinhoItens,
          qtdeDeItens: carrinhoItens.reduce(
            (total, item) => total + item.quantidade,
            0
          ),
          adicionar,
          remover,
          clearCarrinho,
          salvarCompra,
        },
        compras,
        qtdeDeItens: compras.reduce(
          (totalCompra, compra) =>
            totalCompra +
            compra.itens.reduce(
              (totalItem, item) => totalItem + item.quantidade,
              0
            ),
          0
        ),
        clearCompras,
        updateCompras,
        login,
        logout,
        user,
      }}
    >
      {children}
    </ContextGlobal.Provider>
  );
}

export default ContextGlobal;
