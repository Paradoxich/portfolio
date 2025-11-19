"use client";
import { motion } from "framer-motion";
import { designPills } from "@/lib/data";
export default function PillCarousel() {
  return (
    <div className="panel overflow-hidden stack-md">
      <p className="type-body-sm-strong">I design</p>
      <motion.div
        drag="x"
        dragConstraints={{ left: -400, right: 0 }}
        className="flex gap-2 cursor-grab active:cursor-grabbing"
      >
        {[...designPills, ...designPills].map((p, i) => (
          <span
            key={i}
            className="pill-filled whitespace-nowrap"
          >
            {p}
          </span>
        ))}
      </motion.div>
      <p className="type-body-xs text-color-text-secondary/80">Drag ↔︎</p>
    </div>
  );
}
