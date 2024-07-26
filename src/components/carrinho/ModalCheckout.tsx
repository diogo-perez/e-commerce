import { IconX } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";

export interface CheckoutModalProps {
  onClose: () => void;
  onSave: (
    cep: string,
    state: string,
    city: string,
    street: string,
    neighborhood: string,
    number: string,
    complement: string
  ) => void;
  totalCarrinho: number;
}
const formatPreco = (preco: number) => {
  return preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
};
const estados = [
  "Acre (AC)",
  "Alagoas (AL)",
  "Amapá (AP)",
  "Amazonas (AM)",
  "Bahia (BA)",
  "Ceará (CE)",
  "Distrito Federal (DF)",
  "Espírito Santo (ES)",
  "Goiás (GO)",
  "Maranhão (MA)",
  "Mato Grosso (MT)",
  "Mato Grosso do Sul (MS)",
  "Minas Gerais (MG)",
  "Pará (PA)",
  "Paraíba (PB)",
  "Paraná (PR)",
  "Pernambuco (PE)",
  "Piauí (PI)",
  "Rio de Janeiro (RJ)",
  "Rio Grande do Norte (RN)",
  "Rio Grande do Sul (RS)",
  "Rondônia (RO)",
  "Roraima (RR)",
  "Santa Catarina (SC)",
  "São Paulo (SP)",
  "Sergipe (SE)",
  "Tocantins (TO)",
];
export default function CheckoutModal({
  onClose,
  onSave,
  totalCarrinho,
}: CheckoutModalProps) {
  const [cep, setCep] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");

  const handleSave = () => {
    onSave(cep, state, city, street, neighborhood, number, complement);
    onClose();
  };
  return (
    <div className="-top-10 p-8 rounded-md max-w-5xl h-auto relative justify-center mt-5 mb-1">
      <button onClick={onClose} className="absolute top-4 right-4">
        <IconX size={24} className="text-white" />
      </button>
      <h2 className="text-yellow-500 text-xl mb-4">Informações para entrega</h2>
      <div className=" grid-cols-1 md:grid-cols-1 gap-6">
        {/* Endereço */}
        <div className="space-y-4">
          <div className="mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2">
            <div>
              <label className="block mb-1">CEP</label>
              <input
                type="text"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                className="w-full p-1 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block mb-1">Estado</label>
              <select
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md text-black text-start"
              >
                <option value="">Selecione um estado</option>
                {estados.map((estado) => (
                  <option key={estado} value={estado}>
                    {estado}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block mb-1">Cidade</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full p-1 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2">
            <div>
              <label className="block mb-1">Bairro</label>
              <input
                type="text"
                value={neighborhood}
                onChange={(e) => setNeighborhood(e.target.value)}
                className="w-full p-1 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block mb-1">Número</label>
              <input
                type="text"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="w-full p-1 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block mb-1">Complemento</label>
              <input
                type="text"
                value={complement}
                onChange={(e) => setComplement(e.target.value)}
                className="w-full p-1 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div>
            <label className="block mb-1">Logradouro</label>
            <input
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              className="w-full p-1 border border-gray-300 rounded-md"
            />
          </div>
          <div className="text-yellow-500 font-bold mb-4">
            Total: {formatPreco(totalCarrinho)}
          </div>
        </div>
      </div>
      <div className="flex justify-end space-x-4">
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-green-600 text-white rounded-md"
        >
          Finalizar
        </button>
      </div>
    </div>
  );
}
