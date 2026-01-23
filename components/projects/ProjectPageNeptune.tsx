"use client";

import * as React from "react";
import Image from "next/image";

export function ProjectPageNeptune() {
  return (
    <article className="w-full stack-5xl">
      {/* 0. PAGE TITLE BLOCK */}
      <section className="stack-lg">
        <div className="text-column stack-lg">
          <h1 className="type-h3">
            Neptune: shaping the identity of an AI infra platform engineer
          </h1>

          <div className="flex items-center gap-4">
            <p className="type-body-sm">2025</p>

            <a
              href="https://www.neptune.dev"
              target="_blank"
              rel="noreferrer"
              className="h-8 px-4 rounded-full flex items-center justify-center gap-2 type-body-sm transition-colors link-pill"
              style={{
                backgroundColor: "var(--color-link-pill-bg, var(--color-bg-surface))",
                color: "var(--color-link-pill-text, var(--color-text-primary))",
              }}
            >
              neptune.dev
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24"
                style={{ flexShrink: 0 }}
              >
                <path fill="currentColor" d="m16.004 9.414l-8.607 8.607l-1.414-1.414L14.59 8H7.003V6h11v11h-2z"/>
              </svg>
            </a>
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
            I shaped Neptune's identity and landing page, then built an animated chat prototype to make an AI infra workflow understandable. The work turned an abstract idea into something the team could reason about, test, and build on.
          </p>
        </div>
      </section>

      {/* 1. CONTEXT */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">Context</h3>
          <p className="type-body">
            Neptune didn't arrive as a clear brief. It arrived as a vibe.
          </p>
          <p className="type-body">
            Half "AI platform engineer," half "agentic infra copilot," and a little bit "Shuttle's cousin who spent too much time around LLMs." The team knew the problem was real — the gap between AI-generated code and actual deployment.
          </p>
          <p className="type-body">
            Neptune kept changing shape — part CLI, part agent, sometimes both. I built a brand and landing page that could keep up.
          </p>
        </div>
      </section>

      {/* 2. USERS & DISCOVERY */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">
            AI-native users, not "traditional devs"
          </h3>
          <p className="type-body">
            Before we designed anything, we listened. Three key insights emerged:
          </p>
          <ul className="list-disc pl-5 stack-xs type-body">
            <li>
              Users already lived inside AI tools — Cursor, Copilot, Claude Projects, and agent workflows.
            </li>
            <li>
              They trusted AI to write code but hesitated to trust it with deployment. Infra felt spooky.
            </li>
            <li>
              They wanted an AI engineer with guardrails — power combined with clarity and automation.
            </li>
          </ul>
          <p className="type-body">
            Neptune's personality landed as calm, precise, and quietly smart — a deliberate contrast to hype-driven AI branding.
          </p>
        </div>
      </section>

      {/* 3. PRODUCT FUZZINESS */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">
            Making sense of a moving target
          </h3>
          <p className="type-body">
            As the team refined what Neptune should be, the real question wasn't "console or IDE?" — it was how much UI it needed at all.
          </p>
          <p className="type-body">
            Neptune is a hybrid: you install a CLI, but most interaction flows through natural language in your IDE agent. Some commands return simple output; others write new files directly into your project — generating the agent file, adding infra specs, wiring services.
          </p>
          <p className="type-body">
            My work had to support that ambiguity. I focused on brand positioning and landing page design that stayed coherent whether Neptune showed up as a light-touch agent, a richer console, or something between.
          </p>
        </div>
      </section>

      {/* 4. VISUAL DIRECTION */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">
            Making infra feel human
          </h3>
          <p className="type-body">
            The landing page became our first real artifact, because Neptune is hard to explain without drifting into sci-fi. We needed to talk about agentic workflows, infra wiring, and code-to-cloud automation without turning it into a space opera.
          </p>
          <p className="type-body">
            So the starting point wasn't visuals — it was a flexible layout we could use to test messaging, tone, and structure together. While the team refined the story, I explored visual directions inside that framework: different backdrops, glow levels, orbit patterns, and how much "AI energy" felt right before things tipped into chaos.
          </p>
          <p className="type-body">
            The final aesthetic hits the balance we wanted: dark but not dramatic, technical but not neon-matrix. Clean typography, measured spacing, subtle gradients, and small pulses of color that act like signals rather than decoration. Orbit graphics help communicate how Neptune connects things behind the scenes, while the restrained palette keeps the page calm and confident.
          </p>
          <p className="type-body">
            It's a visual language that makes complex infra feel surprisingly understandable — modern, trustworthy, and quietly powerful.
          </p>
        </div>
      </section>

      {/* 5. HERO GRAPHIC */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">
            When a hero graphic wasn't enough
          </h3>
          <p className="type-body">
            We had a great landing page layout, a strong brand direction, a confident tone — and absolutely no good way to explain how Neptune actually works.
          </p>
          <p className="type-body">
            The product manager and I kept circling the same hole: the workflow was real, but not finished. The agent existed, but only in fragments. We explored a few early graphics. They were okay, but they weren't telling the story. Nothing captured the feeling of:
          </p>
          <p className="type-body">
            "Describe what you want → Neptune takes it from here."
          </p>
          <p className="type-body">
            At the same time, I was knee-deep in building my portfolio with the help of LLMs. And a thought appeared:
          </p>
          <p className="type-body">
            If I can design and animate complex interactions for my portfolio… why can't I just build the Neptune workflow as a real animated prototype?
          </p>
        </div>
      </section>

      {/* 6. THE TURNING POINT */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">The turning point</h3>
          <p className="type-body">
            That question changed everything. Instead of creating another static graphic, I built a full animated chat sequence — one that showed what Neptune is capable of.
          </p>
          <p className="type-body">
            It typed. It planned. It generated commands, created config files, deployed projects, surfaced logs.
          </p>
          <p className="type-body">
            A believable code-to-cloud workflow, shown through a simple conversation.
          </p>
        </div>
      </section>

      {/* 7. A PROTOTYPE HIDING IN PLAIN SIGHT */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">A prototype hiding in plain sight</h3>
          <p className="type-body">
            The moment the team saw it, everything clicked. Neptune finally felt like an AI platform engineer — calm, precise, quietly doing work behind the scenes.
          </p>
          <p className="type-body">
            We realised we could actually test the workflow and shape how Neptune should work with it. The tone, pacing, states, approvals, decision points — we could test it all and see how the experience felt rather than imagining it abstractly.
          </p>
          <p className="type-body">
            The animation became a design tool. A product tool. A shared reference for how Neptune should think. It wasn't decoration anymore. It was shaping the actual product.
          </p>
          <p className="type-body">
            So a "project within the project" started.
          </p>
        </div>
      </section>

      {/* 8. WHERE THINGS GOT COMPLICATED */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">Where things got complicated</h3>
          <p className="type-body">
            Building the first version was exciting. Editing it afterwards… not so much. It worked — but every small change meant digging through long chains of events, timings, states, and transitions.
          </p>
          <p className="type-body">
            I wanted the team to be able to experiment with the workflow without touching the internals. If we wanted to test a new interaction pattern, a different message, or a different sequence, it shouldn't require rewriting half the animation.
          </p>
          <p className="type-body">
            So with Agent's help, I tore the structure apart and rebuilt it around a small scripting format. Nothing fancy — just a clean, human-readable way to say:
          </p>
          <p className="type-body">
            "At this point, show this message. Then show this block. Then simulate this action. Then continue."
          </p>
          <p className="type-body">
            The animation now reads the script and handles the details on its own. No one needs to think about timing logic, state transitions, or what message unlocks what. Sonnet even generated a guide for non-developers explaining how to write new scripts. Honestly, that part still makes me laugh.
          </p>
        </div>
      </section>

      {/* 9. OUTCOME */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">Outcome</h3>
          <p className="type-body">
            The brand and landing page gave Neptune a clear, calm identity — one that could explain a complex, evolving product without hype and stay coherent through pivots.
          </p>
          <p className="type-body">
            The animated chat experience solved what the brand alone couldn't: it made Neptune's workflow tangible. By showing how an AI platform engineer plans, executes, and deploys through conversation, the animation became a shared reference for tone, pacing, and interaction — not just a hero graphic.
          </p>
          <p className="type-body">
            Together, the work turned an abstract idea into something understandable and discussable. Neptune finally felt like a product with intent: confident in how it presents itself, and clear enough in how it works for the team to keep building forward.
          </p>
        </div>
      </section>

      {/* 10. BUILT WITH */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">Built with</h3>
          <p className="type-body">
            Interaction prototype: custom animation system (script-driven), React / TypeScript
          </p>
          <p className="type-body">
            Sequencing & logic: React state machine + timed orchestration
          </p>
          <p className="type-body">
            Motion: GSAP (SVG step indicators), CSS keyframe animations
          </p>
          <p className="type-body">
            Design & iteration: Figma
          </p>
          <p className="type-body">
            Tooling: Cursor, LLM-assisted workflows
          </p>
        </div>
      </section>
    </article>
  );
}
