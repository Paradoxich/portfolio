"use client";

import * as React from "react";
import { CoffeeCup, Icecream } from "@/components/icons";

type ColorScheme = "warm" | "cool" | "light";

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
    document.documentElement.dataset.theme = colorScheme;
  }, [colorScheme]);

  const toggleColorScheme = React.useCallback(() => {
    const schemeKeys: ColorScheme[] = ["warm", "cool", "light"];
    setColorScheme((prev) => {
      const nextIndex = (schemeKeys.indexOf(prev) + 1) % schemeKeys.length;
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
      icon: <CoffeeCup size={20} />,
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
      icon: <Icecream size={20} />,
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

