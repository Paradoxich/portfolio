import * as React from "react";

type CardVariant = "default" | "muted" | "cta" | "panel";

type CardProps = {
  children: React.ReactNode;
  variant?: CardVariant;
  className?: string;
  as?: "div" | "section" | "article";
};

const variantClasses: Record<CardVariant, string> = {
  default: "card",
  muted: "card-muted",
  cta: "card-cta",
  panel: "panel",
};

export function Card({
  children,
  variant = "default",
  className = "",
  as: As = "div",
}: CardProps) {
  const classes = [variantClasses[variant], className].filter(Boolean).join(" ");

  return <As className={classes}>{children}</As>;
}
