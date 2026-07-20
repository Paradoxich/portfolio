"use client";

import * as React from "react";
import Link from "next/link";
import {
  GraphicOwnership,
  GraphicDomains,
  GraphicCollaboration,
  GraphicFocusAreas,
} from "@/components/home/CapabilityGraphics";
import { PageShell } from "@/components/layout/PageShell";
import {
  CheckmarkCircle,
  LocationPin,
  NodeNetwork,
} from "@/components/icons";

type Capability = {
  title: string;
  description?: string;
  Graphic: React.ComponentType;
  borders: string;
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
      <div className="w-full max-w-3xl mx-auto font-geist">
        <div className="mt-xl mb-2xl flex justify-center">
          <a
            href="https://santolina.app"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-sm rounded-sm border border-color-border bg-color-bg-card px-sm py-xs type-body-sm text-color-text-tertiary transition-colors hover:bg-color-bg-muted hover:text-color-text-secondary"
          >
            <span
              className="size-1 shrink-0 rounded-full bg-color-success"
              aria-hidden
            />
            Building Santolina
          </a>
        </div>

        <h1 className="type-h1 text-balance mb-5 text-center">
          I define products while they&apos;re still taking shape.
        </h1>

        <p className="type-body max-w-xl mb-6 text-color-text-secondary mx-auto text-center">
          Hi, I&apos;m Ana. I work closely with founders and engineers to define
          direction, shape flows, and build visual systems that are ready to
          ship.
        </p>

        <div className="mb-12 flex justify-center gap-sm">
          <Link
            href="/docs/CV-Ana-Beverin-2026.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 px-md py-sm rounded-full border border-color-border-secondary type-body-sm font-medium text-color-text-primary bg-transparent hover:bg-color-bg-muted"
          >
            View CV
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 px-md py-sm rounded-full type-body-sm font-medium text-color-cta-primary-text transition-colors bg-color-cta-primary hover:bg-color-cta-primary-hover"
          >
            Explore Projects
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 mb-12 border-t border-color-border-inset border-b">
          {capabilities.map(({ title, description, Graphic, borders }) => (
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
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2xl md:gap-4xl">
          <div className="flex items-center gap-2 text-color-text-tertiary">
            <CheckmarkCircle size={20} />
            <p className="type-body-sm text-color-text-tertiary">
              Available for full-time roles
            </p>
          </div>
          <div className="flex items-center gap-2 text-color-text-tertiary">
            <LocationPin size={20} />
            <p className="type-body-sm text-color-text-tertiary">
              <a
                href="https://maps.app.goo.gl/gfYdzGSivbaBxctn8"
                target="_blank"
                rel="noreferrer"
                className="hover:underline hover:text-color-text-primary"
              >
                Croatia · UTC +2
              </a>
            </p>
          </div>
          <div className="flex items-center gap-2 text-color-text-tertiary">
            <NodeNetwork size={20} />
            <p className="type-body-sm text-color-text-tertiary">
              Remote collaboration
            </p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

