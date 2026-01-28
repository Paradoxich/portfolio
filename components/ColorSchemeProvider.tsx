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
        <div className="flex items-center gap-4 flex-wrap">
          <p className="type-body-xs text-color-text-secondary">
            © {new Date().getFullYear()} Ana Beverin
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/paradoxich/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-color-text-secondary opacity-60 hover:opacity-100 transition-opacity"
              aria-label="LinkedIn"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="block">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/paradoxich/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-color-text-secondary opacity-60 hover:opacity-100 transition-opacity"
              aria-label="Instagram"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="block">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
