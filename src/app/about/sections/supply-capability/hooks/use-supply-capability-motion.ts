"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { RefObject } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type SupplyCapabilityMotionConditions = {
  isDesktop: boolean;
  reduceMotion: boolean;
};

function getElementChildren(element: Element | null) {
  if (!element) return [];

  return Array.from(element.children).filter(
    (child): child is HTMLElement => child instanceof HTMLElement,
  );
}

export function useSupplyCapabilityMotion(
  rootRef: RefObject<HTMLDivElement | null>,
) {
  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const heading = root.querySelector<HTMLElement>(
        "[data-supply-capability-heading]",
      );
      const headingParts = getElementChildren(heading);
      const intro = root.querySelector<HTMLElement>(
        "[data-supply-capability-intro]",
      );
      const list = root.querySelector<HTMLElement>(
        "[data-supply-capability-list]",
      );
      const steps = gsap.utils
        .toArray<HTMLElement>("[data-supply-capability-step]", root)
        .sort(
          (first, second) =>
            Number(first.dataset.revealOrder) -
            Number(second.dataset.revealOrder),
        );
      const accents = gsap.utils.toArray<HTMLElement>(
        "[data-supply-capability-accent]",
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
            context.conditions as SupplyCapabilityMotionConditions;

          gsap.set(root, { opacity: 1 });

          if (reduceMotion) return;

          if (headingParts.length) {
            gsap.set(headingParts, {
              autoAlpha: 0,
              x: isDesktop ? -26 : 0,
              y: isDesktop ? 0 : 20,
              willChange: "transform, opacity",
            });
          }

          if (intro) {
            gsap.set(intro, {
              autoAlpha: 0,
              x: isDesktop ? 26 : 0,
              y: isDesktop ? 0 : 18,
              willChange: "transform, opacity",
            });
          }

          if (!list || !steps.length) return;

          gsap.set(steps, {
            autoAlpha: 0,
            scale: isDesktop ? 0.985 : 1,
            y: isDesktop ? 40 : 26,
            willChange: "transform, opacity",
          });

          if (accents.length) {
            gsap.set(accents, {
              autoAlpha: 0,
              willChange: "transform, opacity",
              x: -10,
            });
          }

          const revealTimeline = gsap.timeline({
            defaults: {
              duration: isDesktop ? 0.72 : 0.58,
              ease: "power3.out",
            },
            scrollTrigger: isDesktop
              ? {
                  trigger: root,
                  start: "top top",
                  end: () => `+=${steps.length * 360 + 720}`,
                  pin: true,
                  pinSpacing: true,
                  scrub: 0.75,
                  anticipatePin: 1,
                  invalidateOnRefresh: true,
                }
              : {
                  trigger: root,
                  start: "top top",
                  end: () => `+=${steps.length * 260 + 520}`,
                  pin: true,
                  pinSpacing: true,
                  scrub: 0.45,
                  anticipatePin: 1,
                  invalidateOnRefresh: true,
                },
          });

          revealTimeline.addLabel("section-heading", 0);

          if (headingParts.length) {
            revealTimeline.to(
              headingParts,
              {
                autoAlpha: 1,
                stagger: 0.12,
                x: 0,
                y: 0,
              },
              "section-heading",
            );
          }

          if (intro) {
            revealTimeline.to(
              intro,
              {
                autoAlpha: 1,
                x: 0,
                y: 0,
              },
              ">-=0.12",
            );
          }

          steps.forEach((step, index) => {
            const label = `capability-step-${index}`;
            const stepAccents = gsap.utils.toArray<HTMLElement>(
              "[data-supply-capability-accent]",
              step,
            );

            revealTimeline.addLabel(label, ">+=0.2");
            revealTimeline.to(
              step,
              {
                autoAlpha: 1,
                duration: isDesktop ? 0.78 : 0.62,
                scale: 1,
                y: 0,
              },
              label,
            );

            if (stepAccents.length) {
              revealTimeline.to(
                stepAccents,
                {
                  autoAlpha: 1,
                  duration: 0.42,
                  ease: "power2.out",
                  stagger: 0.07,
                  x: 0,
                },
                `${label}+=0.26`,
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
