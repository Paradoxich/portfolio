import type { SectionData } from "../CaseStudyLayout";

export const optimorouteMeta = {
  title: "Structuring a complex B2B product without breaking existing workflows",
  subtitle: "",
  meta: "2022",
  tldrItems: [
    "Owned design across product and brand in an engineering-first environment, shaping how OptimoRoute evolved.",
    "Reframed a cluttered, hard-to-navigate interface into a structured system that made complex workflows legible.",
    "Delivered a data-validated redesign that improved feature discovery and onboarding while preserving performance and user trust.",
  ],
};

export const optimorouteContext: SectionData = {
  heading: "Context",
  blocks: [
    {
      type: "p",
      text: "OptimoRoute is a route optimization platform used by logistics teams to schedule drivers and optimize daily operations. I joined as Lead Product Designer and took ownership of design across product and brand.",
    },
    {
      type: "p",
      text: "The product was already mature and widely used, but design was not a driving force in decision-making. I introduced a more structured, design-led approach, shaping not just how things looked, but how problems were defined, prioritized, and solved across the product.",
    },
    {
      type: "p",
      text: "I operated across multiple layers simultaneously: driving feature work end-to-end with product and engineering, evolving interaction patterns and the design system to reduce fragmentation, and pushing brand direction forward so product quality felt as strong as the underlying platform.",
    },
    {
      type: "p",
      text: "This was not a support role. I actively influenced direction, pitched improvements, aligned teams, and reduced ambiguity between business goals, technical constraints, and user needs.",
    },
    {
      type: "p",
      text: "Alongside the redesign, I led and contributed to key initiatives including proof of delivery, conditional forms, onboarding, branded emails, customer feedback (NPS), and improvements to core flows like import and order management.",
    },
  ],
};

export const optimorouteProblem: SectionData = {
  heading: "Powerful product, high friction to understand",
  blocks: [
    {
      type: "p",
      text: "User feedback was consistent and pointed to the same issue: the product felt dated, difficult to navigate, and overloaded with information.",
    },
    {
      type: "p",
      text: "The problem was not missing functionality, but how the product exposed it. The interface was dense, inconsistent, and hard to scan, so important actions were difficult to discover and users often needed guidance just to get started.",
    },
    {
      type: "p",
      text: "This had direct business impact. Sales spent significant time explaining the interface instead of helping users set up real workflows.",
    },
    {
      type: "p",
      text: "The redesign was part of a broader effort to reduce onboarding friction, so smaller teams could start independently while sales and support focused on higher-value interactions.",
    },
  ],
};

export const optimorouteConstraints: SectionData = {
  heading: "Change without triggering risk",
  blocks: [
    {
      type: "p",
      text: "The biggest constraint was not technical complexity alone, but improving the UI without breaking trust, performance, or team alignment.",
    },
    {
      type: "p",
      text: "OptimoRoute was a mature B2B product with real revenue behind it, so stakeholders were cautious about large UI shifts that could disrupt users.",
    },
    {
      type: "p",
      text: "Engineering focus was heavily backend-driven around complex routing algorithms. UI work was not a primary focus, and the legacy foundation made larger redesign efforts feel expensive.",
    },
    {
      type: "p",
      text: "I aligned the work around what the business needed most: stability and revenue. We moved through gradual, testable updates, releasing to a subset of users first and validating behavior before broader rollout.",
    },
  ],
};

export const optimorouteDecisions: SectionData = {
  heading: "Key decisions",
  blocks: [
    {
      type: "p",
      text: "The main decision was to avoid a full reset and evolve the product in a controlled, measurable way. A complete redesign was faster conceptually, but too risky for a live system.",
    },
    {
      type: "p",
      text: "We shipped gradual changes and validated them with A/B testing before wider release. The goal was not to make the product feel new, but to make it better without forcing users to relearn it.",
    },
    {
      type: "p",
      text: "I reduced surface complexity by clarifying hierarchy and guiding users toward relevant actions instead of exposing everything at once.",
    },
    {
      type: "p",
      text: "A key part of the work was making existing functionality visible. Features like support access and copy/paste import already existed but gained adoption once placement and structure became clearer.",
    },
    {
      type: "p",
      text: "In parallel, I addressed first-time-user friction through onboarding and import-flow improvements, while introducing more consistent interaction patterns so the product could evolve as a system.",
    },
    {
      type: "img",
      src: "/case-studies/or-ds-excerpt.png",
      alt: "Excerpt of OptimoRoute design system",
      aspect: "16/11",
      priority: true,
    },
  ],
};

export const optimorouteOutcome: SectionData = {
  heading: "Outcome: improved clarity without breaking behavior",
  blocks: [
    {
      type: "p",
      text: "The redesign led to a measurable shift in behavior without disrupting existing workflows.",
    },
    {
      type: "p",
      text: "Average session duration increased by 14%, with later sessions reaching +33.8% at the median, indicating deeper exploration of the product. Users navigated across more product surfaces per session, particularly Analytics, Dispatch, and Planning workflows, suggesting improved feature discoverability.",
    },
   
    {
      type: "p",
      text: "Business signals also improved. Billing page visits and purchase button clicks increased, particularly among larger accounts.",
    },
    {
      type: "p",
      text: "Time-to-first-use dropped at the 75th and 90th percentiles, indicating faster onboarding and clearer navigation for users who previously struggled to get started.",
    },
    {
      type: "p",
      text: "There were no regressions in core workflows, enabling a confident rollout to all users. Previously overlooked features like copy/paste import and support access gained traction—not because they were new, but because they became visible within a clearer structure.",
    },
    {
      type: "p",
      text: "User feedback described the new UI as more intuitive, faster, and easier to navigate. The result was not just visual polish, but stronger independent adoption with less reliance on sales and support.",
    },
    
  ],
};

export const optimorouteReflection: SectionData = {
  heading: "Reflection",
  blocks: [
    {
      type: "p",
      text: "The hardest part was not redesigning screens, but making change responsibly in a product people relied on every day.",
    },
    {
      type: "p",
      text: "This project reinforced that improvement is often less about finding a perfect solution and more about understanding what the business is protecting. In this case, that was stability and revenue.",
    },
    {
      type: "p",
      text: "I learned to move in smaller steps, validate decisions through real behavior, and build trust through outcomes rather than assumptions.",
    },
  ],
};

export const optimorouteBroaderImpact: SectionData = {
  heading: "Broader impact",
  blocks: [
    {
      type: "p",
      text: "Beyond product work, I helped shape how design operated across the company.",
    },
    {
      type: "p",
      text: "I collaborated with marketing on campaigns, website updates, and print materials, while setting up systems that made visual creation and publishing more self-sufficient and consistent.",
    },
    {
      type: "p",
      text: "Internally, I supported stronger team culture by advocating for initiatives like team gatherings and health checkups, contributing to cohesion and well-being.",
    },
    {
      type: "p",
      text: "This work was not only about shipping design outputs, but about raising the level of how teams collaborated and delivered.",
    },
  ],
};
