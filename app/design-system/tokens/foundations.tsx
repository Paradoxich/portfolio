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

// Color scale – neutral ramp (both themes)
export const colorTokens = [
  { token: "color-0", warm: "#100F0C", cool: "#0a0a0a" },
  { token: "color-10", warm: "#191813", cool: "#141414" },
  { token: "color-20", warm: "#23221B", cool: "#1f1f1f" },
  { token: "color-30", warm: "#23251E", cool: "#262626" },
  { token: "color-40", warm: "#2E3027", cool: "#333333" },
  { token: "color-60", warm: "#555A4B", cool: "#5c5c5c" },
  { token: "color-80", warm: "#C5BFAB", cool: "#a3a3a3" },
  { token: "color-90", warm: "#F3F0E9", cool: "#e5e5e5" },
  { token: "color-100", warm: "#FFFFFF", cool: "#ffffff" },
];

// Theming tokens – dynamic values that change with color scheme
export const themingTokens = [
  { token: "color-0-rgb", warm: "16, 15, 12", cool: "10, 10, 10", role: "RGB for gradient opacity" },
  { token: "color-20-rgb", warm: "35, 34, 27", cool: "31, 31, 31", role: "RGB for gradient opacity" },
  { token: "color-60-rgb", warm: "85, 90, 75", cool: "92, 92, 92", role: "RGB for hover opacity" },
  { token: "color-blend", warm: "#43402C", cool: "#3a3a3a", role: "Illustration color overlay" },
  { token: "color-accent", warm: "#84873d", cool: "#6b6b6b", role: "Button fill (e.g. Water button)" },
  { token: "image-filter", warm: "none", cool: "grayscale(100%)", role: "Theme-based image filter" },
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
