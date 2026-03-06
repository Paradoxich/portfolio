import * as React from "react";

type SectionCardProps = {
  title: string;
  children: React.ReactNode;
  headerRight?: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const windowDots = (
  <div className="flex gap-1" aria-hidden>
    <span className="w-2 h-2 rounded-full bg-[var(--color-border)]" />
    <span className="w-2 h-2 rounded-full bg-[var(--color-border)]" />
    <span className="w-2 h-2 rounded-full bg-[var(--color-border)]" />
  </div>
);

export function SectionCard({
  title,
  children,
  headerRight,
  className = "",
  onClick,
}: SectionCardProps) {
  return (
    <section
      className={`card flex flex-col pt-0 overflow-hidden ${onClick ? "cursor-pointer group" : ""} ${className}`.trim()}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
    >
      <div className="relative flex items-center border-b border-color-border h-12 -mx-[var(--space-xl)] px-[var(--space-xl)] mt-0 pt-0">
        <div className="absolute left-[var(--space-lg)] w-16 flex items-center">
          {windowDots}
        </div>
        <h2 className="flex-1 text-center text-[12px] tracking-expanded font-medium text-color-text-secondary">
          {title}
        </h2>
        <div className="absolute right-[var(--space-lg)] w-16 flex items-center justify-end">
          {headerRight}
        </div>
      </div>
      <div className="flex-1 flex flex-col min-h-0">{children}</div>
    </section>
  );
}
