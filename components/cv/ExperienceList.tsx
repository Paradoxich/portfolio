"use client";

import { useState } from "react";
import Link from "next/link";
import type { CvExperience } from "@/lib/cv";

const linkedLabel = "text-color-text-primary hover:underline underline-offset-2";

// The work history as an accordion: each row shows company / role / period with
// a plus toggle that expands the project description. All entries start
// collapsed. The panel animates height via the grid 0fr→1fr row technique.
export function ExperienceList({ items }: { items: CvExperience[] }) {
  const [open, setOpen] = useState<Record<number, boolean>>({});
  const toggle = (i: number) =>
    setOpen((prev) => ({ ...prev, [i]: !prev[i] }));

  return (
    <div className="divide-y divide-color-border-inset">
      {items.map((job, i) => {
        const isOpen = Boolean(open[i]);
        const panelId = `experience-panel-${i}`;
        return (
          <div key={job.company + job.period} className="py-lg first:pt-0">
            <button
              type="button"
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="group flex w-full items-start justify-between gap-lg text-left"
            >
              <div className="flex flex-col gap-1 md:flex-row md:flex-wrap md:items-baseline md:gap-x-md md:gap-y-1">
                <span className="type-body font-medium text-color-text-primary">
                  {job.company}
                </span>
                <span className="type-body-sm text-color-text-secondary">
                  {job.role}
                </span>
                <span className="type-body-sm text-color-text-tertiary md:hidden">
                  {job.period}
                </span>
              </div>
              <div className="flex shrink-0 items-center gap-lg">
                <span className="hidden type-body-sm text-color-text-tertiary md:inline">
                  {job.period}
                </span>
                <span className="flex h-5 w-5 items-center justify-center text-color-text-tertiary transition-colors group-hover:text-color-text-primary">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden
                    className={`transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                  >
                    <path
                      d="M8 3v10M3 8h10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </div>
            </button>

            <div
              id={panelId}
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <div className="stack-md pt-2xl">
                  {job.summary?.split("\n\n").map((para, j) => (
                    <p key={j} className="type-body text-color-text-secondary">
                      {para}
                    </p>
                  ))}
                  {job.bullets && (
                    <ul className="stack-sm">
                      {job.bullets.map((b) => (
                        <li
                          key={b.label}
                          className="type-body text-color-text-secondary"
                        >
                          {b.href ? (
                            <Link
                              href={b.href}
                              className={`type-body-strong ${linkedLabel}`}
                            >
                              {b.label}
                            </Link>
                          ) : (
                            <span className="type-body-strong text-color-text-primary">
                              {b.label}
                            </span>
                          )}
                          : {b.text}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
