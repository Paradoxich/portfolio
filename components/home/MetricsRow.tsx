"use client";

import Link from "next/link";
import { METRICS } from "@/lib/metrics";

export function MetricsRow() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 border-t border-color-border-inset border-b mb-12">
      {METRICS.map((m, i) => {
        const content = (
          <>
            <p className="type-h3 font-mono text-color-text-primary">{m.value}</p>
            <p className="type-body-sm text-color-text-secondary mt-1">{m.label}</p>
            <p className="type-body-xs text-color-text-tertiary mt-1">{m.project}</p>
          </>
        );
        const isLast = i === METRICS.length - 1;
        const borders = [
          "border-color-border-inset",
          i % 2 === 0 ? "border-r" : "",
          i < 2 ? "border-b md:border-b-0" : "",
          !isLast ? "md:border-r" : "md:border-r-0",
        ].join(" ");

        return m.href ? (
          <Link
            key={m.project}
            href={m.href}
            className={`p-4 md:p-6 hover:bg-color-bg-muted transition-colors ${borders}`}
          >
            {content}
          </Link>
        ) : (
          <div key={m.project} className={`p-4 md:p-6 ${borders}`}>
            {content}
          </div>
        );
      })}
    </div>
  );
}
