"use client";

import * as React from "react";
import { Drawer } from "vaul";
import { DitheredImage, type DitheredImageProps } from "@/components/experiments/DitheredImage";

type HoverMode = NonNullable<DitheredImageProps["hoverMode"]>;

// Matches .range-slider::-webkit-slider-thumb / ::-moz-range-thumb width in globals.css —
// the value label's position accounts for the same edge inset the native thumb travels within.
const THUMB_WIDTH = 12;

const MODES: { id: HoverMode; label: string }[] = [
  { id: "reveal", label: "Reveal" },
  { id: "organic", label: "Organic" },
  { id: "magnify", label: "Magnify" },
  { id: "coarsen", label: "Coarsen" },
  { id: "spotlight", label: "Spotlight" },
];

export function DitherLabCard() {
  const [levels, setLevels] = React.useState(6);
  const [cell, setCell] = React.useState(2);
  const [radius, setRadius] = React.useState(130);
  const [softness, setSoftness] = React.useState(0.45);
  const [weight, setWeight] = React.useState(0.5);
  const [mode, setMode] = React.useState<HoverMode>("reveal");
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const controls = (
    <>
      <div className="flex flex-col gap-xl">
        <span className="type-label">Dither</span>
        <Slider label="Levels" value={levels} min={2} max={16} onChange={setLevels} hint="2 = chunky · 16 = fine" />
        <Slider label="Cell (px)" value={cell} min={1} max={8} onChange={setCell} hint="1 = small · 8 = big" />
      </div>

      <div className="flex flex-col gap-xl">
        <span className="type-label">Hover lens</span>

        <div className="flex flex-wrap gap-1.5">
          {MODES.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setMode(m.id)}
              className={`type-body-xs rounded-pill flex h-8 items-center px-3 border transition-colors ${
                mode === m.id
                  ? "bg-color-20 border-color-40 text-color-text-primary"
                  : "bg-color-bg border-color-border text-color-text-secondary hover:border-color-border-secondary"
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>

        <Slider label="Lens radius (px)" value={radius} min={40} max={300} onChange={setRadius} hint="hover lens size" />
        <Slider label="Edge softness" value={softness} min={0} max={1} step={0.05} onChange={setSoftness} hint="0 = hard · 1 = feathered" />
        <Slider label="Weight" value={weight} min={0} max={1} step={0.05} onChange={setWeight} hint="0 = weightless · 1 = heavy" />
      </div>
    </>
  );

  return (
    <section className="card-tinted w-full">
      <p className="type-body-sm">Dither lab</p>

      <div className="flex flex-col gap-xl md:flex-row">
        <div className="md:w-[520px] md:shrink-0">
          <div className="card-tinted-inner overflow-hidden">
            <DitheredImage
              src="/experiments/dither-santolina.jpg"
              alt="Santolina flowers, dithered, revealing the clean photo under the cursor"
              className="aspect-[7/8] w-full rounded-surface"
              levels={levels}
              cell={cell}
              revealRadius={radius}
              softness={softness}
              weight={weight}
              hoverMode={mode}
            />
          </div>

          <Drawer.Root open={drawerOpen} onOpenChange={setDrawerOpen}>
            <Drawer.Trigger asChild>
              <button
                type="button"
                className="type-body-xs rounded-pill mt-lg flex h-8 w-full items-center justify-center border border-color-border bg-color-bg text-color-text-secondary transition-colors hover:border-color-border-secondary md:hidden"
              >
                Adjust controls
              </button>
            </Drawer.Trigger>
            <Drawer.Portal>
              <Drawer.Overlay className="fixed inset-0 z-40 bg-color-overlay" />
              <Drawer.Content className="fixed inset-x-0 bottom-0 z-50 flex max-h-[85vh] flex-col gap-2xl rounded-t-card border-t border-color-border-subtle bg-color-bg-card-tinted px-xl pb-xl pt-md outline-none">
                <Drawer.Handle className="!bg-color-border-secondary" />
                <Drawer.Title className="type-body-sm">Dither lab controls</Drawer.Title>
                <div className="flex flex-col gap-2xl overflow-y-auto">{controls}</div>
              </Drawer.Content>
            </Drawer.Portal>
          </Drawer.Root>
        </div>

        <div className="hidden flex-1 flex-col justify-between gap-4xl min-w-0 pt-2 pb-6 md:flex">{controls}</div>
      </div>
    </section>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  step = 1,
  onChange,
  hint,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (v: number) => void;
  hint: string;
}) {
  const pct = ((value - min) / (max - min)) * 100;

  return (
    <label className="flex flex-col gap-1">
      <span className="flex items-baseline gap-3">
        <span className="type-body-sm shrink-0">{label}</span>
        <span className="type-body-xs flex-1 truncate text-right text-color-30" title={hint}>
          {hint}
        </span>
      </span>
      <div className="relative pb-1">
        <span
          className="pointer-events-none absolute top-full -translate-x-1/2 type-body-xs text-color-text-tertiary tabular-nums"
          style={{ left: `calc((100% - ${THUMB_WIDTH}px) * ${pct / 100} + ${THUMB_WIDTH / 2}px)` }}
        >
          {value}
        </span>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="range-slider"
          style={{ "--range-progress": `${pct}%` } as React.CSSProperties}
        />
      </div>
    </label>
  );
}
