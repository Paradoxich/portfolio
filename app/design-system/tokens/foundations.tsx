// app/design-system/tokens/foundations.tsx

// Font-size scale
export const fontSizeTokens = [
  { token: "font-size.xxxs", value: "12px", role: "Labels, badges" },
  { token: "font-size.xs",   value: "14px", role: "UI text – body-sm, meta" },
  { token: "font-size.base", value: "16px", role: "Standard body, general UI" },
  { token: "font-size.sm",   value: "18px", role: "Editorial / case-study body" },
  { token: "font-size.md",   value: "20px", role: "Testimonial quotes" },
  { token: "font-size.lg",   value: "24px", role: "h4, card titles" },
  { token: "font-size.xl",   value: "32px", role: "h3, notes quote" },
  { token: "font-size.2xl",  value: "40px", role: "h2" },
  { token: "font-size.3xl",  value: "48px", role: "h1" },
];

// Spacing scale (4px base grid)
export const spacingTokens = [
  { token: "space.xs",      value: "4px" },
  { token: "space.sm",      value: "8px" },
  { token: "space.md",      value: "12px" },
  { token: "space.base",    value: "16px" },
  { token: "space.lg",      value: "20px" },
  { token: "space.xl",      value: "24px" },
  { token: "space.2xl",     value: "32px" },
  { token: "space.3xl",     value: "40px" },
  { token: "space.4xl",     value: "56px" },
  { token: "space.5xl",     value: "64px" },
  { token: "space.section", value: "120px" },
];

// Layout tokens (container + gutter)
export const layoutTokens = [
  { token: "size.container", value: "1400px" },
  { token: "space.gutter",   value: "20px" },
];

// Line-height scale
export const lineHeightTokens = [
  { token: "line-height.none",    value: "1",    role: "Single-line labels, badges" },
  { token: "line-height.heading", value: "1.1",  role: "All display and heading text" },
  { token: "line-height.snug",    value: "1.3",  role: "Card titles, medium content headings" },
  { token: "line-height.ui",      value: "1.45", role: "UI text, captions, short-form content" },
  { token: "line-height.body",    value: "1.6",  role: "Long-form body copy" },
];

// Letter-spacing scale
export const trackingTokens = [
  { token: "tracking.tight",    value: "-0.03em" },
  { token: "tracking.normal",   value: "0em" },
  { token: "tracking.expanded", value: "0.02em" },
];

// Font-weight scale
export const fontWeightTokens = [
  { token: "font-weight.regular", value: "400" },
  { token: "font-weight.medium",  value: "500" },
];

// Color scale – neutral ramp (all themes)
export const colorTokens = [
  { token: "color-0",   warm: "#080806", cool: "#0a0a0a", light: "#FAFAFA" },
  { token: "color-05",  warm: "#0F0F0C", cool: "#0f0f0f", light: "#F2F2F2" },
  { token: "color-10",  warm: "#141712", cool: "#141414", light: "#E3E3E3" },
  { token: "color-20",  warm: "#1F1E18", cool: "#1f1f1f", light: "#D9D9D9" },
  { token: "color-30",  warm: "#272921", cool: "#262626", light: "#CCCCCC" },
  { token: "color-40",  warm: "#35382C", cool: "#333333", light: "#BFBFBF" },
  { token: "color-50",  warm: "#494D3F", cool: "#484848", light: "#B3B3B3" },
  { token: "color-60",  warm: "#606655", cool: "#5c5c5c", light: "#A6A6A6" },
  { token: "color-80",  warm: "#BDAD9A", cool: "#a3a3a3", light: "#4D4D4D" },
  { token: "color-90",  warm: "#F3F0E9", cool: "#e5e5e5", light: "#0D0D0D" },
  { token: "color-yellow-70", warm: "#EEC643", cool: "#EEC643", light: "#EEC643" },
  { token: "color-yellow-60", warm: "#DBB537", cool: "#DBB537", light: "#DBB537" },
];

// Theming tokens – dynamic values that change with color scheme
export const themingTokens = [
  { token: "color-0-rgb",  warm: "60, 20, 3",   cool: "10, 10, 10",  light: "250, 250, 250", role: "RGB for gradient opacity" },
  { token: "color-10-rgb", warm: "96, 22, 9",   cool: "20, 20, 20",  light: "227, 227, 227", role: "RGB for translucent surface fills" },
  { token: "color-60-rgb", warm: "81, 17, 40",  cool: "92, 92, 92",  light: "166, 166, 166", role: "RGB for hover opacity" },
  { token: "image-filter", warm: "none",        cool: "grayscale(100%)", light: "none",       role: "Theme-based image filter" },
];

// Border-radius scale
export const radiusTokens = [
  { token: "radius.sm",   value: "8px" },
  { token: "radius.md",   value: "12px" },
  { token: "radius.lg",   value: "20px" },
  { token: "radius.full", value: "9999px" },
];

// Layout grid tokens (12-col grid)
export const layoutGridTokens = [
  { token: "grid.columns", value: "12" },
  { token: "grid.gutter",  value: "20px" },
];

// Layout container tokens
export const layoutContainerTokens = [
  { token: "container.max-width", value: "1400px" },
  { token: "container.padding.x", value: "40px" },
];

// One-off layout values — intentionally outside the spacing scale.
// These are semantically precise values that don't fit the 4px grid
// or exist at a scale above the current maximum. Do not add to the
// spacing scale; keep them as named exceptions here for discoverability.
export const layoutExceptionTokens = [
  {
    token: "space.illustration-gap",
    value: "200px",
    role: "Vertical gap between illustration blocks on /illustrations. Intentionally above the spacing scale — breathing room between full-bleed image groups.",
    usage: "gap-[200px] in IllustrationBlocks.tsx",
  },
  {
    token: "mx.bullet-separator",
    value: "0.75ch",
    role: "Inline margin around bullet separators (•) in CaseStudyLayout meta line. Character-relative unit preserves optical spacing regardless of font size — do not replace with a fixed px token.",
    usage: "mx-[0.75ch] in CaseStudyLayout.tsx",
  },
];
