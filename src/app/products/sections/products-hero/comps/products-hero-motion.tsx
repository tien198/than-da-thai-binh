"use client";

import type { PropsWithChildren } from "react";
import { useRef } from "react";

import { useProductsHeroMotion } from "../hooks/use-products-hero-motion";

export function ProductsHeroMotion({ children }: PropsWithChildren) {
  const rootRef = useRef<HTMLDivElement>(null);

  useProductsHeroMotion(rootRef);

  return (
    <div
      ref={rootRef}
      className="mx-auto flex max-w-[1440px] flex-col px-5 pt-[38px] pb-6 opacity-0 motion-reduce:opacity-100 sm:px-8 lg:relative lg:block lg:h-[520px] lg:p-0"
    >
      {children}
    </div>
  );
}
