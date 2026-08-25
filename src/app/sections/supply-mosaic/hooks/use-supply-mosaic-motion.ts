"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { RefObject } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type SupplyMotionConditions = {
  isDesktop: boolean;
  reduceMotion: boolean;
};

function getElementChildren(element: Element | null) {
  if (!element) return [];

  return Array.from(element.children).filter(
    (child): child is HTMLElement => child instanceof HTMLElement,
  );
}

export function useSupplyMosaicMotion(
  rootRef: RefObject<HTMLDivElement | null>,
) {
  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const heading = root.querySelector<HTMLElement>("[data-supply-heading]");
      const grid = root.querySelector<HTMLElement>("[data-supply-grid]");
      const tiles = gsap.utils
        .toArray<HTMLElement>("[data-supply-tile]", root)
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
            context.conditions as SupplyMotionConditions;

          if (reduceMotion) return;

          if (heading) {
            gsap.fromTo(
              getElementChildren(heading),
              {
                autoAlpha: 0,
                y: isDesktop ? 38 : 24,
              },
              {
                autoAlpha: 1,
                duration: isDesktop ? 0.8 : 0.62,
                ease: "power2.out",
                stagger: 0.1,
                y: 0,
                scrollTrigger: {
                  trigger: heading,
                  start: isDesktop ? "top 82%" : "top 88%",
                  once: true,
                  invalidateOnRefresh: true,
                  refreshPriority: 20,
                },
              },
            );
          }

          if (!grid || !tiles.length) return;

          const revealTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: root,
              start: isDesktop ? "top 4%" : "top 3%",
              end: () => `+=${tiles.length * (isDesktop ? 420 : 240)}`,
              pin: root,
              pinSpacing: true,
              scrub: isDesktop ? 0.8 : 0.45,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              refreshPriority: 20,
            },
          });

          tiles.forEach((tile, index) => {
            const label = `supply-tile-${index}`;
            const image = tile.querySelector("img");
            const copy = tile.querySelector<HTMLElement>("[data-supply-copy]");

            revealTimeline.addLabel(label, index * 1.05);
            revealTimeline.fromTo(
              tile,
              {
                autoAlpha: 0,
                scale: isDesktop ? 0.94 : 0.97,
                y: isDesktop ? 64 : 34,
              },
              {
                autoAlpha: 1,
                duration: 0.92,
                ease: "power2.out",
                scale: 1,
                transformOrigin: "50% 100%",
                y: 0,
              },
              label,
            );

            if (image) {
              revealTimeline.fromTo(
                image,
                { scale: isDesktop ? 1.12 : 1.08 },
                {
                  duration: 1.12,
                  ease: "power1.out",
                  scale: 1,
                  transformOrigin: "50% 50%",
                },
                label,
              );
            }

            if (copy) {
              revealTimeline.fromTo(
                copy,
                { autoAlpha: 0, y: isDesktop ? 20 : 12 },
                {
                  autoAlpha: 1,
                  duration: 0.55,
                  ease: "power2.out",
                  y: 0,
                },
                `${label}+=0.28`,
              );
            }
          });
        },
        root,
      );

      return () => media.revert();
    },
    { scope: rootRef },
  );
}
