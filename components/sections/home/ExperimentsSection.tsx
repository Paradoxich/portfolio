import Image from "next/image";
import Link from "next/link";

const eyeIcon = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0 text-color-text-secondary"
  >
    <path
      d="M8 3C4.667 3 2.073 5.073 1 8c1.073 2.927 3.667 5 7 5s5.927-2.073 7-5c-1.073-2.927-3.667-5-7-5zm0 8.5c-1.933 0-3.5-1.567-3.5-3.5S6.067 4.5 8 4.5 11.5 6.067 11.5 8 9.933 11.5 8 11.5zm0-5.5c-.828 0-1.5.672-1.5 1.5S7.172 9 8 9s1.5-.672 1.5-1.5S8.828 6 8 6z"
      fill="currentColor"
    />
  </svg>
);

export function ExperimentsSection() {
  return (
    <div className="flex-1">
      <div className="card flex h-full flex-col stack-gutter">
        <Link
          href="/design-system"
          className="group relative flex-1 min-h-[140px] overflow-hidden rounded-surface border border-color-border-secondary bg-color-bg-muted transition-colors duration-200 hover:border-[var(--color-50)] flex flex-col justify-end"
        >
          <div className="pointer-events-none absolute inset-0">
            <Image
              src="/design-system.png"
              alt="Design system foundations preview"
              fill
              className="object-cover object-left-top transition-all duration-500 group-hover:scale-[1.02]"
              style={{ filter: "var(--image-filter)" }}
              sizes="(min-width: 1024px) 900px, 100vw"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(var(--color-20-rgb), 0) 0%, rgba(var(--color-20-rgb), 0.81) 61.07%, var(--color-20) 100%)",
              }}
            />
          </div>
          <div className="relative flex h-full flex-col justify-end gap-1 p-3">
            <div className="flex items-center justify-between gap-2">
              <p className="type-body-sm-strong text-color-text-primary">
                The foundations
              </p>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--color-40)] bg-[rgba(var(--color-0-rgb),0.10)]">
                {eyeIcon}
                <span className="type-body-xs text-color-text-secondary">
                  /design-system
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
