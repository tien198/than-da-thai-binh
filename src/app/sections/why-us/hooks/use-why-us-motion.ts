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
      const featureStage = root.querySelector<HTMLElement>(
        "[data-why-us-feature-stage]",
      );
      const featureLists = gsap.utils.toArray<HTMLElement>(
        "[data-why-us-list]",
        root,
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
      const mediaCard = root.querySelector<HTMLElement>("[data-why-us-media]");
      const mediaImage = root.querySelector<HTMLElement>("[data-why-us-image]");
      const mediaCopy = root.querySelector<HTMLElement>(
        "[data-why-us-media-copy]",
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
                  start: isDesktop ? "top 72%" : "top 78%",
                  once: true,
                  invalidateOnRefresh: true,
                },
              },
            );
          }

          if (!content || !mediaCard || !orderedFeatureItems.length) return;

          // Keep the default refresh order so preceding pinned sections add
          // their spacer height before this section measures its start.
          if (isDesktop) {
            gsap.set(orderedFeatureItems, {
              opacity: 0,
              x: (_, item) =>
                (item as HTMLElement).dataset.whyUsSide === "left" ? -38 : 38,
              y: 10,
              willChange: "transform, opacity",
            });

            const desktopTimeline = gsap.timeline({
              defaults: { ease: "power3.out" },
              scrollTrigger: {
                trigger: content,
                start: "top 6%",
                end: () => `+=${orderedFeatureItems.length * 250}`,
                pin: true,
                pinSpacing: true,
                scrub: 0.7,
                anticipatePin: 1,
                invalidateOnRefresh: true,
              },
            });

            desktopTimeline.addLabel("desktop-media-in", 0.55);

            if (mediaImage) {
              desktopTimeline.fromTo(
                mediaImage,
                { scale: 1.08 },
                {
                  duration: 1.1,
                  ease: "power2.out",
                  scale: 1,
                  willChange: "transform",
                },
                "desktop-media-in",
              );
            }

            if (mediaCopy) {
              desktopTimeline.fromTo(
                mediaCopy,
                { opacity: 0, y: 16 },
                {
                  duration: 0.52,
                  opacity: 1,
                  willChange: "transform, opacity",
                  y: 0,
                },
                "desktop-media-in+=0.1",
              );
            }

            orderedFeatureItems.forEach((item, index) => {
              const label = `desktop-feature-${index}`;

              desktopTimeline.addLabel(label, 0.95 + index * 0.82);
              desktopTimeline.to(
                item,
                {
                  duration: 0.62,
                  opacity: 1,
                  x: 0,
                  y: 0,
                },
                label,
              );
            });

            return;
          }

          if (!featureStage || !featureLists.length) return;

          gsap.set(featureLists, { display: "contents" });
          gsap.set(orderedFeatureItems, {
            inset: 0,
            opacity: 0,
            position: "absolute",
            willChange: "transform, opacity",
            y: 22,
          });

          const mobileTimeline = gsap.timeline({
            defaults: { ease: "power3.out" },
            scrollTrigger: {
              trigger: content,
              start: "top 5%",
              end: () => `+=${orderedFeatureItems.length * 235}`,
              pin: true,
              pinSpacing: true,
              scrub: 0.45,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          mobileTimeline.addLabel("mobile-media-in", 0.45);

          if (mediaImage) {
            mobileTimeline.fromTo(
              mediaImage,
              { scale: 1.06 },
              {
                duration: 1,
                ease: "power2.out",
                scale: 1,
                willChange: "transform",
              },
              "mobile-media-in",
            );
          }

          if (mediaCopy) {
            mobileTimeline.fromTo(
              mediaCopy,
              { opacity: 0, y: 12 },
              {
                duration: 0.46,
                opacity: 1,
                willChange: "transform, opacity",
                y: 0,
              },
              "mobile-media-in+=0.1",
            );
          }

          orderedFeatureItems.forEach((item, index) => {
            const label = `mobile-feature-${index}`;
            const revealAt = 0.8 + index * 0.9;

            mobileTimeline.addLabel(label, revealAt);

            if (index > 0) {
              mobileTimeline.to(
                orderedFeatureItems[index - 1],
                {
                  duration: 0.26,
                  ease: "power2.in",
                  opacity: 0,
                  y: -16,
                },
                label,
              );
            }

            mobileTimeline.to(
              item,
              {
                duration: 0.46,
                opacity: 1,
                y: 0,
              },
              `${label}+=${index === 0 ? 0 : 0.12}`,
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
