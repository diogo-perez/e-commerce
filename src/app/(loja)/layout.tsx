"use client";
import { Suspense } from "react";
import { ProvedorGlobal } from "@/data/contexts/ContextCarrinho";

export default function Layout(props: any) {
  return (
    <ProvedorGlobal>
      <Suspense fallback={<div>Loading...</div>}>{props.children}</Suspense>
    </ProvedorGlobal>
  );
}
