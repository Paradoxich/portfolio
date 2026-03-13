// app/design-system/tokens/utilities.tsx

// Typography utilities (semantic, reusable)
export const typeUtilities = [
  {
    name: "type-h1",
    role: "Display / main heading",
    tokens: "font-size.3xl · line-height.heading · tracking.tight · font-weight.medium",
    css: `font-size: 48px;
  line-height: 1.1;
  letter-spacing: -0.03em;
  font-weight: 500;`,
    previewClass: "type-h1",
  },
  {
    name: "type-h2",
    role: "Secondary display",
    tokens: "font-size.2xl · line-height.heading · tracking.tight · font-weight.medium",
    css: `font-size: 40px;
  line-height: 1.1;
  letter-spacing: -0.03em;
  font-weight: 500;`,
    previewClass: "type-h2",
  },
  {
    name: "type-h3",
    role: "Section heading",
    tokens: "font-size.xl · line-height.heading · tracking.tight · font-weight.medium",
    css: `font-size: 32px;
  line-height: 1.1;
  letter-spacing: -0.03em;
  font-weight: 500;`,
    previewClass: "type-h3",
  },
  {
    name: "type-h4",
    role: "Subheading",
    tokens: "font-size.lg · line-height.snug · tracking.tight · font-weight.medium",
    css: `font-size: 24px;
  line-height: 1.3;
  letter-spacing: -0.03em;
  font-weight: 500;`,
    previewClass: "type-h4",
  },
  {
    name: "type-body",
    role: "Body",
    tokens: "font-size.base · line-height.body · tracking.normal · font-weight.regular",
    css: `font-size: 16px;
  line-height: 1.6;
  letter-spacing: 0;
  font-weight: 400;`,
    previewClass: "type-body",
  },
  {
    name: "type-body-lg",
    role: "Body large — editorial / case study",
    tokens: "font-size.sm · line-height.body · tracking.normal · font-weight.regular",
    css: `font-size: 18px;
  line-height: 1.6;
  letter-spacing: 0;
  font-weight: 400;`,
    previewClass: "type-body-lg",
  },
  {
    name: "type-body-strong",
    role: "Body emphasized",
    tokens: "font-size.base · line-height.body · tracking.normal · font-weight.medium",
    css: `font-size: 16px;
  line-height: 1.6;
  letter-spacing: 0;
  font-weight: 500;`,
    previewClass: "type-body-strong",
  },
  {
    name: "type-body-sm",
    role: "Body small",
    tokens: "font-size.xs · line-height.ui · tracking.tight · font-weight.regular",
    css: `font-size: 14px;
  line-height: 1.45;
  letter-spacing: -0.03em;
  font-weight: 400;`,
    previewClass: "type-body-sm",
  },
  {
    name: "type-body-sm-strong",
    role: "Body small emphasized",
    tokens: "font-size.xs · line-height.ui · tracking.tight · font-weight.medium",
    css: `font-size: 14px;
  line-height: 1.45;
  letter-spacing: -0.03em;
  font-weight: 500;`,
    previewClass: "type-body-sm-strong",
  },
  {
    name: "type-body-xs",
    role: "Body XS",
    tokens: "font-size.xxxs · line-height.ui · tracking.normal · font-weight.medium",
    css: `font-size: 12px;
  line-height: 1.45;
  letter-spacing: 0;
  font-weight: 500;`,
    previewClass: "type-body-xs",
  },
  {
    name: "type-label",
    role: "Label / meta",
    tokens: "font-size.xxxs · line-height.none · tracking.expanded · font-weight.medium · uppercase",
    css: `font-size: 12px;
  line-height: 1;
  letter-spacing: 0.02em;
  font-weight: 500;
  text-transform: uppercase;`,
    previewClass: "type-label",
  },
];

// Color utilities (all themes)
export const colorUtilityTokens = [
  { token: "color.bg",              mapsTo: "color-0",  role: "Main page background",                                       warm: "#080806", cool: "#0a0a0a", light: "#FAFAFA" },
  { token: "color.bg.card",         mapsTo: "color-05", role: "Card surface background (card-tinted, card-interactive)",    warm: "#0F0F0C", cool: "#0f0f0f", light: "#F2F2F2" },
  { token: "color.bg.muted",        mapsTo: "color-10", role: "Hover / muted bg",                                          warm: "#141712", cool: "#141414", light: "#E3E3E3" },
  { token: "color.bg.surface",      mapsTo: "color-20", role: "Raised / active surface bg",                                warm: "#1F1E18", cool: "#1f1f1f", light: "#D9D9D9" },
  { token: "color.border.inset",    mapsTo: "color-10", role: "Structural dividers — nav border, drawer edge, separators",  warm: "#141712", cool: "#141414", light: "#E3E3E3" },
  { token: "color.border.subtle",   mapsTo: "color-20", role: "Subtle border – tinted cards, inset surfaces",               warm: "#1F1E18", cool: "#1f1f1f", light: "#D9D9D9" },
  { token: "color.border",          mapsTo: "color-30", role: "Default border / divider",                                   warm: "#272921", cool: "#262626", light: "#CCCCCC" },
  { token: "color.border.secondary",mapsTo: "color-40", role: "Secondary / hover border",                                   warm: "#35382C", cool: "#333333", light: "#BFBFBF" },
  { token: "color.text.primary",       mapsTo: "color-90",                                      role: "Primary text color",                                         warm: "#F3F0E9", cool: "#e5e5e5", light: "#0D0D0D" },
  { token: "color.text.secondary",     mapsTo: "color-80",                                      role: "Secondary text color",                                       warm: "#BDAD9A", cool: "#a3a3a3", light: "#4D4D4D" },
  { token: "color.text.tertiary",      mapsTo: "color-60",                                      role: "Decorative / disabled / icon tint",                          warm: "#606655", cool: "#5c5c5c", light: "#A6A6A6" },
  { token: "color.interactive.hover",  mapsTo: "color-mix(color-30, 50% transparent)",          role: "Nav item hover / active background",                         warm: "color-30 @ 50%", cool: "color-30 @ 50%", light: "color-30 @ 50%" },
  { token: "color.accent.yellow",      mapsTo: "color-accent-yellow",                           role: "Primary CTA accent (Explore Projects, key pills)",           warm: "#EEC643", cool: "#EEC643", light: "#EEC643" },
];

// Stack utilities — CSS classes applied to a parent; adds margin-top to every direct child after the first
export const spacingUtilityTokens = [
  { token: "stack-xs",  mapsTo: "space.xs",   role: "Tight stacking — bullets, meta labels",     preview: "4px"  },
  { token: "stack-sm",  mapsTo: "space.sm",   role: "Compact stacking — icon rows, tag lists",   preview: "8px"  },
  { token: "stack-md",  mapsTo: "space.md",   role: "Default stacking — body text blocks",       preview: "12px" },
  { token: "stack-lg",  mapsTo: "space.base", role: "Relaxed stacking — compact card sections",  preview: "16px" },
  { token: "stack-xl",  mapsTo: "space.xl",   role: "Section stacking — card and CTA groups",    preview: "24px" },
  { token: "stack-2xl", mapsTo: "space.2xl",  role: "Wide stacking — page header sections",      preview: "32px" },
  { token: "stack-5xl", mapsTo: "space.5xl",  role: "Hero stacking — case study major sections", preview: "56px" },
];

// Radius utilities
export const radiusUtilityTokens = [
  {
    token: "radius.card",
    mapsTo: "radius.lg",
    role: "Main card surfaces",
    previewRadius: "20px",
  },
  {
    token: "radius.surface",
    mapsTo: "radius.md",
    role: "Inner components / nested surfaces",
    previewRadius: "12px",
  },
  {
    token: "radius.element",
    mapsTo: "radius.sm",
    role: "Small interactive elements, tags",
    previewRadius: "8px",
  },
  {
    token: "radius.pill",
    mapsTo: "radius.full",
    role: "Pills, avatars, full-radius shapes",
    previewRadius: "9999px",
  },
];

// Surface utilities
export const surfaceUtilities = [
  {
    name: "card-interactive",
    role: "Clickable card",
    tokens: "color.bg.card · color.border.secondary · radius.lg",
    description:
      "Primary interactive card surface. Card bg + secondary border (more prominent than tinted). Fixed height, SVG background layer, and cursor pointer live in ProjectCard.module.css.",
    className: "card-interactive",
  },
  {
    name: "card-tinted",
    role: "Tinted card — non-clickable",
    tokens: "color.bg.card · color.border.subtle · radius.lg · space.xl padding",
    description:
      "Lightly tinted surface (one step above page bg) with a subtle border. Non-interactive. Used for experiment blocks and the theme switcher.",
    className: "card-tinted",
  },
  {
    name: "card-ghost",
    role: "Ghost / outline card — non-clickable",
    tokens: "color.bg · color.border.inset · radius.lg · space.xl padding",
    description:
      "Page-background fill with a hairline inset border (color-10). The most minimal card surface. Used for testimonials and any plain content container.",
    className: "card-ghost",
  },
];

export const layoutUtilities = [
  {
    name: "page-shell",
    role: "Page wrapper",
    tokens: "size.container · space.3xl padding",
    description:
      "Centers page content within the max-width container and adds standard 40px padding on all sides.",
    className: "page-shell",
  },
  {
    name: "layout-grid",
    role: "12-column grid",
    tokens: "grid.columns · space.gutter",
    description:
      "Equal-width 12-column grid with the default 20px gutter between tracks.",
    className: "layout-grid",
  },
  {
    name: "hero-gap",
    role: "Hero spacing",
    tokens: "space.3xl (mobile) · space.5xl (desktop)",
    description:
      "Responsive gap beneath hero rows — 40px on mobile, 56px on desktop.",
    className: "hero-gap",
  },
  {
    name: "text-column",
    role: "Narrative column",
    tokens: "max-width: 720px · margin: auto",
    description:
      "Constrains long-form text to a 720px column and centers it. Used in case studies.",
    className: "text-column",
  },
];
