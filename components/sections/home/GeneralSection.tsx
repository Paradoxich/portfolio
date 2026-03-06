import { SectionCard } from "@/components/ui/SectionCard";
import { Pill } from "@/components/ui/Pill";

export function GeneralSection() {
  return (
    <SectionCard title="General">
      <div className="flex flex-col gap-md pt-6">
        <div className="card-muted p-4 rounded-xl flex flex-col gap-2">
          <p className="type-body-xs uppercase tracking-expanded text-color-text-secondary">
            OVERVIEW
          </p>
          <p className="type-body-sm max-w-3xl text-color-text-primary">
            I work closely with founders and engineers to take products from
            ambiguity to something ready to ship.
          </p>
        </div>

        <div className="card-muted p-4 rounded-xl flex flex-col gap-2">
          <p className="type-body-xs uppercase tracking-expanded text-color-text-secondary">
            CONFIGURATION
          </p>
          <div className="flex flex-col gap-2 w-full">
            {[
              { label: "Domain", value: "DevTools, Early-stage products" },
              { label: "Primary focus", value: "Product systems" },
              { label: "Collaboration", value: "Engineering & product" },
              { label: "Ownership", value: "End-to-end" },
              { label: "Working style", value: "High standards, low drama" },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="flex justify-between items-baseline"
              >
                <span className="type-body-sm text-color-text-primary">
                  {label}
                </span>
                <span className="type-body-sm">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card-muted p-4 rounded-xl flex flex-col gap-2">
          <p className="type-body-xs uppercase tracking-expanded text-color-text-secondary">
            AVAILABILITY
          </p>
          <div className="flex flex-col gap-2 w-full">
            <div className="flex justify-between items-baseline">
              <span className="type-body-sm text-color-text-primary">
                Location/Timezone
              </span>
              <span className="type-body-sm">Croatia - EU/CET</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="type-body-sm text-color-text-primary">
                Remote work
              </span>
              <span className="type-body-sm">Preferred</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="type-body-sm text-color-text-primary">
                Status
              </span>
              <Pill statusDot="green">Available</Pill>
            </div>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}
