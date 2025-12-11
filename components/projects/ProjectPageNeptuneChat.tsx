"use client";

import * as React from "react";
import Image from "next/image";

export function ProjectPageNeptuneChat() {
  return (
    <article className="w-full stack-5xl">
      {/* 0. PAGE TITLE BLOCK */}
      <section className="stack-lg">
        <div className="text-column stack-lg">
          <h1 className="type-h3">
            Neptune Chat Animation: a hero graphic that accidentally became a product prototype
          </h1>
        </div>
      </section>

      {/* 1. CONTEXT */}
      <section className="stack-md">
        <div className="text-column stack-md">
      
          <p className="type-body">
            It started in the same place most odd-but-fun product ideas start: we had a great landing page layout, a strong brand direction, a confident tone — and absolutely no good way to explain how Neptune actually works.
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

      {/* 2. THE TURNING POINT */}
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
          <div className="w-full my-[var(--space-xl)]">
            <video
              src="/case-studies/neptune-chat-section.mp4"
              className="w-full h-auto rounded-[var(--radius-md)] border border-color-border-secondary"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
      </section>

      {/* 3. A PROTOTYPE HIDING IN PLAIN SIGHT */}
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

      {/* 4. WHERE THINGS GOT COMPLICATED */}
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
          <div className="w-full my-[var(--space-xl)]">
            <Image
              src="/case-studies/nc-refactor.png"
              alt="Agent's refactoring plan"
              width={1600}
              height={900}
              className="w-full h-auto rounded-[var(--radius-md)] border border-color-border-secondary"
              sizes="(max-width: 1024px) 100vw, 960px"
            />
          </div>
          <p className="type-body">
            The animation now reads the script and handles the details on its own. No one needs to think about timing logic, state transitions, or what message unlocks what. Sonnet even generated a guide for non-developers explaining how to write new scripts. Honestly, that part still makes me laugh.
          </p>
          <div className="w-full my-[var(--space-xl)]">
            <Image
              src="/case-studies/nc-script.png"
              alt="Neptune Chat script example"
              width={1600}
              height={900}
              className="w-full h-auto rounded-[var(--radius-md)] border border-color-border-secondary"
              sizes="(max-width: 1024px) 100vw, 960px"
            />
          </div>
        </div>
      </section>

      {/* 5. OUTCOME */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">Outcome</h3>
          <p className="type-body">
            The animation ended up doing far more than sitting quietly on a landing page. It turned a fuzzy idea into something tangible and created a foundation the product could grow into.
          </p>
          <p className="type-body">
            What began as "we need a hero graphic" became a functional, scalable prototype for imagining Neptune's future.
          </p>
        </div>
      </section>
    </article>
  );
}
