"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

const colorSchemes = {
  // Current \"green\" / warm theme
  warm: {
    "--color-0": "#100F0C",
    "--color-10": "#191813",
    "--color-20": "#23221b",
    "--color-30": "#23251e",
    "--color-40": "#2e3027",
    "--color-50": "#424539",
    "--color-60": "#555a4b",
    "--color-80": "#c5bfab",
    "--color-90": "#f3f0e9",
    "--color-100": "#ffffff",
    // Gradient helpers (rgba versions)
    "--color-0-rgb": "16, 15, 12",
    "--color-10-rgb": "25, 24, 19",
    "--color-20-rgb": "35, 34, 27",
    // Color blend overlay for illustrations
    "--color-blend": "#43402C",
    // Hover states (rgb for opacity variants)
    "--color-60-rgb": "85, 90, 75",
    // Button fill color
    "--color-accent": "#84873d",
    // Decorative graphic accent (dots, highlights)
    "--color-graphic-muted": "#6F6B5F",
    // Image filter (none for warm)
    "--image-filter": "none",
  },
  // Current \"black\" / cool theme
  cool: {
    "--color-0": "#0a0a0a",
    "--color-10": "#141414",
    "--color-20": "#1f1f1f",
    "--color-30": "#262626",
    "--color-40": "#333333",
    "--color-50": "#484848",
    "--color-60": "#5c5c5c",
    "--color-80": "#a3a3a3",
    "--color-90": "#e5e5e5",
    "--color-100": "#ffffff",
    // Gradient helpers (rgba versions)
    "--color-0-rgb": "10, 10, 10",
    "--color-10-rgb": "20, 20, 20",
    "--color-20-rgb": "31, 31, 31",
    // Color blend overlay for illustrations (neutral gray)
    "--color-blend": "#3a3a3a",
    // Hover states (rgb for opacity variants)
    "--color-60-rgb": "92, 92, 92",
    // Button fill color
    "--color-accent": "#6b6b6b",
    "--color-graphic-muted": "#757575",
    // Image filter (grayscale for cool)
    "--image-filter": "grayscale(100%)",
  },
  // Placeholder for future light/color theme – values to be tuned
  light: {
    "--color-0": "#f5f3f0",
    "--color-10": "#f8f6f2",
    "--color-20": "#ffffff",
    "--color-10-rgb": "248, 246, 242",
    "--color-30": "#e0ded7",
    "--color-40": "#cdc8bc",
    "--color-50": "#bcb5a2",
    "--color-60": "#a59d86",
    "--color-80": "#5c5540",
    "--color-90": "#1e1a11",
    "--color-100": "#000000",
    "--color-0-rgb": "245, 243, 240",
    "--color-20-rgb": "255, 255, 255",
    "--color-blend": "#e3dccd",
    "--color-60-rgb": "165, 157, 134",
    "--color-accent": "#7f8250",
    "--color-graphic-muted": "#8a8370",
    "--image-filter": "none",
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
  const { colorScheme, toggleColorScheme } = useColorScheme();

  const schemeKeys = Object.keys(colorSchemes) as ColorScheme[];
  const currentIndex = schemeKeys.indexOf(colorScheme);
  const nextScheme = schemeKeys[(currentIndex + 1) % schemeKeys.length];

  const icon = colorScheme === "warm" ? (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="flex-shrink-0">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  ) : (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="flex-shrink-0">
      <circle cx="12" cy="12" r="9" />
    </svg>
  );

  return (
    <button
      onClick={toggleColorScheme}
      className="inline-flex h-10 items-center gap-2 rounded-full border border-color-border-secondary bg-color-bg-surface px-4 type-body-xs text-color-text-secondary transition-colors input-hover hover:scale-[1.02]"
      title={`Switch to ${nextScheme} theme`}
      aria-label={`Current theme: ${colorScheme}. Click to switch.`}
    >
      {icon}
      <span className="whitespace-nowrap">Switch to {nextScheme}</span>
    </button>
  );
}
