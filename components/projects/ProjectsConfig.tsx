// components/projects/projectsConfig.ts
import type React from "react";
import { ProjectPageShuttle } from "./ProjectPageShuttle";
import { ProjectPageMixlodge } from "./ProjectPageMixlodge";
import { ProjectPagePortfolio } from "./ProjectPagePortfolio";
import { ProjectPageNeptune } from "./ProjectPageNeptune";
import { ProjectPageOptimoroute } from "./ProjectPageOptimoroute";
import { ProjectPageSantolina } from "./ProjectPageSantolina";

export type ProjectConfig = {
  key: string;
  /** URL slug for routing (e.g. "neptune" -> /projects/neptune). Falls back to key if not set. */
  slug?: string;
  label?: string;
  /** Card title on projects index (can differ from case study) */
  title: string;
  /** Card-specific title; falls back to title if not set */
  cardTitle?: string;
  /** Optional card description shown under card title on projects index */
  cardDescription?: string;
  /** Display label for category (e.g. "Developer tools", "Marketplace product", "Personal project") */
  categoryLabel: string;
  category: "client" | "personal";

  /** Optional background image for the project card (public path). */
  cardBackground?: string;

  /** SVG graphic for project card (theme-aware). Not used in case study. */
  cardGraphic?: React.ComponentType;

  /** Case study page component — optional */
  Page?: React.ComponentType;

  /** When true, card is non-clickable and shows a "Coming Soon" badge. */
  comingSoon?: boolean;

  /** SEO meta description for the case study page; falls back to cardDescription. */
  seoDescription?: string;

  /** OG/Twitter share image for the case study page (public path, 1200x630). */
  ogImage?: string;

  /** When true, the case study page is excluded from search indexing. */
  noindex?: boolean;
};

export const projectsConfig: ProjectConfig[] = [
  {
    key: "santolina",
    label: "Santolina",
    title: "Santolina",
    cardDescription:
      "Reimagined garden planning around curated, AI-enriched plant knowledge instead of static databases. Designed, implemented, and shipped the entire product.",
    categoryLabel: "Personal",
    category: "personal",
    cardBackground: "/project-cards/card-santolina.png",
    ogImage: "/og/og-santolina.png",
    Page: ProjectPageSantolina,
  },

  {
    key: "neptune-lp",
    slug: "neptune",
    label: "Neptune",
    title:
      "Visual direction and early workflow exploration for an AI infra platform.",
    cardTitle: "Neptune",
    cardDescription: "Designed the visual identity and positioning for an AI infrastructure platform. Drove the brand direction, built an animated prototype to clarify how the product works, and helped align the team around a clearer product story.",
    categoryLabel: "Developer Tools",
    category: "client",
    cardBackground: "/project-cards/card-neptune.png",
    ogImage: "/og/og-neptune.png",
    Page: ProjectPageNeptune,
  },

  {
    key: "shuttle-console",
    slug: "shuttle",
    label: "Shuttle",
    title:
      "Establishing a scalable product system for a growing dev platform.",
    cardTitle: "Shuttle",
    cardDescription: "Redesigned the developer console, replacing fragmented patterns with a scalable system. The new foundation improves feature discovery, simplifies project management, and gives the platform room to grow.",
    categoryLabel: "Developer Tools",
    category: "client",
    cardBackground: "/project-cards/card-shuttle.png",
    ogImage: "/og/og-shuttle.png",
    Page: ProjectPageShuttle,
  },

  {
    key: "mixlodge-brand",
    slug: "mixlodge",
    label: "MixLodge",
    title: "Defining the product foundations for an early-stage booking tool.",
    cardTitle: "MixLodge",
    cardDescription: "Led product definition and end-to-end design for a booking platform connecting studios, services, and artists. Defined the core workflows and product logic that shaped the MVP from concept to something shippable.",
    categoryLabel: "Marketplace",
    category: "client",
    cardBackground: "/project-cards/card-mixlodge.png",
    ogImage: "/og/og-mixlodge.png",
    Page: ProjectPageMixlodge,
  },

  {
    key: "portfolio",
    label: "Portfolio",
    title: "Designing and building this portfolio as a real product.",
    cardTitle: "Portfolio",
    cardDescription: "Designed and built my own portfolio site, treating it as a real product rather than a showcase. I used it to explore how AI tooling can integrate into an actual design-to-code workflow.",
    categoryLabel: "Personal",
    category: "personal",
    cardBackground: "/project-cards/card-portfolio.png",
    ogImage: "/og/og-portfolio.png",
    Page: ProjectPagePortfolio,
  },

  {
    key: "optimoroute",
    label: "Optimoroute",
    title: "OptimoRoute",
    cardDescription: "Led the UI modernization of a real-time routing software. Working closely with engineering, I drove iterative improvements that increased usability and feature discovery without disrupting existing users or revenue.",
    categoryLabel: "Route Optimization",
    category: "client",
    cardBackground: "/project-cards/card-optimoroute.png",
    ogImage: "/og/og-optimoroute.png",
    noindex: true,
    Page: ProjectPageOptimoroute,
  },
];
