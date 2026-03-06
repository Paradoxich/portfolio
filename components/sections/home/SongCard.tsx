import Image from "next/image";

const SPOTIFY_URL =
  "https://open.spotify.com/playlist/02uN4latPfLbwTInTnpQUY?si=RcicjAcAT6KaJd_z8E2Bkg";

export function SongCard() {
  return (
    <div className="card relative overflow-hidden flex flex-col group">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/music/moi-retro.png"
          alt="Design Jam playlist by Paradoxich"
          fill
          className="object-cover"
          sizes="480px"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(270deg, rgba(var(--color-0-rgb), 0) -1.36%, rgba(var(--color-0-rgb), 0.92) 45.22%, var(--color-0) 79.37%)",
          }}
        />
      </div>
      <a
        href={SPOTIFY_URL}
        target="_blank"
        rel="noreferrer noopener"
        className="relative flex items-center gap-5 p-4"
      >
        <span className="grid h-10 w-10 place-items-center rounded-full bg-color-bg-surface border border-color-border-secondary type-body-xs transition-all duration-200 group-hover:border-[var(--color-50)] group-hover:scale-105 shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path
              fill="currentColor"
              d="m7.752 5.439 10.508 6.13a.5.5 0 0 1 0 .863l-10.508 6.13A.5.5 0 0 1 7 18.13V5.87a.5.5 0 0 1 .752-.431"
            />
          </svg>
        </span>
        <div>
          <p className="type-body leading-relaxed text-color-text-primary">
            Design Jam
          </p>
          <p className="type-body-sm">By Paradoxich</p>
        </div>
      </a>
    </div>
  );
}
