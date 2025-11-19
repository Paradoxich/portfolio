// app/design-system/tokens/utilities.tsx

// Typography utilities
export const typeUtilities = [
  {
    name: "type-h1",
    role: "Display / main heading",
    tokens:
      "font-size.xl · line-height.tight · tracking.tight · font-weight.medium",
    css: `font-size: 48px;
  line-height: 1.2;
  letter-spacing: -0.03em;
  font-weight: 500;`,
    previewClass: "type-h1",
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
    name: "type-body-sm",
    role: "Body small",
    tokens:
      "font-size.xs · line-height.snug · tracking.normal · font-weight.regular",
    css: `font-size: 14px;
  line-height: 1.4;
  letter-spacing: -0.01em;
  font-weight: 400;`,
    previewClass: "type-body-sm",
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
      "font-size.xxxs · line-height.tight · tracking.expanded · font-weight.medium",
    css: `font-size: 12px;
  line-height: 1.7;
  letter-spacing: 0.02em;
  font-weight: 500;
  text-transform: uppercase;`,
    previewClass: "type-label",
  },
];

// Color utilities
export const colorUtilityTokens = [
  {
    token: "color.bg",
    mapsTo: "color-0",
    role: "Main page background",
    preview: "#100F0C",
  },
  {
    token: "color.bg.surface",
    mapsTo: "color-20",
    role: "Primary card surface",
    preview: "#23221B",
  },
  {
    token: "color.bg.muted",
    mapsTo: "color-10",
    role: "Muted / secondary surface",
    preview: "#191813",
  },
  {
    token: "color.border",
    mapsTo: "color-30",
    role: "Default border / divider",
    preview: "#23251E",
  },
  {
    token: "color.text.primary",
    mapsTo: "color-90",
    role: "Primary text color",
    preview: "#F3F0E9",
  },
  {
    token: "color.text.secondary",
    mapsTo: "color-80",
    role: "Secondary text color",
    preview: "#C5BFAB",
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
];
