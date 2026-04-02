import { PageShell } from "@/components/layout/PageShell";
import {
  projectsConfig,
  type ProjectConfig,
} from "@/components/projects/ProjectsConfig";
import { ProjectCard } from "@/components/projects/ProjectCard";

type ProjectsIndexProps = {
  projects?: ProjectConfig[];
};

export function ProjectsIndex({ projects }: ProjectsIndexProps) {
  const list = projects ?? projectsConfig;

  return (
    <PageShell className="stack-xl">
      <div className="layout-grid">
        <section className="col-span-12">
          <div className="grid gap-6 md:grid-cols-2">
            {list.map((p) => (
              <ProjectCard
                key={p.key}
                categoryLabel={p.categoryLabel}
                title={p.cardTitle ?? p.title}
                href={`/projects/${p.slug ?? p.key}`}
                background={p.cardBackground}
                comingSoon={p.comingSoon}
              />
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  );
}

