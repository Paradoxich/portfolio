"use client";

import { useState } from "react";
import Image from "next/image";

type Location = {
  id: string;
  city: string;
  country: string;
  imgSrc?: string;
  videoSrc?: string;
  playbackRate?: number;
};

const LOCATIONS: Location[] = [
  {
    id: "opatija",
    city: "Opatija",
    country: "Croatia",
    imgSrc: "/life/opatija.jpg",
    // videoSrc: "/life/opatija.mp4",
    // playbackRate: 0.5,
  },
  {
    id: "dugi-otok",
    city: "Dugi otok",
    country: "Croatia",
    videoSrc: "/life/dugi-otok.mp4",
    imgSrc: "/life/dugi-otok.jpg",
    playbackRate: 0.8,
  },
  {
    id: "zagreb",
    city: "Zagreb",
    country: "Croatia",
    imgSrc: "/life/zagreb.jpg",
  },
  {
    id: "zadar",
    city: "Zadar",
    country: "Croatia",
    imgSrc: "/life/zadar.jpg",
  },
  {
    id: "alps",
    city: "Alps",
    country: "Italy",
    imgSrc: "/life/alps.jpg",
  },
  
];

export default function LifeGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = LOCATIONS[activeIndex];

  const goPrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? LOCATIONS.length - 1 : prev - 1,
    );
  };

  const goNext = () => {
    setActiveIndex((prev) =>
      prev === LOCATIONS.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <div className="card flex flex-1 flex-col gap-3 pb-4">
      {/* FOTO BLOK */}
      <div className="flex-1 border-0  overflow-hidden relative">
        {active.videoSrc ? (
          <video
            src={active.videoSrc}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
            onLoadedMetadata={(e) => {
              e.currentTarget.playbackRate = active.playbackRate ?? 1;
            }}
          />
        ) : (
          <Image
            src={active.imgSrc!}
            alt={`${active.city}, ${active.country}`}
            fill
            className="object-cover"
            sizes="600px"
            priority
          />
        )}

        <div className="pointer-events-none absolute inset-0">
          {/* TOP fade – tamno na vrhu, prozirno prema sredini */}
          <div
            className="absolute inset-x-0 top-0 h-1/3"
            style={{
              background:
                "linear-gradient(180deg, #111010 0%, rgba(17, 16, 16, 0.81) 40%, rgba(17, 16, 16, 0) 100%)",
            }}
          />

          {/* BOTTOM fade – tamno dolje, prozirno prema sredini */}
          <div
            className="absolute inset-x-0 bottom-0 h-1/3"
            style={{
              background:
                "linear-gradient(0deg, #111010 0%, rgba(17, 16, 16, 0.81) 40%, rgba(17, 16, 16, 0) 100%)",
            }}
          />
        </div>
      </div>

      {/* LABEL + STRELICE (dno karta) */}
      <div className="flex items-center justify-between gap-3">
        <p className="type-body-sm leading-none">
          Find me in{" "}
          <span className="font-medium text-color-text-primary">
            {active.city}
          </span>
          {", "}
          <span className="opacity-80">{active.country}</span>
        </p>

        <div className="flex items-center gap-2">
          {/* Strelica GORE */}
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous location"
            className="life-gallery-arrow grid h-9 w-9 place-items-center rounded-full border border-color-border bg-color-bg/60 backdrop-blur-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="m16.172 11-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                transform="rotate(-90 12 12)"
              />
            </svg>
          </button>

          {/* Strelica DOLJE */}
          <button
            type="button"
            onClick={goNext}
            aria-label="Next location"
            className="life-gallery-arrow grid h-9 w-9 place-items-center rounded-full border border-color-border bg-color-bg/60 backdrop-blur-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="m16.172 11-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                transform="rotate(90 12 12)"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}