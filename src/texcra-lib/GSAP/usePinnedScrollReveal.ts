'use client'

import { useEffect, type RefObject } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Pins a stage while revealing its items in sequence as the user scrolls.
 * Desktop items fade and rise into place; mobile items slide horizontally.
 * The animation is skipped when the user prefers reduced motion.
 *
 * @see usePinnedScrollReveal.instruction-for-use.md for the required markup.
 */
export function usePinnedScrollReveal(scope: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const section = scope.current

    if (!section) return

    const timelineStage = section.querySelector<HTMLElement>('[data-pinned-reveal-stage]')
    const itemStage = section.querySelector<HTMLElement>('[data-pinned-reveal-items]')
    const items = Array.from(section.querySelectorAll<HTMLElement>('[data-pinned-reveal-item]'))

    if (!timelineStage || !itemStage || !items.length) return

    const media = gsap.matchMedia(section)

    media.add('(min-width: 768px) and (prefers-reduced-motion: no-preference)', () => {
      const revealTimeline = gsap.timeline({
        defaults: {
          duration: 1,
          ease: 'none',
        },
        scrollTrigger: {
          anticipatePin: 1,
          end: () => `+=${Math.max(window.innerHeight * 2, items.length * 360)}`,
          invalidateOnRefresh: true,
          pin: timelineStage,
          pinSpacing: true,
          scrub: 0.65,
          start: 'top top',
          trigger: timelineStage,
        },
      })

      revealTimeline.set(items, {
        autoAlpha: 0,
        scale: 0.97,
        y: 72,
      })

      items.forEach((item, index) => {
        revealTimeline.to(
          item,
          {
            autoAlpha: 1,
            scale: 1,
            y: 0,
          },
          index === 0 ? 0 : '+=0.3',
        )
      })

      ScrollTrigger.refresh()
    })

    media.add('(max-width: 767px) and (prefers-reduced-motion: no-preference)', () => {
      const revealTimeline = gsap.timeline({
        defaults: {
          duration: 1,
          ease: 'none',
        },
        scrollTrigger: {
          anticipatePin: 1,
          end: () => `+=${Math.max(window.innerHeight * items.length, items.length * 480)}`,
          invalidateOnRefresh: true,
          pin: timelineStage,
          pinSpacing: true,
          scrub: 0.65,
          start: 'top top',
          trigger: timelineStage,
        },
      })

      revealTimeline.set(itemStage, { overflow: 'hidden' }).set(items, {
        autoAlpha: 0,
        gridArea: '1 / 1',
        xPercent: 110,
      })

      revealTimeline.to(items[0], {
        autoAlpha: 1,
        xPercent: 0,
      })

      items.forEach((item, index) => {
        revealTimeline.to(item, { duration: 0.35 })

        const nextItem = items[index + 1]

        if (!nextItem) return

        revealTimeline
          .to(item, {
            autoAlpha: 0,
            xPercent: -110,
          })
          .to(
            nextItem,
            {
              autoAlpha: 1,
              xPercent: 0,
            },
            '<',
          )
      })

      ScrollTrigger.refresh()
    })

    return () => media.revert()
  }, [scope])
}
