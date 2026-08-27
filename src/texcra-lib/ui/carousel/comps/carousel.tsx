"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";

import { cn } from "@/utilities/ui";

import { CarouselContext } from "./carousel-context";
import type { CarouselContextValue, CarouselProps } from "./types";

function Carousel({
  opts,
  plugins,
  orientation = "horizontal",
  setApi,
  className,
  children,
  "aria-label": ariaLabel = "Featured travel destinations",
  ...props
}: React.ComponentProps<"div"> & CarouselProps) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    plugins,
  );
  const [, rerenderControls] = React.useState(0);

  const updateControls = React.useCallback(() => {
    rerenderControls((revision) => revision + 1);
  }, []);

  const scrollPrevious = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      const previousKey = orientation === "horizontal" ? "ArrowLeft" : "ArrowUp";
      const nextKey = orientation === "horizontal" ? "ArrowRight" : "ArrowDown";

      if (event.key === previousKey) {
        event.preventDefault();
        scrollPrevious();
      } else if (event.key === nextKey) {
        event.preventDefault();
        scrollNext();
      }
    },
    [orientation, scrollNext, scrollPrevious],
  );

  React.useEffect(() => {
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);

  React.useEffect(() => {
    if (!api) return;

    api.on("select", updateControls);
    api.on("reInit", updateControls);

    return () => {
      api.off("select", updateControls);
      api.off("reInit", updateControls);
    };
  }, [api, updateControls]);

  const context: CarouselContextValue = {
    carouselRef,
    api,
    orientation,
    scrollPrevious,
    scrollNext,
    canScrollPrevious: api?.canScrollPrev() ?? false,
    canScrollNext: api?.canScrollNext() ?? false,
  };

  return (
    <CarouselContext.Provider value={context}>
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label={ariaLabel}
        tabIndex={0}
        onKeyDownCapture={handleKeyDown}
        data-slot="carousel"
        className={cn(
          "relative w-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

export { Carousel };
