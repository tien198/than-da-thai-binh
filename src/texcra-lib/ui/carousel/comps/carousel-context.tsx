"use client";

import * as React from "react";

import type { CarouselContextValue } from "./types";

const CarouselContext = React.createContext<CarouselContextValue | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("Carousel components must be used within <Carousel />");
  }

  return context;
}

export { CarouselContext, useCarousel };
