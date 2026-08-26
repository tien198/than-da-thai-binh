"use client";

import type { PropsWithChildren } from "react";
import { useRef } from "react";

import { useSupplyCapabilityMotion } from "../hooks/use-supply-capability-motion";

export function SupplyCapabilityMotion({ children }: PropsWithChildren) {
  const rootRef = useRef<HTMLDivElement>(null);

  useSupplyCapabilityMotion(rootRef);

  return (
    <div
      ref={rootRef}
      className="mx-auto max-w-[1440px] px-5 py-[52px] opacity-0 motion-reduce:opacity-100 lg:h-[640px] lg:px-20 lg:py-[72px]"
    >
      {children}
    </div>
  );
}
