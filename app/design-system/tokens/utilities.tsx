// app/design-system/tokens/utilities.tsx

// Typography utilities
export const typeUtilities = [
  {
    name: "type-h1",
    role: "Display / main heading",
    tokens:
      "font-size.3xl · line-height.tight · tracking.tight · font-weight.medium",
    css: `font-size: 48px;
  line-height: 1.2;
  letter-spacing: -0.03em;
  font-weight: 500;`,
    previewClass: "type-h1",
  },
  {
    name: "type-h2",
    role: "Secondary display",
    tokens:
      "font-size.2xl · line-height.custom-1.1 · tracking.tight · font-weight.medium",
    css: `font-size: 40px;
  line-height: 1.1;
  letter-spacing: -0.03em;
  font-weight: 500;`,
    previewClass: "type-h2",
  },
  {
    name: "type-h3",
    role: "Section heading",
    tokens:
      "font-size.xl · line-height.tight · tracking.tight · font-weight.medium",
    css: `font-size: 32px;
  line-height: 1.2;
  letter-spacing: -0.03em;
  font-weight: 500;`,
    previewClass: "type-h3",
  },
  {
    name: "type-h4",
    role: "Subheading",
    tokens:
      "font-size.md · line-height.snug · tracking.tight · font-weight.medium",
    css: `font-size: 20px;
  line-height: 1.4;
  letter-spacing: -0.03em;
  font-weight: 500;`,
    previewClass: "type-h4",
  },
  {
    name: "type-body",
    role: "Body",
    tokens:
      "font-size.sm · line-height.loose · tracking.normal · font-weight.regular",
    css: `font-size: 16px;
  line-height: 1.7;
  letter-spacing: 0;
  font-weight: 400;`,
    previewClass: "type-body",
  },
  {
    name: "type-body-strong",
    role: "Body emphasized",
    tokens:
      "font-size.sm · line-height.loose · tracking.normal · font-weight.medium",
    css: `font-size: 16px;
  line-height: 1.7;
  letter-spacing: 0;
  font-weight: 500;`,
    previewClass: "type-body-strong",
  },
  {
    name: "type-body-sm",
    role: "Body small",
    tokens:
      "font-size.xs · line-height.snug · tracking.tight · font-weight.regular",
    css: `font-size: 14px;
  line-height: 1.4;
  letter-spacing: -0.03em;
  font-weight: 400;`,
    previewClass: "type-body-sm",
  },
  {
    name: "type-body-sm-strong",
    role: "Body small emphasized",
    tokens:
      "font-size.xs · line-height.snug · tracking.tight · font-weight.medium",
    css: `font-size: 14px;
  line-height: 1.4;
  letter-spacing: -0.03em;
  font-weight: 500;`,
    previewClass: "type-body-sm-strong",
  },
  {
    name: "type-body-xs",
    role: "Body XS",
    tokens:
      "font-size.xxs · line-height.loose · tracking.normal · font-weight.medium",
    css: `font-size: 13px;
  line-height: 1.7;
  letter-spacing: 0;
  font-weight: 500;`,
    previewClass: "type-body-xs",
  },
  {
    name: "type-cta",
    role: "CTA / buttons",
    tokens:
      "font-size.xs · line-height.tight · tracking.expanded · font-weight.medium",
    css: `font-size: 14px;
  letter-spacing: 0.02em;
  font-weight: 500;`,
    previewClass: "type-cta",
  },
  {
    name: "type-label",
    role: "Label / meta",
    tokens:
      "font-size.xxxs · line-height.none · tracking.expanded · font-weight.medium",
    css: `font-size: 12px;
  line-height: 1;
  letter-spacing: 0.02em;
  font-weight: 500;
  text-transform: uppercase;`,
    previewClass: "type-label",
  },
];

// Color utilities (both themes)
export const colorUtilityTokens = [
  {
    token: "color.bg",
    mapsTo: "color-0",
    role: "Main page background",
    warm: "#100F0C",
    cool: "#0a0a0a",
  },
  {
    token: "color.bg.surface",
    mapsTo: "color-20",
    role: "Primary card surface",
    warm: "#23221B",
    cool: "#1f1f1f",
  },
  {
    token: "color.bg.muted",
    mapsTo: "color-10",
    role: "Muted / secondary surface",
    warm: "#191813",
    cool: "#141414",
  },
  {
    token: "color.border",
    mapsTo: "color-30",
    role: "Default border / divider",
    warm: "#23251E",
    cool: "#262626",
  },
  {
    token: "color.border.secondary",
    mapsTo: "color-40",
    role: "Secondary / hover border",
    warm: "#2E3027",
    cool: "#333333",
  },
  {
    token: "color.text.primary",
    mapsTo: "color-90",
    role: "Primary text color",
    warm: "#F3F0E9",
    cool: "#e5e5e5",
  },
  {
    token: "color.text.secondary",
    mapsTo: "color-80",
    role: "Secondary text color",
    warm: "#C5BFAB",
    cool: "#a3a3a3",
  },
];

// Spacing utilities
export const spacingUtilityTokens = [
  {
    token: "space.gap",
    mapsTo: "space.lg",
    role: "Main gap between bento grid items",
    preview: "20px",
  },
  {
    token: "space.card-padding",
    mapsTo: "space.xl",
    role: "Standard card padding",
    preview: "24px",
  },
  {
    token: "space.section-y",
    mapsTo: "space.3xl",
    role: "Vertical spacing between major sections",
    preview: "40px",
  },
  {
    token: "space.element-gap",
    mapsTo: "space.sm",
    role: "Small gaps between inline elements",
    preview: "8px",
  },
  {
    token: "space.element-gap-md",
    mapsTo: "space.md",
    role: "Medium gaps inside rows / small blocks",
    preview: "12px",
  },
  {
    token: "stack-xs",
    mapsTo: "space.xs",
    role: "Tight spacing for bullets and meta labels",
    preview: "4px",
  },
  {
    token: "stack-md",
    mapsTo: "space.md",
    role: "Default multi-line body spacing",
    preview: "12px",
  },
  {
    token: "stack-lg",
    mapsTo: "space.sm × 2 (derived)",
    role: "Compact card sections (16px)",
    preview: "16px",
  },
  {
    token: "stack-xl",
    mapsTo: "space.xl",
    role: "Stack for cards / CTA rows",
    preview: "24px",
  },
  {
    token: "stack-2xl",
    mapsTo: "space.2xl",
    role: "Loose blocks / section transitions",
    preview: "32px",
  },
  {
    token: "stack-3xl",
    mapsTo: "space.3xl",
    role: "Desktop-only section rhythm",
    preview: "40px",
  },
  {
    token: "stack-5xl",
    mapsTo: "space.2xl + space.xl (derived)",
    role: "Case study spacing (56px)",
    preview: "56px",
  },
  {
    token: "stack-gutter",
    mapsTo: "space.gutter",
    role: "Column stacks aligned to layout gutter",
    preview: "20px",
  },
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
    token: "radius.button-sm",
    mapsTo: "radius.sm",
    role: "Buttons inside cards",
    previewRadius: "8px",
  },
  {
    token: "radius.icon-button",
    mapsTo: "radius.full",
    role: "Icon-only buttons",
    previewRadius: "9999px",
  },
];

// Surface utilities
export const surfaceUtilities = [
  {
    name: "card",
    role: "Primary surface",
    tokens: "color.bg · color.border · radius.lg · space.card-padding",
    description:
      "Default card surface used across the layout for non-clickable cards.",
    className: "card",
  },
  {
    name: "card-cta",
    role: "Secondary surface",
    tokens: "color.bg.surface · color.border · radius.lg · space.card-padding",
    description: "Default CTA surface used across the layout.",
    className: "card-cta",
  },
  {
    name: "card-muted",
    role: "Muted surface",
    tokens: "color.bg.muted · color.border · radius.lg · space.card-padding",
    description:
      "Secondary surface for higher-emphasis content on non-clickable cards",
    className: "card-muted",
  },
  {
    name: "panel",
    role: "Inner panel",
    tokens: "color.bg · color.border · radius.md · (space.sm × 2)",
    description:
      "Compact nested surface used inside cards (design-system token tables).",
    className: "panel",
  },
];

export const layoutUtilities = [
  {
    name: "page-shell",
    role: "Page wrapper",
    tokens: "size.container · space.3xl → calc(space.2xl × 2)",
    description:
      "Centers the page content, adds the standard responsive vertical padding, and mirrors the layout container gutters.",
    className: "page-shell",
  },
  {
    name: "layout-grid",
    role: "12-column grid",
    tokens: "grid.columns · space.gutter",
    description:
      "Equal-width 12 column grid with the default 20px gutter between tracks.",
    className: "layout-grid",
  },
  {
    name: "hero-gap",
    role: "Hero spacing",
    tokens: "space.3xl → (space.2xl + space.xl)",
    description:
      "Adds the responsive gap beneath hero rows (40px mobile · 56px desktop).",
    className: "hero-gap",
  },
  {
    name: "text-column",
    role: "Case study column",
    tokens: "max-width: 640px; centered auto margins",
    description:
      "Constrains long-form narratives to a 640px column and centers them within the modal.",
    className: "text-column",
  },
  {
    name: "gap-feature",
    role: "Feature grid gap",
    tokens: "space.3xl × 2",
    description: "80px grid gap for dense feature grids (testimonials layout).",
    className: "gap-feature",
  },
  {
    name: "section-offset",
    role: "Full-width offset",
    tokens: "space.3xl × 3",
    description:
      "Applies 120px top/bottom offsets used before and after marquee sections.",
    className: "section-offset",
  },
];
