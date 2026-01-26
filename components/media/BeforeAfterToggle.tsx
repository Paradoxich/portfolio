"use client";

import * as React from "react";
import Image from "next/image";

type BeforeAfterToggleProps = {
  beforeSrc: string;
  afterSrc: string;
  altBefore?: string;
  altAfter?: string;
  defaultView?: "before" | "after";
  className?: string;
};

export function BeforeAfterToggle({
  beforeSrc,
  afterSrc,
  altBefore = "Before",
  altAfter = "After",
  defaultView = "before",
  className = "",
}: BeforeAfterToggleProps) {
  const [view, setView] = React.useState<"before" | "after">(defaultView);

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Images (crossfade) */}
      <div className="absolute inset-0">
        <Image
          src={beforeSrc}
          alt={altBefore}
          fill
          className={`object-cover transition-opacity duration-300 ${
            view === "before" ? "opacity-100" : "opacity-0"
          }`}
          priority
        />
        <Image
          src={afterSrc}
          alt={altAfter}
          fill
          className={`object-cover transition-opacity duration-300 ${
            view === "after" ? "opacity-100" : "opacity-0"
          }`}
          priority
        />
      </div>

      {/* Bottom controls */}
      <div className="absolute left-3 right-3 bottom-3 flex items-center justify-between pointer-events-none">
        {/* Small state label */}
        <div className="px-2 py-0.5 rounded-full bg-color-bg-surface/80 text-[11px] leading-none text-color-text-secondary border border-color-border-secondary backdrop-blur-sm">
          {view === "before" ? "Before" : "After"}
        </div>

        {/* Action button */}
        <button
          type="button"
          onClick={() => setView((v) => (v === "before" ? "after" : "before"))}
          className="pointer-events-auto h-8 px-3 rounded-full border border-color-border-secondary bg-color-bg-surface type-body-xs transition-colors hover:bg-color-bg-muted"
        >
          {view === "before" ? "See after" : "See before"}
        </button>
      </div>
    </div>
  );
}