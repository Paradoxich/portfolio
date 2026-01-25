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
          I shaped Neptune’s product identity and landing page, then built an animated, script-driven chat prototype to make an AI infra workflow legible and discussable. The work turned an abstract, evolving idea into something the team could reason about, test, and build against.
          </p>
        </div>
      </section>

      {/* 1. CONTEXT */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">Context</h3>
          <p className="type-body">
            Neptune didn&apos;t arrive as a clear brief. It emerged somewhere between an AI platform engineer, an agentic infra copilot, and a CLI-first tool. What was clear early on was the problem: AI could generate code quickly, but deployment and infrastructure still felt fragile and hard to trust.
          </p>
          <p className="type-body">
            As the product evolved, Neptune kept changing shape. My role was to design an identity and surface area that could stay coherent while the definition underneath it was still in motion.
          </p>
        </div>
      </section>

      {/* 2. USERS & POSITIONING */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">Users & positioning</h3>
          <p className="type-body">
            Before designing anything, we talked to early users and tested assumptions. Three constraints surfaced quickly:
          </p>
          <ul className="list-disc pl-5 stack-xs type-body">
            <li>
              Users already lived inside AI-native tools like Cursor, Copilot, and agent workflows
            </li>
            <li>
              They trusted AI to write code, but hesitated to let it touch infrastructure
            </li>
            <li>
              They wanted power with guardrails — automation paired with clarity and control
            </li>
          </ul>
          <p className="type-body">
            This pushed us away from hype-heavy AI branding. Neptune&apos;s tone became calm, precise, and quietly capable — an AI engineer that earns trust by explaining itself and staying out of the way unless needed.
          </p>
        </div>
      </section>

      {/* 3. DEFINING VISIBILITY */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">Defining how visible Neptune should be</h3>
          <p className="type-body">
            As the product took form, the core question wasn&apos;t console vs IDE. It was how much UI Neptune needed at all.
          </p>
          <p className="type-body">
            Neptune became a hybrid:
          </p>
          <ul className="list-disc pl-5 stack-xs type-body">
            <li>Installed via CLI</li>
            <li>Operated mostly through natural language inside an IDE agent</li>
            <li>Capable of both returning output and writing files directly into the project</li>
          </ul>
          <p className="type-body">
            That ambiguity worked conceptually — but it made explaining the workflow extremely difficult. The brand and landing page needed to support multiple futures without overcommitting too early.
          </p>
        </div>
      </section>

      {/* 4. WHEN BRANDING WASN'T ENOUGH */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">When branding wasn&apos;t enough</h3>
          <p className="type-body">
            Even with a clear identity and landing page, it was still hard to explain how Neptune actually worked. Static visuals failed to capture the core experience — the moment where you describe intent and Neptune plans and executes it.
          </p>
          <p className="type-body">
            Instead of pushing another illustration, I built a fully animated chat prototype that demonstrated the workflow end-to-end: planning, generating configs, deploying infrastructure, and surfacing results through conversation.
          </p>
        </div>
      </section>

      {/* 5. A PROTOTYPE THAT CHANGED THE CONVERSATION */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">A prototype that changed the conversation</h3>
          <p className="type-body">
            Seeing the workflow animated made the product click internally. The prototype became a shared reference for:
          </p>
          <ul className="list-disc pl-5 stack-xs type-body">
            <li>Tone and pacing of the agent</li>
            <li>Where automation should pause for confirmation</li>
            <li>How much work happens implicitly vs explicitly</li>
          </ul>
          <p className="type-body">
            It stopped being a marketing artifact and started functioning as a real product design tool the team could react to and refine together.
          </p>
        </div>
      </section>

      {/* 6. REFACTORING FOR ITERATION */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">Refactoring for iteration</h3>
          <p className="type-body">
            Once the prototype became a shared design tool, its limitations became obvious. The first version worked, but it was hard to change — small edits required digging through timing logic, states, and transitions.
          </p>
          <p className="type-body">
            To make iteration easier, I refactored the system into a simple, human-readable script format that defines what happens, not how it animates. The animation engine handles orchestration on its own. The team edits the script to test new workflows, messages, or interaction patterns without touching internal logic.
          </p>
        </div>
      </section>

      {/* 7. OUTCOME */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">Outcome</h3>
          <p className="type-body">
            The identity and landing page gave Neptune a calm, durable presence that could survive ongoing definition without drifting into hype. The animated chat prototype solved what branding alone couldn&apos;t: it made Neptune&apos;s workflow tangible and discussable.
          </p>
          <p className="type-body">
            Together, the work turned a vague idea into something concrete enough for the team to align on, critique, and build forward with confidence.
          </p>
        </div>
      </section>

      {/* 8. BUILT WITH */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">Built with</h3>
          <p className="type-body">
            <strong>Interaction prototype:</strong> custom animation system (script-driven), React / TypeScript
          </p>
          <p className="type-body">
            <strong>Sequencing & logic:</strong> React state machine + timed orchestration
          </p>
          <p className="type-body">
            <strong>Motion:</strong> GSAP (SVG step indicators), CSS keyframe animations
          </p>
          <p className="type-body">
            <strong>Design & iteration:</strong> Figma
          </p>
          <p className="type-body">
            <strong>Tooling:</strong> Cursor, LLM-assisted workflows
          </p>
        </div>
      </section>
    </article>
  );
}
