/**
 * Project card background illustration — rendered inline so CSS variables
 * from the active theme apply directly to fills, strokes, and gradient stops.
 *
 * Colors to adjust per theme: ColorSchemeProvider.tsx (raw scale).
 * Semantic tokens used here:
 *   --color-bg             cube face fills (matches card background layer)
 *   --color-bg-card        gradient end stop (matches card surface)
 *   --color-border         cube edge strokes (mid-tone)
 *   --color-graphic-muted  top-face highlight dot
 */
export function ProjectCardBackground() {
  return (
    <svg
      width="589"
      height="280"
      viewBox="0 0 589 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    >
      <defs>
        <linearGradient
          id="cardBgGradient"
          x1="295.11"
          y1="0"
          x2="294.138"
          y2="279.997"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--color-bg)" />
          <stop offset="0.42" stopColor="var(--color-bg)" stopOpacity="0.3" />
          <stop offset="1" stopColor="var(--color-bg-card)" />
        </linearGradient>
        <clipPath id="cardBgClip">
          <rect width="589" height="280" />
        </clipPath>
      </defs>

      <g clipPath="url(#cardBgClip)">
        {/* Back-row cubes — dimmed */}
        <g opacity="0.3">
          <path
            d="M447.343 105.5L401.672 88.5L356 105.5V131L401.672 148L447.343 131V105.5Z"
            fill="var(--color-bg)"
          />
          <path
            d="M447.343 105.5L401.672 88.5L356 105.5M447.343 105.5L401.672 122.5M447.343 105.5V131L401.672 148M401.672 122.5L356 105.5M401.672 122.5V148M356 105.5V131L401.672 148"
            stroke="var(--color-border)"
            strokeLinejoin="round"
            strokeDasharray="2 2"
          />
        </g>
        <g opacity="0.3">
          <path
            d="M560 105.5L514.328 88.5L468.656 105.5V131L514.328 148L560 131V105.5Z"
            fill="var(--color-bg)"
          />
          <path
            d="M560 105.5L514.328 88.5L468.656 105.5M560 105.5L514.328 122.5M560 105.5V131L514.328 148M514.328 122.5L468.656 105.5M514.328 122.5V148M468.656 105.5V131L514.328 148"
            stroke="var(--color-border)"
            strokeLinejoin="round"
            strokeDasharray="2 2"
          />
        </g>
        <g opacity="0.3">
          <path
            d="M447.343 80.5L401.672 63.5L356 80.5V106L401.672 123L447.343 106V80.5Z"
            fill="var(--color-bg)"
          />
          <path
            d="M447.343 80.5L401.672 63.5L356 80.5M447.343 80.5L401.672 97.5M447.343 80.5V106L401.672 123M401.672 97.5L356 80.5M401.672 97.5V123M356 80.5V106L401.672 123"
            stroke="var(--color-border)"
            strokeLinejoin="round"
          />
        </g>

        {/* Full-card gradient overlay — blends with card bg */}
        <rect width="589" height="280" fill="url(#cardBgGradient)" />

        {/* Front cube stack — bottom */}
        <path
          d="M502.616 126.5L456.808 109.5L411 126.5V152L456.808 169L502.616 152V126.5Z"
          fill="var(--color-bg)"
        />
        <path
          d="M502.616 126.5L456.808 109.5L411 126.5M502.616 126.5L456.808 143.5M502.616 126.5V152L456.808 169M456.808 143.5L411 126.5M456.808 143.5V169M411 126.5V152L456.808 169"
          stroke="var(--color-border)"
          strokeLinejoin="round"
          strokeDasharray="2 2"
        />

        {/* Front cube stack — middle */}
        <path
          d="M502.616 101.5L456.808 84.5L411 101.5V127L456.808 144L502.616 127V101.5Z"
          fill="var(--color-bg)"
        />
        <path
          d="M502.616 101.5L456.808 84.5L411 101.5M502.616 101.5L456.808 118.5M502.616 101.5V127L456.808 144M456.808 118.5L411 101.5M456.808 118.5V144M411 101.5V127L456.808 144"
          stroke="var(--color-border)"
          strokeLinejoin="round"
          strokeDasharray="2 2"
        />

        {/* Front cube stack — top */}
        <path
          d="M502.616 76.5L456.808 59.5L411 76.5V102L456.808 119L502.616 102V76.5Z"
          fill="var(--color-bg-muted)"
        />
        <path
          d="M502.616 76.5L456.808 59.5L411 76.5M502.616 76.5L456.808 93.5M502.616 76.5V102L456.808 119M456.808 93.5L411 76.5M456.808 93.5V119M411 76.5V102L456.808 119"
          stroke="var(--color-border)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />

        {/* Highlight dot */}
        <ellipse
          cx="457.036"
          cy="76.5"
          rx="2.03592"
          ry="1.5"
          fill="var(--color-graphic-muted)"
        />
      </g>
    </svg>
  );
}
