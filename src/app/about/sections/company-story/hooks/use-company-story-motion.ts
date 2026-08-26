"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { RefObject } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type CompanyStoryMotionConditions = {
  isDesktop: boolean;
  reduceMotion: boolean;
};

export function useCompanyStoryMotion(
  rootRef: RefObject<HTMLDivElement | null>,
) {
  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const copy = gsap.utils
        .toArray<HTMLElement>("[data-company-story-reveal]", root)
        .sort(
          (first, second) =>
            Number(first.dataset.revealOrder) -
            Number(second.dataset.revealOrder),
        );
      const figure = root.querySelector<HTMLElement>(
        "[data-company-story-figure]",
      );
      const image = root.querySelector<HTMLElement>(
        "[data-company-story-image]",
      );
      const captionParts = gsap.utils.toArray<HTMLElement>(
        "[data-company-story-caption-part]",
        root,
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
            context.conditions as CompanyStoryMotionConditions;

          gsap.set(root, { opacity: 1 });

          if (reduceMotion) return;

          if (copy.length) {
            gsap.fromTo(
              copy,
              {
                autoAlpha: 0,
                x: isDesktop ? -28 : 0,
                y: isDesktop ? 0 : 22,
              },
              {
                autoAlpha: 1,
                clearProps: "transform,visibility,willChange",
                duration: isDesktop ? 0.76 : 0.62,
                ease: "power3.out",
                stagger: isDesktop ? 0.09 : 0.07,
                willChange: "transform, opacity",
                x: 0,
                y: 0,
                scrollTrigger: {
                  trigger: root,
                  start: isDesktop ? "top 78%" : "top 84%",
                  once: true,
                  invalidateOnRefresh: true,
                },
              },
            );
          }

          if (!figure) return;

          const figureTimeline = gsap.timeline({
            defaults: { ease: "power3.out" },
            scrollTrigger: {
              trigger: isDesktop ? root : figure,
              start: isDesktop ? "top 78%" : "top 88%",
              once: true,
              invalidateOnRefresh: true,
            },
          });

          figureTimeline.fromTo(
            figure,
            {
              autoAlpha: 0,
              scale: isDesktop ? 0.975 : 0.99,
              x: isDesktop ? 42 : 0,
              y: isDesktop ? 0 : 28,
            },
            {
              autoAlpha: 1,
              clearProps: "transform,visibility,willChange",
              duration: isDesktop ? 0.92 : 0.72,
              scale: 1,
              willChange: "transform, opacity",
              x: 0,
              y: 0,
            },
            0,
          );

          if (image) {
            figureTimeline.fromTo(
              image,
              { scale: isDesktop ? 1.11 : 1.075 },
              {
                clearProps: "transform,willChange",
                duration: isDesktop ? 1.15 : 0.9,
                ease: "power2.out",
                scale: 1,
                transformOrigin: "50% 50%",
                willChange: "transform",
              },
              0,
            );
          }

          if (captionParts.length) {
            figureTimeline.fromTo(
              captionParts,
              { autoAlpha: 0, y: 12 },
              {
                autoAlpha: 1,
                clearProps: "transform,visibility,willChange",
                duration: 0.5,
                stagger: 0.08,
                willChange: "transform, opacity",
                y: 0,
              },
              isDesktop ? 0.5 : 0.42,
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
