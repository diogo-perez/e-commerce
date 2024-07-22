"use client";
import { ProvedorGlobal } from "@/data/contexts/ContextCarrinho";

export default function Layout(props: any) {
  return <ProvedorGlobal>{props.children}</ProvedorGlobal>;
}
