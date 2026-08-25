"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { type ReactNode, useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type ProductsMotionProps = {
  children: ReactNode;
};

export function ProductsMotion({ children }: ProductsMotionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;

      if (!section) return;

      const media = gsap.matchMedia();

      media.add(
        {
          isDesktop: "(min-width: 1024px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { isDesktop, reduceMotion } = context.conditions as {
            isDesktop: boolean;
            reduceMotion: boolean;
          };

          if (reduceMotion) return;

          const grid = section.querySelector<HTMLElement>("[data-products-grid]");
          const cards = Array.from(
            section.querySelectorAll<HTMLElement>("[data-product-card]"),
          );
          const featuredCard = section.querySelector<HTMLElement>(
            "[data-product-featured]",
          );
          const featuredImage = featuredCard?.querySelector<HTMLElement>(
            "[data-product-image]",
          );
          const cardImages = Array.from(
            section.querySelectorAll<HTMLElement>(
              isDesktop
                ? "[data-product-card]:not([data-product-featured]) [data-product-image]"
                : "[data-product-image]",
            ),
          );

          gsap.from("[data-products-heading]", {
            autoAlpha: 0,
            y: isDesktop ? 28 : 18,
            duration: isDesktop ? 0.75 : 0.6,
            ease: "power3.out",
            stagger: 0.09,
            willChange: "transform, opacity",
            clearProps: "transform,opacity,visibility,willChange",
            scrollTrigger: {
              trigger: section,
              start: "top 82%",
              once: true,
            },
          });

          if (grid && cards.length > 0) {
            gsap.from(cards, {
              autoAlpha: 0,
              y: isDesktop ? 48 : 28,
              scale: isDesktop ? 0.985 : 0.995,
              duration: isDesktop ? 0.85 : 0.65,
              ease: "power3.out",
              stagger: isDesktop ? 0.1 : 0.06,
              willChange: "transform, opacity",
              clearProps: "transform,opacity,visibility,willChange",
              scrollTrigger: {
                trigger: grid,
                start: "top 84%",
                once: true,
              },
            });

            gsap.from(cardImages, {
              scale: 1.06,
              duration: isDesktop ? 1.1 : 0.85,
              ease: "power2.out",
              stagger: isDesktop ? 0.08 : 0.05,
              willChange: "transform",
              clearProps: "transform,willChange",
              scrollTrigger: {
                trigger: grid,
                start: "top 84%",
                once: true,
              },
            });
          }

          if (isDesktop && featuredCard && featuredImage) {
            gsap.fromTo(
              featuredImage,
              { scale: 1.08 },
              {
                scale: 1,
                ease: "none",
                willChange: "transform",
                scrollTrigger: {
                  trigger: featuredCard,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 0.65,
                },
              },
            );
          }
        },
      );

      return () => media.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="san-pham"
      className="bg-cream px-5 py-12 sm:px-8 lg:px-20 lg:py-[72px]"
      aria-labelledby="products-title"
    >
      {children}
    </section>
  );
}
