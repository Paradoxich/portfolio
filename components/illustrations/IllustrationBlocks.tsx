"use client";

import Image from "next/image";

export type IllustrationImage = {
  src: string;
  alt: string;
};

export type IllustrationBlock = {
  id: string;
  hero: IllustrationImage;
  stack: [IllustrationImage, IllustrationImage];
  description?: string;
};

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

