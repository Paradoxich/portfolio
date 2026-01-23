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
            <p className="type-body-sm">2024 • Not yet launched</p>

            
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
            Designed brand identity and MVP for a studio booking platform, leading product definition through design when requirements were vague and resources limited.
          </p>
        </div>
      </section>

      {/* 1. CONTEXT */}
      <section className="stack-md">
        <div className="text-column stack-md">
         
          <p className="type-body">
            MixLodge approached me with a simple ask: “We want a platform for
            musicians and producers.” What they actually had was a vague list of
            features, a limited budget, and no product structure. Almost every
            item in the requirements document ended with “TBD”. No flows, no
            hierarchy, no priorities. Just enthusiasm and a lot of unknowns.
          </p>
          <p className="type-body">
            From the first discovery call, it was clear this wasn&apos;t just UI
            work — this was product definition disguised as an MVP. They needed
            booking, profiles, payments, remote collaboration, maps, listings,
            reviews, audio uploads, settings… and eventually a marketplace. But
            there was no product manager, no designers before me, and very
            little feedback during the process. So design had to lead the
            product.
          </p>
        </div>
      </section>

      {/* 2. EARLY DISCOVERY */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">
            Early discovery
          </h3>
          <p className="type-body">
            Before drawing anything, I ran a short discovery phase to turn “TBD”
            into something usable. We confirmed what we could, identified holes,
            and mapped out the basic structure of the system. That created just
            enough clarity to move forward without overcommitting to the wrong
            thing.
          </p>
          <p className="type-body">
            The discovery also revealed that we weren&apos;t building one
            product — we were building two:
          </p>
          <ul className="list-disc pl-5 stack-xs type-body">
            <li>A studio booking platform for musicians</li>
            <li>A remote project workspace for producers</li>
          </ul>
          <p className="type-body">
            These workflows were entirely different, but needed to feel like one
            cohesive product.
          </p>
        </div>
      </section>

      {/* 3. PHASED APPROACH */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">
            Phased approach
          </h3>
          <p className="type-body">
            To keep things aligned (and avoid overwhelming the founders), I
            broke the work into clear phases. Each phase ended with dev-ready
            UI, prototypes, responsive breakpoints and export-ready assets —
            because there was no PM to explain or translate the designs.
          </p>

          <ul className="list-disc pl-5 stack-xs type-body">
            <li>
              <strong>Phase 1 – Discovery:</strong> Low-fidelity wireframes,
              functional scope, requirement mapping.
            </li>
            <li>
              <strong>Phase 2 – Landing page &amp; direction:</strong> Content
              and messaging, visual surveys, two design directions, final LP.
            </li>
            <li>
              <strong>Phase 3 – Log in / sign up:</strong> Dual-role auth,
              onboarding logic, states and errors.
            </li>
            <li>
              <strong>Phase 4 – Homepage:</strong> Search, filters, map + list
              layout, navigation structure.
            </li>
            <li>
              <strong>Phase 5 – Listing &amp; booking:</strong> Calendar logic,
              price modelling, payment flow, confirmations, reviews.
            </li>
            <li>
              <strong>Phase 6 – Profile &amp; settings:</strong> Role-based
              profiles, audio snippets, listing management, payment methods,
              user data.
            </li>
          </ul>
        </div>
      </section>

      {/* 4. DEFINING THE PRODUCT */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">
            Defining the product through design
          </h3>
          <p className="type-body">
            One of the early discoveries: several key features weren&apos;t
            mentioned in the original brief at all. The remote producer
            collaboration tool — chat, file sharing, tasks, project updates —
            only emerged once we mapped the system and realised it was necessary
            for the platform to make sense.
          </p>
          <p className="type-body">
            Many product decisions had to be made directly through design,
            because the founders were young, non-technical and often unsure of
            what “should” exist. I asked targeted questions before each phase,
            extracted the essentials, and filled in the rest based on UX
            patterns and their business goals.
          </p>
          <p className="type-body">
            It was a lot of thinking, reframing and teaching along the way —
            design acting as UX strategist, product manager and translator.
          </p>
        </div>
      </section>

      {/* 5. DESIGN SYSTEM WORK */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">
            Design system work
          </h3>
          <p className="type-body">
            There wasn&apos;t enough time or budget for a full component
            library, but the platform still needed structure. I created a small,
            resilient design language:
          </p>
          <ul className="list-disc pl-5 stack-xs type-body">
            <li>A clear token set for colors, spacing, type and radii</li>
            <li>
              One card style reused across listings, messages and detail views
            </li>
            <li>Consistent interaction patterns across both roles</li>
            <li>
              A warm, dark aesthetic that felt “music industry” without trying
              too hard
            </li>
          </ul>
          <p className="type-body">
            That avoided the usual startup trap of reinventing the same button
            and card twenty different ways. Even with limited scope, the
            mini-system kept everything coherent.
          </p>
        </div>
      </section>

      {/* 6. LANDING PAGE + VISUAL DIRECTION */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">
            Landing page &amp; visual direction
          </h3>
          <p className="type-body">
            Because nothing existed visually, I created all LP content,
            messaging and structure from scratch. I sent a visual style survey,
            used it to map their taste boundaries, then built two design
            directions. One was chosen, a small style guide was created, and the
            LP became the visual anchor for everything that followed.
          </p>
        </div>
      </section>

      {/* 7. BEHIND THE SCENES */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">
            Behind the scenes
          </h3>
          <p className="type-body">
            A lot of the work wasn&apos;t “just UI”. I wrote product logic with
            ChatGPT as a drafting partner, defined user flows, state logic, edge
            cases and interactions that never made it into the initial feature
            list.
          </p>
          <p className="type-body">
            I also created small 3D-style illustrations with generative tools to
            give the brand personality without blowing up scope.
          </p>
          <p className="type-body">
            This was one of those projects where the designer ends up being:
          </p>
          <ul className="list-disc pl-5 stack-xs type-body">
            <li>UX strategist</li>
            <li>Product manager</li>
            <li>Copywriter</li>
            <li>Design system lead</li>
            <li>The person asking “okay, but what happens if this fails?”</li>
          </ul>
        </div>
      </section>

      {/* 8. OUTCOME */}
      <section className="stack-md pb-10">
        <div className="text-column stack-md">
          <h3 className="type-h4">
            Outcome
          </h3>
          <p className="type-body">In the end, MixLodge received:</p>
          <ul className="list-disc pl-5 stack-xs type-body">
            <li>
              A full responsive platform for booking studios, hiring producers
              and collaborating remotely
            </li>
            <li>
              A clear design direction and a small but stable design system
            </li>
            <li>
              Defined user flows for search, booking, payments, project
              management and profiles
            </li>
            <li>A landing page with complete content and visual identity</li>
            <li>Dev-ready designs for every major feature in the MVP</li>
          </ul>
          <p className="type-body">
            All of this was built with a team that was ambitious, inexperienced,
            and genuinely fun to work with — even when requirements shifted
            mid-phase. It was challenging to estimate, full of surprises, and
            much bigger than originally expected, but ultimately a rewarding
            project that turned a vague idea into a working platform.
          </p>
        </div>
      </section>
    </article>
  );
}
