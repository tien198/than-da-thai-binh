import Image from "next/image";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SupplyTileProps = {
  alt: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  image: string;
  overlayClassName: string;
};

export function SupplyTile({
  alt,
  children,
  className,
  contentClassName,
  image,
  overlayClassName,
}: SupplyTileProps) {
  return (
    <article className={cn("relative isolate overflow-hidden rounded-sm border border-cream-dark", className)}>
      <Image src={image} alt={alt} fill sizes="(max-width: 1023px) 50vw, 60vw" className="-z-20 object-cover" />
      <div className={cn("absolute inset-0 -z-10", overlayClassName)} />
      <div className={cn("absolute", contentClassName)}>{children}</div>
    </article>
  );
}
