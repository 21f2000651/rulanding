"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type FeatureTileProps = {
  title: string;
  description: string;
  accent?: "admin" | "teacher" | "student";
  children?: ReactNode;
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
          Everything you need to{" "}
          <span className="text-primary">get stronger outcomes.</span>
        </h2>
        <p className="max-w-3xl text-sm leading-relaxed text-muted sm:text-[15px]">
          Each tile is a pillar of the RigorUp platform—from predictive
          analytics for school leaders to personal learning journeys for
          students and automation for teachers.
        </p>
      </motion.div>

      <div className="mt-6 grid gap-4 md:grid-cols-3 md:grid-rows-2">
        <FeatureTile
          title="All-in-one smart education hub"
          description="Unify attendance, assessments, insights, and communication in a single AI-aware workspace for your entire institution."
          accent="admin"
        >
          <GridBars />
        </FeatureTile>

        <FeatureTile
          title="AI-powered teaching assistant"
          description="Generate practice sets, formative checks, and feedback summaries so teachers reclaim time for real teaching."
          accent="teacher"
        >
          <PillRow />
        </FeatureTile>

        <FeatureTile
          title="Personalized journeys for every learner"
          description="Adaptive paths that respond to pace, mastery, and confidence—nudging the right concept at the right time for each student."
          accent="student"
        >
          <PathDots />
        </FeatureTile>

        <FeatureTile
          title="Deep, meaningful analytics"
          description="See exactly where learning is breaking down with concept-level heatmaps and cohort drill-downs."
        >
          <Heatmap />
        </FeatureTile>

        <FeatureTile
          title="Feedback, growth, and reflection"
          description="Close the loop with feedback that connects student work, teacher comments, and progress over time."
        >
          <TrendLine />
        </FeatureTile>

        <FeatureTile
          title="Secure, responsible AI foundation"
          description="Ethical guardrails, privacy-first design, and human-in-the-loop controls built specifically for schools."
        >
          <Shield />
        </FeatureTile>
      </div>
    </section>
  );
}

function FeatureTile({
  title,
  description,
  accent,
  children,
}: FeatureTileProps) {
  const accentClasses =
    accent === "admin"
      ? "from-primary/12 via-primary-light/15 to-transparent"
      : accent === "teacher"
      ? "from-primary-dark/16 via-primary/10 to-transparent"
      : accent === "student"
      ? "from-primary-light/22 via-primary/10 to-transparent"
      : "from-primary/8 via-primary-light/10 to-transparent";

  return (
    <motion.article
      className="group relative overflow-hidden rounded-3xl bg-surface p-4 shadow-sm ring-1 ring-black/5"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -8, scale: 1.01 }}
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accentClasses} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
        aria-hidden="true"
      />
      <div className="relative flex h-full flex-col gap-3">
        <header className="space-y-1">
          <h3 className="text-sm font-semibold text-ink">{title}</h3>
          <p className="text-xs leading-relaxed text-muted">{description}</p>
        </header>
        {children && <div className="mt-2 flex-1">{children}</div>}
      </div>
    </motion.article>
  );
}

function GridBars() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="group/visual relative flex h-24 items-end gap-1.5 overflow-hidden rounded-2xl bg-page p-3">
      {[
        { id: "term-1", height: 40 },
        { id: "term-2", height: 65 },
        { id: "term-3", height: 75 },
        { id: "term-4", height: 52 },
        { id: "term-5", height: 88 },
        { id: "term-6", height: 72 },
        { id: "term-7", height: 90 },
      ].map((bar, index) => (
        <div key={bar.id} className="flex flex-1 items-end rounded-full bg-primary/15">
          <motion.div
            className="w-full origin-bottom rounded-full bg-primary shadow-[0_0_18px_rgba(108,89,252,0.22)]"
            style={{ height: `${bar.height}%` }}
            animate={
              prefersReducedMotion
                ? undefined
                : { scaleY: [0.8, 1.08, 0.92, 1] }
            }
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.12,
            }}
          />
        </div>
      ))}
      <div className="pointer-events-none absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-page via-page/90 to-page/65 p-3 opacity-0 transition-opacity duration-300 group-hover/visual:opacity-100">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-primary-dark/80">
          Live Cohort Snapshot
        </p>
        <div className="grid grid-cols-2 gap-2 text-[10px]">
          <div className="rounded-lg bg-surface px-2 py-1.5 shadow-sm ring-1 ring-black/5">
            <p className="text-muted">Growth</p>
            <p className="font-semibold text-ink">+14.8%</p>
          </div>
          <div className="rounded-lg bg-surface px-2 py-1.5 shadow-sm ring-1 ring-black/5">
            <p className="text-muted">Risk trend</p>
            <p className="font-semibold text-ink">-22%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PillRow() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="group/visual relative flex min-h-24 flex-wrap content-start gap-2 overflow-hidden rounded-2xl bg-page p-3 text-[11px]">
      {["Auto-grading", "Attendance sync", "Assignment templates", "Lesson recaps"].map(
        (label, index) => (
          <motion.span
            key={label}
            className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary-dark shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] transition-colors group-hover:bg-primary/15"
            animate={
              prefersReducedMotion ? undefined : { y: [0, -2, 0], opacity: [0.88, 1, 0.92] }
            }
            transition={{
              duration: 2.1,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.18,
            }}
          >
            {label}
          </motion.span>
        ),
      )}
      <div className="pointer-events-none absolute inset-0 flex items-end justify-between bg-gradient-to-t from-page via-page/90 to-page/65 p-3 opacity-0 transition-opacity duration-300 group-hover/visual:opacity-100">
        <div className="rounded-lg bg-surface px-2.5 py-1.5 text-[10px] shadow-sm ring-1 ring-black/5">
          <p className="text-muted">Generated today</p>
          <p className="font-semibold text-ink">126 practice sets</p>
        </div>
        <div className="rounded-lg bg-surface px-2.5 py-1.5 text-[10px] shadow-sm ring-1 ring-black/5">
          <p className="text-muted">Teacher hours</p>
          <p className="font-semibold text-ink">18 hrs reclaimed</p>
        </div>
      </div>
    </div>
  );
}

function PathDots() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="group/visual relative flex h-24 items-center justify-between overflow-hidden rounded-2xl bg-page px-4">
      <motion.div
        className="absolute left-4 right-4 top-1/2 h-px -translate-y-1/2 bg-primary/15"
        animate={prefersReducedMotion ? undefined : { opacity: [0.35, 0.7, 0.35] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      />
      {[0, 1, 2, 3, 4].map((step) => (
        <div key={step} className="relative z-10 flex flex-col items-center gap-1">
          <span
            className={`h-3 w-3 rounded-full shadow-[0_0_12px_rgba(108,89,252,0.16)] ${
              step === 2 ? "bg-primary" : "bg-primary/30"
            }`}
          />
          <span className="h-5 w-px bg-primary/20" />
        </div>
      ))}
      {!prefersReducedMotion && (
        <motion.div
          className="absolute top-1/2 h-3 w-3 rounded-full bg-primary shadow-[0_0_18px_rgba(108,89,252,0.4)]"
          initial={{ x: 28, y: "-50%" }}
          animate={{ x: [28, 92, 156, 220, 284] }}
          transition={{ duration: 4.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
      )}
      <div className="pointer-events-none absolute inset-0 flex items-end justify-between bg-gradient-to-t from-page via-page/90 to-page/65 p-3 opacity-0 transition-opacity duration-300 group-hover/visual:opacity-100">
        <div className="rounded-lg bg-surface px-2.5 py-1.5 text-[10px] shadow-sm ring-1 ring-black/5">
          <p className="text-muted">Adaptive route</p>
          <p className="font-semibold text-ink">Math pace recalibrated</p>
        </div>
      </div>
    </div>
  );
}

function Heatmap() {
  const prefersReducedMotion = useReducedMotion();
  const levels = [0.22, 0.35, 0.5, 0.32, 0.46, 0.28, 0.4, 0.58, 0.72, 0.5, 0.64, 0.36, 0.34, 0.48, 0.62, 0.4, 0.55, 0.3];

  return (
    <div className="group/visual relative grid h-24 grid-cols-6 grid-rows-3 gap-1 overflow-hidden rounded-2xl bg-page p-2">
      {levels.map((level, index) => (
        <motion.div
          key={`cell-${index}`}
          className="rounded-md bg-primary"
          initial={false}
          animate={
            prefersReducedMotion
              ? { opacity: level }
              : { opacity: [level * 0.65, level, level * 0.8] }
          }
          transition={{
            duration: 2.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.06,
          }}
        />
      ))}
      <div className="pointer-events-none absolute inset-0 flex items-end justify-between bg-gradient-to-t from-page via-page/90 to-page/60 p-2 opacity-0 transition-opacity duration-300 group-hover/visual:opacity-100">
        <p className="rounded-md bg-surface px-2 py-1 text-[10px] font-medium text-ink shadow-sm ring-1 ring-black/5">
          Algebra cluster: watchlist
        </p>
      </div>
    </div>
  );
}

function TrendLine() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="group/visual relative h-24 overflow-hidden rounded-2xl bg-page p-3">
      <div className="absolute inset-x-3 top-1/2 h-px -translate-y-1/2 bg-primary/15" />
      <svg
        viewBox="0 0 100 40"
        className="relative h-full w-full text-primary"
        aria-hidden="true"
      >
        <motion.path
          d="M0 30 C12 29, 18 25, 30 24 S52 18, 60 16 S84 11, 100 8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          initial={prefersReducedMotion ? false : { pathLength: 0.2, opacity: 0.5 }}
          animate={
            prefersReducedMotion
              ? undefined
              : { pathLength: [0.25, 1, 1], opacity: [0.55, 1, 0.85] }
          }
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        />
        {!prefersReducedMotion && (
          <motion.circle
            r="2.6"
            fill="currentColor"
            cy="8"
            animate={{ cx: [10, 28, 46, 66, 92] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
      </svg>
      <div className="pointer-events-none absolute inset-0 flex items-end justify-between bg-gradient-to-t from-page via-page/90 to-page/60 p-3 opacity-0 transition-opacity duration-300 group-hover/visual:opacity-100">
        <div className="rounded-lg bg-surface px-2.5 py-1.5 text-[10px] shadow-sm ring-1 ring-black/5">
          <p className="text-muted">Weekly growth</p>
          <p className="font-semibold text-ink">+11.2 mastery pts</p>
        </div>
      </div>
    </div>
  );
}

function Shield() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="group/visual flex h-24 items-center justify-center overflow-hidden rounded-2xl bg-page p-4">
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl">
        {!prefersReducedMotion && (
          <>
            <motion.div
              className="absolute h-14 w-14 rounded-full border border-primary/18"
              animate={{ scale: [0.8, 1.3], opacity: [0.5, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
            />
            <motion.div
              className="absolute h-20 w-20 rounded-full border border-primary/12"
              animate={{ scale: [0.85, 1.2], opacity: [0.38, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
            />
          </>
        )}
        <motion.div
          className="relative h-12 w-10 rounded-b-[1.4rem] rounded-t-xl border border-primary/40 bg-primary/10"
          animate={prefersReducedMotion ? undefined : { y: [0, -2, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute inset-2 rounded-lg bg-primary/30" />
          <div className="absolute inset-x-2 bottom-2 h-1.5 rounded-full bg-primary-dark/60" />
        </motion.div>
        <div className="pointer-events-none absolute inset-0 flex items-end justify-center bg-gradient-to-t from-page via-page/90 to-page/60 p-2 opacity-0 transition-opacity duration-300 group-hover/visual:opacity-100">
          <p className="rounded-md bg-surface px-2.5 py-1 text-[10px] font-medium text-ink shadow-sm ring-1 ring-black/5">
            100% encrypted + role-based access
          </p>
        </div>
      </div>
    </div>
  );
}

