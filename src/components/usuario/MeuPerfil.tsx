import Usuario from "@/data/model/Usuario";
import React, { useState } from "react";
import { IconPencil, IconEye, IconEyeOff } from "@tabler/icons-react";
import user from "@/data/constants/usuario";

const fotoPadrao = "https://via.placeholder.com/150";

export default function MeuPerfil() {
  const [usuario, setUsuario] = useState<Usuario>({
    ...user,
    imagem: fotoPadrao,
  });

  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [fotoInputKey, setFotoInputKey] = useState(Date.now()); // Key para reinicializar o input de arquivo

  const toggleSenhaVisivel = () => setSenhaVisivel(!senhaVisivel);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUsuario({ ...usuario, imagem: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-4 sm:p-10">
      <div className="flex flex-col items-center gap-4">
        <label htmlFor="nome" className="block text-sm font-medium text-white">
          Foto de Perfil
        </label>
        <div className="relative w-32 h-32 rounded-full overflow-hidden border border-gray-100">
          <img
            src={usuario.imagem}
            alt="Foto do Usuário"
            className="w-full h-full object-cover"
          />
          <button
            className="absolute inset-0 flex items-center justify-center  border border-gray-100 rounded-full hover:bg-opacity-90 transition-colors"
            onClick={() => document.getElementById("file-input")?.click()}
          >
            <IconPencil size={20} stroke={2} color="white" />
          </button>

          <input
            id="file-input"
            type="file"
            accept="image/*"
            className="hidden"
            key={fotoInputKey} // Reinicializa o input ao mudar a key
            onChange={handleFileChange}
          />
        </div>
        <div className="w-full max-w-md">
          <div className="flex flex-col gap-6">
            <div>
              <label
                htmlFor="nome"
                className="block text-sm font-medium text-white"
              >
                Nome
              </label>
              <input
                type="text"
                id="nome"
                value={usuario.nome}
                onChange={(e) =>
                  setUsuario({ ...usuario, nome: e.target.value })
                }
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-black py-2 px-3"
              />
            </div>
            <div>
              <label
                htmlFor="sobrenome"
                className="block text-sm font-medium text-white"
              >
                Sobrenome
              </label>
              <input
                type="text"
                id="sobrenome"
                value={usuario.sobrenome}
                onChange={(e) =>
                  setUsuario({ ...usuario, sobrenome: e.target.value })
                }
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-black py-2 px-3"
              />
            </div>
            <div>
              <label
                htmlFor="dataNasc"
                className="block text-sm font-medium text-white"
              >
                Data de Nascimento
              </label>
              <input
                type="date"
                id="dataNasc"
                value={usuario.dataNasc.toISOString().split("T")[0]} // Formata a data para o formato `YYYY-MM-DD`
                onChange={(e) =>
                  setUsuario({ ...usuario, dataNasc: new Date(e.target.value) })
                }
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-black py-2 px-3"
              />
            </div>
            <div>
              <label
                htmlFor="senha"
                className="block text-sm font-medium text-white"
              >
                Senha
              </label>
              <div className="relative">
                <input
                  type={senhaVisivel ? "text" : "password"}
                  id="senha"
                  value={usuario.senha}
                  onChange={(e) =>
                    setUsuario({ ...usuario, senha: e.target.value })
                  }
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-black py-2 px-3"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-600"
                  onClick={toggleSenhaVisivel}
                >
                  {senhaVisivel ? (
                    <IconEye size={20} stroke={1.5} />
                  ) : (
                    <IconEyeOff size={20} stroke={1.5} />
                  )}
                </button>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="mt-6 px-4 py-2 bg-green-600 text-white rounded-md shadow-sm hover:bg-green-700"
            onClick={() => alert("Função de salvar ainda não implementada")}
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}
