"use client";

import * as React from "react";
import Link from "next/link";
import {
  GraphicOwnership,
  GraphicDomains,
  GraphicCollaboration,
  GraphicFocusAreas,
} from "@/components/home/CapabilityGraphics";
import { ArrowRight } from "@/components/icons";
import { PageShell } from "@/components/layout/PageShell";

type Capability = {
  title: string;
  description?: string;
  Graphic: React.ComponentType;
  borders: string;
  cta?: { href: string; label: string };
};

const capabilities: Capability[] = [
  {
    title: "Ownership",
    description: "From early concept to shipped product.",
    Graphic: GraphicOwnership,
    borders: "border-b border-color-border-inset md:border-r",
  },
  {
    title: "Domains",
    description: "Devtools, marketplaces, logistics platforms.",
    Graphic: GraphicDomains,
    borders: "border-b border-color-border-inset",
    cta: { href: "/projects", label: "Projects" },
  },
  {
    title: "Collaboration",
    description: undefined,
    Graphic: GraphicCollaboration,
    borders: "border-b md:border-b-0 md:border-r border-color-border-inset",
  },
  {
    title: "Focus areas",
    description: "Clarifying direction, shaping flows, building systems.",
    Graphic: GraphicFocusAreas,
    borders: "md:border-b-0 border-color-border-inset",
  },
];

export function OverviewContent() {
  return (
    <PageShell>
      <div className="w-full max-w-3xl mx-auto mt-4xl font-geist">
        <h1 className="type-h1 text-balance mb-5 text-center">
          I define products while they&apos;re still taking shape.
        </h1>

        <p className="type-body max-w-xl mb-12 text-color-text-secondary mx-auto text-center">
          Hi, I&apos;m Ana. I work closely with founders and engineers to define
          direction, shape flows, and build visual systems that are ready to
          ship.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 mb-12 border-t border-b border-color-border-inset">
          {capabilities.map(({ title, description, Graphic, borders, cta }) => (
            <div
              key={title}
              className={`relative h-[160px] p-4 ${borders}`}
            >
              <Graphic />
              <div className="relative z-10 flex flex-col gap-1 max-w-[200px]">
                <h3 className="type-body font-medium text-color-text-primary">
                  {title}
                </h3>
                {description && (
                  <p className="type-body-sm">
                    {description}
                  </p>
                )}
              </div>
              {cta && (
                <Link
                  href={cta.href}
                  className="absolute bottom-4 left-4 z-10 flex items-center gap-1 pl-sm pr-xs py-xs rounded-full border border-color-border-secondary type-body-sm text-color-0 transition-colors"
                  style={{ backgroundColor: "#B8D652" }}
                >
                  {cta.label}
                  <ArrowRight size={20} />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

