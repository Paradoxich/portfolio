import { DitheredImage } from "@/components/experiments/DitheredImage";

/**
 * PARKED DRAFT — chromatic-metal dithered section backdrop (Jul 2026).
 *
 * Warm gradient texture (exported from Figma: linear fill + Chromatic metal
 * shader, dither OFF, layer opacity 100%) run through DitheredImage's mono
 * dither so the grain stays pixel-locked at every viewport. Was briefly the
 * home testimonials background; pulled because the treatment is only tuned
 * for the dark scheme and doesn't hold up in light/other color schemes.
 *
 * To revive: render inside a `relative overflow-hidden` section, as a
 * sibling before the content. Settings below were matched against the Figma
 * frame (Portfolio Claude Test > New portfolio > TestimonialsPage):
 * - grain density waves come from the gradient crossing dither thresholds;
 *   `brightness` sets how much of the field goes silent, `contrast` sets
 *   wave crispness, wrapper opacity is the overall fader.
 * - the asset is q70 lossy WebP; re-quantization makes source compression
 *   invisible (A/B'd at <0.03 dither levels of density drift vs lossless).
 */
export function ChromaticMetalBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <DitheredImage
        src="/home/chromatic-metal.webp"
        className="h-full w-full opacity-30"
        mono
        monoColor="#D6A987"
        brightness={0.4}
        contrast={1}
        levels={16}
        cell={3}
        revealRadius={0}
        motion={false}
        // Neutralise the baked-in Ken Burns base framing (1.28x zoom and a
        // -0.04 vertical drift at t=0) so the full gradient composition
        // shows, not a crop of it.
        zoom={0.782}
        focusY={0.04}
      />
    </div>
  );
}
