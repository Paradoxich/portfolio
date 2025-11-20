"use client";

import Image from "next/image";

type IllustrationImage = {
  src: string;
  alt: string;
};

export type IllustrationBlock = {
  id: string;
  hero: IllustrationImage;
  stack: [IllustrationImage, IllustrationImage];
  description?: string;
};

const createPlaceholder = (label: string) => {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='600'><rect width='100%' height='100%' fill='%23100F0C'/><text x='50%' y='50%' font-size='48' fill='%23F5F2EC' font-family='Helvetica, Arial, sans-serif' text-anchor='middle' alignment-baseline='middle'>${label}</text></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const baseBlocks = (prefix: string): IllustrationBlock[] => [
  {
    id: `${prefix}-hero-console`,
    hero: {
      src: createPlaceholder(`${prefix} · Feature shot`),
      alt: `${prefix} hero illustration`,
    },
    stack: [
      {
        src: createPlaceholder(`${prefix} · Detail A`),
        alt: `${prefix} detail illustration A`,
      },
      {
        src: createPlaceholder(`${prefix} · Detail B`),
        alt: `${prefix} detail illustration B`,
      },
    ],
    description: "Block description…",
  },
  {
    id: `${prefix}-hero-analytics`,
    hero: {
      src: createPlaceholder(`${prefix} · Narrative`),
      alt: `${prefix} hero illustration 2`,
    },
    stack: [
      {
        src: createPlaceholder(`${prefix} · System map`),
        alt: `${prefix} stacked illustration A`,
      },
      {
        src: createPlaceholder(`${prefix} · UI overlay`),
        alt: `${prefix} stacked illustration B`,
      },
    ],
    description: "Block description…",
  },
  {
    id: `${prefix}-hero-flow`,
    hero: {
      src: createPlaceholder(`${prefix} · Flow`),
      alt: `${prefix} hero illustration 3`,
    },
    stack: [
      {
        src: createPlaceholder(`${prefix} · Sketch`),
        alt: `${prefix} stacked illustration C`,
      },
      {
        src: createPlaceholder(`${prefix} · Texture`),
        alt: `${prefix} stacked illustration D`,
      },
    ],
    description: "Block description…",
  },
];

export const uiIllustrationBlocks = baseBlocks("UI");
export const personalIllustrationBlocks = baseBlocks("Personal");

type IllustrationBlocksProps = {
  blocks: IllustrationBlock[];
  variant?: "default" | "triptych";
};

export function IllustrationBlocks({
  blocks,
  variant = "default",
}: IllustrationBlocksProps) {
  return (
    <div className="flex flex-col gap-14">
      {blocks.map((block, index) => {
        const isReversed = index % 2 === 1;
        const triptychImages = [block.hero, ...block.stack];

        return (
          <div key={block.id} className="flex flex-col gap-14">
            {variant === "triptych" ? (
              <div className="grid gap-gutter md:grid-cols-3">
                {triptychImages.map((image, imageIndex) => (
                  <div
                    key={`${block.id}-triptych-${imageIndex}`}
                    className="relative h-[280px] w-full overflow-hidden rounded-[var(--radius-lg)] md:h-[340px] lg:h-[593px]"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid gap-gutter lg:grid-cols-12 lg:h-[600px]">
                <div
                  className={`col-span-12 ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  } order-1 relative h-[320px] w-full overflow-hidden rounded-[var(--radius-lg)] lg:col-span-8 lg:h-full`}
                >
                  <Image
                    src={block.hero.src}
                    alt={block.hero.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 960px"
                    priority={index === 0}
                  />
                </div>

                <div
                  className={`col-span-12 ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  } order-2 flex flex-col gap-gutter lg:col-span-4`}
                >
                  {block.stack.map((image, stackIndex) => (
                    <div
                      key={`${block.id}-stack-${stackIndex}`}
                      className="relative h-[240px] w-full overflow-hidden rounded-[var(--radius-lg)] lg:h-[300px]"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 480px"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {index < blocks.length - 1 ? (
              <div className="py-14">
                <p className="type-body text-color-text-secondary">
                  {block.description ?? "Block description…"}
                </p>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

