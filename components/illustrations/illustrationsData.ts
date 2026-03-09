import type { IllustrationBlock } from "./IllustrationBlocks";

const uiProjects: { slug: string; label: string }[] = [
  {
    slug: "worldcoin-o-block",
    label: "Worldcoin Ø",
  },
  {
    slug: "five-block",
    label: "Five OS",
  },
  {
    slug: "audible-block",
    label: "Audible – console",
  },
  {
    slug: "worldcoin-block",
    label: "Worldcoin console",
  },
  {
    slug: "dummy-block",
    label: "Dummy data viz",
  },
  {
    slug: "grow-game",
    label: "Grow game",
  },
  {
    slug: "shaolin-block",
    label: "Shaolin",
  },
];

export const uiCopyTexts = [
  "Worldcoin illustration system.",
  "Five Agency illustration system.",
  "Audible illustration concept.",
  "Worldcoin illustration system. ",
  "For Dummies Guy concept ",
  "Marriott Grow Game characters. ",
  "OptimoRoutes’ Shaolin Dev illustration system.",
  
];

export const uiIllustrationBlocks: IllustrationBlock[] = uiProjects.map(
  ({ slug, label }) => ({
    id: slug,
    hero: {
      src: `/illustrations/ui/${slug}-hero.png`,
      alt: `${label} hero illustration`,
    },
    stack: [
      {
        src: `/illustrations/ui/${slug}-top.png`,
        alt: `${label} detail (top)`,
      },
      {
        src: `/illustrations/ui/${slug}-bottom.png`,
        alt: `${label} detail (bottom)`,
      },
    ],
  })
);

const PERSONAL_TOTAL = 12;
const PERSONAL_PER_BLOCK = 3;

export const personalIllustrationBlocks: IllustrationBlock[] = Array.from(
  { length: PERSONAL_TOTAL / PERSONAL_PER_BLOCK },
  (_, blockIndex) => {
    const start = blockIndex * PERSONAL_PER_BLOCK + 1;
    const ids = Array.from({ length: PERSONAL_PER_BLOCK }, (_, offset) => start + offset);
    const [first, second, third] = ids.map((id) => `/illustrations/personal/illustration-${id}.png`);

    return {
      id: `personal-${blockIndex + 1}`,
      hero: {
        src: first,
        alt: `Personal illustration ${start}`,
      },
      stack: [
        {
          src: second,
          alt: `Personal illustration ${start + 1}`,
        },
        {
          src: third,
          alt: `Personal illustration ${start + 2}`,
        },
      ],
      description: "Personal sketchbook pages, grouped loosely by vibe.",
    };
  }
);

