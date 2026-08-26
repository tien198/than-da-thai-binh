"use client";

import type { PropsWithChildren } from "react";
import { useRef } from "react";

import { useCompanyStoryMotion } from "../hooks/use-company-story-motion";

export function CompanyStoryMotion({ children }: PropsWithChildren) {
  const rootRef = useRef<HTMLDivElement>(null);

  useCompanyStoryMotion(rootRef);

  return (
    <div
      ref={rootRef}
      className="mx-auto grid max-w-[1440px] gap-[22px] px-5 py-[52px] opacity-0 motion-reduce:opacity-100 lg:h-[700px] lg:grid-cols-[520px_680px] lg:gap-20 lg:px-20 lg:py-[72px]"
    >
      {children}
    </div>
  );
}
