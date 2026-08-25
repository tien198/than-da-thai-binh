"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { RefObject } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type WhyUsMotionConditions = {
  isDesktop: boolean;
  reduceMotion: boolean;
};

function getElementChildren(element: Element | null) {
  if (!element) return [];

  return Array.from(element.children).filter(
    (child): child is HTMLElement => child instanceof HTMLElement,
  );
}

export function useWhyUsMotion(
  rootRef: RefObject<HTMLDivElement | null>,
) {
  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const heading = root.querySelector<HTMLElement>("[data-why-us-heading]");
      const content = root.querySelector<HTMLElement>("[data-why-us-content]");
      const mediaCard = root.querySelector<HTMLElement>("[data-why-us-media]");
      const mediaImage = root.querySelector<HTMLElement>("[data-why-us-image]");
      const mediaCopy = root.querySelector<HTMLElement>(
        "[data-why-us-media-copy]",
      );
      const featureItems = gsap.utils.toArray<HTMLElement>(
        "[data-why-us-item]",
        root,
      );
      const orderedFeatureItems = [...featureItems].sort(
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
            context.conditions as WhyUsMotionConditions;

          if (reduceMotion) return;

          if (heading) {
            gsap.fromTo(
              getElementChildren(heading),
              { autoAlpha: 0, y: isDesktop ? 30 : 20 },
              {
                autoAlpha: 1,
                clearProps: "transform,opacity,visibility,willChange",
                duration: isDesktop ? 0.76 : 0.6,
                ease: "power3.out",
                stagger: 0.09,
                willChange: "transform, opacity",
                y: 0,
                scrollTrigger: {
                  trigger: heading,
                  start: isDesktop ? "top 82%" : "top 88%",
                  once: true,
                  invalidateOnRefresh: true,
                },
              },
            );
          }

          if (isDesktop && content && mediaCard) {
            const contentTimeline = gsap.timeline({
              defaults: { ease: "power3.out" },
              scrollTrigger: {
                trigger: content,
                start: "top 80%",
                once: true,
                invalidateOnRefresh: true,
              },
            });

            contentTimeline.addLabel("content-in", 0);
            contentTimeline.fromTo(
              mediaCard,
              { autoAlpha: 0, scale: 0.97, y: 34 },
              {
                autoAlpha: 1,
                clearProps: "transform,opacity,visibility,willChange",
                duration: 0.82,
                scale: 1,
                willChange: "transform, opacity",
                y: 0,
              },
              "content-in",
            );

            if (mediaImage) {
              contentTimeline.fromTo(
                mediaImage,
                { scale: 1.1 },
                {
                  clearProps: "transform,willChange",
                  duration: 1.05,
                  ease: "power2.out",
                  scale: 1,
                  willChange: "transform",
                },
                "content-in",
              );
            }

            if (mediaCopy) {
              contentTimeline.fromTo(
                mediaCopy,
                { autoAlpha: 0, y: 18 },
                {
                  autoAlpha: 1,
                  clearProps: "transform,opacity,visibility,willChange",
                  duration: 0.55,
                  willChange: "transform, opacity",
                  y: 0,
                },
                "content-in+=0.24",
              );
            }

            contentTimeline.fromTo(
              orderedFeatureItems,
              {
                autoAlpha: 0,
                x: (_, item) =>
                  (item as HTMLElement).dataset.whyUsSide === "left"
                    ? -34
                    : 34,
                y: 10,
              },
              {
                autoAlpha: 1,
                clearProps: "transform,opacity,visibility,willChange",
                duration: 0.68,
                stagger: 0.09,
                willChange: "transform, opacity",
                x: 0,
                y: 0,
              },
              "content-in+=0.12",
            );

            return;
          }

          if (mediaCard) {
            const mediaTimeline = gsap.timeline({
              defaults: { ease: "power3.out" },
              scrollTrigger: {
                trigger: mediaCard,
                start: "top 88%",
                once: true,
                invalidateOnRefresh: true,
              },
            });

            mediaTimeline.fromTo(
              mediaCard,
              { autoAlpha: 0, scale: 0.985, y: 26 },
              {
                autoAlpha: 1,
                clearProps: "transform,opacity,visibility,willChange",
                duration: 0.68,
                scale: 1,
                willChange: "transform, opacity",
                y: 0,
              },
            );

            if (mediaImage) {
              mediaTimeline.fromTo(
                mediaImage,
                { scale: 1.07 },
                {
                  clearProps: "transform,willChange",
                  duration: 0.84,
                  ease: "power2.out",
                  scale: 1,
                  willChange: "transform",
                },
                "<",
              );
            }

            if (mediaCopy) {
              mediaTimeline.fromTo(
                mediaCopy,
                { autoAlpha: 0, y: 12 },
                {
                  autoAlpha: 1,
                  clearProps: "transform,opacity,visibility,willChange",
                  duration: 0.48,
                  willChange: "transform, opacity",
                  y: 0,
                },
                "<0.2",
              );
            }
          }

          featureItems.forEach((item) => {
            gsap.fromTo(
              item,
              { autoAlpha: 0, y: 22 },
              {
                autoAlpha: 1,
                clearProps: "transform,opacity,visibility,willChange",
                duration: 0.58,
                ease: "power3.out",
                willChange: "transform, opacity",
                y: 0,
                scrollTrigger: {
                  trigger: item,
                  start: "top 90%",
                  once: true,
                  invalidateOnRefresh: true,
                },
              },
            );
          });
        },
        root,
      );

      return () => media.revert();
    },
    { scope: rootRef },
  );
}
