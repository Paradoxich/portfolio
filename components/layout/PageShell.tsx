import * as React from "react";

type PageShellProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Shared page shell wrapper.
 * Uses the global `page-shell` utility class so all top-level pages
 * share consistent max-width, paddings, and vertical rhythm.
 */
export function PageShell({ children, className }: PageShellProps) {
  const classes = ["page-shell", className].filter(Boolean).join(" ");

  return <main className={classes}>{children}</main>;
}

