import * as React from "react";
import type { SectionData } from "../CaseStudyLayout";

export const shuttleMeta = {
  title: "Designing a scalable system for a growing dev platform.",
  subtitle: "",
  meta: "2025",
  links: [{ href: "https://console.shuttle.dev", label: "shuttle.dev" }],
  tldrItems: [
    "Sole product designer leading a full console audit and redesign.",
    "Inconsistent implementation and evolving priorities fragmented the experience and created design debt.",
    "The redesign restored clarity and alignment, making the console more predictable for users and more scalable for the team.",
  ],
};

export const shuttleVideoSrc = "https://www.shuttle.dev/images/blog/new-console/new-console-main.mp4";

export const shuttleBeforeAfter = {
  beforeSrc: "/case-studies/shuttle-before.png",
  afterSrc: "/case-studies/shuttle-after.png",
  caption: "Before / after: The old console technically did the job, but didn't scale.",
};

export const shuttleHeroImage: SectionData = {
  fullWidth: true,
  blocks: [
    {
      type: "img",
      src: "/case-studies/shuttle-console-hero.png",
      alt: "Overview of Shuttle console after redesign.",
      aspect: "16/9",
      priority: true,
    },
  ],
};

export const shuttleContext: SectionData = {
  heading: "Context",
  blocks: [
    {
      type: "p",
      text: (
        <>
          I started collaborating with Shuttle in 2022 to define the web presence
          and visual direction ahead of a funding round. Over the next three
          years, I owned product design across web, console, and growth. As the
          sole designer in a scaling, engineering-led team, I supported Shuttle
          from early traction to a platform serving{" "}
          <strong className="font-medium text-color-text-primary">
            20,000+ developers
          </strong>{" "}
          and supporting{" "}
          <strong className="font-medium text-color-text-primary">
            120,000+ deploys
          </strong>
          .
        </>
      ),
    },
    {
      type: "p",
      text:
        "In the meantime, the platform had matured, but the interface needed to catch up. This case study focuses on the turning point: leading a system audit and full console redesign to restore structural coherence after years of incremental drift.",
    },
  ],
};

export const shuttleEarlyDays: SectionData = {
  heading: "Early days",
  blocks: [
    {
      type: "p",
      text:
        "My first phase with Shuttle was about defining structure. I established the website IA, created a modular visual system, and connected brand and console into a consistent direction. As the console moved toward early beta I translated infrastructure workflows into usable flows, built the initial information architecture, and introduced onboarding logic into a CLI-first product.",
    },
  ],
};

export const shuttleNotWorking: SectionData = {
  heading: "The problem",
  blocks: [
    {
      type: "p",
      text:
        "As the platform evolved, features were layered onto the original foundation. Nothing was catastrophically broken. That was the problem. The console worked, but patterns slowly diverged. Grays varied. Borders and radii shifted. Navigation evolved per page instead of as a unified system. What started as structure drifted into inconsistency.",
    },
    {
      type: "p",
      text:
        "For users managing multiple projects, workflows felt heavier than they should. Important actions were sometimes buried or positioned differently across screens. The interface began to feel like an accumulation of decisions rather than a single, intentional system.",
    },
    {
      type: "p",
      text:
        "For the team, the cost showed up in every new feature. Each screen required micro-decisions about which pattern to use or whether to introduce another variant. Instead of focusing on clarity, we were negotiating visual consistency. Without a strict token system, implementation slowed and alignment between design and engineering grew fragile.",
    },
  ],
};

export const shuttleProductMoves: SectionData = {
  heading: "Audit and reset",
  blocks: [
    {
      type: "p",
      text:
        "When I returned from a short break in 2025, I saw clear divergence between the intended system and what existed in production. Continuing to design feature by feature would result in a Frankenstein of a product.",
    },
    {
      type: "p",
      text:
        "User feedback reinforced the same pattern: better discoverability, more consistent workflows, and a console that matched Shuttle’s reliability under the hood.",
    },
    {
      type: "p",
      text:
        "The risk was subtle but real: erosion of trust and friction in everyday workflows, so I proposed stepping back. I conducted an audit across production screens, mapping inconsistencies in tokens, components, spacing, and layout logic. The pattern was obvious: this wasn’t isolated noise, but accumulated design debt.",
    },
    {
      type: "p",
      text:
        "The strategic question became whether to patch or reset. I prepared a discrepancy review outlining what drift was costing us and what consolidation could unlock. Together with product leadership, we aligned on a full redesign.",
    },
  ],
};

export const shuttleTaming: SectionData = {
  heading: "Redesigning for structural clarity",
  blocks: [
    {
      type: "p",
      text:
        "The redesign was not about making things look fresh. It was about restoring logic.",
    },
    {
      type: "ul",
      items: [
        "A tighter token system for color, spacing, radii, and typography to eliminate visual drift.",
        "A unified card and layout language to replace fragmented panel and table styles.",
        "Consistent navigation and page headers so users always knew where they were and what actions were available.",
      ],
    },
    {
      type: "p",
      text:
        "The second step was restructuring the console around a clear hierarchy. The project overview became the anchor: deployments, domains, resources, and key actions lived in one place instead of being scattered across separate screens.",
    },
    {
      type: "p",
      text:
        "Setup flows were redesigned to remove ambiguity and guide users through validation step by step. Moving between sections no longer required re-learning the interface.",
    },
    {
      type: "p",
      text:
        "Across the board, patterns were standardised so new features would extend the system rather than fragment it further. We kept the console opinionated and aligned with Shuttle’s code-first philosophy. Every decision was filtered through one principle: reduce cognitive overhead and improve predictability at scale.",
    },
  ],
};

export const shuttleOutcome: SectionData = {
  heading: "Outcome",
  blocks: [
    {
      type: "p",
      text:
        "For users, the console became predictable and guiding. Information hierarchy was clearer, patterns were consistent, and managing multiple projects felt structurally sound.",
    },
    {
      type: "p",
      text:
        "For the team, the redesign established a stable UI foundation. Feature work moved faster and with fewer debates because patterns were predefined and enforced. ",
    },
    {
      type: "p",
      text:
        "Design and engineering were aligned again. And the interface finally matched the maturity of the platform.",
    },
  ],
};

export const shuttleReflection: SectionData = {
  heading: "Reflection",
  blocks: [
    {
      type: "p",
      text:
        "Design systems rarely fail because of one dramatic mistake. They erode through small, reasonable decisions made in isolation. In fast-moving, engineering-led environments, someone has to notice when things start to diverge and be willing to reset them. The structure doesn’t maintain itself.",
    },
    {
      type: "p",
      text:
        "If I approached this again, I would push earlier for stricter consistency between design decisions and what actually ships to prevent the drift.",
    },
  ],
};
