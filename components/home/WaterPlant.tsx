// components/WaterPlant.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { PotIllustration } from "./PotIllustration";

type Stage = 0 | 1 | 2 | 3;

export default function WaterPlant() {
  const [growthStage, setGrowthStage] = useState<Stage>(0);
  const [isWatering, setIsWatering] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const maxStage: Stage = 3;

  const handleWater = () => {
    if (isWatering) return;
    if (growthStage >= maxStage) return;

    setIsWatering(true);

    // jedna “runda zalijevanja” pa rast
    timerRef.current = setTimeout(() => {
      setGrowthStage((prev) =>
        prev < maxStage ? ((prev + 1) as Stage) : prev
      );
      setIsWatering(false);
    }, 900);
  };

  // cleanup ako user ode sa stranice usred animacije
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const isFullyGrown = growthStage >= maxStage;

  return (
    <div className="flex flex-col items-center gap-4">
      {/* BUTTON = “zaljevač” */}
      <button
        type="button"
        onClick={handleWater}
        disabled={isWatering || isFullyGrown}
        className={`
          relative inline-flex items-center justify-center
          rounded-full border border-color-60
          px-4 py-2 text-sm font-medium
          overflow-hidden
          transition-colors
          ${
            isFullyGrown ? "cursor-default opacity-90" : "hover:border-color-40"
          }
        `}
      >
        {/* Fill sloj koji se “prazni” dok zalijevamo */}
        <motion.div
          className="absolute inset-0 bg-olive"
          initial={false}
          animate={{ scaleX: isWatering ? 0 : 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
            originX: 1, // prazni se zdesna ulijevo
          }}
        />

        {/* Tekst preko svega */}
        <span className="relative z-10 text-color-bg">
          {isFullyGrown
            ? "It’s grown 🌶️"
            : isWatering
            ? "Watering…"
            : "Water it"}
        </span>
      </button>

      {/* Ovdje samo prikaz biljke – bez layout brige iz page.tsx */}
      <div className="mt-2">
        <PotIllustration growthStage={growthStage} />
      </div>
    </div>
  );
}
