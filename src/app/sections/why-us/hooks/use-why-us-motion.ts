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

function getViewportCoverTransform(element: HTMLElement | null) {
  if (!element || typeof window === "undefined") {
    return { scale: 3, x: 0, y: 100 };
  }

  const rect = element.getBoundingClientRect();
  const width = rect.width || element.offsetWidth || 1;
  const height = rect.height || element.offsetHeight || 1;
  const vpWidth =
    window.innerWidth || document.documentElement.clientWidth || 1;
  const vpHeight =
    window.innerHeight || document.documentElement.clientHeight || 1;

  // Scale needed to cover both viewport dimensions
  const scaleX = vpWidth / width;
  const scaleY = vpHeight / height;
  const scale = Math.max(scaleX, scaleY, 1.5);

  // Offset to align bottom of card with bottom of viewport
  const y = vpHeight - rect.bottom;

  // Offset to center card horizontally in viewport
  const cardCenterX = rect.left + width / 2;
  const vpCenterX = vpWidth / 2;
  const x = vpCenterX - cardCenterX;

  return { scale, x, y };
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
              autoAlpha: 0,
              x: (_, item) =>
                (item as HTMLElement).dataset.whyUsSide === "left" ? -38 : 38,
              y: 0,
              willChange: "transform, opacity",
            });

            if (mediaCopy) {
              gsap.set(mediaCopy, {
                autoAlpha: 0,
                y: 18,
                willChange: "transform, opacity",
              });
            }

            if (mediaCard) {
              gsap.set(mediaCard, {
                autoAlpha: 0,
                transformOrigin: "50% 100%",
                willChange: "transform, opacity",
                zIndex: 10,
              });
            }

            if (mediaImage) {
              gsap.set(mediaImage, {
                transformOrigin: "50% 50%",
                willChange: "transform",
              });
            }

            const desktopTimeline = gsap.timeline({
              defaults: { ease: "power3.out" },
              scrollTrigger: {
                trigger: content,
                start: "top 6%",
                end: () => `+=${orderedFeatureItems.length * 280 + 750}`,
                pin: true,
                pinSpacing: true,
                scrub: 0.7,
                anticipatePin: 1,
                invalidateOnRefresh: true,
              },
            });

            // Phase 1: The media card zooms in from viewport-covering bottom to its position
            desktopTimeline.addLabel("phase-1-media", 0);
            if (mediaCard) {
              desktopTimeline.fromTo(
                mediaCard,
                {
                  autoAlpha: 0,
                  scale: () => getViewportCoverTransform(mediaCard).scale,
                  transformOrigin: "50% 100%",
                  x: () => getViewportCoverTransform(mediaCard).x,
                  y: () => getViewportCoverTransform(mediaCard).y,
                },
                {
                  autoAlpha: 1,
                  duration: 1.25,
                  ease: "power2.out",
                  immediateRender: true,
                  scale: 1,
                  x: 0,
                  y: 0,
                },
                "phase-1-media",
              );
            }

            if (mediaImage) {
              desktopTimeline.fromTo(
                mediaImage,
                {
                  scale: 1.08,
                  transformOrigin: "50% 50%",
                },
                {
                  duration: 1.25,
                  ease: "power2.out",
                  immediateRender: true,
                  scale: 1,
                },
                "phase-1-media",
              );
            }

            // Phase 2: The image caption settles in
            desktopTimeline.addLabel("phase-2-caption", ">");
            if (mediaCopy) {
              desktopTimeline.to(
                mediaCopy,
                {
                  autoAlpha: 1,
                  duration: 0.55,
                  ease: "power2.out",
                  y: 0,
                },
                "phase-2-caption",
              );
            }

            // Phase 3: Only afterward do the feature cards reveal
            desktopTimeline.addLabel("phase-3-features", ">+=0.1");
            orderedFeatureItems.forEach((item, index) => {
              const label = `desktop-feature-${index}`;

              desktopTimeline.addLabel(
                label,
                index === 0 ? "phase-3-features" : ">+=0.1",
              );
              desktopTimeline.to(
                item,
                {
                  autoAlpha: 1,
                  duration: 0.62,
                  ease: "power3.out",
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
            autoAlpha: 0,
            inset: 0,
            position: "absolute",
            willChange: "transform, opacity",
            y: 22,
          });

          if (mediaCopy) {
            gsap.set(mediaCopy, {
              autoAlpha: 0,
              y: 14,
              willChange: "transform, opacity",
            });
          }

          if (mediaCard) {
            gsap.set(mediaCard, {
              autoAlpha: 0,
              transformOrigin: "50% 100%",
              willChange: "transform, opacity",
              zIndex: 10,
            });
          }

          if (mediaImage) {
            gsap.set(mediaImage, {
              transformOrigin: "50% 50%",
              willChange: "transform",
            });
          }

          const mobileTimeline = gsap.timeline({
            defaults: { ease: "power3.out" },
            scrollTrigger: {
              trigger: content,
              start: "top 5%",
              end: () => `+=${orderedFeatureItems.length * 250 + 650}`,
              pin: true,
              pinSpacing: true,
              scrub: 0.45,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          // Phase 1: The media card zooms in from viewport-covering bottom to its position
          mobileTimeline.addLabel("phase-1-media", 0);
          if (mediaCard) {
            mobileTimeline.fromTo(
              mediaCard,
              {
                autoAlpha: 0,
                scale: () => getViewportCoverTransform(mediaCard).scale,
                transformOrigin: "50% 100%",
                x: () => getViewportCoverTransform(mediaCard).x,
                y: () => getViewportCoverTransform(mediaCard).y,
              },
              {
                autoAlpha: 1,
                duration: 1.15,
                ease: "power2.out",
                immediateRender: true,
                scale: 1,
                x: 0,
                y: 0,
              },
              "phase-1-media",
            );
          }

          if (mediaImage) {
            mobileTimeline.fromTo(
              mediaImage,
              {
                scale: 1.06,
                transformOrigin: "50% 50%",
              },
              {
                duration: 1.15,
                ease: "power2.out",
                immediateRender: true,
                scale: 1,
              },
              "phase-1-media",
            );
          }

          // Phase 2: The image caption settles in
          mobileTimeline.addLabel("phase-2-caption", ">");
          if (mediaCopy) {
            mobileTimeline.to(
              mediaCopy,
              {
                autoAlpha: 1,
                duration: 0.5,
                ease: "power2.out",
                y: 0,
              },
              "phase-2-caption",
            );
          }

          // Phase 3: Only afterward do the feature cards reveal
          mobileTimeline.addLabel("phase-3-features", ">+=0.1");
          orderedFeatureItems.forEach((item, index) => {
            const label = `mobile-feature-${index}`;
            const isFirst = index === 0;

            mobileTimeline.addLabel(
              label,
              isFirst ? "phase-3-features" : ">+=0.2",
            );

            if (index > 0) {
              mobileTimeline.to(
                orderedFeatureItems[index - 1],
                {
                  autoAlpha: 0,
                  duration: 0.28,
                  ease: "power2.in",
                  y: -16,
                },
                label,
              );
            }

            mobileTimeline.to(
              item,
              {
                autoAlpha: 1,
                duration: 0.48,
                ease: "power3.out",
                y: 0,
              },
              isFirst ? label : `${label}+=0.12`,
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
