import { PotAnimation } from "@/components/experiments/PotAnimation";

export function WaterPlantSection() {
  return (
    <section className="experiment-card">
      <div className="experiment-inner relative flex min-h-[260px] flex-col items-center justify-end pt-0 pr-2 pl-2 pb-0">
        <PotAnimation />
      </div>
      <p className="type-experiment-label">Plant growth interaction</p>
    </section>
  );
}

