// app/design-system/tokens/foundations.tsx

// Font-size scale
export const fontSizeTokens = [
  { token: "font-size.xxxs", value: "12px" },
  { token: "font-size.xxs", value: "13px" },
  { token: "font-size.xs", value: "14px" },
  { token: "font-size.sm", value: "16px" },
  { token: "font-size.md", value: "20px" },
  { token: "font-size.lg", value: "24px" },
  { token: "font-size.xl", value: "32px" },
  { token: "font-size.2xl", value: "40px" },
  { token: "font-size.3xl", value: "48px" },
];

// Spacing scale (4px grid)
export const spacingTokens = [
  { token: "space.xs", value: "4px" },
  { token: "space.sm", value: "8px" },
  { token: "space.md", value: "12px" },
  { token: "space.lg", value: "20px" },
  { token: "space.xl", value: "24px" },
  { token: "space.2xl", value: "32px" },
  { token: "space.3xl", value: "40px" },
];

// Layout tokens (container + gutter)
export const layoutTokens = [
  {
    token: "size.container",
    value: "1352px",
  },
  {
    token: "space.gutter",
    value: "20px",
  },
];

// Line-height scale
export const lineHeightTokens = [
  { token: "line-height.none", value: "1" },
  { token: "line-height.compact", value: "1.1" },
  { token: "line-height.tight", value: "1.2" },
  { token: "line-height.snug", value: "1.4" },
  { token: "line-height.relaxed", value: "1.5" },
  { token: "line-height.loose", value: "1.7" },
];

// Letter-spacing scale
export const trackingTokens = [
  { token: "tracking.tight", value: "-0.03em" },
  { token: "tracking.normal", value: "0em" },
  { token: "tracking.expanded", value: "0.02em" },
];

// Font-weight scale
export const fontWeightTokens = [
  { token: "font-weight.regular", value: "400" },
  { token: "font-weight.medium", value: "500" },
];

// Color scale – neutral ramp
export const colorTokens = [
  { token: "color-0", value: "#111010" },
  { token: "color-10", value: "#191813" },
  { token: "color-20", value: "#23221B" },
  { token: "color-30", value: "#23251E" },
  { token: "color-40", value: "#2E3027" },
  { token: "color-60", value: "#555A4B" },
  { token: "color-80", value: "#C5BFAB" },
  { token: "color-90", value: "#F3F0E9" },
  { token: "color-100", value: "#FFFFFF" },
];

// Border-radius scale
export const radiusTokens = [
  { token: "radius.sm", value: "8px" },
  { token: "radius.md", value: "12px" },
  { token: "radius.lg", value: "20px" },
  { token: "radius.full", value: "9999px" },
];

// Layout grid tokens (12-col grid)
export const layoutGridTokens = [
  {
    token: "grid.columns",
    value: "12",
  },
  {
    token: "grid.gutter",
    value: "20px",
  },
  {
    token: "grid.margin",
    value: "40px",
  },
];

export const layoutColumnTokens = [
  { token: "col.1", value: "1fr" },
  { token: "col.2", value: "2fr" },
  { token: "col.3", value: "3fr" },
  { token: "col.4", value: "4fr" },
  { token: "col.5", value: "5fr" },
  { token: "col.6", value: "6fr" },
  { token: "col.7", value: "7fr" },
  { token: "col.8", value: "8fr" },
  { token: "col.9", value: "9fr" },
  { token: "col.10", value: "10fr" },
  { token: "col.11", value: "11fr" },
  { token: "col.12", value: "12fr" },
];

export const layoutContainerTokens = [
  {
    token: "container.max-width",
    value: "1352px",
  },
  {
    token: "container.padding.x",
    value: "40px",
  },
];
