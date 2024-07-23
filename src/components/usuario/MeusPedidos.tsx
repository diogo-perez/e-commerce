import { useState } from "react";
import AreaCompra from "./AreaCompra";
import {
  IconPackage,
  IconChevronDown,
  IconChevronUp,
  IconTruck,
} from "@tabler/icons-react";
import useCarrinho from "@/data/hooks/useCarrinho";

export default function MeusPedidos() {
  const { compras } = useCarrinho();
  const [expandido, setExpandido] = useState<{ [key: number]: boolean }>({});

  function toggleExpand(index: number) {
    setExpandido((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  }

  function formatData(data: Date) {
    return new Date(data).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }

  return (
    <div className="flex flex-col gap-5 pb-24">
      {compras.map((compra, index) => (
        <div key={index} className="flex flex-col gap-4 p-4 border rounded-md">
          <p className="text-sm text-gray-500">
            {formatData(compra.endereco.data)}
          </p>
          <div className="flex flex-col md:flex-row items-start gap-4">
            <div className="flex-1">
              <h2 className="text-xl font-bold">Endereço de Entrega:</h2>
              <p>
                {compra.endereco.street}, {compra.endereco.number}
              </p>
              <p>
                {compra.endereco.neighborhood} - {compra.endereco.city},{" "}
                {compra.endereco.state}
              </p>
              <p>CEP: {compra.endereco.cep}</p>
              <p>Complemento: {compra.endereco.complement}</p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <IconPackage size={24} />
              <span className="font-semibold">Itens:</span>
            </div>
            <div className="flex flex-wrap gap-4 mt-2">
              {compra.itens
                .slice(0, expandido[index] ? compra.itens.length : 2)
                .map((item) => (
                  <AreaCompra
                    key={item.produto.id}
                    produto={item.produto}
                    quantidade={item.quantidade}
                  />
                ))}
            </div>
            {compra.itens.length > 2 && (
              <div className="mt-2">
                <button
                  onClick={() => toggleExpand(index)}
                  className="flex items-center text-blue-500"
                >
                  {expandido[index] ? (
                    <>
                      <IconChevronUp size={16} />
                      <span className="ml-2">Recolher</span>
                    </>
                  ) : (
                    <>
                      <IconChevronDown size={16} />
                      <span className="ml-2">Mostrar todos</span>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
