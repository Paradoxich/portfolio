import type { Metadata } from "next";
import { projectsConfig } from "@/components/projects/ProjectsConfig";
import { ProjectPageClient } from "./ProjectPageClient";

export const dynamicParams = false;

export function generateStaticParams() {
  return projectsConfig
    .filter((p) => p.Page)
    .map((p) => ({ slug: p.slug ?? p.key }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsConfig.find((p) => (p.slug ?? p.key) === slug);

  if (!project) {
    return { title: "Project" };
  }

  const title = project.label ?? project.title;
  const description = project.seoDescription ?? project.cardDescription;
  const ogImage = project.ogImage ?? project.cardBackground;

  return {
    title,
    description,
    openGraph: description
      ? {
          title,
          description,
          images: ogImage
            ? [{ url: ogImage, width: 1200, height: 630, alt: title }]
            : undefined,
        }
      : undefined,
    twitter: description
      ? {
          card: "summary_large_image",
          title,
          description,
          images: ogImage ? [ogImage] : undefined,
        }
      : undefined,
    robots: project.noindex
      ? { index: false, follow: false }
      : undefined,
  };
}

export default function ProjectPage() {
  return <ProjectPageClient />;
}
