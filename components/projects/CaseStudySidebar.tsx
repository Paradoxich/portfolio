"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { projectsConfig } from "@/components/projects/ProjectsConfig";
import { ArrowLeft } from "@/components/icons";

// Thumbnails live in public/projects/thumbs/<slug>.png, cropped from the
// project card art.
const caseStudies = projectsConfig
  .filter((p) => p.Page)
  .map((p) => ({
    slug: p.slug ?? p.key,
    label: p.label ?? p.title,
    thumb: `/projects/thumbs/${p.slug ?? p.key}.png`,
  }));

const rowClass =
  "flex h-12 w-full items-center rounded-sm type-body-sm tracking-tight transition-colors";

// Local left rail for case study pages. Desktop only; mobile keeps the
// in-page back link and bottom prev/next navigation.
export function CaseStudySidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 hidden max-h-dvh w-[230px] shrink-0 flex-col self-start overflow-y-auto border-r border-color-border-inset bg-color-bg md:flex">
      <nav className="flex flex-col gap-1 p-sm">
        <Link
          href="/"
          className={`${rowClass} text-color-text-secondary hover:bg-color-bg-muted hover:text-color-text-primary`}
        >
          <span className="flex size-12 shrink-0 items-center justify-center">
            <ArrowLeft size={20} />
          </span>
          Back to home
        </Link>

        <div className="h-px w-full bg-color-border-inset" aria-hidden />

        <p className="flex h-12 items-end px-base py-sm type-body-sm tracking-tight text-color-text-primary">
          Case studies
        </p>

        {caseStudies.map(({ slug, label, thumb }) => {
          const active = pathname === `/projects/${slug}`;

          return (
            <Link
              key={slug}
              href={`/projects/${slug}`}
              aria-current={active ? "page" : undefined}
              className={`${rowClass} ${
                active
                  ? "bg-color-bg-muted text-color-text-primary"
                  : "text-color-text-secondary hover:bg-color-bg-muted hover:text-color-text-primary"
              }`}
            >
              <span className="flex size-12 shrink-0 items-center justify-center">
                <Image
                  src={thumb}
                  alt=""
                  width={24}
                  height={24}
                  className="size-6 rounded-sm border border-color-border-subtle object-cover"
                />
              </span>
              {label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
