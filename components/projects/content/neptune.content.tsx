import * as React from "react";
import type { SectionData } from "../CaseStudyLayout";

export const neptuneMeta = {
  title: "Defining Neptune's positioning and",
  subtitle: "visual foundation",
  titleSeparator: " " as const,
  meta: "2025",
  links: [{ href: "https://www.neptune.dev", label: "neptune.dev" }],
  tldrItems: [
    <>
      Sole{" "}
      <strong className="font-medium text-color-text-primary">
        product designer
      </strong>{" "}
      shaping positioning, visual identity, and a concrete interaction model
    </>,
    <>
      Clarified audience and{" "}
      <strong className="font-medium text-color-text-primary">
        product narrative
      </strong>{" "}
      while the workflow model was still evolving.
    </>,
    <>
      Aligned{" "}
      <strong className="font-medium text-color-text-primary">
        product, brand, and engineering discussions
      </strong>{" "}
      with animated interaction model and delivered a scalable visual identity.
    </>,
  ] as React.ReactNode[],
};

export const deckImages = [
  "/case-studies/neptune-deck-1.png",
  "/case-studies/neptune-deck-2.png",
  "/case-studies/neptune-deck-3.png",
  "/case-studies/neptune-deck-4.png",
];

export const neptuneChatVideoSrc = "/case-studies/neptune-chat-section.mp4";

export const neptuneContext: SectionData = {
  heading: "Context",
  blocks: [
    {
      type: "p",
      text: "Neptune didn't arrive as a clear brief. Its scope and form evolved as the team explored how AI-assisted infrastructure workflows should actually work.",
    },
    {
      type: "p",
      text: "My role was to design an identity and interaction surface that could remain stable while the product definition underneath continued to evolve.",
    },
  ],
};

export const neptuneAudience: SectionData = {
  heading: "Audience, trust, and tone",
  blocks: [
    {
      type: "p",
      text: "What became clear early on was the core problem Neptune needed to solve: while AI made writing code faster, deployment and infrastructure still felt fragile and hard to trust.",
    },
    {
      type: "p",
      text: "That tension shaped both the product framing and the brand. Neptune emerged as a calm, conversational co-pilot behaving like an AI Platform Engineer that handles complex infrastructure work while keeping actions visible.",
    },
    {
      type: "p",
      text: "This pushed the visual and verbal direction away from hype-driven AI language and toward something calmer, more precise, and deliberately understated.",
    },
  ],
};

export const neptuneWhenBranding: SectionData = {
  heading: "When branding wasn't enough",
  blocks: [
    {
      type: "p",
      text: "The brand gave Neptune a voice and tone, but it still didn't show how the product actually behaved. Static visuals failed to capture the core experience — the moment where you describe intent and Neptune plans and executes it.",
    },
    {
      type: "p",
      text: "Instead of pushing another illustration, I built a fully animated chat prototype that demonstrated the workflow end-to-end: planning, generating configs, deploying infrastructure, and surfacing results through conversation.",
    },
  ],
};

export const neptunePrototypeChanged: SectionData = {
  heading: "A prototype that changed the conversation",
  blocks: [
    {
      type: "p",
      text: "Animating the workflow turned the prototype into a way to reason about how Neptune should function inside an agent-based environment.",
    },
    {
      type: "p",
      text: "Walking through real scenarios made it possible to compare how Neptune currently works (often requiring explicit CLI interaction) with what a more seamless, agent-assisted flow could look like. The prototype surfaced where steps felt unnecessarily manual, where context was lost, and which parts of the workflow didn't naturally map to a chat-based interaction model.",
    },
  ],
};

export const neptuneMakingEditable: SectionData = {
  heading: "Making the prototype editable",
  blocks: [
    {
      type: "p",
      text: "Once the prototype became a shared tool for testing these flows, its limitations became obvious. The initial version worked, but it was difficult to iterate on — even small changes required digging through timing logic, states, and transitions.",
    },
    {
      type: "img",
      src: "/case-studies/nc-refactor.png",
      alt: "Script-driven chat prototype",
      aspect: "16/8",
      priority: true,
    },
    {
      type: "p",
      text: "To make experimentation easier, I refactored the system into a simple, human-readable script that defines what happens, not how it animates. The animation engine handles orchestration independently, allowing the team to edit the script to test new workflows, messages, and interaction patterns without touching the underlying logic.",
    },
    {
      type: "img",
      src: "/case-studies/nc-script.png",
      alt: "Script guide",
      aspect: "16/8",
      priority: true,
    },
  ],
};

export const neptuneOutcome: SectionData = {
  heading: "Outcome",
  blocks: [
    {
      type: "p",
      text: "The identity and landing page gave Neptune a calm, durable presence that could survive ongoing definition without drifting into hype. The animated chat prototype solved what branding alone couldn't: it made Neptune's workflow tangible and discussable.",
    },
  ],
};

export const neptuneBuiltWith: SectionData = {
  heading: "Built with",
  blocks: [
    {
      type: "p",
      text: (
        <>
          <strong>Interaction prototype:</strong> custom animation system
          (script-driven), React / TypeScript
        </>
      ),
    },
    {
      type: "p",
      text: (
        <>
          <strong>Sequencing &amp; logic:</strong> React state machine + timed
          orchestration
        </>
      ),
    },
    {
      type: "p",
      text: (
        <>
          <strong>Motion:</strong> GSAP (SVG step indicators), CSS keyframe
          animations
        </>
      ),
    },
    { type: "p", text: <><strong>Design &amp; iteration:</strong> Figma</> },
    {
      type: "p",
      text: (
        <><strong>Tooling:</strong> Cursor, LLM-assisted workflows</>
      ),
    },
  ],
};
