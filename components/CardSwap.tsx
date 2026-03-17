"use client";

import React, {
  Children,
  useCallback,
  forwardRef,
  ReactNode,
  useEffect,
  useRef,
} from "react";
import gsap from "gsap";

export interface CardSwapProps {
  cardDistance?: number;
  verticalDistance?: number;
  dropDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
  isActive?: boolean;
  onCardClick?: (idx: number) => void;
  skewAmount?: number;
  easing?: "linear" | "elastic";
  containerClassName?: string;
  children: ReactNode;
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  customClass?: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ customClass, className, ...rest }, ref) => (
    <div
      ref={ref}
      {...rest}
      className={`cardswap-item absolute left-1/2 top-1/2 rounded-2xl border border-[color:color-mix(in_srgb,var(--color-primary)_22%,transparent)] bg-[color:var(--color-surface)] shadow-[0_24px_60px_rgba(60,49,91,0.18)] [transform-style:preserve-3d] [will-change:transform] [backface-visibility:hidden] ${
        customClass ?? ""
      } ${className ?? ""}`.trim()}
    />
  ),
);

Card.displayName = "Card";

interface Slot {
  x: number;
  y: number;
  z: number;
  zIndex: number;
}

const makeSlot = (
  i: number,
  distX: number,
  distY: number,
  total: number,
): Slot => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i,
});

const placeNow = (el: HTMLElement, slot: Slot, skew: number) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: "center center",
    zIndex: slot.zIndex,
    force3D: true,
  });

const CardSwap: React.FC<CardSwapProps> = ({
  cardDistance = 60,
  verticalDistance = 70,
  dropDistance = 220,
  delay = 5000,
  pauseOnHover = false,
  isActive = true,
  onCardClick,
  skewAmount = 6,
  easing = "elastic",
  containerClassName,
  children,
}) => {
  const config =
    easing === "elastic"
      ? {
          ease: "elastic.out(0.6,0.9)",
          durDrop: 2,
          durMove: 2,
          durReturn: 2,
          promoteOverlap: 0.9,
          returnDelay: 0.05,
        }
      : {
          ease: "power1.inOut",
          durDrop: 0.8,
          durMove: 0.8,
          durReturn: 0.8,
          promoteOverlap: 0.45,
          returnDelay: 0.2,
        };

  const childCount = Children.count(children);

  const order = useRef<number[]>(
    Array.from({ length: childCount }, (_, i) => i),
  );

  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const intervalRef = useRef<number>(0);
  const swapRef = useRef<() => void>(() => {});
  const cardElementsRef = useRef<HTMLDivElement[]>([]);
  const container = useRef<HTMLDivElement>(null);

  const stopCycle = useCallback(() => {
    tlRef.current?.pause();
    window.clearInterval(intervalRef.current);
  }, []);

  const resumeCycle = useCallback(() => {
    tlRef.current?.play();
    window.clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      swapRef.current();
    }, delay);
  }, [delay]);

  useEffect(() => {
    order.current = Array.from({ length: childCount }, (_, i) => i);

    const nodes = container.current
      ? Array.from(
          container.current.querySelectorAll<HTMLDivElement>(
            ".cardswap-item",
          ),
        )
      : [];

    cardElementsRef.current = nodes;

    const total = cardElementsRef.current.length;

    cardElementsRef.current.forEach((el, index) => {
      placeNow(el, makeSlot(index, cardDistance, verticalDistance, total), skewAmount);
    });

    const swap = () => {
      if (order.current.length < 2) return;

      const [front, ...rest] = order.current;
      const elFront = cardElementsRef.current[front];

      if (!elFront) return;

      const tl = gsap.timeline();
      tlRef.current = tl;

      tl.to(elFront, {
        y: `+=${dropDistance}`,
        duration: config.durDrop,
        ease: config.ease,
      });

      tl.addLabel("promote", `-=${config.durDrop * config.promoteOverlap}`);

      rest.forEach((idx, index) => {
        const el = cardElementsRef.current[idx];

        if (!el) return;

        const slot = makeSlot(
          index,
          cardDistance,
          verticalDistance,
          cardElementsRef.current.length,
        );
        tl.set(el, { zIndex: slot.zIndex }, "promote");
        tl.to(
          el,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            duration: config.durMove,
            ease: config.ease,
          },
          `promote+=${index * 0.15}`,
        );
      });

      const backSlot = makeSlot(
        cardElementsRef.current.length - 1,
        cardDistance,
        verticalDistance,
        cardElementsRef.current.length,
      );

      tl.addLabel("return", `promote+=${config.durMove * config.returnDelay}`);
      tl.call(
        () => {
          gsap.set(elFront, { zIndex: backSlot.zIndex });
        },
        undefined,
        "return",
      );
      tl.to(
        elFront,
        {
          x: backSlot.x,
          y: backSlot.y,
          z: backSlot.z,
          duration: config.durReturn,
          ease: config.ease,
        },
        "return",
      );

      tl.call(() => {
        order.current = [...rest, front];
      });
    };

    swapRef.current = swap;

    if (!isActive) {
      stopCycle();
      return () => {
        window.clearInterval(intervalRef.current);
      };
    }

    swap();
    intervalRef.current = window.setInterval(() => {
      swapRef.current();
    }, delay);

    if (pauseOnHover && container.current) {
      const node = container.current;

      const pause = () => {
        stopCycle();
      };

      const resume = () => {
        resumeCycle();
      };

      node.addEventListener("mouseenter", pause);
      node.addEventListener("mouseleave", resume);

      return () => {
        node.removeEventListener("mouseenter", pause);
        node.removeEventListener("mouseleave", resume);
        window.clearInterval(intervalRef.current);
      };
    }

    return () => {
      window.clearInterval(intervalRef.current);
    };
  }, [
    cardDistance,
    verticalDistance,
    dropDistance,
    delay,
    pauseOnHover,
    isActive,
    skewAmount,
    easing,
    childCount,
    config.durDrop,
    config.durMove,
    config.durReturn,
    config.promoteOverlap,
    config.returnDelay,
    config.ease,
    resumeCycle,
    stopCycle,
  ]);

  return (
    <div
      ref={container}
      className={`pointer-events-auto relative h-[320px] w-[420px] origin-bottom-right overflow-visible [perspective:900px] max-md:h-[260px] max-md:w-[340px] max-sm:h-[220px] max-sm:w-[300px] ${containerClassName ?? ""}`.trim()}
      onClick={(event) => {
        const target = (event.target as HTMLElement).closest(".cardswap-item");
        if (!target || !onCardClick) return;

        const index = cardElementsRef.current.indexOf(target as HTMLDivElement);
        if (index >= 0) {
          onCardClick(index);
        }
      }}
    >
      {children}
    </div>
  );
};

export default CardSwap;