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

const iconAvailableForProjects =
  "http://localhost:3845/assets/de66c5c94ea188247a661b8f26c681b425d699fa.svg";
const iconLocation =
  "http://localhost:3845/assets/422ec033dcb881e4a03cd08641abc48cee8d392a.svg";
const iconRemoteCollaboration =
  "http://localhost:3845/assets/c67c7921c7240a17bf596154816420c9013860bd.svg";

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
      <div className="w-full max-w-3xl mx-auto mt-4xl font-geist">
        <h1 className="type-h1 text-balance mb-5 text-center">
          I define products while they&apos;re still taking shape.
        </h1>

        <p className="type-body max-w-xl mb-6 text-color-text-secondary mx-auto text-center">
          Hi, I&apos;m Ana. I work closely with founders and engineers to define
          direction, shape flows, and build visual systems that are ready to
          ship.
        </p>

        <div className="mb-8 flex justify-center gap-sm">
          <Link
            href="/docs/CV-Beverin-2026.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 px-md py-sm rounded-full border border-color-border-secondary type-body-sm font-medium text-color-text-primary bg-transparent"
          >
            View CV
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 px-md py-sm rounded-full border border-color-border-secondary type-body-sm font-medium text-color-0 transition-colors"
            style={{ backgroundColor: "#B8D652" }}
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

        <div className="mt-6 flex flex-wrap items-center justify-center gap-[32px] md:gap-[56px] opacity-60">
          <div className="flex items-center gap-2">
            <img
              src={iconAvailableForProjects}
              alt=""
              className="h-5 w-5"
            />
            <p className="type-body-sm text-color-text-secondary">
              Available for new projects
            </p>
          </div>
          <div className="flex items-center gap-2">
            <img src={iconLocation} alt="" className="h-5 w-5" />
            <p className="type-body-sm text-color-text-secondary">
              Croatia · CET (UTC+1)
            </p>
          </div>
          <div className="flex items-center gap-2">
            <img
              src={iconRemoteCollaboration}
              alt=""
              className="h-5 w-5"
            />
            <p className="type-body-sm text-color-text-secondary">
              Remote collaboration
            </p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

