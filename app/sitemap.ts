import type { MetadataRoute } from "next";
import { projectsConfig } from "@/components/projects/ProjectsConfig";

const BASE_URL = "https://anabeverin.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/illustrations",
    "/experiments",
    "/design-system",
    "/cv",
  ];

  const projectRoutes = projectsConfig
    .filter((p) => p.Page && !p.noindex)
    .map((p) => `/projects/${p.slug ?? p.key}`);

  return [...staticRoutes, ...projectRoutes].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));
}
