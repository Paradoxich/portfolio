# Case Study Architecture

Case study pages separate **content** (copy, image paths, metadata) from **rendering** (layout, interaction logic, React state). This means copy changes never require touching component logic.

---

## File structure

```
components/projects/
  content/
    neptune.content.tsx     ← all copy and media refs for Neptune
    shuttle.content.tsx     ← all copy and media refs for Shuttle
    mixlodge.content.ts     ← all copy and media refs for MixLodge (.ts — no JSX needed)
    portfolio.content.tsx   ← all copy and media refs for Portfolio
  CaseStudyLayout.tsx       ← layout shell + CaseStudySection renderer + shared types
  CaseStudyLayout.module.css
  ProjectPageNeptune.tsx    ← imports content, handles carousel + video ref
  ProjectPageShuttle.tsx    ← imports content, handles before/after toggle + video ref
  ProjectPageMixlodge.tsx   ← pure renderer (no interactive state)
  ProjectPagePortfolio.tsx  ← pure renderer (no interactive state)
  ProjectsConfig.tsx        ← routing config — maps slugs to page components
```

---

## Content file shape

Each content file exports a `meta` object and individual `SectionData` objects.

### Meta object
```ts
export const neptuneMeta = {
  title: string;
  subtitle: string;
  titleSeparator?: string;  // default ": "
  meta?: string;            // date / status line
  links?: { href: string; label: string }[];
  tldrItems: React.ReactNode[];
};
```

### SectionData
```ts
type SectionData = {
  heading?: string;
  blocks: ContentBlock[];
  fullWidth?: boolean;  // skips text-column wrapper — use for standalone full-bleed media
};

type ContentBlock =
  | { type: "p";   text: React.ReactNode }
  | { type: "ul";  items: React.ReactNode[] }
  | { type: "img"; src: string; alt: string; aspect: string; caption?: string; priority?: boolean };
```

`aspect` is a CSS aspect-ratio string (e.g. `"16/9"`, `"16/10.5"`). It is applied via inline `style={{ aspectRatio }}`, not a Tailwind arbitrary value.

### fullWidth flag
By default, sections render inside a `text-column` wrapper (max-width 720px, centered). Set `fullWidth: true` for standalone images that should span the full content width rather than being constrained by the text column.

---

## Rendering

`CaseStudySection` (exported from `CaseStudyLayout.tsx`) handles all standard blocks:

```tsx
<CaseStudySection data={neptuneContext} />
```

For interactive sections that require React state or refs (carousel, before/after toggle, video with playback rate), render them inline in the `ProjectPage*.tsx` component between `CaseStudySection` calls:

```tsx
<CaseStudySection data={neptuneContext} />
<CaseStudySection data={neptuneAudience} />

{/* Deck carousel — needs useState */}
<section className="stack-md pt-base pb-base">
  ...
</section>

<CaseStudySection data={neptuneWhenBranding} />
```

---

## Adding a new case study

1. Create `components/projects/content/[name].content.tsx` (or `.ts` if no JSX needed).
2. Export `[name]Meta` and named `SectionData` constants for each section.
3. Create `components/projects/ProjectPage[Name].tsx` — import content, render sections, add any interactive blocks inline.
4. Add an entry to `projectsConfig` in `ProjectsConfig.tsx` with `slug`, `title`, `categoryLabel`, `hero`, and `Page`.

---

## When to use `.ts` vs `.tsx` for content files

Use `.ts` when all section blocks are plain strings (no inline JSX). MixLodge is the only current example.

Use `.tsx` when any block contains JSX — inline `<strong>`, `<Link>`, or rich TLDR items with bold spans. Neptune, Shuttle, and Portfolio all require `.tsx`.
