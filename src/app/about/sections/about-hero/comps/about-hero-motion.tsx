"use client";

import type { PropsWithChildren } from "react";
import { useRef } from "react";

import { useAboutHeroMotion } from "../hooks/use-about-hero-motion";

export function AboutHeroMotion({ children }: PropsWithChildren) {
  const rootRef = useRef<HTMLDivElement>(null);

  useAboutHeroMotion(rootRef);

  return (
    <div
      ref={rootRef}
      className="relative mx-auto h-full max-w-[1440px] overflow-hidden opacity-0 motion-reduce:opacity-100"
    >
      {children}
    </div>
  );
}
