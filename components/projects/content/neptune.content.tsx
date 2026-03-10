import type { SectionData } from "../CaseStudyLayout";

export const neptuneMeta = {
  title: "Defining Neptune’s positioning and visual foundation",
  subtitle: "",
  meta: "2025",
  links: [{ href: "https://www.neptune.dev", label: "neptune.dev" }],
  tldrItems: [
    "Sole product designer shaping positioning, visual identity, and interaction model for an AI infra platform.",
    "Clarified audience and product narrative while the product definition was still evolving.",
    "Aligned product, brand, and engineering with an animated interaction model and a scalable visual identity.",
  ],
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
      text:
        "The team from Shuttle, a Rust-based cloud deployment platform, was building an AI platform engineer. The idea sounded straightforward: you describe what you want, and the system provisions and wires your cloud infrastructure for you. In practice, translating that idea into a real product raised a number of open questions.",
    },
  ],
};

export const neptuneAudience: SectionData = {
  heading: "The problem",
  blocks: [
    {
      type: "p",
      text:
        "There was no confirmed audience, no clear positioning, and no agreement on whether Neptune was meant to stand on its own or extend Shuttle. The interaction model was also unresolved. The product relied on CLI workflows, but it aspired to feel conversational. At the same time, there was pressure to launch quickly.",
    },
    {
      type: "p",
      text:
        "My role wasn’t just to design a polished brand. I had to help define direction while the product itself was still taking shape.",
    },
    {
      type: "p",
      text:
        "If Neptune launched without a clear narrative, it would feel like another AI experiment—interesting, maybe even impressive, but hard to rely on. And trust was the real issue: AI can generate code instantly, but infrastructure is where mistakes get expensive. The brand and experience had to make that feel stable and intentional.",
    },
  ],
};

export const neptuneWhenBranding: SectionData = {
  heading: "Creating clarity before visuals",
  blocks: [
    {
      type: "p",
      text:
        "Before designing the identity, I structured a lightweight discovery process to force alignment. I created a stakeholder survey and ran a positioning workshop to surface the real tensions in the room.",
    },
    {
      type: "ul",
      items: [
        "Was Neptune a tool or a teammate?",
        "Were we targeting AI-native builders or traditional DevOps engineers?",
        "Should the brand feel experimental or authoritative?",
      ],
    },
    {
      type: "p",
      text:
        "The split was clear. Traditional infrastructure engineers wanted transparency and control. AI-native developers wanted a more agent-like experience. These are different products with different voices.",
    },
    {
      type: "p",
      text:
        "We chose a direction: a calm expert who makes complex things feel effortless. Confident, controlled, conversational, but precise. The audience became AI-assisted developers already comfortable with AI tools—people frustrated that AI could write code but couldn’t deploy it.",
    },
    {
      type: "p",
      text:
        "That decision resolved most downstream design questions. Once we knew who it was for and how it should behave, the visual direction followed.",
    },
  ],
};

export const neptunePrototypeChanged: SectionData = {
  heading: "Defining a stable visual system",
  blocks: [
    {
      type: "p",
      text:
        "The product itself was still evolving, so the identity needed to be stable even if features shifted. ",
    },
    {
      type: "p",
      text:
        "The name Neptune introduced a space metaphor, but I deliberately avoided spectacle. Instead of dramatic sci-fi visuals, I defined a restrained aesthetic: subtle gradients, controlled contrast, disciplined use of highlight color, and generous negative space. I wanted it to signal control and clarity instead of just getting a cool, futuristic look.",
    },
    {
      type: "p",
      text:
        "This gave the team a shared evaluation framework. Visual feedback could be discussed against principles rather than personal taste.",
    },
  ],
};

export const neptuneMakingEditable: SectionData = {
  heading: "Where branding wasn’t enough",
  blocks: [
    {
      type: "p",
      text:
        "The hardest problem wasn’t aesthetic. It was explaining how Neptune actually worked. Technically, the system relied on CLI-based workflows. Conceptually, it aimed to feel conversational and agent-driven. Showing raw CLI output felt underwhelming for the positioning. Showing a full chat interface risked misrepresenting the current implementation.",
    },
    {
      type: "p",
      text:
        "Instead of debating this abstractly, I built an animated chat prototype that simulated the end-to-end flow: describe intent, review generated infrastructure specs, approve configuration, deploy, and view logs.",
    },
    {
      type: "p",
      text:
        "What began as a landing page animation became a product thinking tool. Walking through the simulated workflow exposed friction points in the real implementation and surfaced gaps that hadn’t been fully mapped. The prototype shifted internal conversations from “how should this look?” to “what needs to exist for this to work?”",
    },
    {
      type: "p",
      text:
        "To make iteration practical, I refactored the animation into a script-driven system, separating content from orchestration. This allowed the team to test alternative flows without rewriting interaction logic. It turned a marketing artefact into a reusable UX exploration asset.",
    },
  ],
};

export const neptuneOutcome: SectionData = {
  heading: "Outcome",
  blocks: [
    {
      type: "p",
      text:
        "Neptune launched with a defined positioning, a coherent visual identity, and a concrete way to explain how it works. The animated interaction made the experience tangible and helped align product and engineering discussions.",
    },
  ],
};

export const neptuneReflection: SectionData = {
  heading: "Reflection",
  blocks: [
    {
      type: "p",
      text:
        "The hardest part of this project wasn’t execution, it was making directional decisions while the product itself was still forming. Under ambiguity, the designer’s role is not to wait for clarity, but to create it.",
    },
    {
      type: "p",
      text:
        "Neptune reinforced a core principle in my work: when structure is missing, design becomes a decision-making tool. The survey created alignment. The identity created stability. The prototype revealed product gaps. Each artefact moved the product from abstraction to something concrete and discussable.",
    },
  ],
};


