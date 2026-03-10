import type { SectionData } from "../CaseStudyLayout";

export const mixlodgeMeta = {
  title: "MixLodge",
  subtitle: "Defining the product foundations for an early-stage booking tool.",
  meta: "2025 • Not yet launched",
  tldrItems: [
    "Lead product designer across discovery, product definition, visual direction and end-to-end MVP design.",
    "The initial scope was a broad feature list filled with open questions, without clear prioritisation, structure, or a defined core workflow.",
    "Defined the full journey from studio search and booking to post-booking collaboration and delivered complete, implementation-ready flows and a consistent visual system.",
  ],
};

export const mixlodgeContext: SectionData = {
  heading: "Context",
  blocks: [
    {
      type: "p",
      text: "MixLodge started as an idea for \"a platform for musicians and producers.\" In practice, that meant a broad set of loosely defined features, minimal prioritization, and many open questions. There was no existing product structure to build from, and the first task was figuring out what the platform needed to be in order to work.",
    },
  ],
};

export const mixlodgeDiscovery: SectionData = {
  heading: "Discovery & framing",
  blocks: [
    {
      type: "p",
      text: "Before designing UI, I ran a short discovery phase to clarify constraints, identify gaps, and map dependencies between different parts of the product. The goal wasn't to lock down every decision, but to establish a clear frame that would support design and development without overcommitting too early.",
    },
    {
      type: "img",
      src: "/case-studies/ml-disovery.png",
      alt: "The discovery.",
      aspect: "16/9",
      priority: true,
    },
    {
      type: "p",
      text: "One decision shaped the rest of the work: MixLodge wasn't a single workflow. It needed to support two distinct modes of use:",
    },
    {
      type: "ul",
      items: [
        "musicians searching for and booking studios",
        "producers collaborating remotely once a booking happened",
      ],
    },
    {
      type: "p",
      text: "These workflows had different needs and priorities, but they had to coexist within one system without fragmenting the product.",
    },
  ],
};

export const mixlodgeMvp: SectionData = {
  heading: "Designing toward a workable MVP",
  blocks: [
    {
      type: "p",
      text: "Instead of attempting a full marketplace upfront, the MVP was shaped around a small set of structural decisions:",
    },
    {
      type: "ul",
      items: [
        "clear roles and access patterns",
        "a focused discovery and booking flow",
        "a concrete answer to what happens after a booking",
      ],
    },
    {
      type: "p",
      text: "The product was intentionally scoped around a single loop: discovery → booking → collaboration. Anything that didn't support that loop was deprioritized or left out. The work was structured in phases, each resolving a specific part of the loop and ending with dev-ready designs, defined states, and explicit interaction logic.",
    },
    {
      type: "img",
      src: "/case-studies/ml-figma.png",
      alt: "Figma file used to structure the product.",
      aspect: "16/9",
      priority: true,
    },
    {
      type: "p",
      text: "Design artifacts carried intent directly. Flows, edge cases, and role-specific behavior were resolved in the UI itself, allowing the team to discuss concrete product behavior rather than abstract feature lists.",
    },
  ],
};

export const mixlodgeClarity: SectionData = {
  heading: "Product clarity through design",
  blocks: [
    {
      type: "p",
      text: "As the core workflows were designed in detail, it became clear that booking alone wasn't enough. Once a session was booked, users needed a shared place to actually work together.",
    },
    {
      type: "p",
      text: "Instead of introducing a separate \"project\" area, collaboration was anchored in the inbox. Each booking creates a dedicated conversation that becomes the workspace for everything that follows — chat, file sharing, tasks, and ongoing updates.",
    },
    {
      type: "p",
      text: "This wasn't treated as an add-on feature. It emerged naturally from designing real scenarios end to end. Working through concrete flows — from first contact to final delivery — clarified what the product needed in order to function as a complete system.",
    },
  ],
};

export const mixlodgeInboxImage: SectionData = {
  fullWidth: true,
  blocks: [
    {
      type: "img",
      src: "/case-studies/ml-inbox.png",
      alt: "Inbox view of the product.",
      aspect: "16/10.5",
      caption: "Collaboration workspace.",
      priority: true,
    },
  ],
};

export const mixlodgeDesignSystem: SectionData = {
  heading: "Design system & visual direction",
  blocks: [
    {
      type: "p",
      text: "Given the scope and constraints, the focus wasn't on building a comprehensive component library. Instead, the goal was to establish a small, resilient design language that could support the product without slowing development:",
    },
    {
      type: "ul",
      items: [
        "a minimal token set for color, type, spacing, and radii",
        "a single flexible card pattern reused across most surfaces",
        "consistent interaction patterns across both roles",
      ],
    },
    {
      type: "p",
      text: "The landing page was developed in parallel and used as the visual anchor. Content, structure, and visual direction were defined together, then carried into the product to keep everything aligned.",
    },
  ],
};

export const mixlodgeDesignImage: SectionData = {
  fullWidth: true,
  blocks: [
    {
      type: "img",
      src: "/case-studies/ml-design.png",
      alt: "A coherent design system",
      aspect: "16/8",
      caption: "The design language was kept minimal and consistent across the product.",
      priority: true,
    },
  ],
};

export const mixlodgeOutcome: SectionData = {
  heading: "Outcome",
  blocks: [
    {
      type: "p",
      text: "The result was a clearly defined MVP ready for development:",
    },
    {
      type: "ul",
      items: [
        "a responsive platform covering discovery, booking, payments, and collaboration",
        "explicit user flows and interaction logic across all core scenarios",
        "a stable visual identity and lightweight system the team could extend",
      ],
    },
    {
      type: "p",
      text: "The work turned a loosely framed idea into a product structure the team could build upon.",
    },
  ],
};
