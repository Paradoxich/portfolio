import Link from "next/link";
import Image from "next/image";
import { SectionCard } from "@/components/ui/SectionCard";
import type { ProjectConfig } from "@/components/projects/ProjectsConfig";

const projectDescriptions: Record<string, string> = {
  "neptune-lp": "Brand/Web",
  "shuttle-console": "Dev console",
  "mixlodge-brand": "Brand/MVP",
};

const folderIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className="group-hover:[&_path]:fill-[var(--color-90)]"
  >
    <path d="M8.27567 3.33333H13.9997C14.1765 3.33333 14.3461 3.40357 14.4711 3.5286C14.5961 3.65362 14.6663 3.82319 14.6663 4V13.3333C14.6663 13.5101 14.5961 13.6797 14.4711 13.8047C14.3461 13.9298 14.1765 14 13.9997 14H1.99967C1.82286 14 1.65329 13.9298 1.52827 13.8047C1.40325 13.6797 1.33301 13.5101 1.33301 13.3333V2.66667C1.33301 2.48986 1.40325 2.32029 1.52827 2.19526C1.65329 2.07024 1.82286 2 1.99967 2H6.94234L8.27567 3.33333ZM13.333 7.33333H2.66634V12.6667H13.333V7.33333ZM13.333 6V4.66667H7.72367L6.39034 3.33333H2.66634V6H13.333Z" fill="currentColor" />
  </svg>
);

const eyeIcon = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0 text-color-text-secondary"
  >
    <path
      d="M8 3C4.667 3 2.073 5.073 1 8c1.073 2.927 3.667 5 7 5s5.927-2.073 7-5c-1.073-2.927-3.667-5-7-5zm0 8.5c-1.933 0-3.5-1.567-3.5-3.5S6.067 4.5 8 4.5 11.5 6.067 11.5 8 9.933 11.5 8 11.5zm0-5.5c-.828 0-1.5.672-1.5 1.5S7.172 9 8 9s1.5-.672 1.5-1.5S8.828 6 8 6z"
      fill="currentColor"
    />
  </svg>
);

type ProjectsSectionProps = {
  projects: ProjectConfig[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const filtered = projects.filter((p) =>
    ["neptune-lp", "shuttle-console", "mixlodge-brand"].includes(p.key)
  );

  return (
    <SectionCard
      title="Projects"
      headerRight={
        <Link
          href="/projects"
          className="cursor-pointer rounded p-1 transition-colors hover:bg-color-bg-surface group"
        >
          {folderIcon}
        </Link>
      }
    >
      <div className="mt-6 card-cta p-0 overflow-hidden">
        <div className="divide-y divide-color-border-secondary">
          {filtered.map((project) => {
            const description =
              projectDescriptions[project.key] || project.title;

            return (
              <Link
                key={project.key}
                href={`/projects/${project.slug ?? project.key}`}
                className="flex items-center gap-4 py-3 px-3 group transition-all duration-200 hover:bg-[rgba(0,0,0,0.15)]"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden bg-color-bg relative">
                  {project.thumbnail ? (
                    <Image
                      src={project.thumbnail}
                      alt={project.label || project.title}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  ) : project.hero?.type === "image" ? (
                    <Image
                      src={project.hero.src}
                      alt={project.label || project.title}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  ) : project.hero?.type === "video" ? (
                    <>
                      <video
                        src={project.hero.src}
                        className="w-full h-full object-cover"
                        muted
                        playsInline
                        preload="auto"
                        onLoadedData={(e) => {
                          e.currentTarget.currentTime = 0.1;
                        }}
                      />
                      <div className="absolute inset-0 bg-color-bg flex items-center justify-center">
                        <span className="text-color-text-secondary text-xs font-medium">
                          {project.label?.charAt(0) || project.title.charAt(0)}
                        </span>
                      </div>
                    </>
                  ) : (
                    <span className="text-color-text-secondary text-sm">
                      {project.label?.charAt(0) || project.title.charAt(0)}
                    </span>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <p className="type-body-sm-strong text-color-text-primary">
                    {project.label || project.title}
                  </p>
                  <p className="type-body-xs text-color-text-secondary">
                    {description}
                  </p>
                </div>

                <div className="hidden md:flex items-center gap-2 px-3 py-1.5 group-hover:border-color-border-secondary transition-colors rounded-full border border-[var(--color-40)] bg-[rgba(var(--color-0-rgb),0.10)]">
                  {eyeIcon}
                  <span className="type-body-xs text-color-text-secondary">
                    /projects/{project.slug ?? project.key}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </SectionCard>
  );
}

