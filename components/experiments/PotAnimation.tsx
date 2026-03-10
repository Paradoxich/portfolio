// components/PotAnimation.tsx
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { PotIllustration } from "./PotIllustration";

type Stage = 0 | 1 | 2 | 3;
const MAX_STAGE: Stage = 3;

const RAIN_DURATION = 0.9;

function getButtonLabel(stage: Stage) {
  // Water 🌱 → Water 🌱 → Water 🌱 → It grew ✨
  return stage === 3 ? "It grew ✨" : "Water 🌱";
}

export function PotAnimation() {
  const [stage, setStage] = React.useState<Stage>(0);
  const [isRaining, setIsRaining] = React.useState(false);
  const [hasSprinklerShown, setHasSprinklerShown] = React.useState(false);

  const rainTimeoutRef = React.useRef<number | null>(null);

  function triggerRain() {
    setIsRaining(true);

    if (rainTimeoutRef.current != null) {
      window.clearTimeout(rainTimeoutRef.current);
    }
    rainTimeoutRef.current = window.setTimeout(() => {
      setIsRaining(false);
    }, (RAIN_DURATION + 0.25) * 1000);
  }

  function handleClick() {
    if (isRaining) return; // ignore clicks while rain is animating

    if (stage < MAX_STAGE) {
      setStage((prev) => (prev + 1) as Stage);
      triggerRain();
    } else {
      // reset when fully grown
      setStage(0);
      setIsRaining(false);
    }
  }

  React.useEffect(
    () => () => {
      if (rainTimeoutRef.current != null) {
        window.clearTimeout(rainTimeoutRef.current);
      }
    },
    []
  );

  // 0 → 0, 1 → 1/3, 2 → 2/3, 3 → 1
  const progress = stage / MAX_STAGE;
  // koliko je još “vode” u gumbu (1 = full, 0 = prazno)
  const tankLevel = 1 - progress;

  const label = getButtonLabel(stage);

  // sprinkler visible from first rain through end of stage 2, plus while last rain falls
  const showSprinkler = stage > 0 && stage < 3 ? true : isRaining;

  React.useEffect(() => {
    if (showSprinkler && !hasSprinklerShown) {
      setHasSprinklerShown(true);
    }
  }, [showSprinkler, hasSprinklerShown]);

  // rain paths — all lines flow from the sprinkler downward
  const RAIN_PATHS = [
    "M30.498 25V128",
    "M22.4979 25L16.0756 128",
    "M38.498 25L44.9204 128",
    "M46.498 25.3026L60.5181 127.446",
    // last line reversed so start is at top
    "M14.5181 25.3026L0.498047 127.446",
  ];

  return (
    <div className="relative flex h-full w-full flex-col">
      {/* ========= SPRINKLER + RAIN OVERLAY ========= */}
      <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center pt-0 overflow-hidden ">
        <motion.svg
          width="62"
          height="129"
          viewBox="0 0 62 129"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          initial={{ opacity: 0, y: -28 }}
          animate={
            showSprinkler
              ? {
                  // → entry: slides down
                  opacity: 1,
                  y: [-28, -16, 0],
                  transition: {
                    duration: 0.25,
                    ease: [0.4, 0, 1, 1],
                  },
                }
              : hasSprinklerShown
              ? {
                  // → exit (only after it has been shown once):
                  // small pop then out upward
                  opacity: 1,
                  y: [0, -4, -28],
                  transition: {
                    duration: 0.25,
                    ease: [0.4, 0, 1, 1],
                  },
                }
              : {
                  // initial load, before it has ever been triggered:
                  opacity: 0,
                  y: -28,
                }
          }
        >
          {/* top pipe */}
          <path d="M27.498 0V5H34.498V0" stroke="var(--color-text-secondary)" />
          {/* dome */}
          <path
            d="M30.998 4.5C39.4147 4.5 46.9514 9.7128 49.9219 17.5879L51.7754 22.5H10.2207L12.0742 17.5879C15.0446 9.7128 22.5814 4.5 30.998 4.5Z"
            fill="var(--color-bg)"
            stroke="var(--color-text-secondary)"
          />
          {/* bottom bar */}
          <rect
            x="8.99805"
            y="22.5"
            width="44"
            height="2"
            rx="1"
            fill="var(--color-bg)"
            stroke="var(--color-text-secondary)"
          />

          {/* RAIN LINES – dashed + mask animacija */}
          {RAIN_PATHS.map((d, index) => (
            <React.Fragment key={index}>
              {/* maska koja crta liniju od vrha prema dolje pa je “povlači” dolje */}
              <defs>
                <mask id={`sprinklerMask-${index}`}>
                  <motion.path
                    d={d}
                    stroke="white"
                    strokeWidth={6}
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                    initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
                    animate={
                      isRaining
                        ? {
                            // none → full → none
                            pathLength: [0, 1, 0],
                            // tail moves downward (disappears at bottom)
                            pathOffset: [0, 0, 1],
                            opacity: [0, 1, 0],
                          }
                        : { pathLength: 0, pathOffset: 0, opacity: 0 }
                    }
                    transition={{
                      duration: RAIN_DURATION,
                      ease: "easeInOut",
                      delay: 0.25,
                    }}
                  />
                </mask>
              </defs>

              {/* visible dashed water through mask */}
              <motion.path
                d={d}
                stroke="var(--color-text-tertiary)"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeDasharray="4 6"
                mask={`url(#sprinklerMask-${index})`}
                initial={{ strokeDashoffset: 20 }}
                animate={
                  isRaining
                    ? { strokeDashoffset: [-20, 0, 20] }
                    : { strokeDashoffset: 20 }
                }
                transition={{
                  duration: RAIN_DURATION,
                  ease: "easeInOut",
                  delay: index * 0.04,
                }}
              />
            </React.Fragment>
          ))}
        </motion.svg>
      </div>

      {/* ========= BUTTON (ZALJEVAČ) ========= */}
      <div className="mt-2 flex w-full justify-end">
        {/* HOVER WRAPPER – outline na hoveru */}
        <motion.div
          className="relative inline-flex rounded-full"
          style={{
            outline: "1px solid transparent", // always present, invisible until hover
            outlineOffset: "2px",
          }}
          whileHover={
            isRaining
              ? {}
              : {
                  outlineColor: "var(--color-border-secondary)",
                }
          }
          transition={{
            duration: 0.2,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <button
            type="button"
            onClick={handleClick}
            disabled={isRaining}
            className="
    relative inline-flex h-8 w-[88px]
    items-center justify-center
    overflow-hidden
    rounded-full
    border border-color-text-tertiary
    bg-transparent
    type-body-xs
    disabled:cursor-default disabled:opacity-80
  "
          >
            {/* “voda” – vertikalni tank, prazni se OD GORE PREMA DOLJE */}
            <motion.span
              className="absolute inset-x-0 bottom-0 z-0 bg-color-border"
              initial={false}
              animate={{
                height: `${tankLevel * 100}%`,
              }}
              transition={{ duration: 0.4 }}
            />

            <span className="relative z-10 whitespace-nowrap text-color-text-primary">
              {label}
            </span>
          </button>
        </motion.div>
      </div>

      {/* ========= ILUSTRACIJA ========= */}
      <div className="relative flex flex-1 items-end justify-center pb-0 pt-4">
        {/* Ghost / fully-grown background plant */}
        <PotIllustration
          className="pointer-events-none absolute bottom-0 h-40 w-auto opacity-[0.07]"
           variant="ghost"
          growthStage={3}
          aria-hidden="true"
        />

        {/* Active animated plant */}
        <PotIllustration
          className="relative h-40 w-auto"
          growthStage={stage}
        />
      </div>
    </div>
  );
}

