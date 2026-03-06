"use client";

import {
  GraphicOwnership,
  GraphicDomains,
  GraphicCollaboration,
  GraphicFocusAreas,
} from "@/components/home/CapabilityGraphics";

const capabilities = [
  {
    title: "Ownership",
    description: "From early concept to shipped product.",
    Graphic: GraphicOwnership,
    borders: "border-b border-color-10 md:border-r",
  },
  {
    title: "Domains",
    description: "Devtools, marketplaces, logistics platforms.",
    Graphic: GraphicDomains,
    borders: "border-b border-color-10",
  },
  {
    title: "Collaboration",
    description: undefined as string | undefined,
    Graphic: GraphicCollaboration,
    borders: "border-b md:border-b-0 md:border-r border-color-10",
  },
  {
    title: "Focus areas",
    description: "Clarifying direction, shaping flows, building systems.",
    Graphic: GraphicFocusAreas,
    borders: "md:border-b-0 border-color-10",
  },
] as const;

export function OverviewContent() {
  return (
    <div className="w-full max-w-3xl mx-auto px-6 md:px-12 py-12 md:py-16 font-geist">
      <h1 className="type-hero text-balance mb-5">
        <span className="text-color-text-primary font-medium">
          I define products while{" "}
        </span>
        <span className="text-color-text-secondary font-normal">
          they&apos;re still taking shape.
        </span>
      </h1>

      <p className="type-body leading-body max-w-xl mb-12 text-color-text-secondary">
        Hi, I&apos;m Ana. I work closely with founders and engineers to define
        direction, shape flows, and build visual systems that are ready to
        ship.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 mb-12 border-t border-b border-color-10">
        {capabilities.map(({ title, description, Graphic, borders }) => (
          <div
            key={title}
            className={`relative h-[160px] p-4 ${borders}`}
          >
            <Graphic />
            <div className="relative z-10 flex flex-col gap-1">
              <h3 className="type-body-sm font-medium text-color-text-primary">
                {title}
              </h3>
              {description && (
                <p className="type-caption text-color-text-secondary max-w-[180px]">
                  {description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <a
        href="/docs/CV-Beverin-2026.pdf"
        target="_blank"
        rel="noreferrer"
        className="btn-secondary"
      >
        View CV
      </a>
    </div>
  );
}
