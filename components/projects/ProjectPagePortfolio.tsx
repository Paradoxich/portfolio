// components/projects/ProjectPagePortfolio.tsx
"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { CaseStudyLayout } from "./CaseStudyLayout";

const PORTFOLIO_TLDR = [
  "Designed and implemented a custom portfolio as a structured system rather than a static site.",
  "I wanted to understand how to integrate AI tools into a real design-to-code workflow without losing control over structure and quality.",
  "Built a repository-based AI workflow to maintain control over design intent, code quality, and long-term extensibility.",
];

export function ProjectPagePortfolio() {
  return (
    <CaseStudyLayout
      title="Portfolio"
      subtitle="Designing and building this portfolio as a real product."
      meta="2025"
      tldrItems={PORTFOLIO_TLDR}
    >
      {/* 1. CONTEXT */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">Context</h3>
          <p className="type-body">
            I wanted a custom portfolio built from scratch, without templates. At the same time, I wanted to understand how AI-assisted workflows actually behave when turning design intent into working interfaces.
          </p>
          <p className="type-body">
            Instead of treating AI as a shortcut, I used the portfolio as a playground.
          </p>
        </div>
      </section>

      {/* 2. STARTING WITH DESIGN */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">Starting with design</h3>
          <p className="type-body">
            I began in Figma and designed the portfolio first, without worrying about implementation. I focused on layout, hierarchy, pacing, and how long-form case studies should read.
          </p>
           {/* Figma */}
      <section className="stack-md pt-4 pb-4">
        <div className="text-column">
          <div
            className="
              relative
              w-full
              aspect-[16/8]
              overflow-hidden
              rounded-surface
              border border-color-border-secondary
              bg-color-bg-muted
            "
          >
            <Image
              src="/case-studies/portfolio-figma.png"
              alt="Figma design"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>
          <p className="type-body">
            From the start, I defined a small design language and a <Link href="/design-system" target="_blank" rel="noopener noreferrer" className="underline text-color-text-primary hover:text-color-text-secondary transition-colors">design system page</Link> so both the site and the agents had a shared point of reference.
          </p>
        </div>
      </section>

      {/* 3. EARLY EXPERIMENTS WITH AI */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">Early experiments with AI</h3>
          <p className="type-body">
          At first, I took the most obvious route and experimented directly through conversational AI. The idea was simple: explain my intent, let the AI generate the code, and preview it quickly in CodeSandbox.
          </p>
          <p className="type-body">
            Turns out those quick experiments were not so quick after all. Context was easy to lose, changes broke earlier logic, and a lot of time went into re-explaining intent and fixing things that had already worked.
          </p>
        </div>
      </section>

      {/* 4. MOVING TO A REAL WORKFLOW */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">Moving to a real workflow</h3>
          <p className="type-body">
            Switching to a proper setup changed the process completely.
          </p>
          <p className="type-body">
            Using Cursor with a GitHub repository and Vercel introduced structure. Agents had file-level context. Changes were scoped. Pull requests made iteration safer. Refactors became possible instead of risky.
          </p>
           {/* Vercel */}
      <section className="stack-md pt-4 pb-4">
        <div className="text-column">
          <div
            className="
              relative
              w-full
              aspect-[16/7]
              overflow-hidden
              rounded-surface
              border border-color-border-secondary
              bg-color-bg-muted
            "
          >
            <Image
              src="/case-studies/portfolio-vercel.png"
              alt="Vercel deployment"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>
          <p className="type-body">
            This was the point where the work stopped feeling fragile and started feeling maintainable.
          </p>
        </div>
      </section>

      {/* 5. WORKING WITH AI IN PRACTICE */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">Working with AI in practice</h3>
          <p className="type-body">
            AI still generated much of the raw output, but the way I worked with it changed. Instead of long conversations, I worked directly with files, diffs, and focused edits.
          </p>
          <p className="type-body">
          I became more deliberate about where AI helped and where it was faster to make changes manually. This balance mattered, especially when working on custom interactions, where iteration speed and token usage become real constraints.
          </p>
        </div>
      </section>

      {/* 6. A SYSTEM THAT COULD GROW */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">A system that could grow</h3>
          <p className="type-body">
            Because the design language and system page existed from the start, changes could build on what was already there.
          </p>
          <p className="type-body">
            Theming, custom components for case studies, and layout refinements could be added without rewriting large parts of the site. Design and implementation stayed aligned as the project evolved.
          </p>
           {/* System */}
      <section className="stack-md pt-4 pb-4">
        <div className="text-column">
          <div
            className="
              relative
              w-full
              aspect-[16/10.7]
              overflow-hidden
              rounded-surface
              border border-color-border-secondary
              bg-color-bg-muted
            "
          >
            <Image
              src="/case-studies/portfolio-system.png"
              alt="Theming change"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>
        </div>
      </section>

      {/* 7. OUTCOME */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">Outcome</h3>
          <p className="type-body">
            The result is a portfolio that behaves like a real system rather than a static showcase.
          </p>
          <p className="type-body">
            More importantly, it gave me a clearer sense of what it actually takes to work with AI tools without losing control along the way.
          </p>
        </div>
      </section>

      {/* 8. BUILT WITH */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">Built with</h3>
          <p className="type-body">
            Design and layout in Figma
          </p>
          <p className="type-body">
            Implementation using React, Next.js, Tailwind, and Framer Motion
          </p>
          <p className="type-body">
            AI-assisted workflows using Cursor, GitHub, and Vercel
          </p>
        </div>
      </section>
    </CaseStudyLayout>
  );
}
