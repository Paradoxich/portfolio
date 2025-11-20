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
  "Product/Marketing illustrations I create lean on controlled, thoughtful color — the kind that balances contrast with softness and lands in those warm, interesting harmonies that make a scene feel alive.",
  "There’s a clear style running through the lines, shapes, and characters, but it never collapses into one formula; it stays varied without losing its identity.",
  "The characters always carry a bit of personality, whether they’re simple, geometric, or intentionally odd — nothing generic, nothing stocky.",
  "I like mixing flat simplicity with just enough depth to create atmosphere: soft shadows, subtle layering, small details that add dimension without clutter. ",
  "And there’s always a tiny element that lifts the piece — a texture, a gesture, a strange proportion. ",
  "The compositions stay warm and expressive, and the whole system works well across product, brand and narrative contexts without losing its charm.",
  
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

