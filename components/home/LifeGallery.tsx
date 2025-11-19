"use client";

import { useState } from "react";
import Image from "next/image";

type Location = {
  id: string;
  name: string;
  x: string; // left %
  y: string; // top %
  imgSrc: string;
  caption: string;
};

const locations: Location[] = [
  {
    id: "opatija",
    name: "Opatija",
    x: "19.8%",
    y: "64.9%",
    imgSrc: "/life/opatija.jpg",
    caption: "Evenings in Opatija",
  },
  {
    id: "zagreb",
    name: "Zagreb",
    x: "50.3%",
    y: "34.6%",
    imgSrc: "/life/zagreb.jpg",
    caption: "Slow days in Zagreb",
  },
  {
    id: "zadar",
    name: "Zadar",
    x: "41.8%",
    y: "74.3%",
    imgSrc: "/life/zadar.jpg",
    caption: "Zadar sunsets",
  },
  {
    id: "dugi-otok",
    name: "Dugi otok",
    x: "40.2%",
    y: "70.2%",
    imgSrc: "/life/dugi-otok.jpg",
    caption: "Dugi otok summers",
  },
];

export default function LifeGallery() {
  const [activeId, setActiveId] = useState<Location["id"] | null>("opatija");
  const activeLocation = locations.find((l) => l.id === activeId) || null;

  return (
    <div className="relative h-full w-full">
      {/* MAPA */}
      <div className="relative h-full w-full">
        <Image
          src="/life/map-croatia.png"
          alt="Croatia map"
          fill
          className="object-cover"
          priority
        />

        {/* PINOVI */}
        {locations.map((loc) => (
          <button
            key={loc.id}
            type="button"
            onClick={() =>
              setActiveId((prev) => (prev === loc.id ? null : loc.id))
            }
            className={`
              absolute -translate-x-1/2 -translate-y-full
              rounded-full border border-black/60 shadow
              ${activeId === loc.id ? "bg-accent scale-110" : "bg-white/90"}
              transition-transform duration-150
              w-3 h-3
              after:block after:w-[1px] after:h-4 after:bg-white/60 after:mx-auto
            `}
            style={{ left: loc.x, top: loc.y }}
          >
            <span className="sr-only">{loc.name}</span>
          </button>
        ))}

        {/* FLOATING KARTICA IZNAD AKTIVNOG PINA */}
        {activeLocation && (
          <div
            className="
              absolute
              -translate-x-1/2 -translate-y-full
              mt-3
            "
            style={{ left: activeLocation.x, top: activeLocation.y }}
          >
            <div
              className="
                card-muted rounded-xl
                w-[140px] h-[140px]
                flex flex-col items-center justify-center
                text-[11px] text-white/80
              "
            >
              {/* za sad placeholder, kasnije može ići prava slika */}
              <div className="mb-2 h-10 w-10 rounded-full border border-color-border bg-color-bg-muted" />
              <span className="uppercase tracking-[0.12em] text-[10px] opacity-70">
                {activeLocation.name}
              </span>
              <span className="mt-1 text-center leading-snug">
                {activeLocation.caption}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
