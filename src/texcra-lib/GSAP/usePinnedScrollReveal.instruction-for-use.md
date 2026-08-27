# `usePinnedScrollReveal`

`usePinnedScrollReveal` creates a responsive, scroll-scrubbed sequence inside a pinned section:

- At `768px` and wider, items fade in, rise, and scale into place one after another.
- Below `768px`, items occupy the same grid cell and slide horizontally from one item to the next.
- When `prefers-reduced-motion: reduce` is enabled, the hook leaves the content in its normal static layout.
- GSAP animations and ScrollTriggers are reverted when the component unmounts.

## Required markup

Pass a ref for the containing section to the hook. Within that scope, provide one pinned stage, one item container, and at least one reveal item:

```tsx
'use client'

import { useRef } from 'react'

import { usePinnedScrollReveal } from '@/hooks/usePinnedScrollReveal'

export function ExampleSection() {
  const sectionRef = useRef<HTMLElement>(null)

  usePinnedScrollReveal(sectionRef)

  return (
    <section ref={sectionRef}>
      <div data-pinned-reveal-stage>
        <header>Section heading</header>

        <div className="grid" data-pinned-reveal-items>
          <article data-pinned-reveal-item>First item</article>
          <article data-pinned-reveal-item>Second item</article>
          <article data-pinned-reveal-item>Third item</article>
        </div>
      </div>
    </section>
  )
}
```

The item container must use a grid layout on mobile so the hook can place all items in the same grid cell during horizontal transitions. Keep the unanimated layout readable because reduced-motion users do not receive the pinned sequence.
