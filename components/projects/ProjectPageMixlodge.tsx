// components/projects/ProjectPageMixlodge.tsx
"use client";

import * as React from "react";

export function ProjectPageMixlodge() {
  return (
    // full-width, kao Shuttle
    <article className="w-full stack-5xl">
      {/* 0. PAGE TITLE BLOK */}
      <section className="stack-lg">
        <div className="text-column stack-lg">
          <h1 className="type-h3">
            MixLodge: Brand &amp; MVP for a studio booking platform{" "}
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
            I designed the brand and MVP for MixLodge, using design to give structure to a loosely defined product. With no PM, vague requirements, and limited resources, the work focused on making the system legible enough for the team to build and iterate on.
          </p>
        </div>
      </section>

      {/* 1. CONTEXT */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">Context</h3>
          <p className="type-body">
            MixLodge started as an idea for "a platform for musicians and producers." In practice, that meant a broad set of loosely defined features, minimal prioritization, and many open questions. There was no product manager and no existing structure to build from.
          </p>
          <p className="type-body">
            From the outset, the challenge wasn&apos;t visual polish — it was turning an unstructured concept into something coherent and buildable.
          </p>
        </div>
      </section>

      {/* 2. DISCOVERY & FRAMING */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">Discovery &amp; framing</h3>
          <p className="type-body">
            Before designing UI, I ran a short discovery phase to identify constraints, gaps, and dependencies. The goal wasn&apos;t to finalize everything, but to create enough structure to move forward without locking in premature decisions.
          </p>
          <p className="type-body">
            One insight shaped the rest of the work: MixLodge wasn&apos;t a single workflow. It needed to support two distinct modes of use:
          </p>
          <ul className="list-disc pl-5 stack-xs type-body">
            <li>Musicians booking studios</li>
            <li>Producers collaborating remotely on projects</li>
          </ul>
          <p className="type-body">
            These workflows had very different needs, but had to coexist within one system without fragmenting the product.
          </p>
        </div>
      </section>

      {/* 3. DESIGNING TOWARD A WORKABLE MVP */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">Designing toward a workable MVP</h3>
          <p className="type-body">
            To manage scope and reduce risk, the work was structured in phases, each ending with dev-ready designs and clear interaction logic. Instead of attempting a complete marketplace upfront, the focus was on establishing:
          </p>
          <ul className="list-disc pl-5 stack-xs type-body">
            <li>Clear roles and access patterns</li>
            <li>Core booking and discovery flows</li>
            <li>A minimal collaboration model that completed the product loop</li>
          </ul>
          <p className="type-body">
            Because there was no PM layer, design artifacts needed to carry intent directly — flows, states, and edge cases were made explicit in the UI rather than deferred to documentation.
          </p>
        </div>
      </section>

      {/* 4. PRODUCT CLARITY THROUGH DESIGN */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">Product clarity through design</h3>
          <p className="type-body">
            Several important features only emerged once the system was mapped. In particular, a lightweight remote collaboration space for producers (chat, files, tasks, updates) became necessary for the platform to make sense as a whole.
          </p>
          <p className="type-body">
            Rather than treating these as feature additions, they were framed as consequences of the underlying model. Design was used to test assumptions, surface inconsistencies, and converge on a product shape the team could reason about.
          </p>
        </div>
      </section>

      {/* 5. DESIGN SYSTEM & VISUAL DIRECTION */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">Design system &amp; visual direction</h3>
          <p className="type-body">
            Given time and budget constraints, I focused on a small, resilient design language rather than a full component library:
          </p>
          <ul className="list-disc pl-5 stack-xs type-body">
            <li>A minimal token set for color, type, spacing, and radii</li>
            <li>A single flexible card pattern reused across most surfaces</li>
            <li>Consistent interaction patterns across both roles</li>
          </ul>
          <p className="type-body">
            The landing page was developed in parallel as the visual anchor for the product. Content, structure, and visual direction were defined together, then carried through the application to keep the system coherent.
          </p>
        </div>
      </section>

      {/* 6. OUTCOME */}
      <section className="stack-md pb-10">
        <div className="text-column stack-md">
          <h3 className="type-h4">Outcome</h3>
          <p className="type-body">
            The result was a clearly structured MVP ready for development:
          </p>
          <ul className="list-disc pl-5 stack-xs type-body">
            <li>A responsive platform covering studio discovery, booking, payments, and collaboration</li>
            <li>Defined user flows and interaction logic across all major surfaces</li>
            <li>A stable visual identity and lightweight system the team could extend</li>
          </ul>
          <p className="type-body">
            The work turned a loosely framed idea into a product shape that could be built, discussed, and iterated on — without overengineering or premature complexity.
          </p>
        </div>
      </section>
    </article>
  );
}
