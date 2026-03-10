# Ana Beverin — Portfolio

Personal portfolio and design system playground built with Next.js, Tailwind CSS, and Framer Motion.

## Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS + CSS Modules + custom design tokens via CSS variables
- **Animation**: Framer Motion
- **Font**: Geist (via `next/font`)
- **Email**: Resend (contact form API route)

## Design System

The site ships its own lightweight design system documented at `/design-system`. Key concepts:

- **Tokens** — color scale, spacing, typography, radius, and line-height defined as CSS custom properties in `app/globals.css` and mapped to Tailwind utilities in `tailwind.config.ts`
- **Semantic aliases** — raw scale values (`--color-30`) are aliased to role names (`--color-border`) to decouple usage from the scale
- **Theme switching** — three color schemes (warm, cool, light) managed by `ColorSchemeProvider`, which applies CSS variable overrides directly on `document.documentElement`
- **Type utilities** — global `.type-*` classes composed from tokens via `@apply` for shared typography patterns; page-specific type styles live in CSS Modules

See `docs/DESIGN_SYSTEM.md` and `.cursor/rules/` for full guidelines.

## Project Structure

```
app/
  globals.css          # Design tokens + global component/utility classes
  layout.tsx           # Root layout (providers, sidebar, nav)
  page.tsx             # Overview / home
  projects/            # Projects index + [slug] case studies
  illustrations/       # Illustration gallery
  experiments/         # Interactive experiments
  notes/               # Notes (placeholder)
  testimonials/        # Testimonials
  design-system/       # Living design system documentation

components/
  layout/              # Sidebar, MobileNav, TopStickyBar, PageShell
  home/                # Overview page components + capability graphics
  projects/            # ProjectCard, ProjectModal, CaseStudyLayout, etc.
  illustrations/       # IllustrationBlocks
  experiments/         # PotAnimation, ChatAnimation, TestimonialsSection, etc.
  contact/             # HireDrawer + context
  theme/               # ColorSchemeProvider + ThemeSwitcherInline
  icons/               # SVG icon components

public/
  case-studies/        # Case study images and videos
  illustrations/       # Illustration images
  testimonials/        # Testimonial avatars
  docs/                # CV PDF

docs/
  DESIGN_SYSTEM.md     # Full design system reference
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create a `.env.local` for the contact form:

```
RESEND_API_KEY=your_key_here
```
