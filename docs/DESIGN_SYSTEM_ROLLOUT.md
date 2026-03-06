# Design System Rollout – Concrete Steps

## Migration Process

1. **Introduce** new utilities/tokens that match Figma design
2. **Refactor** components to use new utilities (do not delete old ones yet)
3. **Mark** old utilities as deprecated in comments when no longer used
4. **Remove** unused styles only after all pages are migrated

## Design System Guidelines

- **Keep typography semantic:** type-hero, type-h1/h2/h3, type-body, type-body-sm, type-caption
- **No component-specific type utilities** (e.g. type-capability-title) – reuse semantic utilities
- **Component constraints** (e.g. max-w 180px) stay in the component, not as utilities
- **Button system:** btn-primary, btn-secondary, btn-ghost – reusable across components

---

## Current State

- **globals.css** – Single source of truth for tokens (colors, type scale, spacing, radius)
- **tailwind.config.ts** – Maps vars to Tailwind (color-0, color-10, type-h1, etc.)
- **design-system/page** – Reference / documentation
- **Home (Overview)** – New Figma layout, still uses inline styles for hero, capability cards, View CV
- **Sidebar** – Uses mix of tokens and inline values

---

## Phase 1: Align Design System with New Specs

**Status:** In progress. New utilities added; OverviewContent migrated.

### 1.1 Audit token gaps

Compare current globals.css vs. new Home specs:

| Pattern              | Current token/utility | New spec                         | Action |
|----------------------|------------------------|----------------------------------|--------|
| Hero title line 1    | type-h1 (48px, tight)  | 48px, 110%, -1.44px, 500         | Add or adjust hero variant |
| Hero title line 2    | —                      | 48px, 110%, -1.44px, 400         | Same |
| Capability card title| —                      | 15px, 120%, 500                  | Add `type-card-title` |
| Capability card body | type-body-sm (14px)    | 14px, 160%, 400                  | Add `type-card-body` or adjust |
| Capability card body max-width | —             | 180px                            | Document / add utility |
| View CV button       | —                      | h 40, p 8 16, fill #23221B, hover #191813 | Add `btn-secondary` |
| Let's chat icon circle | —                     | fill #23221B, stroke #2E3027     | Already updated in Sidebar |

### 1.2 Typography utilities (simplified, semantic)

- [x] `type-hero` (48px, 110%, -1.44px) – hero/landing headlines
- [x] `type-h1` / `type-h2` / `type-h3` – section headings
- [x] `type-body` – body text (16px, 1.7)
- [x] `type-body-sm` – small compact text (14px, 1.4)
- [x] `type-caption` – caption/secondary small text (14px, 160%)
- [x] `--line-height-body` token (1.6)
- [x] No component-specific utilities (e.g. type-capability-title removed)

### 1.3 Add component entries to design-system tokens

- In `utilities.tsx` or a new `components.ts`:
  - Capability card (title + body + 160px height + 16px padding + borders)
  - View CV button
  - Let's chat button (pill + icon circle)

---

## Phase 2: Connect Home to Design System

### 2.1 OverviewContent refactor

- [x] Hero h1: uses `type-hero` + color/weight spans
- [x] Hero body: uses `type-body leading-body` + `text-color-text-secondary`
- [x] Capability grid: title = `type-body-sm font-medium`, body = `type-caption` (max-w 180px in component)
- [x] View CV: uses `btn-secondary`

### 2.2 Sidebar consistency

- [ ] Profile block: use `font-geist`, `type-body-sm`, token colors
- [ ] Nav items: ensure `color-10`, `color-80`, `color-90` from tokens
- [ ] Let's chat: already token-aligned; verify no stray inline hex values

### 2.3 CapabilityGraphics

- [x] Refactored to inline SVGs using theme tokens (var(--color-0), --color-10, --color-20, --color-40, --color-80, --color-graphic-muted)
- [x] New token `--color-graphic-muted` for decorative accents (dots, highlights)
- [ ] Optionally move card structure into a `<CapabilityCard>` component if it’s reused

---

## Phase 3: Polish Other Pages

### 3.1 Projects index (`/projects`)

- [x] Use `page-shell`, `type-h1` for heading
- [x] Project cards: `project-card` (bg-color-bg, border-color-10, rounded-card)
- [x] Borders: `border-color-10`; hero area uses `border-color-border-secondary`; hover: `bg-color-bg-surface`

### 3.2 Project detail pages (`/projects/[slug]`)

- [ ] Case study layout: `CaseStudyLayout` or equivalent
- [ ] Typography: `type-h2`, `type-h3`, `type-body`, `text-column`
- [ ] Media: `project-media-full`
- [ ] Page-specific components (Neptune, Mixlodge, etc.): replace hardcoded colors with tokens

### 3.3 Illustrations (`/illustrations`)

- [ ] Page shell + typography
- [ ] Grid / gallery: token-based spacing and borders

### 3.4 Experiments (`/experiments`)

- [ ] Same shell + typography
- [ ] Theme switcher (if present): ensure it toggles theme tokens correctly

### 3.5 Notes (`/notes`)

- [ ] Same shell + typography

### 3.6 Testimonials (`/testimonials`)

- [ ] Same shell + typography
- [ ] Testimonial cards: use surface utilities

---

## Phase 4: Cleanup & Documentation

- [ ] Remove redundant inline hex values across the codebase
- [ ] Update design-system/page to show new components (View CV, Let's chat, Capability card)
- [ ] Add a short “Usage” section in README or DESIGN_SYSTEM_ROLLOUT.md for new contributors

---

## Execution Order

1. Phase 1.1–1.2 (audit + add utilities)
2. Phase 2.1–2.2 (Home + Sidebar)
3. Phase 1.3 (document components)
4. Phase 3.1 → 3.6 (other pages, in any order)
5. Phase 4 (cleanup + docs)
