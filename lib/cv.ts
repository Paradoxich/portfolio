// lib/cv.ts
// Content for /cv. Source of truth: Ana-Beverin-CV-2026.pdf, transcribed verbatim.

export type CvExperience = {
  company: string;
  role: string;
  period: string;
  href?: string;
  summary?: string;
  bullets?: { label: string; text: string; href?: string }[];
};

export type CvEducation = {
  institution: string;
  degree: string;
  year: string;
};

export const cv = {
  name: "Ana Beverin",
  title: "Product Designer & Design Engineer",
  location: "Croatia",
  contact: {
    phone: "+385 99 592 8738",
    email: "ana.beverin@gmail.com",
    linkedin: "linkedin.com/in/paradoxich",
    linkedinHref: "https://linkedin.com/in/paradoxich/",
    site: "anabeverin.com",
  },
  summary:
    "I design and build products from idea to production. My background is in product design, but over the last year I've moved into design engineering, using AI-assisted development to ship production-ready applications. I work across product strategy, UX, visual craft, design systems, and implementation.",
  experience: [
    {
      company: "Kofa Design",
      role: "Owner · Product Designer & Design Engineer",
      period: "2022 - Present",
      summary:
        "Working with startups and technical teams to shape products from idea to launch. Alongside client work, building Santolina.",
      bullets: [
        {
          label: "Santolina",
          href: "/projects/santolina",
          text: "Designed and built a plant care platform from concept to production, defining the product strategy, UX, visual design, design system, frontend implementation, and data architecture.",
        },
        {
          label: "Shuttle",
          href: "/projects/shuttle",
          text: "Supported the platform's growth from early traction to 20,000+ developers and 120,000+ deployments as a sole product designer across dev console, web and growth surfaces. Led a complete console audit and redesign, introducing consistent UI patterns, design system and information architecture.",
        },
        {
          label: "Neptune",
          href: "/projects/neptune",
          text: "Designed brand and web experience for an AI infrastructure platform. Built & shipped a scripted agent-chat animation with AI, now live on the platform's website.",
        },
        {
          label: "Dealio",
          text: "Designed an online marketplace platform from concept to launch in under one year. Simplified seller ad creation, improved buyer discovery, and introduced structured buyer-seller communication. Platform launched with 78% CSAT.",
        },
        {
          label: "MixLodge",
          href: "/projects/mixlodge",
          text: "Defined the MVP structure for a marketplace connecting musicians and producers. Designed end-to-end flows across discovery, booking, and collaboration, delivering implementation-ready product architecture in 3 months.",
        },
      ],
    },
    {
      company: "OptimoRoute",
      role: "Lead product designer",
      period: "2020 - 2022",
      href: "/projects/optimoroute",
      summary:
        "Led end-to-end product design for a route optimization platform used by logistics teams worldwide, managing a two-person design team. Helped shift the product from engineering-first to design-driven, improved usability, evolved the design system, and refreshed the UI.\n\nRedesign increased returning session duration by 34%, improved discoverability across Analytics, Dispatch, and Planning, and reduced time-to-first-use at the 75th and 90th percentiles, meaning faster onboarding for users who struggled with navigation.",
    },
    {
      company: "Five Agency (now Endava)",
      role: "Product designer",
      period: "2017 - 2020",
      summary:
        "Owned design across a range of client projects spanning mobile apps, web products, and digital brand experiences. Led product design workstreams, collaborated closely with stakeholders and engineers, and mentored junior designers.",
    },
    {
      company: "Produkcija Pokret",
      role: "Digital designer, Illustrator",
      period: "2016 - 2017",
      summary:
        "Created illustration systems and visual assets for animated explainer videos, along with landing pages and marketing campaigns. Built cohesive visual systems that strengthened brand communication across digital channels.",
    },
  ] satisfies CvExperience[],
  education: [
    { institution: "Faculty of Graphic Arts, UNIZG", degree: "Masters, Multimedia", year: "2017" },
    { institution: "Infinum Academy", degree: "Digital Product Design Course", year: "2016" },
    { institution: "University of Applied Sciences", degree: "Bachelors, IT Design", year: "2014" },
  ] satisfies CvEducation[],
  skills: [
    "Product design",
    "Interaction design",
    "0-1 product shaping",
    "Systems thinking",
    "User flows & IA",
    "Design systems",
    "Frontend implementation",
  ],
  tools: [
    "Figma",
    "Claude Code",
    "Cursor",
    "GitHub",
    "Vercel",
    "Adobe CC",
    "ChatGPT",
    "Tailwind",
    "Notion",
    "Linear",
    "Slack",
    "Discord",
  ],
  selectedWork: [
    { name: "Santolina", href: "/projects/santolina" },
    { name: "Shuttle", href: "/projects/shuttle" },
    { name: "Neptune", href: "/projects/neptune" },
    { name: "MixLodge", href: "/projects/mixlodge" },
    { name: "OptimoRoute", href: "/projects/optimoroute" },
    { name: "Portfolio", href: "/projects/portfolio" },
  ],
};
