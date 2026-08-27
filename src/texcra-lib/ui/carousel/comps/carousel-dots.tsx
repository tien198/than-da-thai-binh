"use client";

import * as React from "react";

import { cn } from "@/utilities/ui";

import { useCarousel } from "./carousel-context";

function CarouselDots({
  className,
  "aria-label": ariaLabel = "Choose a slide",
  ...props
}: React.ComponentProps<"div">) {
  const { api } = useCarousel();
  const selectedIndex = api?.selectedScrollSnap() ?? 0;
  const scrollSnaps = api?.scrollSnapList() ?? [];

  if (scrollSnaps.length <= 1) return null;

  return (
    <div
      role="group"
      aria-label={ariaLabel}
      data-slot="carousel-dots"
      className={cn("mt-5 flex items-center justify-center gap-2", className)}
      {...props}
    >
      {scrollSnaps.map((_, index) => {
        const isSelected = index === selectedIndex;

        return (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            aria-current={isSelected ? "true" : undefined}
            data-slot="carousel-dot"
            onClick={() => api?.scrollTo(index)}
            className={cn(
              "relative h-2 touch-manipulation rounded-[4px] bg-[#737373] transition-[width,background-color] duration-200 after:absolute after:-inset-2 after:content-[''] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0069a8]",
              isSelected
                ? "w-6 bg-[#0069a8]"
                : "w-2 hover:bg-neutral-400",
            )}
          />
        );
      })}
    </div>
  );
}

export { CarouselDots };
