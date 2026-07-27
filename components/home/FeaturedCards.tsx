import Image from "next/image";
import Link from "next/link";
import styles from "./FeaturedCards.module.css";

const headlineClass =
  "text-xl font-medium leading-snug tracking-tight text-color-text-primary";
const labelClass = "type-body-lg text-color-text-secondary";

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
        <Image
          src="/home/santolina-garden.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60 transition-transform duration-500 group-hover:scale-[1.02]"
          style={{ objectPosition: "50% 65%" }}
        />
        <Image
          src="/home/santolina-collage.png"
          alt="Santolina dashboard cards over a garden photo"
          width={536}
          height={525}
          priority
          className="absolute right-0 top-[57px] hidden h-[calc(100%-57px)] w-auto max-w-none md:block"
        />
        <div className={`${styles.overlayUp} absolute inset-0`} aria-hidden />
        <div className={`${styles.overlayLeft} absolute inset-0`} aria-hidden />
        <div className="relative flex h-full max-w-[569px] flex-col justify-end gap-sm">
          <h2 className={headlineClass}>
            Garden apps know a lot about plants. They rarely understand gardens.
          </h2>
          <p className={labelClass}>Santolina</p>
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
          <Image
            src="/home/shuttle-panel.png"
            alt="Shuttle console project panel"
            width={320}
            height={113}
            className="absolute right-0 top-1/2 hidden w-[55%] max-w-[320px] -translate-y-1/4 transition-transform duration-500 group-hover:-translate-x-1 md:block"
          />
          <div className={`${styles.overlayTinted} absolute inset-0`} aria-hidden />
          <div className="relative flex h-full max-w-[563px] flex-col justify-between">
            <h2 className={headlineClass}>
              Devtools become complicated long before users notice.
            </h2>
            <p className={labelClass}>Shuttle</p>
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
            <p className={labelClass}>Neptune</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
