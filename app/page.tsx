import type { Metadata } from "next";
import { HomeHero } from "@/components/home/HomeHero";
import { FeaturedCards } from "@/components/home/FeaturedCards";
import { WritingSection } from "@/components/home/WritingSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { SiteFooter } from "@/components/layout/SiteFooter";

export const metadata: Metadata = {
  description:
    "I'm Ana. I spent 9 years designing products, and lately I build them too. Case studies from Santolina, Shuttle, and Neptune, plus writing on product design and building software.",
};

export default function Page() {
  return (
    <>
      <main className="mx-auto w-full max-w-[1512px] min-w-0">
        <HomeHero />
        <FeaturedCards />
        <WritingSection />
        <TestimonialsSection />
      </main>
      <SiteFooter />
    </>
  );
}
