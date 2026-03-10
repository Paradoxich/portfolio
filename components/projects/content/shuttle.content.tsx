import * as React from "react";
import type { SectionData } from "../CaseStudyLayout";

export const shuttleMeta = {
  title: "Shuttle",
  subtitle: "Establishing a scalable product system for a growing dev platform.",
  meta: "2025",
  links: [{ href: "https://console.shuttle.dev", label: "shuttle.dev" }],
  tldrItems: [
    "Lead product designer responsible for a full console redesign.",
    "Over time, inconsistent implementation and shifting priorities fragmented the original system, creating design debt and UX inconsistencies.",
    "The redesign restored clarity and consistency across the console, making it calmer for smaller teams, scalable for power users, and easier for the team to ship against.",
  ],
};

export const shuttleVideoSrc = "https://www.shuttle.dev/images/blog/new-console/new-console-main.mp4";

export const shuttleBeforeAfter = {
  beforeSrc: "/case-studies/shuttle-before.png",
  afterSrc: "/case-studies/shuttle-after.png",
  caption: "Before / after: The old console technically did the job, but didn't scale.",
};

export const shuttleContext: SectionData = {
  heading: "Context",
  blocks: [
    {
      type: "p",
      text: "Shuttle is a deployment platform where your infra lives in code, but the console is where you actually see what's running. Over time, the old console became a bit of a Frankenstein with features bolted on, states handled ad-hoc, and a UI that didn't really match the maturity of the platform itself. Design work meant constantly asking: \"Which of these 62 slightly different styles is the least wrong?\"",
    },
  ],
};

export const shuttleNotWorking: SectionData = {
  heading: "What wasn't working",
  blocks: [
    {
      type: "p",
      text: "From user feedback, support threads and internal dogfooding, a few themes kept repeating:",
    },
    {
      type: "ul",
      items: [
        "Important features (resources, domains, secrets) were hard to find.",
        "Workflows felt different from page to page.",
        "For teams running many projects, the console didn't really scale. It was easy to get lost in deployments and states.",
        "Visually, the UI didn't match the maturity of the platform itself, it looked more \"early beta\" than \"production ready\".",
      ],
    },
    {
      type: "p",
      text: "On the design side, there was another quiet villain: visual debt. No single catastrophic decision, just years of small, slightly different choices. Every time you touched a screen, you had to decide which button, which border, which gray, which radius you were going to pretend was \"the real one\".",
    },
    {
      type: "img",
      src: "/case-studies/shuttle-problems.png",
      alt: "Visual debt",
      aspect: "16/9",
      priority: true,
    },
  ],
};

export const shuttleProductMoves: SectionData = {
  heading: "Product moves",
  blocks: [
    {
      type: "p",
      text: "The redesign wasn't just about fresh paint, it was about making key workflows obvious and predictable:",
    },
    {
      type: "ul",
      items: [
        <>
          <strong>Project overview</strong> became the home base: deployments,
          resources, domains and quick actions all live in one place.
        </>,
        <>
          <strong>Deployments</strong> now highlight the important bits: commit
          message / ID, environment, status, plus full-screen logs when you need
          to go deep.
        </>,
        <>
          <strong>Domains</strong> walk you through setup with copy-paste CNAMEs
          and clear validation states — no guessing whether things are "still
          propagating or just broken".
        </>,
        <>
          <strong>Secrets &amp; resources</strong> got their own dedicated,
          consistent flows, instead of being tucked into whatever page had room.
        </>,
        <>
          <strong>Compute size</strong> surfaces the right config as pre-filled
          snippets. You still change things in code — the console just points you
          to a good starting point.
        </>,
      ],
    },
    {
      type: "p",
      text: "The console stays opinionated: it shows you what's running and helps you do the right thing, without trying to be an IDE in the browser.",
    },
  ],
};

export const shuttleTaming: SectionData = {
  heading: "Taming the UI (a.k.a. 62 borders later)",
  blocks: [
    {
      type: "p",
      text: "The first step was deciding what should even exist in the UI toolkit. We aligned on a small set of primitives and forced everything through that lens:",
    },
    {
      type: "ul",
      items: [
        <>
          A tighter <strong>token set</strong> for colors, radii, spacing and
          typography. Enough to express hierarchy, not enough to improvise a new
          card style every Tuesday.
        </>,
        <>
          A single <strong>card language</strong> for panels, tables and detail
          views, so new features "snap into" the existing layout instead of
          inventing their own.
        </>,
        <>
          <strong>Navigation and page headers</strong> that follow the same
          pattern across the console — you always know where you are and what you
          can do from there.
        </>,
      ],
    },
    {
      type: "p",
      text: "The result: less time deciding which gray to use, more time actually designing workflows.",
    },
    {
      type: "img",
      src: "/case-studies/shuttle-tokens.png",
      alt: "Tokens used in the console",
      aspect: "16/9",
      priority: true,
    },
  ],
};

export const shuttleOutcome: SectionData = {
  heading: "What it unlocked",
  blocks: [
    {
      type: "p",
      text: "For smaller teams, the console now feels calmer and more direct. You're never more than a click away from the things you actually care about: deployments, logs, domains and resources.",
    },
    {
      type: "p",
      text: "For heavier users, it's finally something that scales: clearer structure, predictable patterns, and a design language that can keep up with the platform instead of fighting it.",
    },
    {
      type: "p",
      text: "And for the team, it's a UI foundation that's a lot less \"which border is this\" and a lot more \"cool, we can ship this\".",
    },
  ],
};
