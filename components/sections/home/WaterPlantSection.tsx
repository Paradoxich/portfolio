import { PotAnimation } from "@/components/home/PotAnimation";

export function WaterPlantSection() {
  return (
    <section className="card flex flex-1 flex-col gap-6">
      <div className="relative card rounded-xl flex flex-col justify-end items-center min-h-[260px] pt-0 pr-2 pl-2 pb-0">
        <PotAnimation />
      </div>
      <div className="stack-xs">
        <p className="type-label">Current hobby</p>
        <p className="type-body-sm-strong leading-none">
          Cultivating biquinho peppers.
        </p>
      </div>
    </section>
  );
}
