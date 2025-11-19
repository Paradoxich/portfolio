// components/PotIllustration.tsx
import * as React from "react";
import { motion } from "framer-motion";

type PotIllustrationProps = React.SVGProps<SVGSVGElement> & {
  /** 0 = small center, 1 = center+left partial, 2 = all full, 3 = all full + peppers */
  growthStage?: 0 | 1 | 2 | 3;
  /** ostavljeno ako ga koristiš iz PotAnimation, ali ovdje ga ne trebamo */
  isWobbling?: boolean;
};

export function PotIllustration({
  growthStage = 0,
  ...props
}: PotIllustrationProps) {
  /** Ulaz/izlaz stabljika (fade + slide up) */
  const stemEnterVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0 },
  };

  /** Ulaz papričica – lagani tilt + pop */
  const pepperVariants = {
    hidden: { opacity: 0, y: 6, scale: 0.1, rotate: -4 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
    },
  };

  /** Ease za prirodan rast (bez bouncea) za listove */
  const GROW_EASE: [number, number, number, number] = [0, 0, 0.4, 1];

  /** Tranzicije za stabljike – blagi spring + razni delayi */
  const centerStemTransition = {
    type: "spring" as const,
    stiffness: 130,
    damping: 24,
    delay: 0.7,
  };
  const leftStemTransition = {
    ...centerStemTransition,
    delay: 0.85,
  };
  const rightStemTransition = {
    ...centerStemTransition,
    delay: 0.95,
  };

  /** Offseti stabljika po stageu (da budu “zakopane” u potu) */
  const centerOffsetY = growthStage === 0 ? 56 : growthStage === 1 ? 10 : 0;
  const leftOffsetY = growthStage === 0 ? 56 : growthStage === 1 ? 20 : 0;
  const rightOffsetY = growthStage < 2 ? 42 : 0;

  /** Target scale za svaki list po stageu */
  const centerTopScale = growthStage === 0 ? 0.6 : 1;
  const centerMidScale = growthStage === 0 ? 0.5 : growthStage === 1 ? 0.7 : 1;
  const leftLeafScale = growthStage < 1 ? 0.5 : growthStage === 1 ? 0.7 : 1;
  const rightLeafScale = growthStage < 2 ? 0.5 : 1;

  return (
    <svg
      width="95"
      height="147"
      viewBox="0 0 95 147"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      {/* ========= PLANT ========= */}
      <g id="Plant">
        {/* ===== CENTER PLANT ===== */}
        <motion.g
          animate={{ y: centerOffsetY }}
          transition={centerStemTransition}
        >
          <motion.g
            variants={stemEnterVariants}
            initial="hidden"
            animate={growthStage >= 0 ? "visible" : "hidden"}
            transition={centerStemTransition}
          >
            {/* Stem */}
            <path
              d="M47.5 95.5L47.5 15.5"
              stroke="var(--color-60)"
              strokeLinecap="round"
            />

            {/* TOP LEAF – anchor bottom-center */}
            <motion.g
              animate={{
                scale: centerTopScale,
                opacity: growthStage === 0 ? 0.85 : 1,
              }}
              transition={{
                duration: 0.6,
                ease: GROW_EASE,
                delay: 0.7,
              }}
              style={{
                originX: 0, // centar
                originY: 1, // bottom → raste prema gore
              }}
            >
              <path
                d="M47.8679 15L52.0108 11M52.0108 11V3M52.0108 11L57.1894 6M57.1894 6L62.3679 1M57.1894 6V1.5M48.8043 5.80749C51.789 0.477801 62.7974 0.5 62.7974 0.5C62.7974 0.5 62.8196 11.5083 57.4899 14.493C53.807 16.5555 47.7428 15.5545 47.7428 15.5545C47.7428 15.5545 46.7419 9.49032 48.8043 5.80749Z"
                stroke="var(--color-60)"
              />
            </motion.g>

            {/* MIDDLE LEAF – anchor bottom-right */}
            <motion.g
              animate={{
                scale: centerMidScale,
                opacity: centerMidScale < 1 ? 0.9 : 1,
              }}
              transition={{
                duration: 0.6,
                ease: GROW_EASE,
                delay: 0.7,
              }}
              style={{
                originX: 1, // desno → drži se za stabljiku
                originY: 1,
              }}
            >
              <path
                d="M46.5 63L42.3571 59M42.3571 59L43 51.5M42.3571 59L37.5 54.3103M37.5 54.3103L32 49M37.5 54.3103L32 53.5M45.6251 53.8075C42.6404 48.4778 31.6321 48.5 31.6321 48.5C31.6321 48.5 31.6099 59.5083 36.9396 62.493C40.6224 64.5555 46.6866 63.5545 46.6866 63.5545C46.6866 63.5545 47.6875 57.4903 45.6251 53.8075Z"
                stroke="var(--color-60)"
              />
            </motion.g>

            {/* Pepper center – stage 3, PRVA u nizu */}
            {growthStage >= 3 && (
              <motion.g
                variants={pepperVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  type: "spring",
                  stiffness: 170,
                  damping: 18,
                  delay: 0.6, // 1️⃣ PRVO ide srednja
                }}
              >
                <g>
                  <path
                    d="M52.7415 36.3965C52.7415 35.4919 53.4748 34.7586 54.3794 34.7586C55.284 34.7586 56.0173 35.4919 56.0173 36.3965V38.0345H52.7415V36.3965Z"
                    fill="var(--color-0)"
                  />
                  <path
                    d="M47.5001 30.5L50.2531 30.6057C52.5572 30.6942 54.3794 32.5877 54.3794 34.8935M56.0173 38.0345V36.3965C56.0173 35.4919 55.284 34.7586 54.3794 34.7586C53.4748 34.7586 52.7415 35.4919 52.7415 36.3965V38.0345H56.0173Z"
                    stroke="var(--color-60)"
                  />
                </g>
                <path
                  d="M59.293 41.6207C59.293 42.8703 58.7932 44.8005 57.9827 46.4356C57.1503 48.1148 55.9901 49.4828 54.7068 49.4828C53.4235 49.4828 54.2289 48.1148 53.3965 46.4356C52.5859 44.8005 50.1206 44.1807 50.1206 41.6207C50.1206 39.0878 52.1739 37.0345 54.7068 37.0345C57.2397 37.0345 59.293 39.0878 59.293 41.6207Z"
                  fill="#FF1313"
                />
              </motion.g>
            )}
          </motion.g>
        </motion.g>

        {/* ===== LEFT PLANT ===== */}
        <motion.g animate={{ y: leftOffsetY }} transition={leftStemTransition}>
          <motion.g
            variants={stemEnterVariants}
            initial="hidden"
            animate={growthStage >= 1 ? "visible" : "hidden"}
            transition={leftStemTransition}
          >
            {/* Pepper left – stage 3, DRUGA u nizu */}
            {growthStage >= 3 && (
              <motion.g
                variants={pepperVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  type: "spring",
                  stiffness: 170,
                  damping: 18,
                  delay: 0.75, // 2️⃣ Onda lijeva
                }}
              >
                <g>
                  <path
                    d="M16.1838 60.3965C16.1838 59.4919 15.4505 58.7586 14.5459 58.7586C13.6413 58.7586 12.908 59.4919 12.908 60.3965V62.0345H16.1838V60.3965Z"
                    fill="var(--color-0)"
                  />
                  <path
                    d="M21.4252 54.5L18.6722 54.6057C16.3681 54.6942 14.5459 56.5877 14.5459 58.8935M12.908 62.0345V60.3965C12.908 59.4919 13.6413 58.7586 14.5459 58.7586C15.4505 58.7586 16.1838 59.4919 16.1838 60.3965V62.0345H12.908Z"
                    stroke="var(--color-60)"
                  />
                </g>
                <path
                  d="M9.63227 65.6207C9.63227 66.8703 10.132 68.8005 10.9426 70.4356C11.775 72.1148 12.9352 73.4828 14.2185 73.4828C15.5018 73.4828 14.6964 72.1148 15.5288 70.4356C16.3394 68.8005 18.8047 68.1807 18.8047 65.6207C18.8047 63.0878 16.7514 61.0345 14.2185 61.0345C11.6856 61.0345 9.63227 63.0878 9.63227 65.6207Z"
                  fill="#FFC413"
                />
              </motion.g>
            )}

            {/* Stem left */}
            <path
              d="M21.5 95.5L21.5 42.5"
              stroke="var(--color-60)"
              strokeLinecap="round"
            />

            {/* Leaf left – anchor bottom-right */}
            <motion.g
              animate={{
                scale: leftLeafScale,
                opacity: leftLeafScale < 1 ? 0.9 : 1,
              }}
              transition={{
                duration: 0.6,
                ease: GROW_EASE,
                delay: 0.76,
              }}
              style={{
                originX: 1,
                originY: 1,
              }}
            >
              <path
                d="M10.3679 31.5L6.86791 28M10.3679 31.5L11.3679 28M10.3679 31.5L14.3679 35.5M14.3679 35.5H7.86791M14.3679 35.5L18.3679 39.5M21.3679 42.5L18.3679 39.5M18.3679 39.5L20.3679 32.5M20.493 32.8075C17.5083 27.4778 6.5 27.5 6.5 27.5C6.5 27.5 6.4778 38.5083 11.8075 41.493C15.4903 43.5555 21.5545 42.5545 21.5545 42.5545C21.5545 42.5545 22.5555 36.4903 20.493 32.8075Z"
                stroke="var(--color-60)"
              />
            </motion.g>
          </motion.g>
        </motion.g>

        {/* ===== RIGHT PLANT ===== */}
        <motion.g
          animate={{ y: rightOffsetY }}
          transition={rightStemTransition}
        >
          <motion.g
            variants={stemEnterVariants}
            initial="hidden"
            animate={growthStage >= 2 ? "visible" : "hidden"}
            transition={rightStemTransition}
          >
            {/* Stem right */}
            <path
              d="M73.5 95.5L73.5 61.5"
              stroke="var(--color-60)"
              strokeLinecap="round"
            />

            {/* Pepper right – stage 3, TREĆA u nizu */}
            {growthStage >= 3 && (
              <motion.g
                variants={pepperVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  type: "spring",
                  stiffness: 170,
                  damping: 18,
                  delay: 0.9, // 3️⃣ Zadnja ide desna
                }}
              >
                <g>
                  <path
                    d="M68.0515 72.3965C68.0515 71.4919 67.3182 70.7586 66.4136 70.7586C65.509 70.7586 64.7756 71.4919 64.7756 72.3965V74.0345H68.0515V72.3965Z"
                    fill="var(--color-0)"
                  />
                  <path
                    d="M73.2929 66.5L70.5398 66.6057C68.2358 66.6942 66.4136 68.5877 66.4136 70.8935M64.7756 74.0345V72.3965C64.7756 71.4919 65.509 70.7586 66.4136 70.7586C67.3182 70.7586 68.0515 71.4919 68.0515 72.3965V74.0345H64.7756Z"
                    stroke="var(--color-60)"
                  />
                </g>
                <path
                  d="M61.4999 77.6207C61.4999 78.8703 61.9997 80.8005 62.8103 82.4356C63.6427 84.1148 64.8029 85.4828 66.0862 85.4828C67.3694 85.4828 66.5641 84.1148 67.3965 82.4356C68.2071 80.8005 70.6724 80.1807 70.6724 77.6207C70.6724 75.0878 68.619 73.0345 66.0862 73.0345C63.5533 73.0345 61.4999 75.0878 61.4999 77.6207Z"
                  fill="#FF5613"
                />
              </motion.g>
            )}

            {/* Leaf right – anchor bottom-left */}
            <motion.g
              animate={{
                scale: rightLeafScale,
                opacity: rightLeafScale < 1 ? 0.9 : 1,
              }}
              transition={{
                duration: 0.6,
                ease: GROW_EASE,
                delay: 0.32,
              }}
              style={{
                originX: 0,
                originY: 1,
              }}
            >
              <path
                d="M74 61.5L88.5 47M78 57.5L77.5 49.5M81 54.5L87.5 55M84 51.5V47M74.8043 51.8075C77.789 46.4778 88.7974 46.5 88.7974 46.5C88.7974 46.5 88.8196 57.5083 83.4899 60.493C79.807 62.5555 73.7428 61.5545 73.7428 61.5545C73.7428 61.5545 72.7419 55.4903 74.8043 51.8075Z"
                stroke="var(--color-60)"
              />
            </motion.g>
          </motion.g>
        </motion.g>
      </g>

      {/* ========= FLOWER POT ========= */}
      <g id="Flower Pot">
        <g id="Body">
          <path
            d="M0.5 91.5C0.5 90.3954 1.39543 89.5 2.5 89.5H92.5C93.6046 89.5 94.5 90.3954 94.5 91.5V101.5C94.5 102.605 93.6046 103.5 92.5 103.5H2.5C1.39543 103.5 0.5 102.605 0.5 101.5L0.5 91.5Z"
            fill="var(--color-0)"
          />
          <path
            d="M0.5 105.5C0.5 104.395 1.39543 103.5 2.5 103.5H92.5C93.6046 103.5 94.5 104.395 94.5 105.5V116.5C94.5 117.605 93.6046 118.5 92.5 118.5H2.5C1.39543 118.5 0.5 117.605 0.5 116.5L0.5 105.5Z"
            fill="var(--color-0)"
          />
          <path
            d="M0.5 120.5C0.5 119.395 1.39543 118.5 2.5 118.5H92.5C93.6046 118.5 94.5 119.395 94.5 120.5V130.5C94.5 131.605 93.6046 132.5 92.5 132.5H2.5C1.39543 132.5 0.5 131.605 0.5 130.5L0.5 120.5Z"
            fill="var(--color-0)"
          />
          <path
            d="M0.5 134.5C0.5 133.395 1.39543 132.5 2.5 132.5H92.5C93.6046 132.5 94.5 133.395 94.5 134.5V144.5C94.5 145.605 93.6046 146.5 92.5 146.5H2.5C1.39543 146.5 0.5 145.605 0.5 144.5L0.5 134.5Z"
            fill="var(--color-0)"
          />
          <path
            d="M2.5 103.5H92.5M2.5 103.5C1.39543 103.5 0.5 102.605 0.5 101.5L0.5 91.5C0.5 90.3954 1.39543 89.5 2.5 89.5H92.5C93.6046 89.5 94.5 90.3954 94.5 91.5V101.5C94.5 102.605 93.6046 103.5 92.5 103.5M2.5 103.5C1.39543 103.5 0.5 104.395 0.5 105.5L0.5 116.5C0.5 117.605 1.39543 118.5 2.5 118.5M92.5 103.5C93.6046 103.5 94.5 104.395 94.5 105.5V116.5C94.5 117.605 93.6046 118.5 92.5 118.5M2.5 118.5H92.5M2.5 118.5C1.39543 118.5 0.5 119.395 0.5 120.5L0.5 130.5C0.5 131.605 1.39543 132.5 2.5 132.5M92.5 118.5C93.6046 118.5 94.5 119.395 94.5 120.5V130.5C94.5 131.605 93.6046 132.5 92.5 132.5M2.5 132.5H92.5M2.5 132.5C1.39543 132.5 0.5 133.395 0.5 134.5L0.5 144.5C0.5 145.605 1.39543 146.5 2.5 146.5H92.5C93.6046 146.5 94.5 145.605 94.5 144.5V134.5C94.5 133.395 93.6046 132.5 92.5 132.5"
            stroke="var(--color-60)"
          />
        </g>
        <path
          id="Edge Right"
          d="M86.5 88.5C86.5 87.3954 87.3954 86.5 88.5 86.5H92.5C93.6046 86.5 94.5 87.3954 94.5 88.5V144.5C94.5 145.605 93.6046 146.5 92.5 146.5H88.5C87.3954 146.5 86.5 145.605 86.5 144.5L86.5 88.5Z"
          fill="var(--color-0)"
          stroke="var(--color-60)"
        />
        <path
          id="Edge Left"
          d="M0.5 88.5C0.5 87.3954 1.39543 86.5 2.5 86.5H6.5C7.60457 86.5 8.5 87.3954 8.5 88.5V144.5C8.5 145.605 7.60457 146.5 6.5 146.5H2.5C1.39543 146.5 0.5 145.605 0.5 144.5L0.5 88.5Z"
          fill="var(--color-0)"
          stroke="var(--color-60)"
        />
      </g>
    </svg>
  );
}
