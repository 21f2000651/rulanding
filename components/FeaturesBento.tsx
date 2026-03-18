"use client";

import { ReactNode, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const springTransition = {
  type: "spring" as const,
  stiffness: 220,
  damping: 24,
  mass: 0.7,
};

type TileVisualProps = {
  isHovered: boolean;
  prefersReducedMotion: boolean;
};

type FeatureTileProps = {
  title: string;
  description: string;
  stat: string;
  accent?: "admin" | "teacher" | "student";
  className?: string;
  visual: (props: TileVisualProps) => ReactNode;
};

export function FeaturesBento() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="space-y-8 py-12 md:py-16"
    >
      <motion.div
        className="space-y-3 text-center md:text-left"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
          What RigorUp unlocks
        </p>
        <h2
          id="features-heading"
          className="text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
        >
          Everything you need to <span className="text-primary">get stronger outcomes.</span>
        </h2>
        <p className="max-w-3xl text-sm leading-relaxed text-muted sm:text-[15px]">
          Four connected capabilities, one cohesive system. Every card follows
          the same analytics-grade visual language for leaders, teachers, and learners.
        </p>
      </motion.div>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-2">
        <FeatureTile
          title="All-in-one dashboard"
          description="Unify attendance, assessments, communication, and interventions in a single AI-aware operating layer for your institution."
          stat="42 live cohorts synced"
          accent="admin"
          className="md:col-span-4"
          visual={(props) => <DashboardVisual {...props} />}
        />

        <FeatureTile
          title="Deep, meaningful analytics"
          description="Surface concept-level weak zones and cohort momentum with instant drill-down clarity."
          stat="Risk trend down 22%"
          className="md:col-span-2"
          visual={(props) => <AnalyticsVisual {...props} />}
        />

        <FeatureTile
          title="Personalized journeys"
          description="Map each learner to the next best concept with adaptive pacing and confidence-aware nudges."
          stat="91% route adherence"
          accent="student"
          className="md:col-span-2"
          visual={(props) => <JourneyVisual {...props} />}
        />

        <FeatureTile
          title="AI-powered teaching assistant"
          description="Generate practice sets, quick checks, and feedback summaries so teachers reclaim high-value classroom time."
          stat="18 hrs/teacher reclaimed"
          accent="teacher"
          className="md:col-span-4"
          visual={(props) => <AssistantVisual {...props} />}
        />
      </div>
    </section>
  );
}

function FeatureTile({
  title,
  description,
  stat,
  accent,
  className,
  visual,
}: FeatureTileProps) {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const [isHovered, setIsHovered] = useState(false);

  const accentClasses =
    accent === "admin"
      ? "from-primary/12 via-primary-light/18 to-transparent"
      : accent === "teacher"
        ? "from-primary-dark/16 via-primary/12 to-transparent"
        : accent === "student"
          ? "from-primary-light/22 via-primary/12 to-transparent"
          : "from-primary/10 via-primary-light/16 to-transparent";

  return (
    <motion.article
      aria-label={`Feature card: ${title}`}
      tabIndex={0}
      className={`group relative overflow-hidden rounded-3xl bg-surface p-4 shadow-[0_12px_30px_rgba(60,49,91,0.08)] ring-1 ring-black/5 md:p-5 ${className ?? ""}`.trim()}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={prefersReducedMotion ? undefined : { y: -6, scale: 1.008 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onFocusCapture={() => setIsHovered(true)}
      onBlurCapture={() => setIsHovered(false)}
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accentClasses} opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100`}
        aria-hidden="true"
      />

      <div className="relative flex h-full flex-col gap-3">
        <header className="space-y-1">
          <h3 className="text-base font-semibold tracking-tight text-ink">{title}</h3>
          <p className="text-xs leading-relaxed text-muted sm:text-sm">{description}</p>
        </header>

        <motion.div
          className="relative mt-1 flex-1 overflow-hidden rounded-2xl border border-primary/8 bg-page p-3 sm:p-4"
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  boxShadow: isHovered
                    ? "inset 0 1px 0 rgba(255,255,255,0.8), 0 14px 26px rgba(60,49,91,0.12)"
                    : "inset 0 1px 0 rgba(255,255,255,0.8), 0 6px 16px rgba(60,49,91,0.08)",
                }
          }
          transition={springTransition}
        >
          {visual({ isHovered, prefersReducedMotion })}
        </motion.div>

        <p className="inline-flex w-fit items-center rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-primary-dark">
          {stat}
        </p>
      </div>
    </motion.article>
  );
}

function DashboardVisual({ isHovered, prefersReducedMotion }: TileVisualProps) {
  return (
    <motion.div
      className="relative grid h-40 grid-cols-12 gap-2"
      animate={prefersReducedMotion ? undefined : { scale: isHovered ? 1.01 : 1 }}
      transition={springTransition}
    >
      <motion.div
        className="col-span-8 rounded-xl bg-surface p-3 ring-1 ring-black/5"
        animate={prefersReducedMotion ? undefined : { y: isHovered ? -3 : 0 }}
        transition={springTransition}
      >
        <div className="grid h-full grid-cols-5 items-end gap-1.5">
          {[
            "h-6",
            "h-10",
            "h-8",
            "h-12",
            "h-9",
          ].map((heightClass, index) => (
            <motion.span
              key={`bar-${index}`}
              className={`rounded-md bg-primary/70 ${heightClass}`}
              animate={prefersReducedMotion ? undefined : { opacity: isHovered ? 1 : 0.82 }}
              transition={springTransition}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        className="col-span-4 flex flex-col gap-2"
        animate={prefersReducedMotion ? undefined : { x: isHovered ? 2 : 0 }}
        transition={springTransition}
      >
        <div className="rounded-xl bg-surface p-2.5 text-[10px] ring-1 ring-black/5">
          <p className="text-muted">Attendance sync</p>
          <p className="font-semibold text-ink">98.3%</p>
        </div>
        <div className="rounded-xl bg-surface p-2.5 text-[10px] ring-1 ring-black/5">
          <p className="text-muted">Action alerts</p>
          <p className="font-semibold text-ink">24 queued</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function AnalyticsVisual({ isHovered, prefersReducedMotion }: TileVisualProps) {
  const levels = [
    35, 45, 58, 42, 64, 40,
    48, 62, 80, 58, 72, 44,
    36, 52, 68, 50, 60, 38,
  ];

  return (
    <div className="relative h-40">
      <div className="grid h-full grid-cols-6 grid-rows-3 gap-1.5">
        {levels.map((level, index) => (
          <motion.div
            key={`cell-${index}`}
            className="rounded-md bg-primary"
            animate={
              prefersReducedMotion
                ? undefined
                : { opacity: isHovered ? Math.min(1, level / 100 + 0.18) : level / 100 }
            }
            transition={springTransition}
          />
        ))}
      </div>
      <motion.p
        className="absolute bottom-2 left-2 rounded-md bg-surface px-2 py-1 text-[10px] font-medium text-ink ring-1 ring-black/5"
        animate={prefersReducedMotion ? undefined : { y: isHovered ? -2 : 0 }}
        transition={springTransition}
      >
        Algebra cluster watchlist
      </motion.p>
    </div>
  );
}

function JourneyVisual({ isHovered, prefersReducedMotion }: TileVisualProps) {
  return (
    <div className="relative flex h-40 items-center justify-between px-2 sm:px-3">
      <div className="absolute inset-x-2 top-1/2 h-px -translate-y-1/2 bg-primary/20 sm:inset-x-3" />
      {[0, 1, 2, 3, 4].map((step) => (
        <div key={`step-${step}`} className="relative z-10 flex flex-col items-center gap-1">
          <motion.span
            className={`h-3 w-3 rounded-full ${step === 2 ? "bg-primary" : "bg-primary/35"}`}
            animate={prefersReducedMotion ? undefined : { scale: isHovered && step === 2 ? 1.2 : 1 }}
            transition={springTransition}
          />
          <span className="h-5 w-px bg-primary/20" />
        </div>
      ))}

      <motion.div
        className="absolute top-1/2 h-3 w-3 rounded-full bg-primary shadow-[0_0_18px_rgba(108,89,252,0.45)]"
        initial={false}
        animate={
          prefersReducedMotion
            ? { x: 18, y: "-50%" }
            : { x: isHovered ? 172 : 18, y: "-50%" }
        }
        transition={springTransition}
      />
    </div>
  );
}

function AssistantVisual({ isHovered, prefersReducedMotion }: TileVisualProps) {
  const chips = [
    "Auto-grading",
    "Attendance sync",
    "Worksheet drafts",
    "Lesson recaps",
    "Exit tickets",
  ];

  return (
    <motion.div
      className="relative grid h-40 grid-rows-[1fr_auto] gap-3"
      animate={prefersReducedMotion ? undefined : { y: isHovered ? -1 : 0 }}
      transition={springTransition}
    >
      <div className="flex flex-wrap content-start gap-2">
        {chips.map((chip, index) => (
          <motion.span
            key={chip}
            className="rounded-full bg-primary/12 px-3 py-1 text-[11px] font-medium text-primary-dark"
            animate={
              prefersReducedMotion
                ? undefined
                : { y: isHovered ? (index % 2 === 0 ? -2 : 1) : 0 }
            }
            transition={springTransition}
          >
            {chip}
          </motion.span>
        ))}
      </div>
      <motion.div
        className="grid grid-cols-2 gap-2 text-[10px]"
        animate={prefersReducedMotion ? undefined : { scale: isHovered ? 1.01 : 1 }}
        transition={springTransition}
      >
        <div className="rounded-lg bg-surface px-2 py-1.5 ring-1 ring-black/5">
          <p className="text-muted">Generated today</p>
          <p className="font-semibold text-ink">126 practice sets</p>
        </div>
        <div className="rounded-lg bg-surface px-2 py-1.5 ring-1 ring-black/5">
          <p className="text-muted">Pending review</p>
          <p className="font-semibold text-ink">34 submissions</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

