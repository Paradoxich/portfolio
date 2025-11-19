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
            Portfolio Rebuild — Designing, Coding, and Chaos-Optimizing My Own
            Site
          </h1>

          <div className="flex items-center gap-4">
            <p className="type-body-sm">2025</p>
          </div>
        </div>
      </section>

      {/* 1. INTRO */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <p className="type-body">
            This portfolio started with a simple decision that immediately made
            my life harder: I wanted to design and build the entire thing
            myself. No UI kits, no templates, no cloneable Notion-style case
            studies — just my own systems, my own layouts, my own code, and a
            slightly unhinged desire to understand the whole stack end-to-end.
          </p>
          <p className="type-body">
            The goal wasn’t only to showcase work. It was to build a space that
            genuinely reflects how I think, how I design, and how I
            problem-solve — including the messy parts, the fun parts, the
            overly-ambitious parts, and the “why is this animation fighting me
            at 2 AM” parts.
          </p>
          <p className="type-body">
            And so began a long, chaotic, very nerdy journey where I acted as
            designer, engineer, UX strategist, product thinker, QA tester, and —
            realistically — a person in a multi-day argument with Tailwind
            spacing tokens. My co-pilot was ChatGPT, who was equal parts
            supportive and responsible for at least three mental breakdowns per
            week. A perfect collaboration.
          </p>
        </div>
      </section>

      {/* 2. THE BEGINNING */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">
            The Beginning — designing the structure before the visuals
          </h3>
          <p className="type-body">
            I didn’t start by choosing fonts or polishing the homepage. I
            started by asking what the portfolio needed to be.
          </p>
          <p className="type-body">
            What does a good case study look like? How do I want to tell
            stories? What kind of system will help these stories scale? What’s
            the balance between aesthetics and readability?
          </p>
          <p className="type-body">
            This wasn’t auto-pilot design work. It was product thinking. I was
            essentially building a small CMS for myself — except I was designing
            the CMS, writing the content, and building the frontend all at once.
          </p>
        </div>
      </section>

      {/* 3. DESIGN SYSTEM */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">
            The Design System — small but surprisingly serious
          </h3>
          <p className="type-body">
            I knew I needed a system or everything would fall apart halfway
            through. So I created a tight little design language: color tokens,
            type scales, spacing rules, radii, card styles, surface treatments,
            shadows, and a very specific motion curve that felt like “calm
            confidence” instead of “startup UI trying too hard.”
          </p>
          <p className="type-body">
            It wasn’t a giant design system. It was more like a sharp toolkit —
            just enough structure to keep everything coherent, but small enough
            to evolve as I built.
          </p>
          <p className="type-body">
            Creating my own system forced me to practice what I preach:
            consistency, clarity, constraints. The portfolio ended up cleaner
            because of it — and every new component snaps into place instead of
            improvising a new style each time.
          </p>
        </div>
      </section>

      {/* 4. BUILDING WITH AI */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">
            Building with AI — the weirdly productive partnership
          </h3>
          <p className="type-body">
            Technically, this site is built with React, Next.js, Tailwind,
            Framer Motion, and a lot of small custom components. But the real
            twist was how I used AI as a co-builder.
          </p>
          <p className="type-body">
            Some days I’d write the logic myself. Some days ChatGPT would
            produce the skeleton and I’d refine it. Some days we’d ping-pong
            ideas: I’d describe motion, spacing, or layout behavior and it would
            generate a first draft; I’d break it; it would unbreak it; I’d break
            it again; eventually we’d land somewhere great.
          </p>
          <p className="type-body">
            It wasn’t “AI taking over the work.” It was collaborative — like
            having an infinitely patient senior developer who doesn’t mind
            explaining why my div refuses to center itself.
          </p>
          <p className="type-body">
            This hybrid workflow made the build faster but also more
            intentional. I learned more about implementation than I expected,
            especially about the subtle parts: scroll logic, layering, animation
            timing, edge states, responsive constraints. All the invisible glue
            that makes an interface feel designed instead of assembled.
          </p>
        </div>
      </section>

      {/* 5. FUN CHAOS */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">
            The Fun Chaos — things I built just because I could
          </h3>
          <p className="type-body">
            A normal portfolio would’ve stopped at “nice typography + grid
            layouts.” But I didn’t want normal.
          </p>
          <p className="type-body">
            That’s how I ended up spending three days on a tiny plant growth
            animation nobody asked for, but everyone will see. And how the
            design-system page somehow became this mini-library of rules and
            components. And how the testimonial section — which should be the
            simplest component on the site — became a fully animated,
            multi-state slider with more logic than some products I’ve worked
            on.
          </p>
          <p className="type-body">
            I built full custom project layouts because I wanted to tell
            long-form stories. I built micro-interactions everywhere because
            details matter. I built weirdly satisfying transitions because
            motion isn’t decoration — it’s narrative pacing.
          </p>
          <p className="type-body">
            Was any of this necessary? Absolutely not. Did it make the portfolio
            feel like mine? Yes. Completely.
          </p>
        </div>
      </section>

      {/* 6. WRITING THE STORIES */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">
            Writing the stories — the hidden boss battle
          </h3>
          <p className="type-body">
            Designing things is easy. Explaining them is hard.
          </p>
          <p className="type-body">
            I didn’t want generic copy like “streamlined processes” and “modern
            UI foundations.” I wanted real stories: why I made certain
            decisions, what changed during the process, what I learned, what
            failed, and what actually mattered.
          </p>
          <p className="type-body">
            The Shuttle and MixLodge case studies became proof that this style
            works — honest, conversational, detailed in a product way, but still
            human and readable.
          </p>
          <p className="type-body">
            This site became a writing exercise as much as a design one. It
            forced me to articulate how I think, not just show what I make.
          </p>
        </div>
      </section>

      {/* 7. OUTCOME / PLAYGROUND */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">
            The Result — not a portfolio, a playground
          </h3>
          <p className="type-body">
            In the end, yes — this is a portfolio. But somewhere along the way,
            it turned into a design playground. A fully custom system I can
            extend, tweak, break, and rebuild however I want.
          </p>
          <p className="type-body">It lets me:</p>
          <ul className="list-disc pl-5 stack-xs type-body">
            <li>tell stories with clarity,</li>
            <li>show process instead of just outcomes,</li>
            <li>experiment with visuals and motion,</li>
            <li>add projects without the whole system collapsing,</li>
            <li>
              design the way I actually design — through exploration, reasoning,
              and a little chaos.
            </li>
          </ul>
          <p className="type-body">
            It reflects me in a way templates never could.
          </p>
          <p className="type-body">
            And maybe that’s the real win: I didn’t just build a site. I built a
            space that finally feels like my work — the real version, not the
            polished wrap-up.
          </p>
          <p className="type-body">
            A weird, technical, experimental, slightly over-engineered version.
            But exactly the version I wanted.
          </p>
        </div>
      </section>
    </article>
  );
}
