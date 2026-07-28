import type { Metadata } from "next";
import { IllustrationsPageClient } from "./IllustrationsPageClient";

export const metadata: Metadata = {
  title: "Illustrations",
  description:
    "Illustration systems and standalone visual work, used to bring personality and clarity into products and brands.",
};

export default function IllustrationsPage() {
  return <IllustrationsPageClient />;
}
