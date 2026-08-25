# Pencil MCP → Next.js Implementation Instructions

## 1. Transcribe Localized Copy

### English

Transcribe all English copy from the English design into:

```text
messages/en.json
```

### Vietnamese

Transcribe all Vietnamese copy from the Vietnamese design into:

```text
messages/vi.json
```

### Localization Requirements

- Use identical message keys across both locale files.
- Use the generated messages from `/paraglide/messages.js` in the UI.
- Keep all user-visible text localized.
- Preserve unrelated existing and uncommitted work.
- Do not restore deleted files.
- Do not replace locale or configuration files wholesale.

---

## 2. Add Design Fonts to the Next.js Layout

Using Pencil MCP, inspect the entire design and list every font family used.

Add all required fonts to:

```text
app/layout.tsx
```

Use `next/font/google` where applicable.

Reference pattern:

```tsx
import { Alumni_Sans } from "next/font/google";

const alumniSans = Alumni_Sans({
  variable: "--font-alumni-sans",
  subsets: ["latin"],
  weight: "400",
});
```

Then:

1. Add the generated font variables to the root layout.
2. Add the corresponding font variables to:

```text
src/app/globals.css
```

3. Preserve the original font names inside `@theme inline`.

Example:

```css
@theme inline {
  --font-alumni-sans: var(--font-alumni-sans);
}
```

When using the fonts in components, preserve the design variable naming through Tailwind CSS:

```tsx
className = "font-alumni-sans text-primary";
```

---

## 3. Synchronize Design Variables with `globals.css`

Using Pencil MCP, retrieve all variable values from the design.

Update:

```text
/home/tien/Documents/than-da/src/app/globals.css
```

Rules:

- Replace an existing variable if the same variable already exists.
- Add the variable if it does not exist.
- Synchronize the values in `globals.css` with the values from the design.
- If a corresponding Tailwind theme variable does not exist, add it to the `@theme inline` directive.
- Preserve the original design variable names wherever possible.
- Preserve all existing font names in `@theme inline`.

Example:

```css
:root {
  --primary: ...;
  --background: ...;
}

@theme inline {
  --color-primary: var(--primary);
  --color-background: var(--background);
}
```

---

## 4. Implement the Selected UI

Using Pencil MCP, implement the UI from the **current design selection** into the target `[page]`.

### Localization

- Use messages generated from `/paraglide/messages.js`.
- Use identical localization keys between English and Vietnamese.
- Do not hard-code user-visible localized copy in the components.

---

### 4.1. Section Structure

Split the page into focused sections under:

```text
src/app/(frontend)/about/sections/
```

Each section must have its own **kebab-case** directory:

```text
src/app/(frontend)/about/sections/<section-name>/
├── index.tsx
└── comps/
    └── .gitkeep
```

Requirements:

- Export the section through its `index.tsx`.
- Keep each section focused on a single understandable part of the page.
- Preserve the section boundaries represented by the design.

---

### 4.2. Section Components

For complex sections:

- Extract repeated UI into small components.
- Extract independently understandable UI into small components.
- Prefer component composition over one large component.
- Store section-specific components inside:

```text
src/app/(frontend)/about/sections/<section-name>/comps/
```

Example:

```text
src/app/(frontend)/about/sections/company-values/
├── index.tsx
└── comps/
    ├── value-card.tsx
    └── section-heading.tsx
```

Keep section-local components private to their section unless the repository clearly demonstrates cross-section reuse.

---

### 4.3. Tailwind CSS and Design Variables

Use Tailwind CSS classes that map directly to the synchronized design variables.

Example:

```tsx
className = "font-alumni-sans text-primary";
```

Prefer semantic design-token utilities instead of hard-coded values whenever a matching design variable exists.

For example, prefer:

```tsx
className = "bg-background text-foreground";
```

instead of:

```tsx
className = "bg-[#ffffff] text-[#111111]";
```

when those colors already exist as synchronized design variables.

---

### 4.4. Preservation Rules

While implementing:

- Preserve unrelated existing work.
- Preserve uncommitted changes.
- Do not restore intentionally deleted files.
- Do not overwrite locale files wholesale.
- Do not overwrite configuration files wholesale.
- Make the smallest necessary changes to integrate the design.
- Reuse existing repository conventions when they already satisfy these requirements.

---

### 4.5. Expected Result

The completed implementation should have:

- English design copy transcribed into `messages/en.json`.
- Vietnamese design copy transcribed into `messages/vi.json`.
- Matching localization keys for both languages.
- All design fonts configured through Next.js.
- Font variables available through `globals.css` and `@theme inline`.
- Design variables synchronized with `globals.css`.
- The selected Pencil design implemented in the target page.
- The page split into focused section directories.
- Complex section UI composed from small local components.
- Tailwind utilities mapped to the original design variable names.
- Existing unrelated project work preserved.

# None Paraglide JS

4. Implement the Selected UI

Using Pencil MCP, implement the UI from the current design selection into the target [page].

4.1. Section Structure

Split the page into focused sections under:

src/app/(frontend)/about/sections/

Each section must have its own kebab-case directory:

src/app/(frontend)/about/sections/<section-name>/
├── index.tsx
└── comps/
└── .gitkeep

Requirements:

Export the section through its index.tsx.
Keep each section focused on a single understandable part of the page.
Preserve the section boundaries represented by the design.
4.2. Section Components

For complex sections:

Extract repeated UI into small components.
Extract independently understandable UI into small components.
Prefer component composition over one large component.
Store section-specific components inside:
src/app/(frontend)/about/sections/<section-name>/comps/

Example:

src/app/(frontend)/about/sections/company-values/
├── index.tsx
└── comps/
├── value-card.tsx
└── section-heading.tsx

Keep section-local components private to their section unless the repository clearly demonstrates cross-section reuse.

4.3. Tailwind CSS and Design Variables

Use Tailwind CSS classes that map directly to the synchronized design variables.

Example:

className="font-alumni-sans text-primary"

Prefer semantic design-token utilities instead of hard-coded values whenever a matching design variable exists.

Prefer:

className="bg-background text-foreground"

instead of:

className="bg-[#ffffff] text-[#111111]"

when those colors already exist as synchronized design variables.

Preserve the original design variable names when mapping them to Tailwind utilities.

4.4. Preservation Rules

While implementing:

Preserve unrelated existing work.
Preserve uncommitted changes.
Do not restore intentionally deleted files.
Do not overwrite configuration files wholesale.
Make the smallest necessary changes to integrate the design.
Reuse existing repository conventions when they already satisfy these requirements.
