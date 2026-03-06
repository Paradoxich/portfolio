import * as React from "react";

type PillProps = {
  children: React.ReactNode;
  statusDot?: "green" | "gray";
  icon?: React.ReactNode;
  className?: string;
};

export function Pill({
  children,
  statusDot,
  icon,
  className = "",
}: PillProps) {
  const base =
    "inline-flex items-center gap-2 rounded-full border border-[var(--color-40)] px-3 py-1.5 type-body-sm text-color-text-secondary";

  const statusDotColor = statusDot === "green" ? "#18C340" : "var(--color-60)";

  return (
    <span className={`${base} ${className}`.trim()}>
      {statusDot && (
        <span
          className="w-2 h-2 rounded-full flex-shrink-0"
          style={{ backgroundColor: statusDotColor }}
          aria-hidden
        />
      )}
      {icon}
      {children}
    </span>
  );
}
