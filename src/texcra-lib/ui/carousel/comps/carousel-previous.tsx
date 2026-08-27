"use client";

import * as React from "react";

import { cn } from "@/utilities/ui";

import { ArrowLeftIcon } from "./arrow-left-icon";
import { useCarousel } from "./carousel-context";
import { controlClassName } from "./control-styles";

function CarouselPrevious({
  className,
  ...props
}: React.ComponentProps<"button">) {
  const { orientation, scrollPrevious, canScrollPrevious } = useCarousel();

  return (
    <button
      type="button"
      aria-label="Previous slide"
      data-slot="carousel-previous"
      disabled={!canScrollPrevious}
      onClick={scrollPrevious}
      className={cn(
        controlClassName,
        orientation === "horizontal"
          ? "inset-y-0 left-2 my-auto sm:-left-4"
          : "-top-4 left-1/2 -translate-x-1/2",
        className,
      )}
      {...props}
    >
      <ArrowLeftIcon
        className={orientation === "vertical" ? "rotate-90" : undefined}
      />
    </button>
  );
}

export { CarouselPrevious };
