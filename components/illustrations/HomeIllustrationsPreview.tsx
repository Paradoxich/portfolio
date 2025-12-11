// components/illustrations/HomeIllustrationsPreview.tsx
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const ILLUSTRATION_IMAGES = [
  // UI illustrations
  "/illustrations/ui/worldcoin-o-block-hero.png",
  "/illustrations/personal/illustration-1.png",
  "/illustrations/ui/worldcoin-block-hero.png",
  "/illustrations/personal/illustration-2.png",
  "/illustrations/ui/five-block-hero.png",
  "/illustrations/personal/illustration-5.png",
  "/illustrations/ui/audible-block-hero.png",
  "/illustrations/personal/illustration-4.png",
  "/illustrations/ui/shaolin-block-hero.png",
  "/illustrations/personal/illustration-3.png",
  "/illustrations/ui/grow-game-hero.png",
  "/illustrations/ui/worldcoin-o-block-top.png",
 
  
 
 
 
];

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

export function HomeIllustrationsPreview() {
  // Use original order during SSR to avoid hydration mismatch
  const [images, setImages] = useState(() => {
    // Default to original order duplicated for SSR
    return [...ILLUSTRATION_IMAGES, ...ILLUSTRATION_IMAGES];
  });

  // Shuffle only on client side after mount
  useEffect(() => {
    const shuffled = shuffle(ILLUSTRATION_IMAGES);
    setImages([...shuffled, ...shuffled]); // dupli strip za smooth loop
  }, []);

  return (
    <div className="group relative h-[200px] overflow-hidden border border-[#111010]">
      <div className="absolute inset-0">
        <div
          className="flex h-full items-center gap-[8px] min-w-max will-change-transform animate-illustration-pan [animation-play-state:paused] group-hover:[animation-play-state:running]"
        >
          {images.map((src, index) => (
            <div
              key={`${src}-${index}`}
              className="flex h-full shrink-0 items-center justify-center "
            >
              <Image
                src={src}
                alt=""
                width={0}
                height={200}
                sizes="(max-width: 768px) 200px, 300px"
                className="h-full w-auto object-contain rounded-surface"
                priority={index < 2}
              />
            </div>
          ))}
        </div>
      </div>

      

      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#111010_0%,rgba(17,16,16,0)_50.48%,#111010_100%)]" />
   
    </div>
  );
}
