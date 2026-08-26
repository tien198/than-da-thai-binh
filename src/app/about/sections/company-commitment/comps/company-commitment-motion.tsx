"use client";

import type { PropsWithChildren } from "react";
import { useRef } from "react";

import { useCompanyCommitmentMotion } from "../hooks/use-company-commitment-motion";

export function CompanyCommitmentMotion({ children }: PropsWithChildren) {
  const rootRef = useRef<HTMLDivElement>(null);

  useCompanyCommitmentMotion(rootRef);

  return (
    <div
      ref={rootRef}
      className="mx-auto grid max-w-[1440px] gap-6 px-5 py-[52px] opacity-0 motion-reduce:opacity-100 lg:h-[620px] lg:grid-cols-[480px_minmax(0,720px)] lg:gap-20 lg:px-20 lg:py-[72px]"
    >
      {children}
    </div>
  );
}
