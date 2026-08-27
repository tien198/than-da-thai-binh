"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { RefObject } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type ProductsHeroMotionConditions = {
  isDesktop: boolean;
  reduceMotion: boolean;
};

export function useProductsHeroMotion(
  rootRef: RefObject<HTMLDivElement | null>,
) {
  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const mediaPanel = root.querySelector<HTMLElement>(
        "[data-products-hero-media]",
      );
      const images = gsap.utils.toArray<HTMLElement>(
        "[data-products-hero-image]",
        root,
      );
      const revealItems = gsap.utils
        .toArray<HTMLElement>("[data-products-hero-reveal]", root)
        .sort(
          (first, second) =>
            Number(first.dataset.revealOrder) -
            Number(second.dataset.revealOrder),
        );
      const media = gsap.matchMedia();

      media.add(
        {
          isDesktop: "(min-width: 1024px)",
          isMobile: "(max-width: 1023px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { isDesktop, reduceMotion } =
            context.conditions as ProductsHeroMotionConditions;

          gsap.set(root, { opacity: 1 });

          if (reduceMotion) return;

          const revealTimeline = gsap.timeline({
            defaults: { ease: "power3.out" },
            scrollTrigger: {
              trigger: root,
              start: "top 85%",
              once: true,
              invalidateOnRefresh: true,
            },
          });

          revealTimeline.addLabel("hero-reveal", 0);

          if (mediaPanel) {
            revealTimeline.fromTo(
              mediaPanel,
              { autoAlpha: 0 },
              {
                autoAlpha: 1,
                clearProps: "visibility,willChange",
                duration: isDesktop ? 0.95 : 0.72,
                willChange: "opacity",
              },
              "hero-reveal",
            );
          }

          if (images.length) {
            revealTimeline.fromTo(
              images,
              {
                scale: isDesktop ? 1.12 : 1.08,
                transformOrigin: "50% 50%",
              },
              {
                clearProps: "transform,willChange",
                duration: isDesktop ? 1.35 : 1,
                scale: 1,
                stagger: 0,
                willChange: "transform",
              },
              "hero-reveal",
            );
          }

          if (revealItems.length) {
            revealTimeline.fromTo(
              revealItems,
              {
                autoAlpha: 0,
                y: isDesktop ? 28 : 20,
              },
              {
                autoAlpha: 1,
                clearProps: "transform,visibility,willChange",
                duration: isDesktop ? 0.72 : 0.58,
                stagger: isDesktop ? 0.1 : 0.075,
                willChange: "transform, opacity",
                y: 0,
              },
              "hero-reveal+=0.14",
            );
          }
        },
        root,
      );

      return () => media.revert();
    },
    { scope: rootRef },
  );
}
