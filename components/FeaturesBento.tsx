"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

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
      <div className="space-y-3 text-center md:text-left">
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
      </div>

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
  return (
    <div className="flex h-24 items-end gap-1.5 rounded-2xl bg-page p-3">
      {[
        { id: "term-1", height: 40 },
        { id: "term-2", height: 65 },
        { id: "term-3", height: 75 },
        { id: "term-4", height: 52 },
        { id: "term-5", height: 88 },
        { id: "term-6", height: 72 },
        { id: "term-7", height: 90 },
      ].map((bar) => (
        <div key={bar.id} className="flex-1 rounded-full bg-primary/15">
          <div
            className="w-full rounded-full bg-primary"
            style={{ height: `${bar.height}%` }}
          />
        </div>
      ))}
    </div>
  );
}

function PillRow() {
  return (
    <div className="flex flex-wrap gap-2 rounded-2xl bg-page p-3 text-[11px]">
      {["Auto-grading", "Attendance sync", "Assignment templates", "Lesson recaps"].map(
        (label) => (
          <span
            key={label}
            className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary-dark"
          >
            {label}
          </span>
        ),
      )}
    </div>
  );
}

function PathDots() {
  return (
    <div className="flex h-24 items-center justify-between rounded-2xl bg-page px-4">
      {[0, 1, 2, 3, 4].map((step) => (
        <div key={step} className="flex flex-col items-center gap-1">
          <span
            className={`h-3 w-3 rounded-full ${
              step === 2 ? "bg-primary" : "bg-primary/30"
            }`}
          />
          <span className="h-5 w-px bg-primary/20" />
        </div>
      ))}
    </div>
  );
}

function Heatmap() {
  return (
    <div className="grid h-24 grid-cols-6 grid-rows-3 gap-1 rounded-2xl bg-page p-2">
      {Array.from({ length: 18 }).map((_, index) => (
        <div key={`cell-${index}`} className="rounded-md bg-primary/20" />
      ))}
    </div>
  );
}

function TrendLine() {
  return (
    <div className="relative h-24 rounded-2xl bg-page p-3">
      <div className="absolute inset-x-3 top-1/2 h-px -translate-y-1/2 bg-primary/15" />
      <svg
        viewBox="0 0 100 40"
        className="relative h-full w-full text-primary"
        aria-hidden="true"
      >
        <polyline
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          points="0,30 15,26 30,24 45,20 60,16 75,14 90,10 100,8"
        />
      </svg>
    </div>
  );
}

function Shield() {
  return (
    <div className="flex h-24 items-center justify-center rounded-2xl bg-page p-4">
      <div className="relative h-12 w-10 rounded-b-[1.4rem] rounded-t-xl border border-primary/40 bg-primary/10">
        <div className="absolute inset-2 rounded-lg bg-primary/30" />
        <div className="absolute inset-x-2 bottom-2 h-1.5 rounded-full bg-primary-dark/60" />
      </div>
    </div>
  );
}

