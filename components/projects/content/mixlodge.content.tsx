import * as React from "react";
import type { SectionData } from "../CaseStudyLayout";

export const mixlodgeMeta = {
  title: "Turning an early idea into a structured booking product",
  subtitle: " ",
  meta: "2025  •  Not yet launched",
  tldrItems: [
    <>
      <strong className="font-medium text-color-text-primary">
        Lead product designer
      </strong>{" "}
      across product definition, visual direction, and end-to-end MVP design.
    </>,
    <>
      <strong className="font-medium text-color-text-primary">
        The initial scope was a loosely defined feature list
      </strong>{" "}
      without a clear workflow, product structure, or prioritisation.
    </>,
    <>
      <strong className="font-medium text-color-text-primary">
        Defined the full journey
      </strong>{" "}
      from from search and booking to post-booking collaboration and delivered
      complete, implementation-ready flows and a consistent visual system.
    </>,
  ] as React.ReactNode[],
};

export const mixlodgeContext: SectionData = {
  heading: "Context",
  blocks: [
    {
      type: "p",
      text: "MixLodge started as an early-stage concept for a platform connecting musicians, producers, and recording studios. The project came with a broad feature list but very little product structure. Core questions about workflows, roles, and system boundaries were still open.",
    },
    {
      type: "p",
      text: "My role was to turn that initial scope into a workable product. This case study focuses on defining the core loop of the platform—discovery, booking, and collaboration—and shaping an MVP that development could realistically build.",
    },
  ],
};

export const mixlodgeDiscovery: SectionData = {
  heading: "The problem",
  blocks: [
    {
      type: "p",
      text: "The challenge wasn’t designing an interface. The challenge was that the product itself wasn’t defined yet.",
    },
    {
      type: "p",
      text: "The initial scope listed features such as studio discovery, booking, profiles, payments, services, and file sharing, but they existed mostly as ideas rather than parts of a coherent system. There was no clear workflow connecting them, no defined MVP structure, and no shared understanding of how the platform should actually function once users entered it.",
    },
    {
      type: "p",
      text: "Without resolving that structure first, designing screens would have meant building isolated pieces of UI rather than a product that could realistically work.",
    },
  ],
};

export const mixlodgeDiscoveryImage: SectionData = {
  blocks: [
    {
      type: "img",
      src: "/case-studies/ml-disovery.png",
      alt: "Exploratory discovery flows and early structure for MixLodge.",
      aspect: "16/9",
      priority: true,
    },
  ],
};

export const mixlodgeMvp: SectionData = {
  heading: "Defining the product",
  blocks: [
    {
      type: "p",
      text: "The first step was stepping back and clarifying how the platform should function as a system.",
    },
    {
      type: "p",
      text: "Working through early flows revealed that MixLodge wasn’t a single workflow. It needed to support two related but different activities: musicians discovering and booking studios, and producers collaborating with artists once a session had been scheduled.",
    },
    {
      type: "p",
      text: "To avoid fragmentation, I structured the MVP around a single operational loop: discovering studios, booking a session, and collaborating afterwards. This loop became the backbone of the product and the filter for scope decisions. Features that didn’t support it were postponed or removed from the initial version.",
    },
    {
      type: "p",
      text: "Once the product had a clear centre of gravity, the rest of the system could be designed around it. I defined the main user roles, structured the discovery experience around search, filtering, and map-based exploration, and designed the full listing and booking flow including availability, booking requests, and payments.",
    },
  ],
};

export const mixlodgeClarity: SectionData = {
  heading: "Designing collaboration",
  blocks: [
    {
      type: "p",
      text: "As the booking flow became clearer, another structural gap appeared. Booking solved the logistical step of reserving a studio, but it didn’t support what happens afterwards when musicians and producers actually begin working together.",
    },
    {
      type: "p",
      text: "Instead of introducing a separate workspace, collaboration was anchored directly to the booking. Each confirmed session generates a dedicated conversation thread that becomes the shared space for communication, file sharing, and coordination around that session.",
    },
    {
      type: "p",
      text: "This decision kept the system simple. Collaboration became a natural continuation of the booking flow rather than a separate feature.",
    },
  ],
};

export const mixlodgeInboxImage: SectionData = {
  fullWidth: true,
  blocks: [
    {
      type: "img",
      src: "/case-studies/ml-inbox.png",
      alt: "Collaboration workspace anchored to the booking.",
      aspect: "16/10.5",
      caption: "MixLodge inbox view after a booking has been confirmed.",
      priority: true,
    },
  ],
};

export const mixlodgeDesignSystem: SectionData = {
  heading: "Visual direction & system",
  blocks: [
    {
      type: "p",
      text: "In parallel, I defined the visual direction of the product through the landing page and established a small design language that carried into the application interface. This ensured that both the marketing surface and the product shared a consistent foundation as the system expanded.",
    },
    {
      type: "p",
      text: "The focus wasn’t on building a large component library. Instead, the goal was a compact, resilient set of patterns—typography, cards, and layout—that could express the product clearly without slowing development.",
    },
  ],
};

export const mixlodgeDesignImage: SectionData = {
  fullWidth: true,
  blocks: [
    {
      type: "img",
      src: "/case-studies/ml-design.png",
      alt: "Visual direction and product surfaces for MixLodge.",
      aspect: "16/8",
      caption: "Landing page and product UI share a single design language.",
      priority: true,
    },
  ],
};

export const mixlodgeHeroVideo: SectionData = {

  blocks: [
    {
      type: "video",
      src: "/case-studies/mixlodge-lp-video.mp4",
      caption: "High-level walkthrough of the MixLodge product surfaces.",
      aspect: "16/10.5",
      autoPlay: true,
      loop: true,
      muted: true,
      playbackRate: 0.75,
    },
  ],
};

export const mixlodgeOutcome: SectionData = {
  heading: "Outcome & reflection",
  blocks: [
    {
      type: "p",
      text: "The result was a clearly defined MVP structure connecting discovery, booking, and collaboration into a single workflow. Instead of a fragmented feature list, MixLodge now had explicit user flows, defined roles, and a stable product foundation that development could build on as the platform evolved.",
    },
    {
      type: "p",
      text: "The hardest part of this project wasn’t designing the interface but reducing ambiguity. Once the core loop of the platform was defined, most design decisions became much easier. The biggest shift was not visual but structural—giving the product a clear centre before designing the screens around it.",
    },
  ],
};

