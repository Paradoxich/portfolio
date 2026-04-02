"use client";

import * as React from "react";
import { CoffeeCup } from "@/components/icons";

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
  const [colorScheme, _setColorScheme] = React.useState<ColorScheme>("warm");
  const [hideSwitcher, setHideSwitcher] = React.useState(false);

  // Apply synchronously so computed styles are correct before effects fire
  const setColorScheme = React.useCallback((scheme: ColorScheme) => {
    if (typeof document !== "undefined") {
      document.documentElement.dataset.theme = scheme;
    }
    _setColorScheme(scheme);
  }, []);

  // Set initial theme on mount
  React.useEffect(() => {
    document.documentElement.dataset.theme = colorScheme;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleColorScheme = React.useCallback(() => {
    const schemeKeys: ColorScheme[] = ["warm", "cool", "light"];
    setColorScheme(
      schemeKeys[(schemeKeys.indexOf(colorScheme) + 1) % schemeKeys.length]
    );
  }, [colorScheme, setColorScheme]);

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

// Compact theme switcher for TopStickyBar
export function ThemeSwitcherCompact() {
  const { colorScheme, setColorScheme } = useColorScheme();

  const schemes: { key: ColorScheme; label: string; icon: React.ReactNode }[] = [
    {
      key: "warm",
      label: "Warm theme",
      icon: <CoffeeCup size={16} />,
    },
    {
      key: "cool",
      label: "Cool theme",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
        </svg>
      ),
    },
    {
      key: "light",
      label: "Light theme",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="16" fill="currentColor">
          <path d="M565-395q35-35 35-85t-35-85q-35-35-85-35t-85 35q-35 35-35 85t35 85q35 35 85 35t85-35Zm-206.96 36.96Q308-408.08 308-480q0-71.92 50.04-121.96Q408.08-652 480-652q71.92 0 121.96 50.04Q652-551.92 652-480q0 71.92-50.04 121.96Q551.92-308 480-308q-71.92 0-121.96-50.04ZM216-454H58v-52h158v52Zm686 0H744v-52h158v52ZM454-744v-158h52v158h-52Zm0 686v-158h52v158h-52ZM275.92-648.92l-95.69-93.46 36.39-40.39 96.23 96.69-36.93 37.16Zm467.46 467.69-94.84-93.31 35.54-37.54 95.69 94.46-36.39 36.39Zm-96.46-502.85 95.46-93.69 36.39 34.39-92.69 97.23-39.16-37.93ZM177.23-216.62l97.31-92.84 34.77 33.54-91.08 97.07-41-37.77ZM480-480Z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex items-center h-7 rounded-full border border-color-border bg-color-bg p-0gap-0.5">
      {schemes.map((scheme) => {
        const isActive = colorScheme === scheme.key;
        return (
          <button
            key={scheme.key}
            type="button"
            onClick={() => setColorScheme(scheme.key)}
            className={`flex h-7 w-7 items-center justify-center rounded-full transition-colors ${
              isActive
                ? "bg-color-bg-surface text-color-text-primary"
                : "text-color-text-secondary hover:text-color-text-primary"
            }`}
            aria-pressed={isActive}
            aria-label={scheme.label}
          >
            {scheme.icon}
          </button>
        );
      })}
    </div>
  );
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
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="currentColor">
          <path d="M565-395q35-35 35-85t-35-85q-35-35-85-35t-85 35q-35 35-35 85t35 85q35 35 85 35t85-35Zm-206.96 36.96Q308-408.08 308-480q0-71.92 50.04-121.96Q408.08-652 480-652q71.92 0 121.96 50.04Q652-551.92 652-480q0 71.92-50.04 121.96Q551.92-308 480-308q-71.92 0-121.96-50.04ZM216-454H58v-52h158v52Zm686 0H744v-52h158v52ZM454-744v-158h52v158h-52Zm0 686v-158h52v158h-52ZM275.92-648.92l-95.69-93.46 36.39-40.39 96.23 96.69-36.93 37.16Zm467.46 467.69-94.84-93.31 35.54-37.54 95.69 94.46-36.39 36.39Zm-96.46-502.85 95.46-93.69 36.39 34.39-92.69 97.23-39.16-37.93ZM177.23-216.62l97.31-92.84 34.77 33.54-91.08 97.07-41-37.77ZM480-480Z" />
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

