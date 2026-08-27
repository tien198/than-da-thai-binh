"use client";

import * as React from "react";

import { cn } from "@/utilities/ui";

import { ArrowRightIcon } from "./arrow-right-icon";
import { useCarousel } from "./carousel-context";
import { controlClassName } from "./control-styles";

function CarouselNext({
  className,
  ...props
}: React.ComponentProps<"button">) {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <button
      type="button"
      aria-label="Next slide"
      data-slot="carousel-next"
      disabled={!canScrollNext}
      onClick={scrollNext}
      className={cn(
        controlClassName,
        orientation === "horizontal"
          ? "inset-y-0 right-2 my-auto sm:-right-4"
          : "-bottom-4 left-1/2 -translate-x-1/2",
        className,
      )}
      {...props}
    >
      <ArrowRightIcon
        className={orientation === "vertical" ? "rotate-90" : undefined}
      />
    </button>
  );
}

export { CarouselNext };
