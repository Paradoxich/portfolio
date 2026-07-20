# Design System

A multi-theme design system for the portfolio (warm, cool, light).
Theme values are defined in `app/globals.css` under `[data-theme="..."]`,
semantic aliases live in `:root`, and utilities are mapped in `tailwind.config.ts`.
The interactive reference is at `/design-system`.

---

## Sources of truth

| File | Purpose |
|---|---|
| `app/globals.css` | All CSS custom properties (tokens) + global utility classes |
| `tailwind.config.ts` | Maps CSS vars → Tailwind class names |
| `app/design-system/tokens/foundations.tsx` | Token documentation data (rendered at `/design-system`) |
| `app/design-system/tokens/utilities.tsx` | Utility class documentation data |
| `.cursor/rules/design-system.mdc` | Agent/AI rule — enforces token usage |
| `.cursor/rules/css-architecture.mdc` | Agent/AI rule — enforces CSS structure |

---

## Color

### Scale (`color-0` → `color-90`)
Raw neutral ramp. `color-0` is darkest (near-black), `color-90` is near-white.
`color-05` sits between `color-0` and `color-10` — used for card surfaces.

### Semantic aliases — always prefer these
```
--color-bg               → color-0    page background / ghost card bg
--color-bg-card          → color-05   card surface bg (card-interactive, card-tinted)
--color-bg-muted         → color-10   hover / muted bg
--color-bg-surface       → color-20   raised / active surface (selected states, floating chips)
--color-border-inset     → color-10   structural dividers — nav, drawer, layout separators
--color-border-subtle    → color-20   subtle border — tinted cards, inset surfaces
--color-border           → color-30   default border
--color-border-secondary → color-40   secondary / hover border
--color-text-primary     → color-90   primary text
--color-text-secondary      → color-80                           secondary / muted text
--color-text-tertiary       → color-60                           decorative / disabled / icon tint
--color-interactive-hover   → color-mix(color-30, 50% transp.)  nav item hover / active background
--color-accent-70           → theme-defined accent               accent scale token
--color-accent-60           → theme-defined accent (darker)      accent scale token
--color-bg-graphic-muted    → color-graphic-muted                decorative graphic accents
--color-cta-primary         → color-accent-70                    primary CTA accent
--color-cta-primary-hover   → color-accent-60                    primary CTA hover accent
```

Tailwind equivalents: `bg-color-bg`, `bg-color-bg-card`, `text-color-text-primary`, `border-color-border`, `bg-color-accent-70`, etc.

Accent is intentionally separate from the neutral ramp. Set `--color-accent-70` and `--color-accent-60`
inside each `[data-theme="..."]` block in `app/globals.css` to give each theme its own accent pair.

### Special tokens
```
--color-graphic-muted     theme primitive used by --color-bg-graphic-muted
--color-gradient-base-rgb theme primitive used by --project-card-gradient-rgb
--image-filter           none / grayscale(100%)   Theme-based image filter
--project-card-gradient-rgb
                          15,15,12 (warm) / 10,10,10 (cool) / 20,20,20 (light)
                          Theme-aware gradient source for project cards
```

---

## Typography

### Type scale (font-size tokens)
```
xxxs  12px   Labels, badges
xs    14px   UI text, body-sm, meta
base  16px   Standard body, general UI
sm    18px   Editorial / case-study body
md    20px   Testimonial quotes
lg    24px   h4, card titles
xl    32px   h3, notes quote
2xl   40px   h2
3xl   48px   h1
```

### Type utility classes
Always use these instead of composing font properties manually.

| Class | Size | Line-height | Tracking | Weight | Notes |
|---|---|---|---|---|---|
| `type-h1` | 48px | 1.1 | tight | 500 | Page / hero titles |
| `type-h2` | 40px | 1.1 | tight | 500 | Section headings |
| `type-h3` | 32px | 1.1 | tight | 500 | Reserved — rarely used |
| `type-h4` | 24px | 1.3 | tight | 500 | Card titles, subheadings |
| `type-body` | 16px | 1.6 | normal | 400 | General body text |
| `type-body-lg` | 18px | 1.6 | normal | 400 | Case study / editorial body |
| `type-body-strong` | 16px | 1.6 | normal | 500 | Emphasized body |
| `type-body-sm` | 14px | 1.45 | tight | 400 | Compact UI text |
| `type-body-sm-strong` | 14px | 1.45 | tight | 500 | Emphasized compact text |
| `type-body-xs` | 12px | 1.45 | normal | 500 | Dense UI, secondary meta |
| `type-label` | 14px | 1 | expanded (`0.04em`) | 500 | Uppercase labels, Geist Mono |

Page-scoped and component-scoped type styles (testimonial quotes, notes formatting) live in CSS Modules rather than `globals.css`.

### Line-height scale
```
none     1      Single-line labels, badges
heading  1.1    All display and heading text
snug     1.3    Card titles, medium content headings
ui       1.45   UI text, captions, short-form content
body     1.6    Long-form body copy
```

### Letter-spacing scale
```
tight     -0.03em   Headings, compact UI
normal    0em       Body text
expanded  0.02em    Default uppercase labels
```

Note: `type-label` intentionally overrides expanded tracking to `0.04em`.

---

## Spacing

4px base grid. Tailwind utilities map directly to these tokens.

```
xs      4px
sm      8px
md      12px
base    16px
lg      20px     also: layout gutter
xl      24px     also: standard card padding
2xl     32px
3xl     40px     also: page-shell padding
4xl     56px
5xl     64px     large content separators
section 120px    large page separators
```

### Stack utilities (vertical rhythm between siblings)
`stack-xs` `stack-sm` `stack-md` `stack-lg` `stack-xl` `stack-2xl` `stack-5xl`

Applied to a parent, adds `margin-top` to every child except the first via `> * + *`.

---

## Border radius

```
sm    8px      Small interactive elements, tags
md    12px     Inner surfaces, nested components
lg    20px     Main card surfaces
full  9999px   Pills, avatars, full-radius shapes
```

Tailwind: `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-full`
Semantic aliases: `rounded-surface` (md), `rounded-card` (lg), `rounded-pill` (full)

---

## Surfaces (card hierarchy)

Three levels of card surface. All share the same border-radius (`radius-lg`).

| Class | Background | Border | Interactive | Primary use |
|---|---|---|---|---|
| `card-interactive` | `color-bg-card` (color-05) | `color-border` (color-30) | Yes | Project listing cards |
| `card-tinted` | `color-bg-card` (color-05) | `color-border-subtle` (color-20) | No | Experiment blocks, theme switcher |
| `card-ghost` | `color-bg` (color-0) | `color-border-inset` (color-10) | No | Testimonials, plain content containers |

Notes:
- `card-interactive` is a global surface token. The full project card (fixed height, bg-image layer, cursor) is implemented in `ProjectCard.module.css` on top of this class.
- `card-tinted-inner` is a recessed content well used inside `card-tinted`.

---

## Layout utilities

| Class | Purpose |
|---|---|
| `page-shell` | Centers content in max-width container (1400px), 40px padding |
| `layout-container` | Max-width container with 24px side padding (used in base layer) |
| `layout-grid` | 12-column grid with 20px gutter |
| `hero-gap` | Responsive gap beneath hero (40px mobile, 56px desktop) |
| `text-column` | 720px centered column for long-form text |
| `with-sidebar` | Left margin offset for sidebar layout (0 → 230px at md) |

---

## CSS Architecture

See `.cursor/rules/css-architecture.mdc` for the full rule. Summary:

1. **`globals.css`** — tokens + anything used in 3+ places across directories
2. **CSS Modules** — component-specific visual patterns (co-locate with component file)
3. **Inline Tailwind** — single layout constraints and responsive overrides

### Current CSS Modules

| File | Purpose |
|---|---|
| `components/projects/ProjectCard.module.css` | Project card layout, bg-image layer, label pill |
| `components/projects/CaseStudyLayout.module.css` | Case study link pill |
| `components/experiments/ChatAnimation.module.css` | Bubble/slide animations for chat component |
| `app/projects/[slug]/page.module.css` | Prev/Next nav buttons on case study pages |
| `app/testimonials/page.module.css` | Testimonial quote typography |
| `app/notes/page.module.css` | Notes page quote and note typography |

---

## What to never do

- Hardcode a hex color: use `var(--color-*)` or a Tailwind semantic class
- Hardcode `14px` or `font-size: 16px`: use a `type-*` class or `font-size-*` token
- Use `rounded-[1000px]` or `rounded-[999px]`: use `rounded-full`
- Use `gap-[20px]` when `gap-lg` exists
- Add a global CSS class for a style used in only one component
- Bypass the semantic alias layer (`text-color-90` instead of `text-color-text-primary`)
- Use raw scale tokens (`bg-color-10`) when a semantic alias exists (`bg-color-border-inset`)
