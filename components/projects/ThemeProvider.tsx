"use client";

import * as React from "react";
import type { Theme } from "./ProjectsConfig";

type ThemeProviderProps = {
  theme?: Theme;
  children: React.ReactNode;
};

export function ThemeProvider({ theme, children }: ThemeProviderProps) {
  // Generate unique ID for this theme instance to scope scrollbar styles
  // Use ref to store ID that's only generated on client to avoid hydration mismatch
  const themeIdRef = React.useRef<string | null>(null);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
    if (!themeIdRef.current) {
      themeIdRef.current = `theme-${Math.random().toString(36).substr(2, 9)}`;
    }
  }, []);

  React.useEffect(() => {
    if (!theme?.scrollbarColor || !themeIdRef.current) return;

    const themeId = themeIdRef.current;
    const styleId = `theme-scrollbar-${themeId}`;
    let styleElement = document.getElementById(styleId) as HTMLStyleElement;

    if (!styleElement) {
      styleElement = document.createElement("style");
      styleElement.id = styleId;
      document.head.appendChild(styleElement);
    }

    styleElement.textContent = `
      .theme-provider-${themeId} {
        scrollbar-color: ${theme.scrollbarColor} transparent;
      }
      .theme-provider-${themeId}::-webkit-scrollbar-thumb {
        background-color: ${theme.scrollbarColor} !important;
      }
      .theme-provider-${themeId}::-webkit-scrollbar-thumb:hover {
        background-color: ${theme.scrollbarColor} !important;
        opacity: 0.8;
      }
      .theme-provider-${themeId} * {
        scrollbar-color: ${theme.scrollbarColor} transparent;
      }
      .theme-provider-${themeId} *::-webkit-scrollbar-thumb {
        background-color: ${theme.scrollbarColor} !important;
      }
      .theme-provider-${themeId} *::-webkit-scrollbar-thumb:hover {
        background-color: ${theme.scrollbarColor} !important;
        opacity: 0.8;
      }
    `;

    return () => {
      const element = document.getElementById(styleId);
      if (element) {
        element.remove();
      }
    };
  }, [theme?.scrollbarColor, isMounted]);

  if (!theme) {
    return <>{children}</>;
  }

  const style: React.CSSProperties = {
    // Map theme colors to CSS custom properties
    // Case study colors (use card colors as fallback)
    ...(theme.bg || theme.cardBg ? { "--color-bg": theme.bg || theme.cardBg } : {}),
    ...(theme.border || theme.cardBorder ? { "--color-border": theme.border || theme.cardBorder } : {}),
    
    // Card-specific colors (use case study colors as fallback)
    ...(theme.cardBg || theme.bg ? { "--color-card-bg": theme.cardBg || theme.bg } : {}),
    ...(theme.cardBorder || theme.border ? { "--color-card-border": theme.cardBorder || theme.border } : {}),
    
    // Shared colors
    ...(theme.bgSurface && { "--color-bg-surface": theme.bgSurface }),
    ...(theme.bgMuted && { "--color-bg-muted": theme.bgMuted }),
    // Use imageBorder if provided, otherwise fall back to borderSecondary
    ...(theme.imageBorder
      ? { "--color-border-secondary": theme.imageBorder }
      : theme.borderSecondary && { "--color-border-secondary": theme.borderSecondary }),
    ...(theme.textPrimary && { "--color-text-primary": theme.textPrimary }),
    ...(theme.textSecondary && { "--color-text-secondary": theme.textSecondary }),
    ...(theme.accent && { "--color-accent": theme.accent }),
    ...(theme.scrollbarColor && { "--color-scrollbar": theme.scrollbarColor }),
    // Use scrollGradient if provided, otherwise fall back to bg
    ...(theme.scrollGradient
      ? { "--color-scroll-gradient": theme.scrollGradient }
      : (theme.bg || theme.cardBg) && { "--color-scroll-gradient": theme.bg || theme.cardBg }),
    // Use closeButtonBg if provided, otherwise fall back to bg
    ...(theme.closeButtonBg
      ? { "--color-close-button-bg": theme.closeButtonBg }
      : (theme.bg || theme.cardBg) && { "--color-close-button-bg": theme.bg || theme.cardBg }),
  } as React.CSSProperties;

  return (
    <div
      style={style}
      className={`theme-provider${isMounted && themeIdRef.current ? ` theme-provider-${themeIdRef.current}` : ""}`}
    >
      {children}
    </div>
  );
}
