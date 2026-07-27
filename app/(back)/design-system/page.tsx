import type { Metadata } from "next";
import { DesignSystemPageClient } from "./DesignSystemPageClient";

export const metadata: Metadata = {
  title: "Design System",
  description:
    "Semantic design tokens, CSS variables, and Tailwind mappings, documented live and rendered straight from the shipped code.",
};

export default function DesignSystemPage() {
  return <DesignSystemPageClient />;
}
