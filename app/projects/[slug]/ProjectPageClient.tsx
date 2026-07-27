"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowLeft } from "@/components/icons/ArrowLeft";
import { ArrowRight } from "@/components/icons/ArrowRight";
import { Projects } from "@/components/icons/Projects";
import { useRouter, useParams } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { useHireDrawer } from "@/components/contact/HireDrawerContext";
import { projectsConfig } from "@/components/projects/ProjectsConfig";
import styles from "./page.module.css";

function ProjectPageContent() {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug as string;
  const { isOpen: drawerOpen } = useHireDrawer();

  const project = projectsConfig.find((p) => (p.slug ?? p.key) === slug);

  React.useEffect(() => {
    if (!project) {
      router.push("/");
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
      if (drawerOpen || e.defaultPrevented) return;
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }
      if (e.key === "Escape") {
        router.push("/");
      } else if (e.key === "ArrowLeft" && prevProject) {
        router.push(`/projects/${prevProject.slug ?? prevProject.key}`);
      } else if (e.key === "ArrowRight" && nextProject) {
        router.push(`/projects/${nextProject.slug ?? nextProject.key}`);
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [prevProject, nextProject, router, drawerOpen]);

  if (!project) return null;

  return (
    <PageShell className="stack-xl">
      <div className="layout-grid">
        <section className="col-span-12">
          <Link
            href="/"
            className="md:hidden type-body-sm text-color-text-secondary hover:text-color-text-primary transition-colors mb-2xl inline-block"
          >
            ← Back to home
          </Link>

          {project.Page && <project.Page />}

          <nav className="flex justify-center mt-5xl pt-2xl border-t border-color-border-inset">
            <div className="flex gap-sm">
              {prevProject ? (
                <Link
                  href={`/projects/${prevProject.slug ?? prevProject.key}`}
                  className={styles.navBtn}
                  aria-label={`Previous: ${prevProject.label ?? prevProject.key}`}
                >
                  <ArrowLeft size={20} />
                </Link>
              ) : (
                <span className={styles.navBtnDisabled} aria-hidden>
                  <ArrowLeft size={20} />
                </span>
              )}
              <Link href="/" className={styles.navBtn} aria-label="Back to home">
                <Projects size={20} />
              </Link>
              {nextProject ? (
                <Link
                  href={`/projects/${nextProject.slug ?? nextProject.key}`}
                  className={styles.navBtn}
                  aria-label={`Next: ${nextProject.label ?? nextProject.key}`}
                >
                  <ArrowRight size={20} />
                </Link>
              ) : (
                <span className={styles.navBtnDisabled} aria-hidden>
                  <ArrowRight size={20} />
                </span>
              )}
            </div>
          </nav>
        </section>
      </div>
    </PageShell>
  );
}

export function ProjectPageClient() {
  return (
    <React.Suspense fallback={null}>
      <ProjectPageContent />
    </React.Suspense>
  );
}
