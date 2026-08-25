"use client";

import type { PropsWithChildren } from "react";
import { useRef } from "react";

import { useSupplyMosaicMotion } from "../hooks/use-supply-mosaic-motion";

export function SupplyMosaicMotion({ children }: PropsWithChildren) {
  const rootRef = useRef<HTMLDivElement>(null);

  useSupplyMosaicMotion(rootRef);

  return (
    <div ref={rootRef} className="mx-auto max-w-[1280px]">
      {children}
    </div>
  );
}
