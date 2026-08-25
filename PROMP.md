Using GSAP react to implement the animation, free to apply styles, consider both desktop and mobile UI.

For supply-mosaic section specifically, apply pinned sequential reveal

[page.tsx]
GSAP Animation Implementation
apply animation

- Use GSAP with @gsap/react to implement the page animations.
- You are free to apply or adjust styles as needed to support the animations.
- Preserve the existing visual design and layout unless a style change is necessary for the animation.
- Consider both desktop and mobile UI/UX.
- Properly scope GSAP animations and clean up ScrollTrigger instances when components unmount.
- Respect prefers-reduced-motion and avoid scroll-pinning or heavy animation when reduced motion is enabled.
- Avoid layout shifts, unexpected horizontal overflow, or scroll jumps.

## ANIMATION TYPES

---

### scroll-triggered staggered reveal animation:

- Headings: fade-up reveal
- Product cards: staggered fade-up with subtle scale
- Images: zoom-out reveal
- Featured desktop image: scroll-scrubbed zoom effect

It uses GSAP ScrollTrigger, with no pinning or true positional parallax.
