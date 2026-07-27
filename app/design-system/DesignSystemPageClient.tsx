"use client";


import React from "react";
import { PageShell } from "@/components/layout/PageShell";
import { useColorScheme } from "@/components/theme/ColorSchemeProvider";
import { colorTokens } from "./tokens/foundations";

/* ================================
 * Runtime CSS variable reader
 * ============================== */

function useTokenHex(cssVar: string): string {
  const { colorScheme } = useColorScheme();
  const [hex, setHex] = React.useState("");

  React.useEffect(() => {
    // rAF ensures the browser has applied the new data-theme before we read
    const raf = requestAnimationFrame(() => {
      const raw = getComputedStyle(document.documentElement)
        .getPropertyValue(cssVar)
        .trim();
      setHex(raw.toUpperCase());
    });
    return () => cancelAnimationFrame(raf);
  }, [cssVar, colorScheme]);

  return hex;
}

/* ================================
 * Token data — CSS var references only, no hardcoded hex
 * ============================== */

const neutralTokenOrder = [
  "color-0",
  "color-05",
  "color-10",
  "color-20",
  "color-30",
  "color-40",
  "color-50",
  "color-60",
  "color-80",
  "color-90",
];

const tokenToCssVar = (token: string) => `--${token}`;

const neutralColors = neutralTokenOrder.map((token) => ({
  name: token,
  cssVar: tokenToCssVar(token),
}));

const accentColors = [
  ...colorTokens
    .filter((token) => token.token.startsWith("color-accent-"))
    .map((token) => ({
      name: token.token,
      cssVar: tokenToCssVar(token.token),
    })),
  { name: "success", cssVar: "--color-success" },
];

type ColorAlias = {
  name: string;
  mapsTo: string;
  cssVar: string;
  description: string;
};

const bgAliases: ColorAlias[] = [
  { name: "color-bg",               mapsTo: "→ color-0",   cssVar: "--color-bg",               description: "Page background"              },
  { name: "color-bg-card",          mapsTo: "→ color-05",  cssVar: "--color-bg-card",           description: "Project card surface"         },
  { name: "color-bg-card-tinted",   mapsTo: "→ color-05",  cssVar: "--color-bg-card-tinted",    description: "Experiment card surface"      },
  { name: "color-bg-muted",         mapsTo: "→ color-10",  cssVar: "--color-bg-muted",          description: "Hover / muted"                },
  { name: "color-bg-surface",       mapsTo: "→ color-20",  cssVar: "--color-bg-surface",        description: "Raised / active surface"      },
  { name: "color-bg-label",         mapsTo: "→ color-20",  cssVar: "--color-bg-label",          description: "Label / badge background"     },
  { name: "color-bg-graphic-muted", mapsTo: "→ color-graphic-muted", cssVar: "--color-bg-graphic-muted", description: "Decorative graphic accents" },
  { name: "color-grid-line",        mapsTo: "→ color-10",  cssVar: "--color-grid-line",         description: "Project card background grid" },
  { name: "color-overlay",          mapsTo: "rgba(2,2,2,0.5)", cssVar: "--color-overlay",       description: "Modal / overlay scrim"        },
];

const ctaAliases: ColorAlias[] = [
  { name: "color-cta-primary",       mapsTo: "→ color-accent-70", cssVar: "--color-cta-primary",       description: "Primary CTA background" },
  { name: "color-cta-primary-hover", mapsTo: "→ color-accent-60", cssVar: "--color-cta-primary-hover", description: "Primary CTA hover"      },
  { name: "color-cta-primary-text",  mapsTo: "→ color-0",         cssVar: "--color-cta-primary-text",  description: "Text on primary CTA"    },
];

const borderAliases: ColorAlias[] = [
  { name: "color-border-inset",     mapsTo: "→ color-10", cssVar: "--color-border-inset",     description: "Structural dividers" },
  { name: "color-border-subtle",    mapsTo: "→ color-20", cssVar: "--color-border-subtle",    description: "Subtle"              },
  { name: "color-border",           mapsTo: "→ color-20", cssVar: "--color-border",           description: "Main border"         },
  { name: "color-border-secondary", mapsTo: "→ color-40", cssVar: "--color-border-secondary", description: "Hover border"        },
];

const textAliases: ColorAlias[] = [
  { name: "color-text-primary",   mapsTo: "→ color-90", cssVar: "--color-text-primary",   description: "Headings, body, active" },
  { name: "color-text-secondary", mapsTo: "→ color-80", cssVar: "--color-text-secondary", description: "Labels, descriptions"   },
  { name: "color-text-tertiary",  mapsTo: "→ color-60", cssVar: "--color-text-tertiary",  description: "Decorative / disabled"  },
];

const interactionAliases: ColorAlias[] = [
  { name: "color-interactive-hover",  mapsTo: "→ color-30", cssVar: "--color-interactive-hover",  description: "Generic hover state"       },
  { name: "color-nav-item-bg-hover",  mapsTo: "→ color-10", cssVar: "--color-nav-item-bg-hover",  description: "Nav item hover background" },
  { name: "color-nav-item-bg-active", mapsTo: "→ color-10", cssVar: "--color-nav-item-bg-active", description: "Nav item active background"},
  { name: "color-nav-item-fg",        mapsTo: "→ color-80", cssVar: "--color-nav-item-fg",        description: "Nav item foreground"       },
  { name: "color-nav-item-fg-active", mapsTo: "→ color-90", cssVar: "--color-nav-item-fg-active", description: "Nav item active foreground"},
];

const buttonAliases: ColorAlias[] = [
  { name: "color-button-secondary-bg",       mapsTo: "→ color-0",  cssVar: "--color-button-secondary-bg",       description: "Secondary button background" },
  { name: "color-button-secondary-bg-hover", mapsTo: "→ color-20", cssVar: "--color-button-secondary-bg-hover", description: "Secondary button hover"      },
  { name: "color-button-secondary-border",   mapsTo: "→ color-30", cssVar: "--color-button-secondary-border",   description: "Secondary button border"     },
  { name: "color-button-secondary-fg",       mapsTo: "→ color-90", cssVar: "--color-button-secondary-fg",       description: "Secondary button text"       },
];

const formAliases: ColorAlias[] = [
  { name: "color-input-bg",           mapsTo: "→ color-05", cssVar: "--color-input-bg",           description: "Input background"    },
  { name: "color-input-border",       mapsTo: "→ color-30", cssVar: "--color-input-border",       description: "Input border"        },
  { name: "color-input-border-hover", mapsTo: "→ color-40", cssVar: "--color-input-border-hover", description: "Input border hover"  },
  { name: "color-input-placeholder",  mapsTo: "→ color-60", cssVar: "--color-input-placeholder",  description: "Placeholder text"    },
  { name: "color-success",            mapsTo: "→ success",   cssVar: "--color-success",            description: "Success state"       },
];

const typeStyles = [
  { className: ".type-h1",            size: "48px", weight: "500", lh: "1.1",  ls: "-0.03em", colorRole: "color-text-primary",   spec: ["font-size-3xl", "font-weight-medium", "line-height-heading", "tracking-tight"],    sample: "Heading One" },
  { className: ".type-h2",            size: "40px", weight: "500", lh: "1.1",  ls: "-0.03em", colorRole: "color-text-primary",   spec: ["font-size-2xl", "font-weight-medium", "line-height-heading", "tracking-tight"],    sample: "Heading Two" },
  { className: ".type-h3",            size: "32px", weight: "500", lh: "1.1",  ls: "-0.03em", colorRole: "color-text-primary",   spec: ["font-size-xl",  "font-weight-medium", "line-height-heading", "tracking-tight"],    sample: "Heading Three" },
  { className: ".type-h4",            size: "24px", weight: "500", lh: "1.3",  ls: "-0.03em", colorRole: "color-text-primary",   spec: ["font-size-lg",  "font-weight-medium", "line-height-snug",    "tracking-tight"],    sample: "Heading Four" },
  { className: ".type-body-lg",       size: "18px", weight: "400", lh: "1.6",  ls: "0em",     colorRole: "color-text-secondary", spec: ["font-size-sm",   "font-weight-regular","line-height-body",    "tracking-normal"],   sample: "Body large — editorial and case study body copy. Used for long-form reading." },
  { className: ".type-body",          size: "16px", weight: "400", lh: "1.6",  ls: "0em",     colorRole: "color-text-secondary", spec: ["font-size-base", "font-weight-regular","line-height-body",    "tracking-normal"],   sample: "Body — standard UI text, descriptions, general content." },
  { className: ".type-body-strong",   size: "16px", weight: "500", lh: "1.6",  ls: "0em",     colorRole: "color-text-primary",   spec: ["font-size-base", "font-weight-medium", "line-height-body",    "tracking-normal"],   sample: "Body strong — emphasized inline text, active states." },
  { className: ".type-body-sm",       size: "14px", weight: "400", lh: "1.45", ls: "-0.03em", colorRole: "color-text-secondary", spec: ["font-size-xs",   "font-weight-regular","line-height-ui",      "tracking-tight"],    sample: "Small body — captions, metadata, secondary UI text." },
  { className: ".type-body-sm-strong",size: "14px", weight: "500", lh: "1.45", ls: "-0.03em", colorRole: "color-text-primary",   spec: ["font-size-xs",   "font-weight-medium", "line-height-ui",      "tracking-tight"],    sample: "Small body strong — emphasized small text." },
  { className: ".type-body-xs",       size: "12px", weight: "500", lh: "1.45", ls: "0em",     colorRole: "color-text-secondary", spec: ["font-size-xxxs", "font-weight-medium", "line-height-ui",      "tracking-normal"],   sample: "XS body — badges, tooltips, inline annotations." },
];

const monoStyles = [
  { className: ".type-label", size: "14px", weight: "500", lh: "1", ls: "0.04em", colorRole: "color-text-secondary", spec: ["font-size-xs", "font-weight-medium", "line-height-none", "tracking-expanded"], note: "UPPERCASE · Geist Mono", sample: "Section Label / Category Tag" },
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

const fontSizeItems = [
  { name: "font-size-xxxs", value: "12px", role: "Labels, badges" },
  { name: "font-size-xs",   value: "14px", role: "UI text, body-sm, meta" },
  { name: "font-size-base", value: "16px", role: "Standard body, general UI" },
  { name: "font-size-sm",   value: "18px", role: "Editorial / case-study body" },
  { name: "font-size-md",   value: "20px", role: "Testimonial quotes" },
  { name: "font-size-lg",   value: "24px", role: "h4, card titles" },
  { name: "font-size-xl",   value: "32px", role: "h3, notes quote" },
  { name: "font-size-2xl",  value: "40px", role: "h2" },
  { name: "font-size-3xl",  value: "48px", role: "h1, hero" },
];

const lineHeightItems = [
  { name: "line-height-none",    value: "1",    role: "Single-line labels, badges" },
  { name: "line-height-heading", value: "1.1",  role: "All display / heading text" },
  { name: "line-height-snug",    value: "1.3",  role: "Card titles, medium headings" },
  { name: "line-height-ui",      value: "1.45", role: "UI text, captions, short content" },
  { name: "line-height-body",    value: "1.6",  role: "Long-form body copy" },
];

const letterSpacingItems = [
  { name: "tracking-tight",    value: "-0.03em", role: "Headings" },
  { name: "tracking-normal",   value: "0em",     role: "Body text" },
  { name: "tracking-expanded", value: "0.02em",  role: "Labels, mono uppercase" },
];

const fontWeightItems = [
  { name: "font-weight-regular", value: "400", role: "Body, captions, descriptions (450 on light theme)" },
  { name: "font-weight-medium",  value: "500", role: "Headings, strong, active states (550 on light theme)" },
];

/* ================================
 * Page
 * ============================== */

export function DesignSystemPageClient() {
  return (
    <PageShell className="w-full min-w-0">
      <div className="flex flex-col gap-[100px] w-full min-w-0">

        {/* Title */}
        <header className="flex flex-col gap-5">
          <h1 className="type-h1">Design System</h1>
          <p className="type-body">Portfolio — Tokens &amp; Foundations</p>
        </header>

        {/* ===== COLORS ===== */}
        <section className="flex flex-col gap-16 w-full">

          {/* Color Scale */}
          <div className="flex flex-col gap-5">
            <SectionLabel>Color Scale</SectionLabel>
            <div className="flex flex-col gap-8">
              <ScaleGroup label="Neutral">
                <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-2">
                  {neutralColors.map((c) => (
                    <ColorCard key={c.name} name={c.name} cssVar={c.cssVar} />
                  ))}
                </div>
              </ScaleGroup>
              <ScaleGroup label="Accent">
                <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-2">
                  {accentColors.map((c) => (
                    <ColorCard key={c.name} name={c.name} cssVar={c.cssVar} />
                  ))}
                </div>
              </ScaleGroup>
            </div>
          </div>

          {/* Semantic Aliases */}
          <div className="flex flex-col gap-5">
            <SectionLabel>Color — Semantic Aliases</SectionLabel>
            <div className="flex flex-col gap-8">
              <AliasGroup label="Backgrounds" aliases={bgAliases} />
              <AliasGroup label="CTA" aliases={ctaAliases} />
              <AliasGroup label="Borders" aliases={borderAliases} />
              <AliasGroup label="Text" aliases={textAliases} />
              <AliasGroup label="Interaction" aliases={interactionAliases} />
              <AliasGroup label="Buttons — Secondary" aliases={buttonAliases} />
              <AliasGroup label="Form" aliases={formAliases} />
            </div>
          </div>
        </section>

        {/* ===== TYPOGRAPHY ===== */}
        <section className="flex flex-col gap-16 w-full">

          {/* Type Scale */}
          <div className="flex flex-col gap-5">
            <SectionLabel>Type Scale</SectionLabel>
            <div className="flex flex-col gap-8">
              <ScaleGroup label="Font Size">
                {fontSizeItems.map((s) => <FontSizeRow key={s.name} {...s} />)}
              </ScaleGroup>
              <ScaleGroup label="Line Height">
                {lineHeightItems.map((s) => <ScaleRow key={s.name} {...s} />)}
              </ScaleGroup>
              <ScaleGroup label="Letter Spacing">
                {letterSpacingItems.map((s) => <ScaleRow key={s.name} {...s} />)}
              </ScaleGroup>
              <ScaleGroup label="Font Weight">
                {fontWeightItems.map((s) => <ScaleRow key={s.name} {...s} />)}
              </ScaleGroup>
            </div>
          </div>

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
                "bg: color-bg-card",
                "border: 1px color-border",
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
                "bg: color-bg-card-tinted",
                "border: 1px color-border-subtle",
                "radius: radius-lg (20px)",
                "padding: space-xl (24px)",
              ]}
            />
            <SurfaceCard
              className="bg-color-bg border border-color-border-inset rounded-[20px]"
              name="card-ghost"
              description="Outline/ghost card. Non-interactive, structural use."
              tokens={[
                "bg: color-bg",
                "border: 1px color-border-inset",
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
    <div className="border-b border-color-border-inset pb-2">
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
    <div className="flex flex-col gap-2 w-full min-w-0">
      <div
        className="h-[64px] w-full rounded-[8px] border border-color-border-subtle"
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
    <div className="bg-color-bg-card-tinted border border-color-border-subtle rounded-[8px] flex items-center gap-3 p-3 overflow-hidden">
      <div
        className="shrink-0 size-6 rounded-[6px] border border-color-border-subtle"
        style={{ backgroundColor: `var(${cssVar})` }}
      />
      {/* Name — always shown in full; fixed width on md+ so mapsTo aligns */}
      <p className="font-mono text-[12px] font-normal leading-[1.45] text-color-text-primary shrink-0 md:w-[240px]">
        {name}
      </p>
      {/* mapsTo — only on md+ where name has fixed width */}
      <p className="hidden md:block font-mono text-[12px] font-normal leading-[1.45] text-color-text-tertiary shrink-0 whitespace-nowrap">
        {mapsTo}
      </p>
      {/* Hex · description — first to go */}
      <p className="hidden lg:block font-mono text-[12px] font-normal leading-[1.45] text-color-text-secondary ml-auto shrink-0 whitespace-nowrap">
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
  spec: string[];
  sample: string;
  note?: string;
  mono?: boolean;
};

function TypeCard({ className, size, weight, lh, ls, colorRole, spec, sample, mono }: TypeCardProps) {
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
    <div className="bg-color-bg-card-tinted border border-color-border-subtle rounded-[12px] flex flex-col md:flex-row md:items-start md:justify-between p-6 gap-4 md:gap-6 overflow-hidden">
      {/* Spec */}
      <div className="flex flex-col gap-1 shrink-0 md:w-[220px]">
        <p className="font-mono text-[12px] font-normal leading-[1.45] text-color-text-primary">
          {className}
        </p>
        <div className="font-mono text-[12px] font-normal leading-[1.45] text-color-text-tertiary flex flex-col">
          {spec.map((line) => <span key={line}>{line}</span>)}
          <span>{colorRole}</span>
        </div>
      </div>
      {/* Preview */}
      <div className={`min-w-0 overflow-hidden md:flex-1 ${colorClass}`} style={previewStyle}>
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
    <div className="border-b border-color-border-inset flex items-center h-9 gap-4 overflow-hidden">
      <p className="font-mono text-[12px] font-normal leading-[1.45] text-color-text-primary w-[100px] shrink-0">
        {name}
      </p>
      <p className="font-mono text-[12px] font-normal leading-[1.45] text-color-text-tertiary w-[44px] shrink-0">
        {px}px
      </p>
      <div className="flex-1 flex items-center gap-4 min-w-0 overflow-hidden">
        <div
          className="h-2 rounded-[2px] bg-color-cta-primary opacity-70 max-w-full"
          style={{ width: barWidth }}
        />
        <p className="hidden sm:block font-['Geist',sans-serif] text-[12px] font-normal leading-[1.45] text-color-text-tertiary whitespace-nowrap">
          {description}
        </p>
        {warn && (
          <p className="font-mono text-[11px] leading-[1.45] text-color-cta-primary opacity-60 whitespace-nowrap ml-auto shrink-0">
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
 * Scale group — label + rows (mirrors AliasGroup)
 * ============================== */

function ScaleGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1">
      <p className="font-mono text-[12px] font-normal leading-[1.45] text-color-text-tertiary mb-1">{label}</p>
      {children}
    </div>
  );
}

/* ================================
 * Generic scale row (line-height, tracking, weight)
 * ============================== */

function ScaleRow({ name, value, role }: { name: string; value: string; role: string }) {
  return (
    <div className="border-b border-color-border-inset grid grid-cols-[160px_64px_1fr] items-center h-9 overflow-hidden">
      <p className="font-mono text-[12px] font-normal leading-[1.45] text-color-text-primary">
        {name}
      </p>
      <p className="font-mono text-[12px] font-normal leading-[1.45] text-color-text-tertiary">
        {value}
      </p>
      <p className="hidden md:block font-['Geist',sans-serif] text-[12px] font-normal leading-[1.45] text-color-text-tertiary">
        {role}
      </p>
    </div>
  );
}

/* ================================
 * Font size row — includes live "Aa" preview
 * ============================== */

function FontSizeRow({ name, value, role }: { name: string; value: string; role: string }) {
  return (
    <div className="border-b border-color-border-inset grid grid-cols-[160px_64px_1fr_auto] items-center min-h-[44px] py-2 overflow-hidden">
      <p className="font-mono text-[12px] font-normal leading-[1.45] text-color-text-primary">
        {name}
      </p>
      <p className="font-mono text-[12px] font-normal leading-[1.45] text-color-text-tertiary">
        {value}
      </p>
      <p className="hidden md:block font-['Geist',sans-serif] text-[12px] font-normal leading-[1.45] text-color-text-tertiary">
        {role}
      </p>
      <p
        className="text-color-text-secondary opacity-40 leading-none overflow-hidden max-h-[48px] text-right"
        style={{ fontSize: value }}
      >
        Aa
      </p>
    </div>
  );
}

/* ================================
 * Radius card
 * ============================== */

function RadiusCard({ name, twClass, value, description }: { name: string; twClass: string; value: string; description: string }) {
  return (
    <div className="bg-color-bg-card-tinted border border-color-border-subtle rounded-[12px] flex flex-col gap-5 p-6">
      <div
        className="h-14 w-full bg-color-bg border border-color-border-subtle"
        style={{ borderRadius: value }}
      />
      <div className="flex flex-col gap-1">
        <p className="font-mono text-[12px] font-normal leading-[1.45] text-color-text-primary">
          {name}
        </p>
        <p className="font-mono text-[12px] font-normal leading-[1.45] text-color-text-tertiary">
          {twClass}
        </p>
        <p className="font-mono text-[12px] font-normal leading-[1.45] text-color-text-tertiary mt-1">
          {value} — {description}
        </p>
      </div>
    </div>
  );
}
