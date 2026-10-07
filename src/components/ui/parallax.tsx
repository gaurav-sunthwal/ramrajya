"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

// Gentle drift against the scroll, at most `range` px either side of the element's resting place.
export function Parallax({ range = 24, className, children }: { range?: number; className?: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [range, -range]);
  return (
    <motion.div ref={ref} style={reduce ? undefined : { y }} className={className}>
      {children}
    </motion.div>
  );
}
