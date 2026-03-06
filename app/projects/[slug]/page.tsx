"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import {
  projectsConfig,
  type ProjectConfig,
} from "@/components/projects/ProjectsConfig";

function ProjectPageContent() {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug as string;

  const project = projectsConfig.find((p) => (p.slug ?? p.key) === slug);

  React.useEffect(() => {
    if (!project) {
      router.push("/projects");
    }
  }, [project, router]);

  const currentIndex = project
    ? projectsConfig.findIndex((p) => p.key === project.key)
    : -1;
  const projectCount = projectsConfig.length;
  const prevProject =
    currentIndex >= 0
      ? projectsConfig[(currentIndex - 1 + projectCount) % projectCount]
      : null;
  const nextProject =
    currentIndex >= 0
      ? projectsConfig[(currentIndex + 1) % projectCount]
      : null;

  React.useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        router.push("/projects");
      } else if (e.key === "ArrowLeft" && prevProject) {
        router.push(`/projects/${prevProject.slug ?? prevProject.key}`);
      } else if (e.key === "ArrowRight" && nextProject) {
        router.push(`/projects/${nextProject.slug ?? nextProject.key}`);
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [prevProject, nextProject, router]);

  if (!project) return null;

  const renderHero = () => {
    if (project.hero?.type === "image") {
      const positionClass =
        project.hero.position === "top"
          ? "object-top"
          : project.hero.position === "bottom"
            ? "object-bottom"
            : "object-center";
      return (
        <div className="w-full mb-[var(--space-2xl)]">
          <div className="relative aspect-video rounded-[var(--radius-md)] border border-color-border-secondary overflow-hidden">
            <Image
              src={project.hero.src}
              alt={project.hero.alt ?? ""}
              fill
              className={`object-cover ${positionClass}`}
              sizes="(max-width: 1024px) 100vw, 960px"
            />
          </div>
        </div>
      );
    }

    if (project.hero?.type === "video") {
      const positionClass =
        project.hero.position === "top"
          ? "object-top"
          : project.hero.position === "bottom"
            ? "object-bottom"
            : "object-center";
      return (
        <div className="w-full mb-[var(--space-2xl)]">
          <div className="relative aspect-video rounded-[var(--radius-md)] border border-color-border-secondary overflow-hidden">
            <video
              src={project.hero.src}
              className={`w-full h-full object-cover ${positionClass}`}
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
      );
    }

    return (
      <div className="w-full h-[500px] mb-[var(--space-2xl)] rounded-[var(--radius-md)] border border-color-border-secondary bg-color-bg-muted flex items-center justify-center">
        <span className="type-body-xs">Hero placeholder (500px tall)</span>
      </div>
    );
  };

  return (
    <PageShell className="stack-xl">
      <div className="layout-grid">
        <section className="col-span-12">
          {/* Back link */}
          <Link
            href="/projects"
            className="type-body-sm text-color-text-secondary hover:text-color-text-primary transition-colors mb-8 inline-block"
          >
            ← Back to projects
          </Link>

          {/* Hero */}
          {renderHero()}

          {/* Case study content */}
          {project.Page && <project.Page />}

          {/* Prev/Next navigation */}
          <nav className="flex items-center justify-between mt-16 pt-8 border-t border-color-border">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug ?? prevProject.key}`}
                className="type-body-sm text-color-text-secondary hover:text-color-text-primary transition-colors"
              >
                ← {prevProject.label ?? prevProject.key}
              </Link>
            ) : (
              <span />
            )}
            <Link
              href="/projects"
              className="type-body-sm text-color-text-secondary hover:text-color-text-primary transition-colors"
            >
              All projects
            </Link>
            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug ?? nextProject.key}`}
                className="type-body-sm text-color-text-secondary hover:text-color-text-primary transition-colors"
              >
                {nextProject.label ?? nextProject.key} →
              </Link>
            ) : (
              <span />
            )}
          </nav>
        </section>
      </div>
    </PageShell>
  );
}

export default function ProjectPage() {
  return (
    <React.Suspense fallback={null}>
      <ProjectPageContent />
    </React.Suspense>
  );
}
