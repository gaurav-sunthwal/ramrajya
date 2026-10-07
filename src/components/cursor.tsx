"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

const INTERACTIVE = "a, button, [role='tab']";

// A precise dot plus a trailing ring that widens over links. mix-blend-difference keeps it legible on paper and on dark film.
// Only for mouse/trackpad users; touch devices keep their default behaviour.
export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);
  const reduceMotion = useReducedMotion();

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const spring = reduceMotion ? { stiffness: 2000, damping: 100 } : { stiffness: 380, damping: 32, mass: 0.6 };
  const ringX = useSpring(x, spring);
  const ringY = useSpring(y, spring);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setEnabled(finePointer.matches);
    sync();
    finePointer.addEventListener("change", sync);
    return () => finePointer.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("custom-cursor");

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const target = (e.target as Element | null)?.closest?.(INTERACTIVE);
      setHovering(Boolean(target));
    };
    const leave = () => setVisible(false);
    const down = () => setPressed(true);
    const up = () => setPressed(false);

    window.addEventListener("pointermove", move);
    document.documentElement.addEventListener("pointerleave", leave);
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    return () => {
      document.documentElement.classList.remove("custom-cursor");
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", leave);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const ringSize = hovering ? 56 : 34;

  return (
    <div aria-hidden className={cn("pointer-events-none fixed inset-0 z-[100] mix-blend-difference transition-opacity duration-300", visible ? "opacity-100" : "opacity-0")}>
      <motion.div
        style={{ x: ringX, y: ringY }}
        className="absolute left-0 top-0"
      >
        <motion.div
          animate={{ width: ringSize, height: ringSize, scale: pressed ? 0.85 : 1, opacity: hovering ? 1 : 0.85 }}
          transition={{ type: "spring", stiffness: 300, damping: 26 }}
          className="-translate-x-1/2 -translate-y-1/2 rounded-full border border-white"
        />
      </motion.div>
      <motion.div
        style={{ x, y }}
        animate={{ scale: hovering ? 0 : 1 }}
        className="absolute left-0 top-0 -ml-[3px] -mt-[3px] size-1.5 rounded-full bg-white"
      />
    </div>
  );
}
