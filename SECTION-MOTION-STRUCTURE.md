# Section Motion Structure

This document defines how to organize motion logic for a section in this Next.js project. It focuses on file responsibilities and module boundaries rather than animation implementation.

## Folder structure

```text
src/app/sections/<section-name>/
├── index.tsx
├── comps/
│   ├── <item-name>.tsx
│   └── <section-name>-motion.tsx
└── hooks/
    └── use-<section-name>-motion.ts
```

## File responsibilities

| File | Responsibility |
| --- | --- |
| `index.tsx` | Section content, semantic markup, layout, data mapping, and motion wrapper integration. |
| `comps/<item-name>.tsx` | Repeated presentational item and its motion-related data attributes. |
| `comps/<section-name>-motion.tsx` | Client boundary that owns the section root ref and calls the motion hook. |
| `hooks/use-<section-name>-motion.ts` | Section-specific motion logic, responsive behavior, and cleanup. |

## Dependency direction

```text
index.tsx
├── item component
└── motion wrapper
      └── motion hook
```

Imports should follow this direction:

- The section imports its item components and motion wrapper.
- The motion wrapper imports the motion hook.
- The hook does not import the section or item components.
- Item components do not import the motion hook.

## Server and client boundaries

Keep `index.tsx` and presentational item components server-rendered unless they require their own interaction.

The motion wrapper is a small Client Component responsible for:

- Declaring `"use client"`.
- Creating the section root ref.
- Passing the ref to the motion hook.
- Rendering `children` inside the referenced element.

The motion hook contains browser-dependent animation code. Do not move section content, layout markup, or content data into the hook.

## Markup contract

Use stable `data-*` attributes to connect server-rendered markup to the motion hook.

Recommended roles:

```text
data-<section>-heading
data-<section>-list
data-<section>-item
data-<section>-copy
data-reveal-order
```

Use section-specific prefixes to prevent accidental matches between sections. Do not use Tailwind utility classes as animation selectors.

## Naming convention

Use the section name consistently across files and exported symbols:

```text
Section:         <SectionName>
Motion wrapper:  <SectionName>Motion
Motion hook:     use<SectionName>Motion
Wrapper file:    <section-name>-motion.tsx
Hook file:       use-<section-name>-motion.ts
Data prefix:     data-<section-name>-*
```

## Implementation order

1. Keep the section structure and content in `index.tsx`.
2. Identify the heading, list, items, and internal item regions needed by the motion hook.
3. Add section-specific `data-*` attributes to those elements.
4. Add numeric reveal-order metadata when visual order and DOM order can differ.
5. Create the motion wrapper in `comps/`.
6. Create the custom motion hook in `hooks/`.
7. Pass one scoped root ref from the wrapper to the hook.
8. Wrap only the animated section region with the motion wrapper.
9. Keep all animation setup and cleanup inside the hook.

## Project rules

- Keep content and animation logic in separate modules.
- Keep the client boundary as small as possible.
- Use one section-scoped root ref.
- Use stable data attributes instead of styling classes as selectors.
- Keep repeated components presentational.
- Keep responsive motion behavior inside the hook.
- Keep cleanup inside the same lifecycle that creates the animation.
- Avoid global selectors and cross-section dependencies.

## Review checklist

- [ ] The section content remains in `index.tsx`.
- [ ] The item component remains presentational.
- [ ] The motion wrapper owns only the root ref and client boundary.
- [ ] The custom hook owns all motion logic.
- [ ] The hook receives a section-scoped ref.
- [ ] Data attributes form a clear markup contract.
- [ ] File names and exported symbols follow the same section name.
- [ ] Imports follow the expected dependency direction.

