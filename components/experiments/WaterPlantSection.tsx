import { PotAnimation } from "@/components/experiments/PotAnimation";

export function WaterPlantSection() {
  return (
    <section className="card-tinted">
      <div className="card-tinted-inner relative flex min-h-[260px] flex-col items-center justify-end pt-0 pr-2 pl-2 pb-0">
        <PotAnimation />
      </div>
      <p className="type-body-sm">Plant growth interaction</p>
    </section>
  );
}

