// components/projects/projectsConfig.ts
import type React from "react";
import { ProjectPageShuttle } from "./ProjectPageShuttle";
import { ProjectPageMixlodge } from "./ProjectPageMixlodge";
import { ProjectPagePortfolio } from "./ProjectPagePortfolio";
import { ProjectPageNeptune } from "./ProjectPageNeptune";

export type Theme = {
  // Case study colors (modal/page)
  bg?: string; // case study background color (defaults to cardBg if not provided)
  border?: string; // case study border color (defaults to cardBorder if not provided)
  
  // Card colors (project card on projects page)
  cardBg?: string; // card background color (defaults to bg if not provided)
  cardBorder?: string; // card border color (defaults to border if not provided)
  
  // Shared colors
  bgSurface?: string; // card/surface background
  bgMuted?: string; // muted background
  borderSecondary?: string; // secondary border (used for images/videos)
  imageBorder?: string; // specific border color for images/videos (defaults to borderSecondary)
  textPrimary?: string; // primary text color
  textSecondary?: string; // secondary text color
  accent?: string; // accent color (optional)
  scrollbarColor?: string; // scrollbar thumb color
  scrollGradient?: string; // top scroll gradient color (defaults to bg if not provided)
  closeButtonBg?: string; // close button circle fill color (defaults to bg if not provided)
  linkPillBg?: string; // link pill background color (defaults to bgSurface if not provided)
  linkPillText?: string; // link pill text color (defaults to textPrimary if not provided)
  linkPillHoverBg?: string; // link pill hover background color (defaults to bgSurface if not provided)
  tldrBg?: string; // TL;DR section background color (defaults to bgMuted if not provided)
};

// Define themes here - change colors in one place per case study
export const themes = {
  "neptune-lp": {
    // Case study colors (modal/page)
    bg: "#0B1016",
    border: "rgba(39, 52, 67, 0.50)",
    
    
    // Shared colors
    bgSurface: "#1a1a1a",
    bgMuted: "#10161D",
    borderSecondary: "rgba(39, 52, 67, 0.50)",
    textPrimary: "#f0f0f0",
    textSecondary: "#B1BDC8",
    accent: "#4a9eff",
    scrollbarColor: "rgba(39, 52, 67, 0.50)",
    scrollGradient: "#0B1016", // top scroll gradient color (defaults to bg if not provided)
    closeButtonBg: "#060A0F", // close button circle fill color (defaults to bg if not provided)
    linkPillBg: "#10161D", // link pill background color
    linkPillText: "#f0f0f0", // link pill text color
    linkPillHoverBg: "#121921", // link pill hover background color
    tldrBg: "#10161D", // TL;DR section background color
  } as Theme,

  "shuttle-console": {
    // Case study colors (modal/page)
    bg: "#0E1115",
    border: "#1E242B",
    
    // Shared colors
    bgSurface: "#1a1a1a",
    bgMuted: "#151515",
    borderSecondary: "rgba(39, 52, 67, 0.50)",
    textPrimary: "#f0f0f0",
    textSecondary: "#ADB5C0",
    accent: "#4a9eff",
    scrollbarColor: "rgba(39, 52, 67, 0.50)",
    scrollGradient: "#060A0F", // top scroll gradient color (defaults to bg if not provided)
    closeButtonBg: "#060A0F", // close button circle fill color (defaults to bg if not provided)

    linkPillBg: "#14191F", // link pill background color
    linkPillText: "#ADB5C0", // link pill text color
    linkPillHoverBg: "#181D24", // link pill hover background color
    tldrBg: "#14191F", // TL;DR section background color
  } as Theme,

  "mixlodge-mvp": {
    // Case study colors (modal/page)
    bg: "#121212",
    border: "#232323",
    
    // Shared colors
    bgSurface: "#1a1a1a",
    bgMuted: "#151515",
    borderSecondary: "#232323",
    textPrimary: "#F2F0EF",
    textSecondary: "#B1B1B1",
    accent: "#4a9eff",
    scrollbarColor: "rgba(255, 255, 255, 0.1)",
    scrollGradient: "#060A0F", // top scroll gradient color (defaults to bg if not provided)
    closeButtonBg: "#060A0F", // close button circle fill color (defaults to bg if not provided)
    tldrBg: "#151515", // TL;DR section background color
  } as Theme,
  
  
  
} as const;

export type ProjectConfig = {
  key: string;
  label?: string;
  title: string;
  href?: string;
  category: "client" | "personal";

  // hero vizual – opcionalno za SVE projekte
  hero?: {
    type: "image" | "video";
    src: string;
    alt?: string;
  };

  // thumbnail image for list icons (if hero is video, use this for list display)
  thumbnail?: string;

  // theme – opcionalno za custom boje po projektu
  theme?: Theme;

  // case-study content komponenta – opcionalno
  Page?: React.ComponentType;
};

export const projectsConfig: ProjectConfig[] = [
  

  {
    key: "neptune-lp",
    label: "Neptune",
    title:
      "Brand and web design for an AI platform engineer handling infra end-to-end.",
    href: "/projects/neptune",
    category: "client",
    hero: {
      type: "video",
      src: "/case-studies/neptune-lp-hero.mp4",
    },
    theme: themes["neptune-lp"],
    Page: ProjectPageNeptune,
    // hero i Page možeš dodati kasnije
  },

  {
    key: "shuttle-console",
    label: "Shuttle",
    title:
      "Dev console redesign with a system that supports clarity, ease, and scale.",
    href: "/projects/shuttle",
    category: "client",
    hero: {
      type: "image",
      src: "/case-studies/shuttle-console-hero.png",
    },
    theme: themes["shuttle-console"],
    Page: ProjectPageShuttle,
  
   
  },

  {
    key: "mixlodge-brand",
    label: "MixLodge",
    title: "Brand & MVP for a studio booking platform.",
    href: "/projects/mixlodge",
    category: "client",
    hero: {
      type: "image",
      src: "/case-studies/mixlodge-hero.png",
    },
    theme: themes["mixlodge-mvp"],
    Page: ProjectPageMixlodge,
  },

  {
    key: "portfolio",
    label: "Portfolio",
    title: "Figma to Prod: How I built this",
    href: "/contact",
    category: "personal",
    Page: ProjectPagePortfolio,
  },
];
