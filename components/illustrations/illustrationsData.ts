import type { IllustrationBlock } from "./IllustrationBlocks";

const uiProjects: { slug: string; label: string; description: string }[] = [
  {
    slug: "audible-block",
    label: "Audible – console",
    description: "Console storyboards for the Audible design language.",
  },
  {
    slug: "dummy-block",
    label: "Dummy data viz",
    description: "Playful wayfinding for a data-heavy release.",
  },
  {
    slug: "five-block",
    label: "Five OS",
    description: "System monitors exploring multi-surface layouts.",
  },
  {
    slug: "grow-game",
    label: "Grow game",
    description: "Narrative HUD experiments for in-app events.",
  },
  {
    slug: "shaolin-block",
    label: "Shaolin",
    description: "Training companion screens with energy gradients.",
  },
  {
    slug: "worldcoin-block",
    label: "Worldcoin console",
    description: "Identity orchestration screens set on dark glass.",
  },
  {
    slug: "worldcoin-o-block",
    label: "Worldcoin Ø",
    description: "Motion frames for the Ø identity launch.",
  },
];

export const uiIllustrationBlocks: IllustrationBlock[] = uiProjects.map(
  ({ slug, label, description }) => ({
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
    description,
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

