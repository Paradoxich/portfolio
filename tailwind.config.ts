import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      /* ==== DESIGN SYSTEM TOKENS (TAILWIND) ==== */

      colors: {
        // neutral ramp
        "color-0": "var(--color-0)",
        "color-05": "var(--color-05)",
        "color-10": "var(--color-10)",
        "color-20": "var(--color-20)",
        "color-30": "var(--color-30)",
        "color-40": "var(--color-40)",
        "color-50": "var(--color-50)",
        "color-60": "var(--color-60)",
        "color-80": "var(--color-80)",
        "color-90": "var(--color-90)",

        // usage aliases
        "color-bg": "var(--color-bg)",
        "color-bg-card": "var(--color-bg-card)",
        "color-bg-card-tinted": "var(--color-bg-card-tinted)",
        "color-bg-label": "var(--color-bg-label)",
        "color-bg-surface": "var(--color-bg-surface)",
        "color-bg-muted": "var(--color-bg-muted)",
        "color-bg-graphic-muted": "var(--color-bg-graphic-muted)",
        "color-border-inset": "var(--color-border-inset)" /* structural dividers – nav, drawer, separators */,
        "color-border-subtle": "var(--color-border-subtle)" /* subtle – inset / experiment */,
        "color-border": "var(--color-border)",
        "color-border-secondary":
          "var(--color-border-secondary)" /* secondary / hover */,
        "color-text-primary": "var(--color-text-primary)",
        "color-text-secondary": "var(--color-text-secondary)",
        "color-text-tertiary": "var(--color-text-tertiary)",
        "color-interactive-hover": "var(--color-interactive-hover)",
        "color-nav-item-bg-hover": "var(--color-nav-item-bg-hover)",
        "color-nav-item-bg-active": "var(--color-nav-item-bg-active)",
        "color-nav-item-fg": "var(--color-nav-item-fg)",
        "color-nav-item-fg-active": "var(--color-nav-item-fg-active)",
        "color-button-secondary-bg": "var(--color-button-secondary-bg)",
        "color-button-secondary-bg-hover":
          "var(--color-button-secondary-bg-hover)",
        "color-button-secondary-border":
          "var(--color-button-secondary-border)",
        "color-button-secondary-fg": "var(--color-button-secondary-fg)",
        "color-accent-70": "var(--color-accent-70)",
        "color-accent-60": "var(--color-accent-60)",
        "color-cta-primary": "var(--color-cta-primary)",
        "color-cta-primary-hover": "var(--color-cta-primary-hover)",
        "color-cta-primary-text": "var(--color-cta-primary-text)",

        // contact form
        "color-input-bg": "var(--color-input-bg)",
        "color-input-border": "var(--color-input-border)",
        "color-input-border-hover": "var(--color-input-border-hover)",
        "color-input-placeholder": "var(--color-input-placeholder)",
        "color-success": "var(--color-success)",

        // overlays
        "color-overlay": "var(--color-overlay)",
      },

      spacing: {
        // core scale
        xs: "var(--space-xs)",      // 4px
        sm: "var(--space-sm)",      // 8px
        md: "var(--space-md)",      // 12px
        base: "var(--space-base)",  // 16px
        lg: "var(--space-lg)",      // 20px
        xl: "var(--space-xl)",      // 24px
        "2xl": "var(--space-2xl)", // 32px
        "3xl": "var(--space-3xl)", // 40px
        "4xl": "var(--space-4xl)", // 56px
        "5xl": "var(--space-5xl)", // 64px

        // layout helpers
        gutter: "var(--layout-gutter)",
        section: "var(--space-section)", // 120px – section-level separators
        "nav-icon": "var(--size-nav-icon)",
        "hero-placeholder": "var(--size-hero-placeholder)",
      },

      borderRadius: {
        sm: "var(--radius-sm)",
        card: "var(--radius-lg)",
        surface: "var(--radius-md)",
        pill: "var(--radius-full)",
      },

      fontFamily: {
        geist: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },

      fontSize: {
        xxxs: "var(--font-size-xxxs)", // 12px – labels, badges
        xs: "var(--font-size-xs)",     // 14px – UI text, captions (overrides Tailwind xs=12)
        base: "var(--font-size-base)", // 16px – standard body
        sm: "var(--font-size-sm)",     // 18px – editorial body (overrides Tailwind sm=14)
        md: "var(--font-size-md)",     // 20px – testimonial quotes
        lg: "var(--font-size-lg)",     // 24px – h4, card titles
        xl: "var(--font-size-xl)",     // 32px – h3, notes quote
        "2xl": "var(--font-size-2xl)", // 40px – h2
        "3xl": "var(--font-size-3xl)", // 48px – h1, hero
      },

      lineHeight: {
        none: "var(--line-height-none)",       // 1     – single-line labels
        heading: "var(--line-height-heading)", // 1.1   – all display / heading text
        snug: "var(--line-height-snug)",       // 1.3   – card titles, medium headings
        ui: "var(--line-height-ui)",           // 1.45  – UI text, captions, short content
        body: "var(--line-height-body)",       // 1.6   – long-form body copy
      },

      letterSpacing: {
        tight: "var(--tracking-tight)",
        normal: "var(--tracking-normal)",
        expanded: "var(--tracking-expanded)",
      },

      fontWeight: {
        normal: "var(--font-weight-regular)",
        medium: "var(--font-weight-medium)",
      },


    },
  },
  plugins: [],
};

export default config;
