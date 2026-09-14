"use client";

import { useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { createContext, useContext } from "react";

type MotionContextValue = {
  reduceMotion: boolean;
};

const MotionContext = createContext<MotionContextValue>({
  reduceMotion: false,
});

export function MotionProvider({ children }: { children: ReactNode }) {
  const reduceMotion = Boolean(useReducedMotion());
  return (
    <MotionContext.Provider value={{ reduceMotion }}>
      {children}
    </MotionContext.Provider>
  );
}

export function useMotionPreference() {
  return useContext(MotionContext);
}
