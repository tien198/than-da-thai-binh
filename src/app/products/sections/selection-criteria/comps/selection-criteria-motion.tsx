"use client";

import type { PropsWithChildren } from "react";
import { useRef } from "react";

import { useSelectionCriteriaMotion } from "../hooks/use-selection-criteria-motion";

export function SelectionCriteriaMotion({ children }: PropsWithChildren) {
  const rootRef = useRef<HTMLDivElement>(null);

  useSelectionCriteriaMotion(rootRef);

  return (
    <div
      ref={rootRef}
      className="mx-auto grid max-w-[1440px] gap-0 px-5 py-[30px] sm:px-8 lg:grid-cols-[380px_repeat(3,minmax(0,1fr))] lg:items-center lg:gap-10 lg:px-20"
    >
      {children}
    </div>
  );
}
