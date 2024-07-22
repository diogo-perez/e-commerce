import Navbar from "./Navbar";

export interface PaginaProps {
  children: React.ReactNode;
  className?: string;
  pesquisaProduto?: React.ReactNode;
}

export default function Pagina(props: PaginaProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main
        className={`w-full max-w-[1200px] mx-auto flex-1 ${
          props.className ?? ""
        } py-10 px-4 sm:px-6 lg:px-8`}
      >
        {props.children}
      </main>
    </div>
  );
}
