import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      /* ==== DESIGN SYSTEM TOKENS (TAILWIND) ==== */

      colors: {
        // neutral ramp
        "color-0": "var(--color-0)",
        "color-10": "var(--color-10)",
        "color-20": "var(--color-20)",
        "color-30": "var(--color-30)",
        "color-40": "var(--color-40)",
        "color-60": "var(--color-60)",
        "color-80": "var(--color-80)",
        "color-90": "var(--color-90)",
        "color-100": "var(--color-100)",

        // usage aliases
        "color-bg": "var(--color-bg)",
        "color-bg-surface": "var(--color-bg-surface)",
        "color-bg-muted": "var(--color-bg-muted)",
        "color-border": "var(--color-border)",
        "color-border-secondary":
          "var(--color-border-secondary)" /* secondary border */,
        "color-text-primary": "var(--color-text-primary)",
        "color-text-secondary": "var(--color-text-secondary)",
      },

      maxWidth: {
        container: "var(--layout-container)", // 1352px
      },

      spacing: {
        // core scale (ako ti zatreba direktno)
        xs: "var(--space-xs)",
        sm: "var(--space-sm)",
        md: "var(--space-md)",
        lg: "var(--space-lg)",
        xl: "var(--space-xl)",
        "2xl": "var(--space-2xl)",
        "3xl": "var(--space-3xl)",

        // layout helpers
        gutter: "var(--layout-gutter)", // koristiš kao gap-gutter
        card: "var(--space-xl)", // p-card → 24px (ako ga ikad poželiš)
      },

      borderRadius: {
        // posebne radius util klase, bez konflikta s Tailwind defaultom
        card: "var(--radius-lg)", // rounded-card
        surface: "var(--radius-md)", // rounded-surface
        pill: "var(--radius-full)", // rounded-pill
      },

      fontFamily: {
        geist: ["var(--font-geist)", "system-ui", "sans-serif"],
      },

      lineHeight: {
        none: "var(--line-height-none)",
        compact: "var(--line-height-compact)",
        tight: "var(--line-height-tight)",
        snug: "var(--line-height-snug)",
        relaxed: "var(--line-height-relaxed)",
        loose: "var(--line-height-loose)",
      },

      letterSpacing: {
        tight: "var(--tracking-tight)",
        normal: "var(--tracking-normal)",
        expanded: "var(--tracking-expanded)",
      },

      fontWeight: {
        // postojeće util klase:
        normal: "var(--font-weight-regular)",
        medium: "var(--font-weight-medium)",
        // opcionalni alias ako želiš baš token ime:
        regular: "var(--font-weight-regular)",
      },

      keyframes: {
        "illustration-pan": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },

      animation: {
        "illustration-pan": "illustration-pan 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
