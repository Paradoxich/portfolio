// app/projects/page.tsx
"use client";

import * as React from "react";
import { projectsConfig } from "../../components/projects/ProjectsConfig";
import { ProjectCard } from "../../components/projects/ProjectCard";
import { ProjectModal } from "../../components/projects/ProjectModal";


export default function ProjectsPage() {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const projectCount = projectsConfig.length;

  const isModalOpen = activeIndex !== null;
  const activeProject =
    activeIndex !== null ? projectsConfig[activeIndex] : null;

  const openProject = React.useCallback((index: number) => {
    setActiveIndex(index);
  }, []);
  const closeModal = React.useCallback(() => {
    setActiveIndex(null);
  }, []);

  const showPrev = React.useCallback(() => {
    setActiveIndex((prev) =>
      prev === null ? prev : (prev - 1 + projectCount) % projectCount
    );
  }, [projectCount]);

  const showNext = React.useCallback(() => {
    setActiveIndex((prev) =>
      prev === null ? prev : (prev + 1) % projectCount
    );
  }, [projectCount]);

  // keyboard shortcuts
  React.useEffect(() => {
    if (!isModalOpen) return;

    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeModal();
      else if (e.key === "ArrowLeft") showPrev();
      else if (e.key === "ArrowRight") showNext();
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isModalOpen, closeModal, showNext, showPrev]); // simple deps, ne diramo callbacks

  return (
    <>
      <main className="page-shell">
        {/* HEADER */}
        <div className="layout-grid hero-gap">
          <section className="col-span-12 md:col-span-5">
            <h1 className="type-h1 text-balance">
              A look at the work I do{" "}
              <span className="text-color-text-secondary font-normal">
                when I’m not watering UI plants.
              </span>
            </h1>
          </section>
        </div>

        {/* PROJECT GRID */}
        <div className="layout-grid">
          <section className="col-span-12">
            <div className="grid gap-gutter md:grid-cols-2">
              {projectsConfig.map((p, index) => (
                <ProjectCard
                  key={p.key}
                  label={p.label}
                  title={p.title}
                  href={p.href}
                  onClick={() => openProject(index)}
                />
              ))}
            </div>
          </section>
        </div>
      </main>

      <ProjectModal
        isOpen={isModalOpen}
        project={activeProject}
        onClose={closeModal}
      />
    </>
  );
}
