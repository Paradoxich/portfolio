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
      <div className="absolute left-4 right-4 bottom-4 flex items-center justify-center pointer-events-none">
        {/* Toggle pill */}
        <div className="pointer-events-auto inline-flex items-center gap-1 p-1 rounded-full bg-color-bg-surface/95 border border-color-border backdrop-blur-md shadow-lg">
          <button
            type="button"
            onClick={() => setView("before")}
            className={`px-4 py-2 rounded-full type-body-sm font-medium transition-all ${
              view === "before"
                ? "bg-color-text-primary text-color-bg"
                : "text-color-text-secondary hover:text-color-text-primary"
            }`}
          >
            Before
          </button>
          <button
            type="button"
            onClick={() => setView("after")}
            className={`px-4 py-2 rounded-full type-body-sm font-medium transition-all ${
              view === "after"
                ? "bg-color-text-primary text-color-bg"
                : "text-color-text-secondary hover:text-color-text-primary"
            }`}
          >
            After
          </button>
        </div>
      </div>
    </div>
  );
}