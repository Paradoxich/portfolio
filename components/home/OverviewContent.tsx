 "use client";

import {
  GraphicOwnership,
  GraphicDomains,
  GraphicCollaboration,
  GraphicFocusAreas,
} from "@/components/home/CapabilityGraphics";
import { PageShell } from "@/components/layout/PageShell";

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
    <PageShell>
      <div className="w-full max-w-3xl mx-auto mt-4xl font-geist">
        <h1 className="type-hero text-balance mb-5 text-center">
          I define products while they&apos;re still taking shape.
        </h1>

        <p className="type-body leading-body max-w-xl mb-12 text-color-text-secondary mx-auto text-center">
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
              <div className="relative z-10 flex flex-col gap-1 max-w-[200px]">
                <h3 className="type-body-sm type-capability-text font-medium text-color-text-primary">
                  {title}
                </h3>
                {description && (
                  <p className="type-caption type-capability-text text-color-text-secondary">
                    {description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

