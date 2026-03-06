import { SectionCard } from "@/components/ui/SectionCard";

const docIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className="group-hover:[&_path]:fill-[var(--color-90)]"
  >
    <path d="M14 5.3335V13.9955C14.0006 14.083 13.984 14.1699 13.951 14.251C13.9181 14.3321 13.8695 14.4059 13.808 14.4683C13.7466 14.5306 13.6734 14.5802 13.5928 14.6143C13.5121 14.6484 13.4255 14.6662 13.338 14.6668H2.662C2.48654 14.6668 2.31826 14.5972 2.19413 14.4732C2.07 14.3492 2.00018 14.181 2 14.0055V1.99483C2 1.63683 2.29933 1.3335 2.668 1.3335H9.998L14 5.3335ZM12.6667 6.00016H9.33333V2.66683H3.33333V13.3335H12.6667V6.00016ZM5.33333 4.66683H7.33333V6.00016H5.33333V4.66683ZM5.33333 7.3335H10.6667V8.66683H5.33333V7.3335ZM5.33333 10.0002H10.6667V11.3335H5.33333V10.0002Z" fill="currentColor" />
  </svg>
);

const jobs = [
  { company: "Kofa Design", role: "Owner", period: "2022-" },
  { company: "OptimoRoute", role: "Design Lead", period: "2020-2022" },
  { company: "Five (Now Endava)", role: "Product Designer", period: "2017–2020" },
];

type HistorySectionProps = {
  onOpen: () => void;
};

export function HistorySection({ onOpen }: HistorySectionProps) {
  return (
    <SectionCard
      title="History"
      headerRight={
        <div className="rounded p-1 transition-colors group-hover:bg-color-bg-surface">
          {docIcon}
        </div>
      }
      onClick={onOpen}
    >
      <div className="relative mt-2">
        <div className="divide-y divide-color-border">
          {jobs.map((job) => (
            <div
              key={job.company}
              className="grid grid-cols-[1.4fr,1.4fr,1.4fr] items-baseline gap-4 py-3 font-mono text-[13px]"
            >
              <span className="text-color-text-primary">{job.company}</span>
              <span className="text-color-text-secondary">{job.role}</span>
              <span
                className="text-right"
                style={
                  job.period !== "2022-"
                    ? { color: "rgba(197, 191, 171, 0.4)" }
                    : {}
                }
              >
                {job.period}
              </span>
            </div>
          ))}
        </div>
        <div className="experience-fade" />
      </div>
    </SectionCard>
  );
}
