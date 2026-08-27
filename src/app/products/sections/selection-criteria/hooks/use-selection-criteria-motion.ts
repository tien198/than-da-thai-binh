"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { RefObject } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type SelectionCriteriaMotionConditions = {
  isDesktop: boolean;
  reduceMotion: boolean;
};

export function useSelectionCriteriaMotion(
  rootRef: RefObject<HTMLDivElement | null>,
) {
  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const revealItems = gsap.utils
        .toArray<HTMLElement>("[data-selection-criteria-reveal]", root)
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
            context.conditions as SelectionCriteriaMotionConditions;

          if (!revealItems.length) return;

          if (reduceMotion) {
            gsap.set(revealItems, { clearProps: "all" });
            return;
          }

          const revealTimeline = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: root,
              start: isDesktop ? "top 88%" : "top 90%",
              end: isDesktop ? "bottom 42%" : "bottom 48%",
              invalidateOnRefresh: true,
              scrub: isDesktop ? 0.65 : 0.4,
            },
          });

          revealTimeline.fromTo(
            revealItems,
            {
              autoAlpha: 0,
              y: isDesktop ? 22 : 18,
            },
            {
              autoAlpha: 1,
              clearProps: "transform,visibility,willChange",
              duration: 1,
              stagger: 0.72,
              willChange: "transform, opacity",
              y: 0,
            },
          );
        },
        root,
      );

      return () => media.revert();
    },
    { scope: rootRef },
  );
}
