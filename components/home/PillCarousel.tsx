"use client";
import { motion } from "framer-motion";
import { designPills } from "@/lib/data";
export default function PillCarousel() {
  return (
    <div className="card p-4 overflow-hidden">
      <div className="text-white/80 text-sm mb-3">I design</div>
      <motion.div
        drag="x"
        dragConstraints={{ left: -400, right: 0 }}
        className="flex gap-2 cursor-grab active:cursor-grabbing"
      >
        {[...designPills, ...designPills].map((p, i) => (
          <span
            key={i}
            className="px-3 py-2 rounded-xl bg-bg border border-line whitespace-nowrap"
          >
            {p}
          </span>
        ))}
      </motion.div>
      <p className="mt-2 text-xs text-white/60">Drag ↔︎</p>
    </div>
  );
}
