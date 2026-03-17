"use client";

import type { ReactNode } from "react";
import { ReactLenis } from "lenis/react";

type SmoothScrollProviderProps = {
  children: ReactNode;
};

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.15,
        lerp: 0.09,
        smoothWheel: true,
        syncTouch: true,
        touchMultiplier: 1.1,
      }}
    >
      {children}
    </ReactLenis>
  );
}
