import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";

export type CarouselApi = UseEmblaCarouselType[1];

type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;

export type CarouselOptions = UseCarouselParameters[0];
export type CarouselPlugin = UseCarouselParameters[1];

export type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};

export type CarouselContextValue = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: CarouselApi;
  orientation: NonNullable<CarouselProps["orientation"]>;
  scrollPrevious: () => void;
  scrollNext: () => void;
  canScrollPrevious: boolean;
  canScrollNext: boolean;
};
