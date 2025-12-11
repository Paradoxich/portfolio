// app/projects/page.tsx
"use client";

import { projectsConfig } from "../../components/projects/ProjectsConfig";
import { ProjectCard } from "../../components/projects/ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <div className="page-shell stack-xl">
        {/* HEADER */}
        <header className="layout-grid hero-gap">
          <section className="col-span-12 md:col-span-5">
            <h1 className="type-h1 text-balance">
              A look at the work I do{" "}
              <span className="text-color-text-secondary font-normal">
                when I'm not watering UI plants.
              </span>
            </h1>
          </section>
        </header>

        {/* PROJECT GRID */}
        <div className="layout-grid">
          <section className="col-span-12">
            <div className="grid gap-gutter md:grid-cols-2">
              {projectsConfig.map((p) => (
                <ProjectCard
                  key={p.key}
                  label={p.label}
                  title={p.title}
                  href={`/projects/${p.key}`}
                  hero={p.hero}
                  theme={p.theme}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
