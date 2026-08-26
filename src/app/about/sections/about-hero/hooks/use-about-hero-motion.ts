"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { RefObject } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type AboutHeroMotionConditions = {
  isDesktop: boolean;
  reduceMotion: boolean;
};

export function useAboutHeroMotion(
  rootRef: RefObject<HTMLDivElement | null>,
) {
  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const mediaPanel = root.querySelector<HTMLElement>(
        "[data-about-hero-media]",
      );
      const image = root.querySelector<HTMLElement>("[data-about-hero-image]");
      const rules = gsap.utils.toArray<HTMLElement>(
        "[data-about-hero-rule]",
        root,
      );
      const copy = gsap.utils
        .toArray<HTMLElement>("[data-about-hero-reveal]", root)
        .sort(
          (first, second) =>
            Number(first.dataset.revealOrder) -
            Number(second.dataset.revealOrder),
        );
      const ledger = root.querySelector<HTMLElement>(
        "[data-about-hero-ledger]",
      );
      const ledgerItems = gsap.utils
        .toArray<HTMLElement>("[data-about-hero-ledger-item]", root)
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
            context.conditions as AboutHeroMotionConditions;

          gsap.set(root, { opacity: 1 });

          if (reduceMotion) return;

          const entrance = gsap.timeline({
            defaults: { ease: "power3.out" },
          });

          entrance.addLabel("hero-start", 0);

          if (mediaPanel) {
            entrance.fromTo(
              mediaPanel,
              {
                autoAlpha: 0,
                scale: isDesktop ? 1.035 : 1.02,
              },
              {
                autoAlpha: 1,
                clearProps: "transform,visibility,willChange",
                duration: isDesktop ? 1.15 : 0.85,
                scale: 1,
                willChange: "transform, opacity",
              },
              "hero-start",
            );
          }

          if (rules.length) {
            entrance.fromTo(
              rules,
              { scaleX: 0, transformOrigin: "0% 50%" },
              {
                clearProps: "transform,willChange",
                duration: 0.55,
                scaleX: 1,
                stagger: 0.05,
                willChange: "transform",
              },
              "hero-start+=0.12",
            );
          }

          if (copy.length) {
            entrance.fromTo(
              copy,
              {
                autoAlpha: 0,
                y: isDesktop ? 30 : 20,
              },
              {
                autoAlpha: 1,
                clearProps: "transform,visibility,willChange",
                duration: isDesktop ? 0.78 : 0.62,
                stagger: isDesktop ? 0.1 : 0.075,
                willChange: "transform, opacity",
                y: 0,
              },
              "hero-start+=0.18",
            );
          }

          if (ledger) {
            entrance.fromTo(
              ledger,
              { autoAlpha: 0, y: isDesktop ? 34 : 24 },
              {
                autoAlpha: 1,
                clearProps: "transform,visibility,willChange",
                duration: isDesktop ? 0.78 : 0.62,
                willChange: "transform, opacity",
                y: 0,
              },
              "hero-start+=0.58",
            );
          }

          if (ledgerItems.length) {
            entrance.fromTo(
              ledgerItems,
              { autoAlpha: 0, y: 12 },
              {
                autoAlpha: 1,
                clearProps: "transform,visibility,willChange",
                duration: 0.5,
                stagger: 0.07,
                willChange: "transform, opacity",
                y: 0,
              },
              "hero-start+=0.72",
            );
          }

          if (isDesktop && image) {
            gsap.fromTo(
              image,
              {
                scale: 1.035,
                transformOrigin: "50% 50%",
                yPercent: 0,
              },
              {
                ease: "none",
                scale: 1.11,
                scrollTrigger: {
                  trigger: root,
                  start: "top top",
                  end: "bottom top",
                  scrub: 0.65,
                  invalidateOnRefresh: true,
                },
                willChange: "transform",
                yPercent: 2,
              },
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
