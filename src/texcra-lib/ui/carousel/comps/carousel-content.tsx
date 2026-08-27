"use client";

import * as React from "react";

import { cn } from "@/utilities/ui";

import { useCarousel } from "./carousel-context";

function CarouselContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        data-slot="carousel-content"
        className={cn(
          "flex",
          orientation === "horizontal"
            ? "-ml-4 touch-pan-y"
            : "-mt-4 flex-col touch-pan-x",
          className,
        )}
        {...props}
      />
    </div>
  );
}

export { CarouselContent };
