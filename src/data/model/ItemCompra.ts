import Produto from "./Produto";

export default interface ItemCompra {
  produto: Produto;
  endereco: {
    cep: string;
    state: string;
    city: string;
    street: string;
    neighborhood: string;
    number: string;
    complement: string;
    data:Date;
  };
}
