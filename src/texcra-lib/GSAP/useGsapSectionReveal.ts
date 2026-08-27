'use client'

import { useEffect, type RefObject } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface SectionRevealOptions {
  duration?: number
  scale?: number
  stagger?: number
  start?: string
  x?: number
  y?: number
}

export function useGsapSectionReveal(
  scope: RefObject<HTMLElement | null>,
  {
    duration = 0.8,
    scale = 1,
    stagger = 0.1,
    start = 'top 82%',
    x = 0,
    y = 32,
  }: SectionRevealOptions = {},
) {
  useEffect(() => {
    const section = scope.current

    if (!section) return

    const media = gsap.matchMedia(section)

    media.add('(prefers-reduced-motion: no-preference)', () => {
      const targets = section.querySelectorAll<HTMLElement>('[data-gsap-reveal]')

      if (!targets.length) return

      gsap
        .timeline({
          scrollTrigger: {
            once: true,
            start,
            trigger: section,
          },
        })
        .fromTo(
          targets,
          { autoAlpha: 0, scale, x, y },
          {
            autoAlpha: 1,
            clearProps: 'opacity,transform,visibility',
            duration,
            ease: 'power3.out',
            scale: 1,
            stagger,
            x: 0,
            y: 0,
          },
        )
    })

    return () => media.revert()
  }, [duration, scale, scope, stagger, start, x, y])
}
