"use client";

import * as React from "react";
import Image from "next/image";

const deckImages = [
  "/case-studies/neptune-deck-1.png",
  "/case-studies/neptune-deck-2.png",
  "/case-studies/neptune-deck-3.png",
  "/case-studies/neptune-deck-4.png",
];

export function ProjectPageNeptune() {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);
  return (
    <article className="w-full stack-5xl">
      {/* 0. PAGE TITLE BLOCK */}
      <section className="stack-lg">
        <div className="text-column stack-lg">
          <h1 className="type-h3">
            Neptune: shaping the identity <span className="text-color-text-secondary font-normal">of an AI infra platform engineer</span>
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
          I shaped Neptune’s product identity and landing page, then built an animated, script-driven chat prototype to make an AI infra workflow legible and discussable. 
          </p>
        </div>
      </section>

      {/* 1. CONTEXT */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">Context</h3>
          <p className="type-body">
          Neptune didn’t arrive as a clear brief. Its scope and form evolved as the team explored how AI-assisted infrastructure workflows should actually work. 
          </p>
          <p className="type-body">
          My role was to design an identity and interaction surface that could remain stable while the product definition underneath continued to evolve.
          </p>
        </div>
      </section>

      {/* 2. USERS & POSITIONING */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">Audience, trust, and tone </h3>
          <p className="type-body">
          What became clear early on was the core problem Neptune needed to solve: while AI made writing code faster, deployment and infrastructure still felt fragile and hard to trust. 
          </p>
         
          <p className="type-body">
          That tension shaped both the product framing and the brand. Neptune emerged as a calm, conversational co-pilot behaving like an AI Platform Engineer that handles complex infrastructure work while keeping actions visible.
</p>

<p className="type-body">
This pushed the visual and verbal direction away from hype-driven AI language and toward something calmer, more precise, and deliberately understated.
          </p>
          
        </div>
      </section>

      {/* Brand deck carousel */}
      <section className="stack-md pt-4 pb-4">
        <div
          className="
            relative
            w-full
            aspect-video
            overflow-hidden
            rounded-surface
            border border-color-border-secondary
            bg-color-bg-muted
          "
        >
          {deckImages.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt={`Neptune brand deck slide ${index + 1}`}
              fill
              className={`object-cover transition-opacity duration-300 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
              priority={index === 0}
            />
          ))}

          {/* Navigation controls */}
          <div className="absolute left-4 right-4 bottom-4 flex items-center justify-center pointer-events-none">
            <div className="pointer-events-auto inline-flex items-center gap-2 p-1.5 rounded-full bg-color-bg-surface/95 border border-color-border backdrop-blur-md shadow-lg">
              <button
                type="button"
                onClick={() => setCurrentSlide((prev) => (prev === 0 ? deckImages.length - 1 : prev - 1))}
                className="w-8 h-8 rounded-full flex items-center justify-center text-color-text-secondary hover:text-color-text-primary hover:bg-color-bg-muted transition-colors"
                aria-label="Previous slide"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              
              <span className="px-2 type-body-sm text-color-text-secondary tabular-nums">
                {currentSlide + 1}/{deckImages.length}
              </span>

              <button
                type="button"
                onClick={() => setCurrentSlide((prev) => (prev === deckImages.length - 1 ? 0 : prev + 1))}
                className="w-8 h-8 rounded-full flex items-center justify-center text-color-text-secondary hover:text-color-text-primary hover:bg-color-bg-muted transition-colors"
                aria-label="Next slide"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHEN BRANDING WASN'T ENOUGH */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">When branding wasn&apos;t enough</h3>
          <p className="type-body">
          The brand gave Neptune a voice and tone, but it still didn’t show how the product actually behaved. Static visuals failed to capture the core experience — the moment where you describe intent and Neptune plans and executes it.
          </p>
          <p className="type-body">
            Instead of pushing another illustration, I built a fully animated chat prototype that demonstrated the workflow end-to-end: planning, generating configs, deploying infrastructure, and surfacing results through conversation.
          </p>
        </div>
      </section>

        {/* CHAT VIDEO */}
        <section className="stack-md">
        <div
          className="
            w-full
            aspect-[16/8]
            overflow-hidden
            rounded-surface
            border border-color-border-secondary
            bg-color-bg-muted
          "
        >
          <video
            ref={videoRef}
            loop
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover"
            poster="/projects/shuttle-console-poster.png"
          >
            <source
              src="/case-studies/neptune-chat-section.mp4"
              type="video/mp4"
            />
            Your browser doesn&apos;t support the video tag.
          </video>
        </div>

      
      </section>

      {/* 5. A PROTOTYPE THAT CHANGED THE CONVERSATION */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">A prototype that changed the conversation</h3>
          <p className="type-body">
          Animating the workflow turned the prototype into a way to reason about how Neptune should function inside an agent-based environment. 
          </p>
          <p className="type-body">
          Walking through real scenarios made it possible to compare how Neptune currently works (often requiring explicit CLI interaction) with what a more seamless, agent-assisted flow could look like. The prototype surfaced where steps felt unnecessarily manual, where context was lost, and which parts of the workflow didn’t naturally map to a chat-based interaction model.
          </p>
          
      
        </div>
      </section>

      {/* 5. A PROTOTYPE THAT CHANGED THE CONVERSATION */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">Making the prototype editable</h3>
         
          <p className="type-body">
          Once the prototype became a shared tool for testing these flows, its limitations became obvious. The initial version worked, but it was difficult to iterate on — even small changes required digging through timing logic, states, and transitions. 
          </p>
             {/* Agent refactoring */}
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
            src="/case-studies/nc-refactor.png"
            alt="Script-driven chat prototype"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>
          <p className="type-body">
         To make experimentation easier, I refactored the system into a simple, human-readable script that defines what happens, not how it animates. The animation engine handles orchestration independently, allowing the team to edit the script to test new workflows, messages, and interaction patterns without touching the underlying logic.
          </p>
             {/* Agent refactoring */}
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
            src="/case-studies/nc-script.png"
            alt="Script-guide"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>
        </div>

       
      </section>

      

    

      {/* 7. OUTCOME */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">Outcome</h3>
          <p className="type-body">
            The identity and landing page gave Neptune a calm, durable presence that could survive ongoing definition without drifting into hype. The animated chat prototype solved what branding alone couldn&apos;t: it made Neptune&apos;s workflow tangible and discussable.
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
