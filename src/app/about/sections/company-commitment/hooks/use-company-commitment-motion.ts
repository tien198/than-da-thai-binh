"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { RefObject } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type CompanyCommitmentMotionConditions = {
  isDesktop: boolean;
  reduceMotion: boolean;
};

function getElementChildren(element: Element | null) {
  if (!element) return [];

  return Array.from(element.children).filter(
    (child): child is HTMLElement => child instanceof HTMLElement,
  );
}

export function useCompanyCommitmentMotion(
  rootRef: RefObject<HTMLDivElement | null>,
) {
  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const quote = root.querySelector<HTMLElement>(
        "[data-company-commitment-quote]",
      );
      const quoteParts = gsap.utils.toArray<HTMLElement>(
        "[data-company-commitment-quote-part]",
        root,
      );
      const heading = root.querySelector<HTMLElement>(
        "[data-company-commitment-heading]",
      );
      const headingParts = getElementChildren(heading);
      const items = gsap.utils
        .toArray<HTMLElement>("[data-company-commitment-item]", root)
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
            context.conditions as CompanyCommitmentMotionConditions;

          gsap.set(root, { opacity: 1 });

          if (reduceMotion) return;

          if (quote) {
            gsap.set(quote, {
              autoAlpha: 0,
              scale: isDesktop ? 0.975 : 0.99,
              x: isDesktop ? -38 : 0,
              y: isDesktop ? 0 : 26,
            });
          }

          gsap.set(quoteParts, { autoAlpha: 0, y: 16 });
          gsap.set(headingParts, {
            autoAlpha: 0,
            x: isDesktop ? 30 : 0,
            y: isDesktop ? 0 : 20,
          });
          gsap.set(items, {
            autoAlpha: 0,
            x: isDesktop ? 28 : 0,
            y: isDesktop ? 0 : 20,
          });

          const introTimeline = gsap.timeline({
            defaults: { ease: "power3.out" },
            scrollTrigger: {
              trigger: root,
              start: isDesktop ? "top 80%" : "top 86%",
              once: true,
              invalidateOnRefresh: true,
            },
          });
          introTimeline.timeScale(1.4);

          if (quote) {
            introTimeline.to(
              quote,
              {
                autoAlpha: 1,
                clearProps: "transform,willChange",
                duration: isDesktop ? 0.88 : 0.7,
                scale: 1,
                willChange: "transform, opacity",
                x: 0,
                y: 0,
              },
            );
          }

          if (quoteParts.length) {
            introTimeline.to(
              quoteParts,
              {
                autoAlpha: 1,
                clearProps: "transform,willChange",
                duration: 0.42,
                ease: "power2.out",
                stagger: 0.1,
                willChange: "transform, opacity",
                y: 0,
              },
            );
          }

          if (headingParts.length) {
            introTimeline.to(
              headingParts,
              {
                autoAlpha: 1,
                clearProps: "transform,willChange",
                duration: isDesktop ? 0.58 : 0.5,
                stagger: 0.1,
                willChange: "transform, opacity",
                x: 0,
                y: 0,
              },
            );
          }

          if (items.length) {
            introTimeline.to(items, {
              autoAlpha: 1,
              clearProps: "transform,willChange",
              duration: isDesktop ? 0.64 : 0.56,
              stagger: isDesktop ? 0.1 : 0.08,
              willChange: "transform, opacity",
              x: 0,
              y: 0,
            });
          }
        },
        root,
      );

      return () => media.revert();
    },
    { scope: rootRef },
  );
}
