import Link from "next/link";
import { projectsConfig } from "@/components/projects/ProjectsConfig";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ArrowRight } from "@/components/icons";

const FEATURED_KEYS = ["santolina", "shuttle-console", "optimoroute"];

export function FeaturedWork() {
  const featured = FEATURED_KEYS.map((key) =>
    projectsConfig.find((p) => p.key === key)
  ).filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-lg">
        <h2 className="type-h4">Selected work</h2>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1 type-body-sm text-color-text-secondary hover:text-color-text-primary transition-colors"
        >
          All projects
          <ArrowRight size={16} />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featured.map((p) => (
          <ProjectCard
            key={p.key}
            categoryLabel={p.categoryLabel}
            title={p.cardTitle ?? p.title}
            description={p.cardDescription}
            href={`/projects/${p.slug ?? p.key}`}
            background={p.cardBackground}
          />
        ))}
      </div>
    </div>
  );
}
