import { useContext } from "react";
import ContextGlobal from "../contexts/ContextCarrinho";

const useCarrinho = () => useContext(ContextGlobal);
export default useCarrinho;
