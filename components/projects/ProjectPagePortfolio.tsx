// components/projects/ProjectPagePortfolio.tsx
"use client";

import * as React from "react";

export function ProjectPagePortfolio() {
  return (
    // full-width, text centered in 640px column
    <article className="w-full stack-5xl">
      {/* 0. PAGE TITLE BLOCK */}
      <section className="stack-lg">
        <div className="text-column stack-lg">
          <h1 className="type-h3">
            Portfolio Rebuild — learning AI-assisted workflows through a custom system
          </h1>

          <div className="flex items-center gap-4">
            <p className="type-body-sm">2025</p>
          </div>
        </div>
      </section>

      {/* TL;DR */}
      <section className="stack-md">
        <div 
          className="text-column stack-md rounded-[var(--radius-md)]"
          style={{
            backgroundColor: "var(--color-tldr-bg, var(--color-bg-muted))",
            padding: "12px",
          }}
        >
          <h3 className="type-label text-color-text-primary">TL;DR</h3>
          <p className="type-body-sm leading-loose tracking-normal">
            I designed and shipped my portfolio as a fully custom system, using visual design and AI-assisted workflows to translate designs into working code. The project started as a learning exercise in AI-driven execution and gradually evolved into a real, extensible portfolio.
          </p>
        </div>
      </section>

      {/* 1. CONTEXT */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">Context</h3>
          <p className="type-body">
            The initial goal was simple: build a custom portfolio without templates. But there was a second, equally important motivation — to learn how AI-assisted workflows could realistically support turning designs into working interfaces.
          </p>
          <p className="type-body">
            Rather than treating AI as a shortcut, I treated the portfolio as a low-risk environment to understand where AI accelerates execution, where it breaks down, and what kind of direction and correction it actually needs.
          </p>
          <p className="type-body">
            What started as experimentation gradually turned into a real system.
          </p>
        </div>
      </section>

      {/* 2. VISUAL-FIRST DESIGN */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">Visual-first design</h3>
          <p className="type-body">
            I began in Figma, designing layouts directly as a visual system rather than isolated pages. I focused on hierarchy, density, pacing, and how long-form case studies should read — aiming for layouts that felt coherent, readable, and scalable.
          </p>
          <p className="type-body">
            Once the layouts felt right, the goal became clear: could I reliably translate this visual intent into real, working UI using AI-assisted tooling, without losing quality or control?
          </p>
        </div>
      </section>

      {/* 3. LEARNING THROUGH IMPLEMENTATION */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">Learning through implementation</h3>
          <p className="type-body">
            Early on, this looked very informal — long conversations with AI, quick experiments in CodeSandbox, and testing small ideas in isolation. That phase helped surface limitations quickly: context loss, fragile state, and difficulty scaling beyond small experiments.
          </p>
          <p className="type-body">
            At that point, the workflow matured into something more realistic:
          </p>
          <p className="type-body font-mono text-color-text-secondary">
            design → Cursor agents → GitHub → Vercel
          </p>
          <p className="type-body">
            Moving into a proper repo and deployment flow made the work less playful, but far more useful. It exposed real concerns — component boundaries, state management, animation timing, refactors — and forced the system to hold up under change.
          </p>
        </div>
      </section>

      {/* 4. ORCHESTRATION OVER AUTHORSHIP */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">Orchestration over authorship</h3>
          <p className="type-body">
            Most of the raw output — component scaffolding, animation logic, layout code, and copy drafts — was AI-generated. I wasn&apos;t hand-authoring code or text line by line.
          </p>
          <p className="type-body">
            My role was orchestration:
          </p>
          <ul className="list-disc pl-5 stack-xs type-body">
            <li>translating visual intent into precise direction</li>
            <li>deciding what belonged and what didn&apos;t</li>
            <li>correcting abstractions when they broke down</li>
            <li>refactoring structures so they could evolve</li>
          </ul>
          <p className="type-body">
            Responsibility for coherence and quality stayed human, even when execution was accelerated by tools.
          </p>
        </div>
      </section>

      {/* 5. WHY THE "EXTRA" WORK EXISTED */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">Why the &quot;extra&quot; work existed</h3>
          <p className="type-body">
            Custom interactions — like the plant-watering button with state-driven growth animation, testimonial typing effects that adapt for mobile, and a theme toggle that transforms from floating button to footer pill — weren&apos;t added for polish alone. They were deliberate stress tests.
          </p>
          <p className="type-body">
            Each one forced me to:
          </p>
          <ul className="list-disc pl-5 stack-xs type-body">
            <li>articulate motion and interaction intent clearly</li>
            <li>see where AI output degraded</li>
            <li>refactor brittle logic into something reusable</li>
            <li>learn what kinds of problems benefit from AI assistance and which don&apos;t</li>
          </ul>
          <p className="type-body">
            The refactoring work was as valuable as the initial builds. This is where the project crossed from &quot;learning exercise&quot; into a real system.
          </p>
        </div>
      </section>

      {/* 6. A SMALL BUT RESILIENT SYSTEM */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">A small but resilient system</h3>
          <p className="type-body">
            To keep things from collapsing, I defined a compact design language: tokens for color, type, spacing, radii, shared card patterns, and a restrained motion vocabulary.
          </p>
          <p className="type-body">
            This evolved into a theme switching system — warm and cool palettes propagated through CSS variables, with dynamic gradients and image filters that respond to the active theme. A self-documenting design system page displays tokens side-by-side for both themes.
          </p>
          <p className="type-body">
            The system stayed intentionally small. New elements were only introduced when existing patterns failed — keeping exploration bounded and the site coherent.
          </p>
        </div>
      </section>

      {/* 7. OUTCOME */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">Outcome</h3>
          <p className="type-body">
            The result is a portfolio that functions as a system, not a demo:
          </p>
          <ul className="list-disc pl-5 stack-xs type-body">
            <li>Custom layouts that support long-form case studies</li>
            <li>A theme system with warm/cool palettes and a self-documenting design system page</li>
            <li>Interactive elements: plant animation, testimonial typing, floating theme toggle</li>
            <li>A working contact form with real email delivery</li>
            <li>A realistic AI-assisted workflow from design to deployment</li>
            <li>A codebase that has survived refactors rather than avoiding them</li>
          </ul>
          <p className="type-body">
            It started as a way to learn how to turn designs into working interfaces with AI. It ended up as a portfolio I can extend, break, and rebuild — with a much clearer understanding of where AI meaningfully helps and where judgment still matters most.
          </p>
        </div>
      </section>

      {/* 8. BUILT WITH */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">Built with</h3>
          <p className="type-body">
            Design and layout in Figma.
          </p>
          <p className="type-body">
            Implementation via React, Next.js, Tailwind, and Framer Motion.
          </p>
          <p className="type-body">
            AI-assisted workflows using Cursor agents, GitHub, and Vercel.
          </p>
        </div>
      </section>
    </article>
  );
}
