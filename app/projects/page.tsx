// app/projects/page.tsx
"use client";

import * as React from "react";
import { projectsConfig } from "../../components/projects/ProjectsConfig";
import { ProjectCard } from "../../components/projects/ProjectCard";
import { ProjectModal } from "../../components/projects/ProjectModal";

export default function ProjectsPage() {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const isModalOpen = activeIndex !== null;
  const activeProject =
    activeIndex !== null ? projectsConfig[activeIndex] : null;

  const openProject = (index: number) => setActiveIndex(index);
  const closeModal = () => setActiveIndex(null);

  const showPrev = () => {
    if (activeIndex === null) return;
    setActiveIndex((prev) =>
      prev === null
        ? prev
        : (prev - 1 + projectsConfig.length) % projectsConfig.length
    );
  };

  const showNext = () => {
    if (activeIndex === null) return;
    setActiveIndex((prev) =>
      prev === null ? prev : (prev + 1) % projectsConfig.length
    );
  };

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
  }, [isModalOpen, activeIndex]); // simple deps, ne diramo callbacks

  return (
    <>
      <main className="layout-container py-10 md:py-16">
        {/* HEADER */}
        <div className="grid grid-cols-12 gap-gutter mb-10 md:mb-14">
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
        <div className="grid grid-cols-12 gap-gutter">
          <section className="col-span-12">
            <div className="grid gap-gutter md:grid-cols-2">
              {projectsConfig.map((p, index) => (
                <ProjectCard
                  key={p.key}
                  label={p.label}
                  title={p.title}
                  summary={p.summary}
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
