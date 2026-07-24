"use client";

import { PageShell } from "@/components/layout/PageShell";
import { WaterPlantSection } from "@/components/experiments/WaterPlantSection";
import TestimonialsSection from "@/components/experiments/TestimonialsSection";
import { ThemeSwitcherInline } from "@/components/theme/ColorSchemeProvider";
import { DesignSystemCard } from "@/components/experiments/DesignSystemCard";
import { DitherLabCard } from "@/components/experiments/DitherLabCard";

const EXPERIMENT_TESTIMONIALS = [
  {
    name: "Jack",
    role: "Chief Treat Procurement Officer",
    image:
      "https://images.unsplash.com/photo-1703955942680-b6f713502306?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    messages: [
      "My human is acceptable. ",
      "Food is on schedule, the water bowl is usually refilled without being asked, and walk intervals are respected. ",
      "Their treat distribution could still improve, but they are clearly trying.",
      "Overall, a reliable companion with solid potential. With continued guidance, they may yet become an excellent human.",
    ],
  },
  {
    name: "Jane",
    role: "Director of Human Training",
    image:
      "https://images.unsplash.com/photo-1721622560183-4172c8ef8934?q=80&w=2414&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    messages: [
      "My human lives here and performs several useful functions. ",
      "They refill the food bowl, maintain the heating surfaces, and operate the door when I decide the outside world requires inspection.",
      "They also provide a stable lap and tolerate sudden 3 a.m. sprints across the apartment, which shows admirable dedication to their role. I will continue keeping them.",
    ],
  },
];

export function ExperimentsIndex() {
  return (
    <PageShell>
      <div className="max-w-[1040px] mx-auto">
        <div className="layout-grid gap-xl items-stretch">
          <div className="col-span-12">
            <DitherLabCard />
          </div>
          <section className="col-span-12 md:col-span-4 flex h-full flex-col">
            <WaterPlantSection />
            <div className="mt-xl flex-1 flex items-stretch">
              <ThemeSwitcherInline />
            </div>
          </section>
          <section className="col-span-12 md:col-span-8 flex h-full">
            <div className="w-full">
              <TestimonialsSection testimonials={EXPERIMENT_TESTIMONIALS} />
            </div>
          </section>
          <div className="col-span-12">
            <DesignSystemCard />
          </div>
        </div>
      </div>
    </PageShell>
  );
}
