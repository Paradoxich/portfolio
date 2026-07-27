// lib/metrics.ts
// Outcome metrics shown on the homepage. Keep in sync with the JSON-LD
// workExample entries in app/layout.tsx and public/llms.txt.

export type Metric = {
  value: string;
  label: string;
  project: string;
  href?: string;
};

export const METRICS: Metric[] = [
  {
    value: "20,000+",
    label: "developers on the platform",
    project: "Shuttle",
    href: "/projects/shuttle",
  },
  {
    value: "+34%",
    label: "returning session duration",
    project: "OptimoRoute",
    href: "/projects/optimoroute",
  },
  {
    value: "78%",
    label: "CSAT at launch",
    project: "Dealio",
  },
  {
    value: "3 months",
    label: "concept to implementation-ready MVP",
    project: "MixLodge",
    href: "/projects/mixlodge",
  },
];
