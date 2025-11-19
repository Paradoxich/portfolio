// components/projects/projectsConfig.ts
import type React from "react";
import { ProjectPageShuttle } from "./ProjectPageShuttle";
import { ProjectPageMixlodge } from "./ProjectPageMixlodge";
import { ProjectPagePortfolio } from "./ProjectPagePortfolio";
import { ProjectPageNeptune } from "./ProjectPageNeptune";

export type ProjectConfig = {
  key: string;
  label?: string;
  title: string;
  summary: string;
  href?: string;

  // hero vizual – opcionalno za SVE projekte
  hero?: {
    type: "image" | "video";
    src: string;
    alt?: string;
  };

  // case-study content komponenta – opcionalno
  Page?: React.ComponentType;
};

export const projectsConfig: ProjectConfig[] = [
  // 👇 primjer: kasnije dodaš svoj portfolio project ovdje
  // {
  //   key: "portfolio",
  //   label: "Portfolio",
  //   title: "This very portfolio – from structure to tiny peppers.",
  //   summary:
  //     "Designing the layout, visual language, and small interactive moments that reflect how I actually work.",
  //   href: "/projects/portfolio",
  //   hero: {
  //     type: "image",
  //     src: "/images/portfolio-hero.png",
  //     alt: "Portfolio overview",
  //   },
  //   Page: ProjectPagePortfolio,
  // },

  {
    key: "neptune-console",
    label: "Neptune",
    title:
      "Brand and web design for an AI platform engineer handling infra end-to-end.",
    summary:
      "Dev console and marketing site that make complex infra feel calm, legible, and scalable.",
    href: "/projects/neptune",

    Page: ProjectPageNeptune,
    // hero i Page možeš dodati kasnije
  },

  {
    key: "shuttle-console",
    label: "Shuttle",
    title:
      "Dev console redesign with a system that supports clarity, ease, and scale.",
    summary:
      "Tidy navigation, consistent UI patterns, and flows that work for real-world workloads.",
    href: "/projects/shuttle",
    // zasad samo Page + placeholder hero (bez pravog URL-a)
    Page: ProjectPageShuttle,
    // kad dodaš pravi video:
    // hero: {
    //   type: "video",
    //   src: "https://www.shuttle.dev/images/blog/new-console/new-console-main.mp4",
    // },
  },

  {
    key: "mixlodge-brand",
    label: "MixLodge",
    title: "Brand & MVP for a studio booking platform.",
    summary:
      "Simple flows for musicians, robust controls for studios – inside a calm dark UI.",
    href: "/projects/mixlodge",
    Page: ProjectPageMixlodge,
  },

  {
    key: "portfolio",
    label: "Portfolio",
    title: "Figma to Prod: How I built this",
    summary: "How I built this site.",
    href: "/contact",
    Page: ProjectPagePortfolio,
  },
];
