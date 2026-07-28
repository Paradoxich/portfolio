import Image from "next/image";
import Link from "next/link";
import styles from "./FeaturedCards.module.css";
import { SantolinaCollage } from "./SantolinaCollage";
import { DitheredImage } from "@/components/experiments/DitheredImage";

const headlineClass =
  "text-lg font-medium leading-snug tracking-tight text-color-text-primary md:text-xl";
const labelClass = "type-body text-color-text-secondary md:text-sm";

// Project label with a right-arrow that eases in when the parent card (a
// `group`) is hovered — a subtle "read the case study" affordance.
function CardLabel({ text }: { text: string }) {
  return (
    <p className={`${labelClass} flex items-center gap-xs`}>
      {text}
      <svg
        className="h-[1em] w-[1em] -translate-x-1 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden
      >
        <path
          d="M3 8h9M8.5 4.5 12 8l-3.5 3.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </p>
  );
}

// Editorial feature cards: hook headline + project label over exported
// Figma art, linking into the case studies.
export function FeaturedCards() {
  return (
    <section className="flex flex-col gap-md px-xl md:px-6xl">
      {/* Santolina — full width */}
      <Link
        href="/projects/santolina"
        className={`${styles.santolinaCard} group relative block h-[420px] overflow-hidden rounded-card-xl p-2xl md:h-[583px] md:p-3xl`}
      >
        <div className="absolute inset-0 opacity-60 transition-transform duration-500 group-hover:scale-[1.02]">
          <DitheredImage
            src="/home/santolina-garden.jpg"
            levels={6}
            cell={2}
            revealRadius={0}
            focusY={0.12}
            motion={false}
            motionOnHover
            // Radius must live on the DitheredImage wrapper: its shader reads
            // this computed border-radius and masks its own corners, since
            // Firefox won't clip the accelerated canvas via the card's
            // overflow-hidden. Matches the card's rounded-card-xl.
            className="h-full w-full rounded-card-xl"
          />
        </div>
        {/* The collage is a fixed 559px tall inside the 583px card, so a 12px
            top inset yields an equal 12px bottom inset; right is matched to 12px
            for a uniform gap on all three edges. */}
        <div className="pointer-events-none absolute right-[12px] top-[12px] hidden md:block">
          <SantolinaCollage />
        </div>
        <div className={`${styles.overlayUp} pointer-events-none absolute inset-0`} aria-hidden />
        <div className="pointer-events-none relative flex h-full max-w-[569px] flex-col justify-end gap-sm">
          <h2 className={headlineClass}>
            Garden apps know a lot about plants. They rarely understand gardens.
          </h2>
          <CardLabel text="Read Santolina" />
        </div>
      </Link>

      {/* Shuttle + Neptune — half width */}
      <div className="flex flex-col gap-md md:flex-row">
        <Link
          href="/projects/shuttle"
          className={`${styles.tintedCard} group relative block h-[320px] flex-1 overflow-hidden rounded-card-xl p-2xl md:h-[376px] md:p-3xl`}
        >
          <Image
            src="/home/card-grid-v.svg"
            alt=""
            fill
            className="object-cover opacity-30"
          />
          {/* Shuttle-launch sky, dithered and tilted/zoomed inside the shader
              (keeps the canvas card-sized so its rounded corners survive in
              Firefox), then lightened to a subtle wash. No drift — just the
              gentle hover scale. Per Figma 156:6012. */}
          <div
            className={`${styles.shuttleArt} absolute inset-0 opacity-40 mix-blend-lighten transition-transform duration-500 group-hover:scale-[1.04]`}
          >
            <DitheredImage
              src="/home/shuttle-launch.png"
              levels={8}
              cell={2}
              revealRadius={0}
              rotate={15}
              zoom={1.3}
              focusX={0.09}
              focusY={0.02}
              motion={false}
              className="h-full w-full rounded-card-xl"
            />
          </div>
          <div className={`${styles.overlayTinted} absolute inset-0`} aria-hidden />
          <div className="relative flex h-full max-w-[563px] flex-col justify-between">
            <h2 className={headlineClass}>
              Devtools become complicated long before users notice.
            </h2>
            <CardLabel text="Read Shuttle" />
          </div>
        </Link>

        <Link
          href="/projects/neptune"
          className={`${styles.tintedCard} group relative block h-[320px] flex-1 overflow-hidden rounded-card-xl p-2xl md:h-[376px] md:p-3xl`}
        >
          <Image
            src="/home/card-grid-v.svg"
            alt=""
            fill
            className="object-cover opacity-30"
          />
          <Image
            src="/home/neptune-panel.png"
            alt="Neptune MCP install card"
            width={332}
            height={340}
            className="absolute right-0 top-1/2 hidden h-[90%] w-auto -translate-y-1/2 transition-transform duration-500 group-hover:-translate-x-1 md:block"
          />
          <div className={`${styles.overlayTinted} absolute inset-0`} aria-hidden />
          <div className="relative flex h-full max-w-[395px] flex-col justify-between">
            <h2 className={headlineClass}>
              Explaining AI infrastructure is a design problem.
            </h2>
            <CardLabel text="Read Neptune" />
          </div>
        </Link>
      </div>
    </section>
  );
}
