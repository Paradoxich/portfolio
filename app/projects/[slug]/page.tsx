"use client";

import * as React from "react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import { projectsConfig, type ProjectConfig } from "@/components/projects/ProjectsConfig";
import { ThemeProvider } from "@/components/projects/ThemeProvider";

export default function ProjectPage() {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug as string;

  // Find project by key
  const project = projectsConfig.find((p) => p.key === slug);

  // Redirect to /projects if project not found
  React.useEffect(() => {
    if (!project) {
      router.push("/projects");
    }
  }, [project, router]);

  // Get current project index and calculate prev/next
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

  // Track original entry point (persist across navigation)
  const [entryPoint] = React.useState(() => {
    if (typeof window === "undefined") return "/projects";
    
    // Check if we already stored the entry point
    const stored = sessionStorage.getItem("project-entry-point");
    if (stored) {
      return stored;
    }
    
    // Determine entry point from referrer
    const referrer = document.referrer;
    const origin = window.location.origin;
    let point = "/projects"; // default
    
    if (referrer.includes("/projects")) {
      point = "/projects";
    } else if (referrer.includes(origin) && !referrer.includes("/projects")) {
      // If referrer is from same origin but not /projects, assume homepage
      point = "/";
    }
    
    // Store for future navigation
    sessionStorage.setItem("project-entry-point", point);
    return point;
  });

  // Scroll state
  const [hasScrolled, setHasScrolled] = React.useState(false);
  const [atEnd, setAtEnd] = React.useState(false);

  // Handle scroll
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;

    const scrolled = scrollTop > 0;
    const reachedEnd = scrollTop + clientHeight >= scrollHeight - 16;

    if (scrolled !== hasScrolled) {
      setHasScrolled(scrolled);
    }
    if (reachedEnd !== atEnd) {
      setAtEnd(reachedEnd);
    }
  };

  // Keyboard shortcuts
  React.useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        handleClose();
      } else if (e.key === "ArrowLeft" && prevProject) {
        // Use replace to avoid stacking in history
        router.replace(`/projects/${prevProject.key}`);
      } else if (e.key === "ArrowRight" && nextProject) {
        // Use replace to avoid stacking in history
        router.replace(`/projects/${nextProject.key}`);
      }
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [prevProject, nextProject, router]);

  // Close navigation - always go to original entry point
  const handleClose = () => {
    router.push(entryPoint || "/projects");
  };

  // Helper to convert color to rgba with alpha
  const colorToRgba = (color: string, alpha: number) => {
    // If already rgba, extract RGB values
    if (color.startsWith("rgba")) {
      const match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (match) {
        return `rgba(${match[1]}, ${match[2]}, ${match[3]}, ${alpha})`;
      }
    }
    // If hex, convert to rgba
    if (color.startsWith("#")) {
      const r = parseInt(color.slice(1, 3), 16);
      const g = parseInt(color.slice(3, 5), 16);
      const b = parseInt(color.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
    // Fallback: try to use the color as-is
    return color;
  };

  // Get gradient color from theme or default
  const gradientColor = project.theme?.scrollGradient || project.theme?.bg || "#111010";
  const gradientStyle = {
    background: `linear-gradient(180deg, ${gradientColor} 9.26%, ${colorToRgba(gradientColor, 0.80)} 47.88%, ${colorToRgba(gradientColor, 0.00)} 100%)`,
  };

  // Render hero
  const renderHero = () => {
    if (!project) return null;

    if (project.hero?.type === "image") {
      return (
        <div className="w-full mb-[var(--space-2xl)]">
          <Image
            src={project.hero.src}
            alt={project.hero.alt ?? ""}
            width={1600}
            height={900}
            className="w-full h-auto rounded-[var(--radius-md)] border border-color-border-secondary"
            sizes="(max-width: 1024px) 100vw, 960px"
          />
        </div>
      );
    }

    if (project.hero?.type === "video") {
      return (
        <div className="w-full mb-[var(--space-2xl)]">
          <video
            src={project.hero.src}
            className="w-full h-auto rounded-[var(--radius-md)] border border-color-border-secondary"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      );
    }

    return (
      <div
        className="
          w-full h-[500px] mb-[var(--space-2xl)]
          rounded-[var(--radius-md)]
          border border-color-border-secondary bg-color-bg-muted
          flex items-center justify-center
        "
      >
        <span className="type-body-xs">Hero placeholder (500px tall)</span>
      </div>
    );
  };

  if (!project) return null;

  return (
    <>
      {/* OVERLAY */}
      <div
        className="
          fixed inset-0 z-50
          flex items-start justify-center
          bg-[rgba(2,2,2,0.50)]
          backdrop-blur-[16px]
          pt-[40px]
          overflow-hidden
        "
        onClick={handleClose}
      >
        {/* MODAL CARD */}
        <ThemeProvider theme={project.theme}>
          <div
            onClick={(e) => e.stopPropagation()}
            className={`
              relative
              w-[80vw] max-w-5xl
              flex flex-col gap-[var(--space-2xl)]
              overflow-hidden
              transition-[height,border-radius] duration-300
              pb-0
              rounded-[var(--radius-lg)]
              border
              ${
                atEnd
                  ? "h-[calc(100vh-40px-40px)] rounded-b-[var(--radius-lg)] border-b"
                  : "h-[calc(100vh-40px)] rounded-b-none border-b-0"
              }
            `}
            style={{
              backgroundColor: project.theme?.bg || project.theme?.cardBg || "var(--color-bg)",
              borderColor: project.theme?.border || project.theme?.cardBorder || "var(--color-border)",
              padding: "var(--space-xl)",
            }}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={handleClose}
              className="project-close-button absolute z-20 top-[12px] right-[12px] inline-flex h-8 w-8 items-center justify-center rounded-full border border-color-border text-color-text-secondary"
              style={{
                backgroundColor: project.theme?.closeButtonBg || project.theme?.bg || "#111010",
              }}
              aria-label="Close project"
            >
              ✕
            </button>

            {/* TOP GRADIENT */}
            <div
              className={`
                pointer-events-none
                absolute inset-x-0 top-0
                h-16
                transition-opacity duration-200
                z-10
                ${hasScrolled ? "opacity-100" : "opacity-0"}
              `}
              style={gradientStyle}
            />

            {/* SCROLLABLE CONTENT */}
            <div
              className="project-modal-scroll relative flex-1 overflow-auto pb-40"
              onScroll={handleScroll}
            >
              {/* HERO */}
              {renderHero()}

              {/* PAGE CONTENT */}
              {project.Page && <project.Page />}
            </div>
          </div>
        </ThemeProvider>
      </div>

      {/* HINT */}
      <div className="pointer-events-none fixed bottom-6 right-6 z-50">
        <p className="type-body-xs text-right">
          ← / → to switch projects
        </p>
      </div>
    </>
  );
}
