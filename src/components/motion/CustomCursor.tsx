"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

export function CustomCursor() {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [label, setLabel] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setEnabled(finePointer.matches && !reduceMotion);
    update();
    finePointer.addEventListener("change", update);
    return () => finePointer.removeEventListener("change", update);
  }, [reduceMotion]);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setVisible(true);
      const target = (event.target as HTMLElement | null)?.closest(
        "[data-cursor]",
      );
      setLabel(target?.getAttribute("data-cursor") ?? null);
    };

    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [enabled]);

  if (!enabled || !visible) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[100] hidden mix-blend-difference md:block"
      animate={{
        x: position.x - (label ? 36 : 6),
        y: position.y - (label ? 36 : 6),
      }}
      transition={{ type: "spring", stiffness: 500, damping: 40, mass: 0.2 }}
    >
      {label ? (
        <div className="flex size-[72px] items-center justify-center rounded-full border border-paper/40 bg-paper/10 text-[0.58rem] tracking-[0.18em] text-paper uppercase backdrop-blur-sm">
          {label}
        </div>
      ) : (
        <div className="size-3 rounded-full bg-paper" />
      )}
    </motion.div>
  );
}
