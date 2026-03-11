"use client";

import * as React from "react";

const colorSchemes = {
  // Warm dark — default green-tinted theme
  warm: {
    // ── Color scale ────────────────────────────────────────────────────────────
    "--color-0":  "#100F0C", // bg            — page background, card-ghost fill
    "--color-05": "#151310", // bg-card        — card-interactive, card-tinted surfaces
    "--color-10": "#1B1F17", // bg-muted / border-inset — hover bg, nav/drawer dividers, separators
    "--color-20": "#23221B", // bg-surface / border-subtle — active surface, tinted card borders
    "--color-30": "#272921", // border         — default borders, dividers, "Let's chat" button border
    "--color-40": "#2E3027", // border-secondary — project card border, scrollbar thumb
    "--color-50": "#424539", // (scale only — no semantic alias)
    "--color-60": "#555A4B", // text-tertiary  — decorative icons (PixelQuote), rain stroke, scrollbar hover
    "--color-80": "#A39E8E", // text-secondary — labels, descriptions, nav items (inactive)
    "--color-90": "#F3F0E9", // text-primary   — headings, body text, active nav items
    // ── RGB helpers (used for rgba() opacity variants) ──────────────────────
    "--color-0-rgb":  "16, 15, 12",  // gradient overlays in ProjectCardBackground
    "--color-10-rgb": "25, 24, 19",  // muted surface overlays
    "--color-60-rgb": "85, 90, 75",  // opacity tints (currently unused, reserved)
    // ── Decorative & filters ────────────────────────────────────────────────
    "--color-graphic-muted": "#6F6B5F", // illustration dots and graphic accents
    "--image-filter": "none",           // CSS filter applied to <img> elements
  },

  // Cool dark — neutral black/gray theme
  cool: {
    // ── Color scale ────────────────────────────────────────────────────────────
    "--color-0":  "#0A0A0A", // bg            — page background, card-ghost fill
    "--color-05": "#0F0F0F", // bg-card        — card-interactive, card-tinted surfaces
    "--color-10": "#141414", // bg-muted / border-inset — hover bg, nav/drawer dividers, separators
    "--color-20": "#1F1F1F", // bg-surface / border-subtle — active surface, tinted card borders
    "--color-30": "#262626", // border         — default borders, dividers, "Let's chat" button border
    "--color-40": "#333333", // border-secondary — project card border, scrollbar thumb
    "--color-50": "#484848", // (scale only — no semantic alias)
    "--color-60": "#5C5C5C", // text-tertiary  — decorative icons (PixelQuote), rain stroke, scrollbar hover
    "--color-80": "#A3A3A3", // text-secondary — labels, descriptions, nav items (inactive)
    "--color-90": "#E5E5E5", // text-primary   — headings, body text, active nav items
    // ── RGB helpers (used for rgba() opacity variants) ──────────────────────
    "--color-0-rgb":  "10, 10, 10",  // gradient overlays in ProjectCardBackground
    "--color-10-rgb": "20, 20, 20",  // muted surface overlays
    "--color-60-rgb": "92, 92, 92",  // opacity tints (currently unused, reserved)
    // ── Decorative & filters ────────────────────────────────────────────────
    "--color-graphic-muted": "#757575", // illustration dots and graphic accents
    "--image-filter": "grayscale(100%)", // CSS filter applied to <img> elements
  },

  // Light — inverted gray scale, values still being tuned
  light: {
    // ── Color scale ────────────────────────────────────────────────────────────
    "--color-0":  "#FAFAFA", // bg            — page background, card-ghost fill
    "--color-05": "#F2F2F2", // bg-card        — card-interactive, card-tinted surfaces
    "--color-10": "#E3E3E3", // bg-muted / border-inset — hover bg, nav/drawer dividers, separators
    "--color-20": "#D9D9D9", // bg-surface / border-subtle — active surface, tinted card borders
    "--color-30": "#CCCCCC", // border         — default borders, dividers, "Let's chat" button border
    "--color-40": "#BFBFBF", // border-secondary — project card border, scrollbar thumb
    "--color-50": "#B3B3B3", // (scale only — no semantic alias)
    "--color-60": "#A6A6A6", // text-tertiary  — decorative icons (PixelQuote), rain stroke, scrollbar hover
    "--color-80": "#4D4D4D", // text-secondary — labels, descriptions, nav items (inactive)
    "--color-90": "#0D0D0D", // text-primary   — headings, body text, active nav items
    // ── RGB helpers (used for rgba() opacity variants) ──────────────────────
    "--color-0-rgb":  "250, 250, 250", // gradient overlays in ProjectCardBackground
    "--color-10-rgb": "227, 227, 227", // muted surface overlays
    "--color-60-rgb": "166, 166, 166", // opacity tints (currently unused, reserved)
    // ── Decorative & filters ────────────────────────────────────────────────
    "--color-graphic-muted": "#FFFFFF", // illustration dots and graphic accents
    "--image-filter": "none",           // CSS filter applied to <img> elements

    // ── Typography overrides (light theme) ─────────────────────────────────
    "--font-weight-regular": "450", // body text, secondary labels
    "--font-weight-medium": "550",  // headings, emphasized text
  },
} as const;

type ColorScheme = keyof typeof colorSchemes;

type ColorSchemeContextType = {
  colorScheme: ColorScheme;
  setColorScheme: (scheme: ColorScheme) => void;
  toggleColorScheme: () => void;
  hideSwitcher: boolean;
  setHideSwitcher: (hide: boolean) => void;
};

const ColorSchemeContext = React.createContext<ColorSchemeContextType | null>(null);

export function ColorSchemeProvider({ children }: { children: React.ReactNode }) {
  const [colorScheme, setColorScheme] = React.useState<ColorScheme>("warm");
  const [hideSwitcher, setHideSwitcher] = React.useState(false);

  // Apply color scheme to document
  React.useEffect(() => {
    const root = document.documentElement;
    const colors = colorSchemes[colorScheme];
    
    Object.entries(colors).forEach(([property, value]) => {
      root.style.setProperty(property, value);
    });
  }, [colorScheme]);

  const toggleColorScheme = React.useCallback(() => {
    const schemeKeys = Object.keys(colorSchemes) as ColorScheme[];
    setColorScheme((prev) => {
      const currentIndex = schemeKeys.indexOf(prev);
      const nextIndex = (currentIndex + 1) % schemeKeys.length;
      return schemeKeys[nextIndex];
    });
  }, []);

  return (
    <ColorSchemeContext.Provider value={{ colorScheme, setColorScheme, toggleColorScheme, hideSwitcher, setHideSwitcher }}>
      {children}
    </ColorSchemeContext.Provider>
  );
}

export function useColorScheme() {
  const context = React.useContext(ColorSchemeContext);
  if (!context) {
    throw new Error("useColorScheme must be used within a ColorSchemeProvider");
  }
  return context;
}

// Inline theme switcher for Experiments page
export function ThemeSwitcherInline() {
  const { colorScheme, setColorScheme } = useColorScheme();

  const schemes: { key: ColorScheme; label: string; icon: React.ReactNode }[] = [
    {
      key: "warm",
      label: "Warm theme",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
      ),
    },
    {
      key: "cool",
      label: "Cool theme",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
        </svg>
      ),
    },
    {
      key: "light",
      label: "Light theme",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M12 3.5c1.8 0 3.25 1.46 3.25 3.25 0 1.06-.52 2.06-1.4 2.67L12 11l-1.85-1.58A3.25 3.25 0 0 1 8.75 6.75C8.75 4.96 10.2 3.5 12 3.5Z" />
          <path d="M9.5 13.5h5L14 19l-2 1.5L10 19l-.5-5.5Z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="card-tinted w-full h-full flex flex-col">
      <div className="card-tinted-inner flex w-full flex-1 items-center justify-center gap-4 px-4 py-3">
        {schemes.map((scheme) => {
          const isActive = colorScheme === scheme.key;
          return (
            <button
              key={scheme.key}
              type="button"
              onClick={() => setColorScheme(scheme.key)}
              className={`flex h-12 w-12 items-center justify-center rounded-full border transition-colors ${
                isActive
                  ? "bg-color-bg-surface border-color-border-secondary text-color-text-primary"
                  : "border-color-border-secondary text-color-text-secondary hover:bg-color-bg-surface"
              }`}
              aria-pressed={isActive}
              aria-label={scheme.label}
            >
              {scheme.icon}
            </button>
          );
        })}
      </div>
      <p className="type-body-sm">Theme switcher</p>
    </div>
  );
}

