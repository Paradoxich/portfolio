"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

type ColorScheme = "warm" | "cool";

type ColorSchemeContextType = {
  colorScheme: ColorScheme;
  setColorScheme: (scheme: ColorScheme) => void;
  toggleColorScheme: () => void;
  hideSwitcher: boolean;
  setHideSwitcher: (hide: boolean) => void;
};

const ColorSchemeContext = React.createContext<ColorSchemeContextType | null>(null);

// Color palettes with gradient helpers
const colorSchemes = {
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
    "--color-20-rgb": "35, 34, 27",
    // Color blend overlay for illustrations
    "--color-blend": "#43402C",
    // Hover states (rgb for opacity variants)
    "--color-60-rgb": "85, 90, 75",
    // Button fill color
    "--color-accent": "#84873d",
    // Image filter (none for warm)
    "--image-filter": "none",
  },
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
    "--color-20-rgb": "31, 31, 31",
    // Color blend overlay for illustrations (neutral gray)
    "--color-blend": "#3a3a3a",
    // Hover states (rgb for opacity variants)
    "--color-60-rgb": "92, 92, 92",
    // Button fill color
    "--color-accent": "#6b6b6b",
    // Image filter (grayscale for cool)
    "--image-filter": "grayscale(100%)",
  },
};

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
    setColorScheme((prev) => (prev === "warm" ? "cool" : "warm"));
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

// Theme toggle button with floating → pill transformation
export function ColorSchemeSwitcher() {
  const { colorScheme, toggleColorScheme, hideSwitcher } = useColorScheme();
  const [isDocked, setIsDocked] = React.useState(false);
  const footerRef = React.useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Hide on case study pages (they have their own themes)
  const isOnCaseStudy = pathname.startsWith("/projects/") && pathname !== "/projects";

  // Hide when modals are open or on case study pages
  const shouldHide = isOnCaseStudy || hideSwitcher;

  React.useEffect(() => {
    const footer = footerRef.current;
    if (!footer || shouldHide) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsDocked(entry.intersectionRatio > 0.5);
      },
      { threshold: [0, 0.5, 1] }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, [shouldHide]);

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

  const nextTheme = colorScheme === "warm" ? "cool" : "warm";

  // Don't render when hidden
  if (shouldHide) return null;

  return (
    <>
      {/* Transforming button - fixed position, expands to pill when docked */}
      <button
        onClick={toggleColorScheme}
        className={`
          fixed bottom-6 right-6 z-50
          h-10
          rounded-full
          border border-color-border-secondary
          bg-color-bg-surface
          flex items-center justify-center
          transition-all duration-500 ease-out
          input-hover
          hover:scale-105
          overflow-hidden
          ${isDocked ? "w-auto px-4 gap-2" : "w-10"}
        `}
        title={`Switch to ${nextTheme} theme`}
        aria-label={`Current theme: ${colorScheme}. Click to switch.`}
      >
        {icon}
        <span 
          className={`
            type-body-xs text-color-text-secondary whitespace-nowrap
            transition-all duration-500 ease-out
            ${isDocked ? "opacity-100 max-w-[150px]" : "opacity-0 max-w-0"}
          `}
        >
          Switch to {nextTheme}
        </span>
      </button>

      {/* Footer sentinel - just for intersection detection */}
      <footer 
        ref={footerRef}
        className={`
          py-8 px-6
          border-t transition-colors duration-500 ease-out
          ${isDocked ? "border-color-border" : "border-transparent"}
        `}
      >
        <p className="type-body-xs text-color-text-secondary">
          © {new Date().getFullYear()} Ana Beverin
        </p>
      </footer>
    </>
  );
}
