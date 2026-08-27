"use client";

import type { PropsWithChildren } from "react";
import { useRef } from "react";

import { useProductSectionMotion } from "../hooks/use-product-section-motion";

type ProductSectionMotionProps = PropsWithChildren<{
  index: number;
}>;

export function ProductSectionMotion({
  children,
  index,
}: ProductSectionMotionProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useProductSectionMotion(rootRef, index);

  return (
    <div
      ref={rootRef}
      className="mx-auto max-w-[1440px] px-5 py-[52px] sm:px-8 lg:px-20 lg:py-16"
    >
      {children}
    </div>
  );
}
