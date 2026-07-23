import type { SectionData } from "../CaseStudyLayout";

function ExtLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="underline underline-offset-2 hover:text-color-text-primary transition-colors"
    >
      {children}
    </a>
  );
}

const SantolinaLink = () => (
  <ExtLink href="https://santolina.app">santolina.app</ExtLink>
);

function Strong({ children }: { children: React.ReactNode }) {
  return <strong className="font-semibold text-color-text-emphasis">{children}</strong>;
}

export const santolinaMeta = {
  title: "Designing, engineering, and shipping an AI-native product",
  subtitle: "",
  meta: "2026",
  links: [{ href: "https://santolina.app", label: "santolina.app" }],
  tldrItems: [
    <>
      Designed and built Santolina, an AI-native garden planning app.
      Publicly usable at <SantolinaLink /> and in active development ahead of
      an official launch.
    </>,
    "The work spans product strategy, brand, a custom illustration style and image treatment, interface design, the data model, and the code that ships it.",
    "Treated AI as infrastructure: Claude enriches a botanical catalog through versioned curation passes, with guard scripts that flag issues but never edit data.",
  ],
};

export const santolinaContext: SectionData = {
  heading: "Context",
  blocks: [
    {
      type: "p",
      text: "Santolina is a garden planning app for beginner to intermediate gardeners. You explore a curated plant catalog, narrow it down by the conditions that matter (sun, bloom season, style, color, what is native to your region), and build a garden from plants that actually fit. Plants move from planned to growing as your garden becomes real, with seasonal guidance and a private diary along the way.",
    },
    {
      type: "p",
      text: (
        <>
          I designed and built it alone, end to end: product definition, brand,
          illustration, interface design, data model, and the code that ships
          it. It runs on Next.js and Supabase, deploys to <SantolinaLink />,
          and the whole process is written up publicly in{" "}
          <ExtLink href="https://paradoxich.substack.com">
            Figuring It Out
          </ExtLink>
          , an essay series about building it.
        </>
      ),
    },
  ],
};

export const santolinaContextImage: SectionData = {
  fullWidth: true,
  blocks: [
    {
      type: "img",
      src: "/case-studies/santolina-dashboard-framed.png",
      alt: "Santolina dashboard interface",
      aspect: "2200/1429",
      priority: true,
    },
  ],
};

export const santolinaProblem: SectionData = {
  heading: "The problem: plant knowledge does not fit in a database",
  blocks: [
    {
      type: "p",
      text: "Every gardening app ends up becoming a database of plants. Encyclopedic catalogs give you thousands of species with no opinion about what belongs in your garden. Task apps give you reminders with no understanding of plants at all. Santolina is built to remember the garden instead.",
    },
    {
      type: "p",
      text: "What a beginner actually needs is curation: which plants suit these conditions and this style, what to expect from them through the year, and what to do next. That is a judgment problem layered on top of a data problem, which made it a good fit for structured plant data combined with AI.",
    },
    {
      type: "p",
      text: "Botanical APIs get you part of the way. They are strong on taxonomy and weak on everything a gardener asks about: care, styling, seasonal rhythm, what pairs well with what. The interesting work was filling that gap without letting AI-generated content quietly corrupt the catalog. And the product holding all of it had to feel like a design tool with a gardener's patience, not an encyclopedia.",
    },
  ],
};

export const santolinaCraft: SectionData = {
  heading: "The craft: the garden is the decorative part",
  blocks: [
    {
      type: "p",
      text: "The visual direction is governed by one rule, and the rule came out of a dead end from early explorations. A clean light theme that could have belonged to any product, and a fashionable glass direction full of blur and translucency that died the moment it sat next to plant photography. The garden photography is already the decorative part, so whatever visual personality Santolina has lives where the plants are not.",
    },
    {
      type: "p",
      text: "That personality is dither, the one purely digital effect in the product. It fits: Santolina's whole job is bringing something analog, a garden, into a digital space. Empty states get vintage engraved botanicals instead of a grey icon and an apology, and the landing page and explore color cards run their imagery through a custom WebGL grain. Plant photos stay clean; the grain belongs to the interface, not the garden. I used AI to compress weeks of illustration exploration into days, then hand-dithered every final piece in Figma, because the grain is where the style lives.",
    },
  ],
};

export const santolinaCraftImage: SectionData = {
  blocks: [
    {
      type: "img",
      src: "/case-studies/santolina-hero.png",
      alt: "Dithered santolina photography beside an engraved butterfly and a garden insight card",
      aspect: "2200/1237",
    },
  ],
};

export const santolinaCraftSystem: SectionData = {
  blocks: [
    {
      type: "p",
      text: "Gardens do not live in light grey or dark grey, so Santolina's neutrals are green: four ramps, sage, fern, honey, and brick, built in OKLCH so the lightness steps stay even while the hue holds. Most of the work was not choosing green, it was making green behave like a neutral.",
    },
    {
      type: "p",
      text: "Underneath sits a three-tier token architecture where roles describe function and never location, documented on a living design-system page that renders straight from the shipped tokens, with code as the source of truth and Figma syncing from it. All of it lives in Paradox UI, a component library kept separate from the app so it can ship as its own product.",
    },
  ],
};

export const santolinaDecisions: SectionData = {
  heading: "Key decisions",
  blocks: [
    {
      type: "p",
      text: (
        <>
          <Strong>The AI does its work before users ever see it.</Strong> The
          catalog is seeded from the Trefle botanical API, then enriched by
          offline Claude passes that
          fill what an API cannot: care instructions, style tags, seasonal
          rhythm, companion pairings, hardiness drafts. Nothing is generated in
          front of the user today, so every recommendation in the product is
          backed by data that was reviewed before it shipped.
        </>
      ),
    },
    {
      type: "p",
      text: (
        <>
          <Strong>Treat AI output like a data migration.</Strong> Every
          enrichment run is a versioned round with a committed manifest,
          backups before anything is changed, and a verify script that fails
          the round if the catalog breaks its own rules. A separate blind
          cross-check pass reviews the
          catalog and flags suspect values but is never allowed to edit data.
          Trust comes from the pipeline, not from the model.
        </>
      ),
    },
    {
      type: "p",
      text: (
        <>
          <Strong>Product language as data model.</Strong> Plants in your
          garden are either Planned or Growing: a draft you act on versus a
          record you inspect. Getting those two states and their transition
          labels right shaped the database schema, the button states, and the
          tone of the whole app.
        </>
      ),
    },
    {
      type: "p",
      text: (
        <>
          <Strong>Solo, but not undisciplined.</Strong> The work went through
          over a hundred merged pull requests, and every significant choice is
          written down in a numbered decision log with rationale and tradeoffs.
          Working alone made that documentation more valuable, because there
          was no one else around to catch a bad call before it shipped.
        </>
      ),
    },
  ],
};

export const santolinaChanges: SectionData = {
  heading: "What changed while building",
  blocks: [
    {
      type: "p",
      text: "A polished end state hides the reversals. Three that mattered:",
    },
    {
      type: "p",
      text: (
        <>
          <Strong>The data provider did not survive contact.</Strong> The plan
          was Perenual. A five-species comparison showed its free tier
          returning nulls and upgrade errors on exactly the fields that
          matter, so I switched to Trefle, open and free, and accepted its
          patchy growth data as a known gap because the curation pipeline
          could fill it.
        </>
      ),
    },
    {
      type: "p",
      text: (
        <>
          <Strong>The onboarding philosophy reversed.</Strong> The original
          stance was no gate: show value immediately, prompt to sign up at
          first save. But almost everything in Santolina writes to your
          garden, so an open app would have meant a sign-up prompt on nearly
          every action except search. Sign-in first with a public landing page
          was the more honest shape. I hold this one loosely; it may flip
          again as the product grows.
        </>
      ),
    },
    {
      type: "p",
      text: (
        <>
          <Strong>The sun model was rebuilt at the root.</Strong> A single
          sun-requirements list kept drafting too narrow, because a lone AI
          pass anchors on the textbook optimum. The first fix was a guarded
          widening step that only applied what a blind second read agreed
          with. The real fix was modelling where a plant thrives
          separately from what it tolerates, with database constraints
          enforcing the split. Once the source data captured both, the
          corrective sweep retired itself.
        </>
      ),
    },
  ],
};

export const santolinaRoadmap: SectionData = {
  heading: "Where it goes next",
  blocks: [
    {
      type: "p",
      text: "The version that is live is a deliberate slice: dashboard, explore, my garden, and diary, enough to validate the core loop of planning and tracking a real garden. The bigger idea is that everything the product records becomes seasonal memory the AI can draw on. Santolina will get a conversational layer, but not a bolted-on chatbot: a garden agent that knows your plants, your conditions, and your history, and gives real recommendations at the moment you need them.",
    },
    {
      type: "ul",
      items: [
        "Guided onboarding that builds a garden profile from location, space, sun, size, and style",
        "The garden agent: chat grounded in your garden's seasonal memory, not generic plant advice",
        "Garden zones, so one garden can hold different growing conditions",
        "Photo-based plant diagnostics",
        "Edible growing, once the ornamental core is solid",
        "Publishing Paradox UI under an MIT license as a standalone design system",
      ],
    },
  ],
};

export const santolinaOutcome: SectionData = {
  heading: "Outcome: a live product, not a portfolio piece",
  blocks: [
    {
      type: "p",
      text: (
        <>
          Santolina is live at <SantolinaLink /> on real infrastructure:
          magic-link and Google auth, row-level security on every user-owned
          table, and private diary photos served through signed URLs. The data
          layer has gone through repeated curation rounds with committed
          provenance, and Paradox UI exists as a published Storybook that the
          app consumes like any external dependency.
        </>
      ),
    },
  ],
};

export const santolinaReflection: SectionData = {
  heading: "Reflection",
  blocks: [
    {
      type: "p",
      text: "The hardest part was not building fast, it was deciding where to be strict. AI tooling makes producing things cheap, which moves the real work to judgment: what to verify, what to write down, what to leave out.",
    },
    {
      type: "p",
      text: "The guard-and-verify pipeline came from an early mistake, trusting an enrichment pass that looked right and was not. Making AI output reviewable and reversible turned it from a liability into infrastructure.",
    },
    {
      type: "p",
      text: "Most of what I practiced at product companies transferred directly to working solo. The surprise was the reverse: shipping a whole product alone sharpened how I scope, sequence, and de-risk work, which is exactly the muscle design teams need as AI collapses the distance between design and code.",
    },
  ],
};
