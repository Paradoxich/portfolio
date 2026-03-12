import * as React from "react";
import Link from "next/link";
import type { SectionData } from "../CaseStudyLayout";

export const portfolioMeta = {
  title: "Designing and building this portfolio as a real product",
  subtitle: "",
  meta: "2025",
  tldrItems: [
    "Designed and implemented a custom portfolio as a structured system rather than a static site.",
    "I wanted to understand how to integrate AI tools into a real design-to-code workflow without losing control over structure and quality.",
    "Built a repository-based AI workflow to maintain control over design intent, code quality, and long-term extensibility.",
  ],
};

export const portfolioContext: SectionData = {
  heading: "Context",
  blocks: [
    {
      type: "p",
      text: "I wanted a custom portfolio built from scratch, without templates. At the same time, I wanted to understand how AI-assisted workflows actually behave when turning design intent into working interfaces.",
    },
    {
      type: "p",
      text: "Instead of treating AI as a shortcut, I used the portfolio as a playground.",
    },
    {
      type: "p",
      text:
        "This case study covers the first version of my portfolio. A newer version of the site has since been rebuilt with a different architecture and design system, and I’m currently writing an updated case study about that process.",
    },
  ],
};

export const portfolioStarting: SectionData = {
  heading: "Starting with design",
  blocks: [
    {
      type: "p",
      text: "I began in Figma and designed the portfolio first, without worrying about implementation. I focused on layout, hierarchy, pacing, and how long-form case studies should read.",
    },
    {
      type: "img",
      src: "/case-studies/portfolio-figma.png",
      alt: "Figma design",
      aspect: "16/8",
      priority: true,
    },
    {
      type: "p",
      text: (
        <>
          From the start, I defined a small design language and a{" "}
          <Link
            href="/design-system"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-color-text-primary hover:text-color-text-secondary transition-colors"
          >
            design system page
          </Link>{" "}
          so both the site and the agents had a shared point of reference.
        </>
      ),
    },
  ],
};

export const portfolioEarlyExperiments: SectionData = {
  heading: "Early experiments with AI",
  blocks: [
    {
      type: "p",
      text: "At first, I took the most obvious route and experimented directly through conversational AI. The idea was simple: explain my intent, let the AI generate the code, and preview it quickly in CodeSandbox.",
    },
    {
      type: "p",
      text: "Turns out those quick experiments were not so quick after all. Context was easy to lose, changes broke earlier logic, and a lot of time went into re-explaining intent and fixing things that had already worked.",
    },
  ],
};

export const portfolioRealWorkflow: SectionData = {
  heading: "Moving to a real workflow",
  blocks: [
    {
      type: "p",
      text: "Switching to a proper setup changed the process completely.",
    },
    {
      type: "p",
      text: "Using Cursor with a GitHub repository and Vercel introduced structure. Agents had file-level context. Changes were scoped. Pull requests made iteration safer. Refactors became possible instead of risky.",
    },
    {
      type: "img",
      src: "/case-studies/portfolio-vercel.png",
      alt: "Vercel deployment",
      aspect: "16/7",
      priority: true,
    },
    {
      type: "p",
      text: "This was the point where the work stopped feeling fragile and started feeling maintainable.",
    },
  ],
};

export const portfolioAiInPractice: SectionData = {
  heading: "Working with AI in practice",
  blocks: [
    {
      type: "p",
      text: "AI still generated much of the raw output, but the way I worked with it changed. Instead of long conversations, I worked directly with files, diffs, and focused edits.",
    },
    {
      type: "p",
      text: "I became more deliberate about where AI helped and where it was faster to make changes manually. This balance mattered, especially when working on custom interactions, where iteration speed and token usage become real constraints.",
    },
  ],
};

export const portfolioSystem: SectionData = {
  heading: "A system that could grow",
  blocks: [
    {
      type: "p",
      text: "Because the design language and system page existed from the start, changes could build on what was already there.",
    },
    {
      type: "p",
      text: "Theming, custom components for case studies, and layout refinements could be added without rewriting large parts of the site. Design and implementation stayed aligned as the project evolved.",
    },
    {
      type: "img",
      src: "/case-studies/portfolio-system.png",
      alt: "Theming change",
      aspect: "16/10.7",
      priority: true,
    },
  ],
};

export const portfolioHeroImage: SectionData = {
  fullWidth: true,
  blocks: [
    {
      type: "img",
      src: "/case-studies/portfolio-hero.png",
      alt: "Overview of portfolio layout highlighting key sections.",
      aspect: "16/9",
      priority: true,
    },
  ],
};

export const portfolioOutcome: SectionData = {
  heading: "Outcome",
  blocks: [
    {
      type: "p",
      text: "The result is a portfolio that behaves like a real system rather than a static showcase.",
    },
    {
      type: "p",
      text: "More importantly, it gave me a clearer sense of what it actually takes to work with AI tools without losing control along the way.",
    },
  ],
};

export const portfolioBuiltWith: SectionData = {
  heading: "Built with",
  blocks: [
    { type: "p", text: "Design and layout in Figma" },
    {
      type: "p",
      text: "Implementation using React, Next.js, Tailwind, and Framer Motion",
    },
    {
      type: "p",
      text: "AI-assisted workflows using Cursor, GitHub, and Vercel",
    },
  ],
};
