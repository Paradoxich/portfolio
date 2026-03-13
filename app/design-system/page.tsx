"use client";

import React from "react";
import { PageShell } from "@/components/layout/PageShell";
import { useColorScheme } from "@/components/theme/ColorSchemeProvider";

/* ================================
 * Runtime CSS variable reader
 * ============================== */

function useTokenHex(cssVar: string): string {
  const { colorScheme } = useColorScheme();
  const [hex, setHex] = React.useState("");

  React.useEffect(() => {
    const raw = getComputedStyle(document.documentElement)
      .getPropertyValue(cssVar)
      .trim();
    setHex(raw.toUpperCase());
  }, [cssVar, colorScheme]);

  return hex;
}

/* ================================
 * Token data — CSS var references only, no hardcoded hex
 * ============================== */

const neutralColors = [
  { name: "color-0",  cssVar: "--color-0"  },
  { name: "color-05", cssVar: "--color-05" },
  { name: "color-10", cssVar: "--color-10" },
  { name: "color-20", cssVar: "--color-20" },
  { name: "color-30", cssVar: "--color-30" },
  { name: "color-40", cssVar: "--color-40" },
  { name: "color-50", cssVar: "--color-50" },
  { name: "color-60", cssVar: "--color-60" },
  { name: "color-80", cssVar: "--color-80" },
  { name: "color-90", cssVar: "--color-90" },
];

const accentColors = [
  { name: "accent-yellow",  cssVar: "--color-accent-yellow" },
  { name: "success",        cssVar: "--color-success"       },
  { name: "graphic-muted",  cssVar: "--color-graphic-muted" },
];

type ColorAlias = {
  name: string;
  mapsTo: string;
  cssVar: string;
  description: string;
};

const bgAliases: ColorAlias[] = [
  { name: "color-bg",         mapsTo: "→ color-0",  cssVar: "--color-bg",         description: "Page background"        },
  { name: "color-bg-card",    mapsTo: "→ color-05", cssVar: "--color-bg-card",     description: "Card surface"           },
  { name: "color-bg-muted",   mapsTo: "→ color-10", cssVar: "--color-bg-muted",    description: "Hover / muted"          },
  { name: "color-bg-surface", mapsTo: "→ color-20", cssVar: "--color-bg-surface",  description: "Raised / active surface"},
];

const borderAliases: ColorAlias[] = [
  { name: "color-border-inset",     mapsTo: "→ color-10", cssVar: "--color-border-inset",     description: "Structural dividers" },
  { name: "color-border-subtle",    mapsTo: "→ color-20", cssVar: "--color-border-subtle",     description: "Subtle"             },
  { name: "color-border",           mapsTo: "→ color-30", cssVar: "--color-border",            description: "Main border"        },
  { name: "color-border-secondary", mapsTo: "→ color-40", cssVar: "--color-border-secondary",  description: "Hover border"       },
];

const textAliases: ColorAlias[] = [
  { name: "color-text-primary",   mapsTo: "→ color-90", cssVar: "--color-text-primary",   description: "Headings, body, active"  },
  { name: "color-text-secondary", mapsTo: "→ color-80", cssVar: "--color-text-secondary",  description: "Labels, descriptions"   },
  { name: "color-text-tertiary",  mapsTo: "→ color-60", cssVar: "--color-text-tertiary",   description: "Decorative / disabled"  },
];

const typeStyles = [
  { className: ".type-h1",           size: "48px", weight: "500", lh: "1.1",  ls: "-0.03em", colorRole: "color-text-primary",   sample: "Heading One" },
  { className: ".type-h2",           size: "40px", weight: "500", lh: "1.1",  ls: "-0.03em", colorRole: "color-text-primary",   sample: "Heading Two" },
  { className: ".type-h3",           size: "32px", weight: "500", lh: "1.1",  ls: "-0.03em", colorRole: "color-text-primary",   sample: "Heading Three" },
  { className: ".type-h4",           size: "24px", weight: "500", lh: "1.3",  ls: "-0.03em", colorRole: "color-text-primary",   sample: "Heading Four" },
  { className: ".type-body-lg",      size: "18px", weight: "400", lh: "1.6",  ls: "0em",     colorRole: "color-text-secondary", sample: "Body large — editorial and case study body copy. Used for long-form reading." },
  { className: ".type-body",         size: "16px", weight: "400", lh: "1.6",  ls: "0em",     colorRole: "color-text-secondary", sample: "Body — standard UI text, descriptions, general content." },
  { className: ".type-body-strong",  size: "16px", weight: "500", lh: "1.6",  ls: "0em",     colorRole: "color-text-primary",   sample: "Body strong — emphasized inline text, active states." },
  { className: ".type-body-sm",      size: "14px", weight: "400", lh: "1.45", ls: "-0.03em", colorRole: "color-text-secondary", sample: "Small body — captions, metadata, secondary UI text." },
  { className: ".type-body-sm-strong",size:"14px", weight: "500", lh: "1.45", ls: "-0.03em", colorRole: "color-text-primary",   sample: "Small body strong — emphasized small text." },
  { className: ".type-body-xs",      size: "12px", weight: "500", lh: "1.45", ls: "0em",     colorRole: "color-text-secondary", sample: "XS body — badges, tooltips, inline annotations." },
];

const monoStyles = [
  { className: ".type-label", size: "14px", weight: "500", lh: "1",  ls: "0.04em", colorRole: "color-text-secondary", note: "UPPERCASE · secondary", sample: "Section Label / Category Tag" },
];

const spacingItems = [
  { name: "space-xs",      px: 4,   description: "Micro gaps, icon nudges" },
  { name: "space-sm",      px: 8,   description: "Tight element spacing" },
  { name: "space-md",      px: 12,  description: "Default component gaps" },
  { name: "space-base",    px: 16,  description: "Standard base unit" },
  { name: "space-lg",      px: 20,  description: "Layout gutter" },
  { name: "space-xl",      px: 24,  description: "Card padding" },
  { name: "space-2xl",     px: 32,  description: "Component section gaps" },
  { name: "space-3xl",     px: 40,  description: "Page shell padding" },
  { name: "space-4xl",     px: 56,  description: "Hero gap (desktop)" },
  { name: "space-5xl",     px: 64,  description: "Large content separators" },
  { name: "space-section", px: 120, description: "Major section dividers" },
];

const radiusItems = [
  { name: "radius-sm",   twClass: "rounded-sm",      value: "8px",    description: "Small elements, labels, inputs" },
  { name: "radius-md",   twClass: "rounded-surface",  value: "12px",   description: "Surface elements, inner cards" },
  { name: "radius-lg",   twClass: "rounded-card",     value: "20px",   description: "Cards, major components" },
  { name: "radius-full", twClass: "rounded-pill",     value: "9999px", description: "Pills, buttons, tags" },
];

/* ================================
 * Page
 * ============================== */

export default function DesignSystemPage() {
  return (
    <PageShell className="w-full min-w-0">
      <div className="flex flex-col gap-[120px] w-full min-w-0">

        {/* Title */}
        <header className="flex flex-col gap-5">
          <h1 className="type-h1">Design System</h1>
          <p className="type-body-lg">Portfolio — Tokens &amp; Foundations</p>
        </header>

        {/* ===== COLORS ===== */}
        <section className="flex flex-col gap-14 w-full">

          {/* Neutral Scale */}
          <div className="flex flex-col gap-5">
            <SectionLabel>Color — Neutral Scale</SectionLabel>
            <div className="flex flex-wrap gap-2">
              {neutralColors.map((c) => (
                <ColorCard key={c.name} name={c.name} cssVar={c.cssVar} />
              ))}
            </div>
          </div>

          {/* Accent */}
          <div className="flex flex-col gap-5">
            <SectionLabel>Color — Accent</SectionLabel>
            <div className="flex flex-wrap gap-2">
              {accentColors.map((c) => (
                <ColorCard key={c.name} name={c.name} cssVar={c.cssVar} />
              ))}
            </div>
          </div>

          {/* Semantic Aliases */}
          <div className="flex flex-col gap-5">
            <SectionLabel>Color — Semantic Aliases</SectionLabel>
            <div className="flex flex-col gap-3">
              <AliasGroup label="Backgrounds" aliases={bgAliases} />
              <AliasGroup label="Borders" aliases={borderAliases} />
              <AliasGroup label="Text" aliases={textAliases} />
            </div>
          </div>
        </section>

        {/* ===== TYPOGRAPHY ===== */}
        <section className="flex flex-col gap-14 w-full">

          {/* Geist Sans */}
          <div className="flex flex-col gap-5">
            <SectionLabel>Typography — Geist Sans</SectionLabel>
            <div className="flex flex-col gap-2">
              {typeStyles.map((t) => (
                <TypeCard key={t.className} {...t} />
              ))}
            </div>
          </div>

          {/* Geist Mono */}
          <div className="flex flex-col gap-5">
            <SectionLabel>Typography — Geist Mono</SectionLabel>
            <div className="flex flex-col gap-2">
              {monoStyles.map((t) => (
                <TypeCard key={t.className} {...t} mono />
              ))}
            </div>
          </div>
        </section>

        {/* ===== SPACING ===== */}
        <section className="flex flex-col gap-5 w-full">
          <SectionLabel>Spacing Scale</SectionLabel>
          <div className="flex flex-col w-full">
            {spacingItems.map((s) => (
              <SpacingRow key={s.name} {...s} />
            ))}
          </div>
        </section>

        {/* ===== BORDER RADIUS ===== */}
        <section className="flex flex-col gap-5 w-full">
          <SectionLabel>Border Radius</SectionLabel>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {radiusItems.map((r) => (
              <RadiusCard key={r.name} {...r} />
            ))}
          </div>
        </section>

        {/* ===== COMPONENT TOKENS — SURFACES ===== */}
        <section className="flex flex-col gap-5 w-full">
          <SectionLabel>Component Tokens — Surfaces</SectionLabel>
          <div className="flex flex-col md:flex-row gap-5 w-full">
            <SurfaceCard
              className="bg-color-bg-card border border-color-border rounded-[20px]"
              name="card-interactive"
              description="Clickable card surface. Hover changes bg to color-bg-muted."
              tokens={[
                "bg: color-bg-card (#151310)",
                "border: 1px color-border (#272921)",
                "radius: radius-lg (20px)",
                "padding: space-xl (24px)",
                "transition: bg 0.18s ease",
              ]}
            />
            <SurfaceCard
              className="bg-color-bg-card border border-color-border-subtle rounded-[20px]"
              name="card-tinted"
              description="Lightly tinted card. Non-interactive content container."
              tokens={[
                "bg: color-bg-card (#151310)",
                "border: 1px color-border-subtle (#23221B)",
                "radius: radius-lg (20px)",
                "padding: space-xl (24px)",
              ]}
            />
            <SurfaceCard
              className="bg-color-bg border border-color-border-inset rounded-[20px]"
              name="card-ghost"
              description="Outline/ghost card. Non-interactive, structural use."
              tokens={[
                "bg: color-bg (#100F0C)",
                "border: 1px color-border-inset (#1B1F17)",
                "radius: radius-lg (20px)",
                "padding: space-xl (24px)",
              ]}
            />
          </div>
        </section>

      </div>
    </PageShell>
  );
}

/* ================================
 * Section label
 * ============================== */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-b border-color-border pb-2">
      <p className="type-body-sm-strong text-color-text-tertiary">{children}</p>
    </div>
  );
}

/* ================================
 * Color card
 * ============================== */

function ColorCard({ name, cssVar }: { name: string; cssVar: string }) {
  const hex = useTokenHex(cssVar);
  return (
    <div className="flex flex-col gap-2 w-[124px] shrink-0">
      <div
        className="h-[64px] w-full rounded-[8px] border border-white/[0.06]"
        style={{ backgroundColor: `var(${cssVar})` }}
      />
      <div className="flex flex-col gap-0.5">
        <p className="font-mono text-[12px] font-medium leading-[1.45] text-color-text-primary whitespace-nowrap">
          {name}
        </p>
        <p className="font-mono text-[12px] font-normal leading-[1.45] text-color-text-tertiary whitespace-nowrap">
          {hex}
        </p>
      </div>
    </div>
  );
}

/* ================================
 * Semantic alias group + rows
 * ============================== */

function AliasGroup({ label, aliases }: { label: string; aliases: ColorAlias[] }) {
  return (
    <div className="flex flex-col gap-1">
      <p className="font-mono text-[12px] font-normal leading-[1.45] text-color-text-tertiary mb-1">{label}</p>
      {aliases.map((a) => (
        <AliasRow key={a.name} {...a} />
      ))}
    </div>
  );
}

function AliasRow({ name, mapsTo, cssVar, description }: ColorAlias) {
  const hex = useTokenHex(cssVar);
  return (
    <div className="bg-color-bg-card border border-color-border-inset rounded-[8px] flex items-center gap-4 h-[46px] px-4">
      <div
        className="shrink-0 size-6 rounded-[6px] border border-white/[0.06]"
        style={{ backgroundColor: `var(${cssVar})` }}
      />
      {/* Name */}
      <p className="font-mono text-[12px] font-normal leading-[1.45] text-color-text-primary w-[200px] shrink-0">
        {name}
      </p>
      {/* mapsTo */}
      <p className="font-mono text-[12px] font-normal leading-[1.45] text-color-text-tertiary flex-1 min-w-0">
        {mapsTo}
      </p>
      {/* Hex · description */}
      <p className="font-mono text-[12px] font-normal leading-[1.45] text-color-text-secondary flex-1 min-w-0 text-right whitespace-nowrap">
        {hex} · {description}
      </p>
    </div>
  );
}

/* ================================
 * Typography card
 * ============================== */

type TypeCardProps = {
  className: string;
  size: string;
  weight: string;
  lh: string;
  ls: string;
  colorRole: string;
  sample: string;
  note?: string;
  mono?: boolean;
};

function TypeCard({ className, size, weight, lh, ls, colorRole, sample, note, mono }: TypeCardProps) {
  const previewStyle: React.CSSProperties = {
    fontSize: size,
    fontWeight: parseInt(weight),
    lineHeight: lh,
    letterSpacing: ls,
    fontFamily: mono ? "var(--font-geist-mono), monospace" : undefined,
  };

  const colorClass = colorRole === "color-text-primary"
    ? "text-color-text-primary"
    : "text-color-text-secondary";

  return (
    <div className="bg-color-bg-card border border-color-border-inset rounded-[12px] flex items-start justify-between p-6 gap-6 overflow-hidden">
      {/* Spec */}
      <div className="flex flex-col gap-1 shrink-0 w-[200px]">
        <p className="font-mono text-[12px] font-normal leading-[1.45] text-color-text-primary">
          {className}
        </p>
        <div className="font-mono text-[12px] font-normal leading-[1.45] text-color-text-tertiary flex flex-col">
          <span>{size} · weight {weight}</span>
          <span>lh {lh} · ls {ls}</span>
          {note ? <span>{note}</span> : <span>{colorRole}</span>}
        </div>
      </div>
      {/* Preview */}
      <div className={`flex-1 min-w-0 overflow-hidden ${colorClass}`} style={previewStyle}>
        {sample}
      </div>
    </div>
  );
}

/* ================================
 * Spacing row
 * ============================== */

function SpacingRow({ name, px, description, warn }: { name: string; px: number; description: string; warn?: string }) {
  const BAR_MAX = 320;
  const barWidth = Math.min(px, BAR_MAX);

  return (
    <div className="border-b border-color-border-inset flex items-center h-9 gap-4">
      <p className="font-mono text-[12px] font-normal leading-[1.45] text-color-text-primary w-[100px] shrink-0">
        {name}
      </p>
      <p className="font-mono text-[12px] font-normal leading-[1.45] text-color-text-tertiary w-[52px] shrink-0">
        {px}px
      </p>
      <div className="flex-1 flex items-center gap-4 min-w-0">
        <div
          className="h-2 rounded-[2px] bg-[#EEC643] opacity-70 shrink-0"
          style={{ width: barWidth }}
        />
        <p className="font-['Geist',sans-serif] text-[12px] font-normal leading-[1.45] text-color-text-tertiary whitespace-nowrap">
          {description}
        </p>
        {warn && (
          <p className="font-mono text-[11px] leading-[1.45] text-[#EEC643] opacity-60 whitespace-nowrap ml-auto shrink-0">
            ⚠ {warn}
          </p>
        )}
      </div>
    </div>
  );
}

/* ================================
 * Surface card
 * ============================== */

function SurfaceCard({
  className,
  name,
  description,
  tokens,
}: {
  className: string;
  name: string;
  description: string;
  tokens: string[];
}) {
  return (
    <div className={`${className} flex flex-col gap-4 flex-1 min-w-0 p-6`}>
      <div className="flex flex-col gap-2">
        <p className="font-mono text-[12px] font-normal leading-[1.45] text-color-text-primary">
          {name}
        </p>
        <p className="text-[12px] font-normal leading-[1.45] text-color-text-tertiary">
          {description}
        </p>
      </div>
      <div className="flex flex-col">
        {tokens.map((t) => (
          <p key={t} className="font-mono text-[12px] font-normal leading-[1.45] text-color-text-tertiary">
            {t}
          </p>
        ))}
      </div>
    </div>
  );
}

/* ================================
 * Radius card
 * ============================== */

function RadiusCard({ name, twClass, value, description }: { name: string; twClass: string; value: string; description: string }) {
  return (
    <div className="bg-color-bg-card border border-color-border-inset rounded-[12px] flex flex-col gap-5 p-6">
      <div
        className="h-14 w-full bg-color-bg border border-color-border-subtle"
        style={{ borderRadius: value }}
      />
      <div className="flex flex-col gap-2">
        <div className="flex items-baseline justify-between gap-2">
          <p className="font-mono text-[12px] font-normal leading-[1.45] text-color-text-primary">
            {name}
          </p>
          <p className="font-mono text-[12px] font-normal leading-[1.45] text-color-text-tertiary shrink-0">
            {twClass}
          </p>
        </div>
        <p className="font-mono text-[12px] font-normal leading-[1.45] text-color-text-tertiary">
          {value} — {description}
        </p>
      </div>
    </div>
  );
}
