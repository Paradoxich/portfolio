"use client";

import * as React from "react";
import Link from "next/link";
import { useColorScheme } from "@/components/theme/ColorSchemeProvider";
import { ArrowRight } from "@/components/icons";
import styles from "./DesignSystemCard.module.css";

const SWATCHES = [
  { name: "color-0",  cssVar: "--color-0"  },
  { name: "color-05", cssVar: "--color-05" },
  { name: "color-10", cssVar: "--color-10" },
  { name: "color-20", cssVar: "--color-20" },
  { name: "color-30", cssVar: "--color-30" },
  { name: "color-40", cssVar: "--color-40" },
  { name: "color-50", cssVar: "--color-50" },
  { name: "color-60", cssVar: "--color-60" },
];

function ColorSwatch({ name, cssVar }: { name: string; cssVar: string }) {
  const { colorScheme } = useColorScheme();
  const [hex, setHex] = React.useState("");

  React.useEffect(() => {
    const raw = getComputedStyle(document.documentElement).getPropertyValue(cssVar).trim();
    setHex(raw.toUpperCase());
  }, [cssVar, colorScheme]);

  return (
    <div className="flex flex-col gap-2 flex-1 min-w-0">
      <div className="h-16 w-full rounded-sm border border-white/[0.06]" style={{ backgroundColor: `var(${cssVar})` }} />
      <div className="flex flex-col gap-0.5">
        <p className="font-mono text-[12px] font-medium leading-[1.45] text-color-text-primary truncate">{name}</p>
        <p className="font-mono text-[12px] font-normal leading-[1.45] text-color-text-tertiary truncate">{hex}</p>
      </div>
    </div>
  );
}

export function DesignSystemCard() {
  return (
    <Link href="/design-system" className={`card-tinted w-full group ${styles.card}`}>
      <div className="card-tinted-inner px-xl py-lg flex flex-col gap-xl overflow-x-auto">
        <div className="flex flex-col md:flex-row gap-2">
          <div className="flex gap-2 flex-1">
            {SWATCHES.slice(0, 4).map(({ name, cssVar }) => (
              <ColorSwatch key={name} name={name} cssVar={cssVar} />
            ))}
          </div>
          <div className="flex gap-2 flex-1">
            {SWATCHES.slice(4).map(({ name, cssVar }) => (
              <ColorSwatch key={name} name={name} cssVar={cssVar} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="type-body-sm transition-colors group-hover:text-color-90">Design system</p>
        <ArrowRight size={20} className="text-color-60 transition-colors duration-200 group-hover:text-color-90" />
      </div>
    </Link>
  );
}
