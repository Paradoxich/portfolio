import type { Metadata } from "next";
import { OverviewContent } from "@/components/home/OverviewContent";
import { SiteFooter } from "@/components/layout/SiteFooter";

export const metadata: Metadata = {
  description:
    "I design products, then ship them as production code. Nine years of product design, now paired with the engineering to ship what I design.",
};

export default function Page() {
  return (
    <>
      <main className="min-w-0">
        <OverviewContent />
      </main>
      <SiteFooter />
    </>
  );
}
