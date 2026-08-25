"use client";

import type { PropsWithChildren } from "react";
import { useRef } from "react";

import { useWhyUsMotion } from "../hooks/use-why-us-motion";

export function WhyUsMotion({ children }: PropsWithChildren) {
  const rootRef = useRef<HTMLDivElement>(null);

  useWhyUsMotion(rootRef);

  return (
    <div ref={rootRef} className="mx-auto max-w-[1280px]">
      {children}
    </div>
  );
}
