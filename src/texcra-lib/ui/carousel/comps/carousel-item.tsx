"use client";

import * as React from "react";

import { cn } from "@/utilities/ui";

import { useCarousel } from "./carousel-context";

function CarouselItem({ className, ...props }: React.ComponentProps<"div">) {
  const { orientation } = useCarousel();

  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(
        "min-w-0 shrink-0 grow-0",
        orientation === "horizontal"
          ? "basis-[88%] pl-4 sm:basis-1/2 lg:basis-1/3"
          : "basis-full pt-4",
        className,
      )}
      {...props}
    />
  );
}

export { CarouselItem };
