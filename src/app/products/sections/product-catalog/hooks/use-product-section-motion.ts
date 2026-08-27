"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { RefObject } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type ProductSectionMotionConditions = {
  isDesktop: boolean;
  reduceMotion: boolean;
};

export function useProductSectionMotion(
  rootRef: RefObject<HTMLDivElement | null>,
  index: number,
) {
  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const desktopMedia = root.querySelector<HTMLElement>(
        "[data-product-section-media]",
      );
      const desktopCopy = root.querySelector<HTMLElement>(
        "[data-product-section-copy]",
      );
      const desktopGallery = root.querySelector<HTMLElement>(
        "[data-product-section-gallery]",
      );
      const mobileItems = gsap.utils.toArray<HTMLElement>(
        "[data-product-section-mobile-item]",
        root,
      );
      const allTargets = [
        desktopMedia,
        desktopCopy,
        desktopGallery,
        ...mobileItems,
      ].filter((target): target is HTMLElement => Boolean(target));
      const media = gsap.matchMedia();

      media.add(
        {
          isDesktop: "(min-width: 1024px)",
          isMobile: "(max-width: 1023px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { isDesktop, reduceMotion } =
            context.conditions as ProductSectionMotionConditions;

          if (reduceMotion) {
            gsap.set(allTargets, { clearProps: "all" });
            return;
          }

          const revealTimeline = gsap.timeline({
            defaults: { duration: 1, ease: "none" },
            scrollTrigger: {
              trigger: root,
              start: isDesktop ? "top 92%" : "top 98%",
              end: isDesktop ? "bottom 48%" : "bottom 42%",
              invalidateOnRefresh: true,
              scrub: isDesktop ? 0.75 : 0.5,
            },
          });

          if (isDesktop && desktopMedia && desktopCopy) {
            const leftPanel = index % 2 === 0 ? desktopMedia : desktopCopy;
            const rightPanel = index % 2 === 0 ? desktopCopy : desktopMedia;

            revealTimeline
              .fromTo(
                leftPanel,
                { autoAlpha: 0, x: -84 },
                {
                  autoAlpha: 1,
                  clearProps: "transform,visibility,willChange",
                  willChange: "transform, opacity",
                  x: 0,
                },
              )
              .fromTo(
                rightPanel,
                { autoAlpha: 0, x: 84 },
                {
                  autoAlpha: 1,
                  clearProps: "transform,visibility,willChange",
                  willChange: "transform, opacity",
                  x: 0,
                },
              );

            if (desktopGallery) {
              revealTimeline.fromTo(
                desktopGallery,
                { autoAlpha: 0, y: 28 },
                {
                  autoAlpha: 1,
                  clearProps: "transform,visibility,willChange",
                  duration: 0.7,
                  willChange: "transform, opacity",
                  y: 0,
                },
              );
            }

            return;
          }

          revealTimeline.fromTo(
            mobileItems,
            {
              autoAlpha: 0,
              x: (itemIndex) => ((itemIndex + index) % 2 === 0 ? -38 : 38),
            },
            {
              autoAlpha: 1,
              clearProps: "transform,visibility,willChange",
              stagger: 0.68,
              willChange: "transform, opacity",
              x: 0,
            },
          );
        },
        root,
      );

      return () => media.revert();
    },
    { dependencies: [index], revertOnUpdate: true, scope: rootRef },
  );
}
