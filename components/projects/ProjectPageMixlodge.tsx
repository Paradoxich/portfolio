// components/projects/ProjectPageMixlodge.tsx
"use client";

import * as React from "react";
import Image from "next/image";

export function ProjectPageMixlodge() {
  return (
    // full-width, kao Shuttle
    <article className="w-full stack-5xl">
      {/* 0. PAGE TITLE BLOK */}
      <section className="stack-lg">
        <div className="text-column stack-lg">
          <h1 className="type-h3">
            MixLodge: MVP for a studio booking platform{" "}
            <span className="text-color-text-secondary font-normal">
              that connects musicians, studios, and remote producers.
            </span>
          </h1>

          <div className="flex items-center gap-4">
            <p className="type-body-sm">2025 • Not yet launched</p>
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
          Structured a loosely defined product by mapping requirements into clear workflows and a single end-to-end system.
          </p>
        </div>
      </section>

      {/* 1. CONTEXT */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">Context</h3>
          <p className="type-body">
            MixLodge started as an idea for &quot;a platform for musicians and producers.&quot; In practice, that meant a broad set of loosely defined features, minimal prioritization, and many open questions. There was no existing product structure to build from, and the first task was figuring out what the platform needed to be in order to work.
          </p>
          
        </div>
      </section>

      {/* 2. DISCOVERY & FRAMING */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">Discovery &amp; framing</h3>

          <p className="type-body">
            Before designing UI, I ran a short discovery phase to clarify constraints, identify gaps, and map dependencies between different parts of the product. The goal wasn&apos;t to lock down every decision, but to establish a clear frame that would support design and development without overcommitting too early.
          </p>

          {/* Discovery flow */}
          <section className="stack-md pt-4 pb-4">
            <div
              className="
                relative
                w-full
                aspect-[16/9]
                overflow-hidden
                rounded-surface
                border border-color-border-secondary
                bg-color-bg-muted
              "
            >
              <Image
                src="/case-studies/ml-disovery.png"
                alt="The discovery."
                fill
                className="object-cover"
                priority
              />
            </div>
          </section>

          <p className="type-body">
            One decision shaped the rest of the work: MixLodge wasn&apos;t a single workflow. It needed to support two distinct modes of use:
          </p>
          <ul className="list-disc pl-5 stack-xs type-body">
            <li>musicians searching for and booking studios</li>
            <li>producers collaborating remotely once a booking happened</li>
          </ul>
          <p className="type-body">
            These workflows had different needs and priorities, but they had to coexist within one system without fragmenting the product.
          </p>
        </div>
      </section>

      {/* 3. DESIGNING TOWARD A WORKABLE MVP */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">Designing toward a workable MVP</h3>
          <p className="type-body">
          Instead of attempting a full marketplace upfront, the MVP was shaped around a small set of structural decisions:
          </p>
          <ul className="list-disc pl-5 stack-xs type-body">
            <li>clear roles and access patterns</li>
            <li>a focused discovery and booking flow</li>
            <li>a concrete answer to what happens after a booking</li>
          </ul>
          <p className="type-body">
            The product was intentionally scoped around a single loop: discovery → booking → collaboration. Anything that didn&apos;t support that loop was deprioritized or left out. The work was structured in phases, each resolving a specific part of the loop and ending with dev-ready designs, defined states, and explicit interaction logic.
          </p>
          {/* Figma file */}
      <section className="stack-md pt-4 pb-4">
        <div
          className="
            relative
            w-full
            aspect-[16/9]
            overflow-hidden
            rounded-surface
            border border-color-border-secondary
            bg-color-bg-muted
          "
        >
          <Image
            src="/case-studies/ml-figma.png"
            alt="Figma file used to structure the product."
            fill
            className="object-cover"
            priority
          />
        </div>

      </section>

          <p className="type-body">
            Design artifacts carried intent directly. Flows, edge cases, and role-specific behavior were resolved in the UI itself, allowing the team to discuss concrete product behavior rather than abstract feature lists.
          </p>
        </div>
      </section>

      
      {/* 4. PRODUCT CLARITY THROUGH DESIGN */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">Product clarity through design</h3>
          <p className="type-body">
            As the core workflows were designed in detail, it became clear that booking alone wasn&apos;t enough. Once a session was booked, users needed a shared place to actually work together.
          </p>
          <p className="type-body">
            Instead of introducing a separate &quot;project&quot; area, collaboration was anchored in the inbox. Each booking creates a dedicated conversation that becomes the workspace for everything that follows — chat, file sharing, tasks, and ongoing updates. 
          </p>
          <p className="type-body">
            This wasn&apos;t treated as an add-on feature. It emerged naturally from designing real scenarios end to end. Working through concrete flows — from first contact to final delivery — clarified what the product needed in order to function as a complete system.
          </p>
        </div>
      </section>

      {/* Inbox */}
      <section className="stack-md pt-4 pb-4">
        <div
          className="
            relative
            w-full
            aspect-[16/10.5]
            overflow-hidden
            rounded-surface
            border border-color-border-secondary
            bg-color-bg-muted
          "
        >
          <Image
            src="/case-studies/ml-inbox.png"
            alt="Inbox view of the product."
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="text-column">
          <p className="type-body-sm">
            Collaboration workspace.
          </p>
        </div>
      </section>

      {/* 5. DESIGN SYSTEM & VISUAL DIRECTION */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">Design system &amp; visual direction</h3>
          <p className="type-body">
            Given the scope and constraints, the focus wasn&apos;t on building a comprehensive component library. Instead, the goal was to establish a small, resilient design language that could support the product without slowing development:
          </p>
          <ul className="list-disc pl-5 stack-xs type-body">
            <li>a minimal token set for color, type, spacing, and radii</li>
            <li>a single flexible card pattern reused across most surfaces</li>
            <li>consistent interaction patterns across both roles</li>
          </ul>
          <p className="type-body">
            The landing page was developed in parallel and used as the visual anchor. Content, structure, and visual direction were defined together, then carried into the product to keep everything aligned.
          </p>
        </div>
      </section>

      {/* Design system */}
      <section className="stack-md pt-4 pb-4">
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
            src="/case-studies/ml-design.png"
            alt="A coherent design system"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="text-column">
          <p className="type-body-sm">
            The design language was kept minimal and consistent across the product.
          </p>
        </div>
      </section>

      {/* 6. OUTCOME */}
      <section className="stack-md pb-10">
        <div className="text-column stack-md">
          <h3 className="type-h4">Outcome</h3>
          <p className="type-body">
            The result was a clearly defined MVP ready for development:
          </p>
          <ul className="list-disc pl-5 stack-xs type-body">
            <li>a responsive platform covering discovery, booking, payments, and collaboration</li>
            <li>explicit user flows and interaction logic across all core scenarios</li>
            <li>a stable visual identity and lightweight system the team could extend</li>
          </ul>
          <p className="type-body">
            The work turned a loosely framed idea into a product structure the team could build upon.
          </p>
        </div>
      </section>
    </article>
  );
}
