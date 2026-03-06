// components/projects/projectsConfig.ts
import type React from "react";
import { ProjectPageShuttle } from "./ProjectPageShuttle";
import { ProjectPageMixlodge } from "./ProjectPageMixlodge";
import { ProjectPagePortfolio } from "./ProjectPagePortfolio";
import { ProjectPageNeptune } from "./ProjectPageNeptune";

export type ProjectConfig = {
  key: string;
  /** URL slug for routing (e.g. "neptune" -> /projects/neptune). Falls back to key if not set. */
  slug?: string;
  label?: string;
  /** Card title on projects index (can differ from case study) */
  title: string;
  /** Card-specific title; falls back to title if not set */
  cardTitle?: string;
  /** Display label for category (e.g. "Developer tools", "Marketplace product", "Personal project") */
  categoryLabel: string;
  category: "client" | "personal";

  /** SVG graphic for project card (theme-aware). Not used in case study. */
  cardGraphic?: React.ComponentType;

  // hero vizual – used in case study only, not on project cards
  hero?: {
    type: "image" | "video";
    src: string;
    alt?: string;
    position?: "top" | "center" | "bottom";
  };

  // thumbnail image for list icons (if hero is video, use this for list display)
  thumbnail?: string;

  // case-study content komponenta – opcionalno
  Page?: React.ComponentType<{ heroSlot?: React.ReactNode }>;
};

export const projectsConfig: ProjectConfig[] = [
  

  {
    key: "neptune-lp",
    slug: "neptune",
    label: "Neptune",
    title:
      "Visual direction and early workflow exploration for an AI infra platform.",
    cardTitle: "Neptune: Defining the product's positioning and visual foundation",
    categoryLabel: "Developer tools",
    category: "client",
    hero: {
      type: "video",
      src: "/case-studies/neptune-chat.mp4",
    },
    Page: ProjectPageNeptune,
  },

  {
    key: "shuttle-console",
    slug: "shuttle",
    label: "Shuttle",
    title:
      "Establishing a scalable product system for a growing dev platform.",
    cardTitle: "Shuttle: Designing a scalable system for a growing developer platform.",
    categoryLabel: "Developer tools",
    category: "client",
    hero: {
      type: "image",
      src: "/case-studies/shuttle-console-hero.png",
      position: "top",
    },
    Page: ProjectPageShuttle,
  },

  {
    key: "mixlodge-brand",
    slug: "mixlodge",
    label: "MixLodge",
    title: "Defining the product foundations for an early-stage booking tool.",
    cardTitle: "MixLodge: Turning an early idea into a structured booking product",
    categoryLabel: "Marketplace product",
    category: "client",
    hero: {
      type: "image",
      src: "/case-studies/mixlodge-hero.png",
    },
    Page: ProjectPageMixlodge,
  },

  {
    key: "portfolio",
    label: "Portfolio",
    title: "Designing and building this portfolio as a real product.",
    cardTitle: "Portfolio: Building a personal site as a real product.",
    categoryLabel: "Personal project",
    category: "personal",
    hero: {
      type: "image",
      src: "/case-studies/portfolio-hero.png",
    },
    Page: ProjectPagePortfolio,
  },
];
