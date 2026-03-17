"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CardSwap, { Card } from "./CardSwap";

const dashboardCards = [
  {
    title: "Academic Year Health",
    status: "Stable",
    fact:
      "Leaders are now seeing risk before exams, not after report cards. Cohort visibility has shifted intervention from reactive to proactive.",
    highlights: [
      { label: "At-risk students", value: "7% flagged early" },
      { label: "Parent engagement", value: "+42% proactive check-ins" },
    ],
  },
  {
    title: "Intervention Momentum",
    status: "Accelerating",
    fact:
      "Targeted nudges are closing learning gaps mid-term. Students recover faster because support is aligned to concept-level weakness, not broad grades.",
    highlights: [
      { label: "Concept mastery", value: "84% on-track" },
      { label: "Lesson recovery", value: "12 days faster" },
    ],
  },
  {
    title: "Learning Pulse",
    status: "Live",
    fact:
      "Teachers and families are aligned on the same weekly reality. Transparent snapshots reduce surprise and build a calmer, more consistent support loop.",
    highlights: [
      { label: "Student confidence", value: "+27% improvement" },
      { label: "Actionable alerts", value: "24/7 signal tracking" },
    ],
  },
];

export function RigorUpOverview() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isSectionInView = useInView(sectionRef, {
    amount: 0.45,
    margin: "-10% 0px -20% 0px",
  });

  return (
    <motion.section
      ref={sectionRef}
      id="dashboards"
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      aria-labelledby="rigorup-overview-heading"
      className="grid gap-6 overflow-hidden rounded-3xl bg-surface/80 p-6 py-12 shadow-sm ring-1 ring-black/5 sm:p-8 md:grid-cols-[minmax(0,1fr)_minmax(20rem,0.94fr)] md:py-16 lg:gap-8"
    >
      <div className="space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
          Presenting RigorUp
        </p>
        <h2
          id="rigorup-overview-heading"
          className="text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
        >
          One platform that turns every class into{" "}
          <span className="text-primary">a predictable success story.</span>
        </h2>
        <p className="max-w-xl text-sm leading-relaxed text-muted sm:text-[15px]">
          RigorUp connects the entire learning ecosystem. From school leaders to
          classroom teachers to individual students, everyone sees the same
          live picture of progress, risk, and opportunity—powered by ethical,
          explainable AI.
        </p>

        <dl className="grid gap-4 text-sm sm:grid-cols-2">
          <OverviewPoint
            title="For Schools & Institutes"
            body="Design predictable academic outcomes with cohort-level insights, early risk alerts, and performance simulations before report cards are printed."
          />
          <OverviewPoint
            title="For Teachers"
            body="Automate grading, tracking, and routine admin so teachers can invest their time where it matters most—inside the classroom and in 1:1 mentoring."
          />
          <OverviewPoint
            title="For Students"
            body="Give every learner a personalized companion that adapts to their pace, style, and strengths with bite-sized goals and nudges."
          />
          <OverviewPoint
            title="For Parents"
            body="Offer a clear, calm view of progress with transparent insights instead of last-minute surprises at the end of term."
          />
        </dl>
      </div>

      <div className="relative flex items-center justify-center md:justify-start">
        <div className="absolute inset-4 -z-10 rounded-[3rem] bg-primary-light/40 blur-3xl" />
        <CardSwap
          cardDistance={22}
          verticalDistance={22}
          dropDistance={170}
          delay={4200}
          pauseOnHover
          isActive={isSectionInView}
          skewAmount={2}
          easing="elastic"
          containerClassName="h-[430px] w-full max-w-[24rem] sm:h-[460px]"
        >
          {dashboardCards.map((card) => (
            <Card key={card.title} className="h-[360px] w-[min(100%,21.5rem)] p-4 sm:h-[390px] sm:p-5">
              <div className="grid h-full gap-4 rounded-[1.35rem] bg-page p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] sm:p-4">
                <div className="rounded-2xl bg-ink px-4 py-3 text-white">
                  <div className="flex items-center justify-between gap-3 text-[11px] text-white/70">
                    <span>{card.title}</span>
                    <span className="inline-flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      {card.status}
                    </span>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-muted sm:text-[15px]">{card.fact}</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {card.highlights.map((item) => (
                    <FactBox
                      key={`${card.title}-${item.label}`}
                      label={item.label}
                      value={item.value}
                    />
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </CardSwap>
      </div>
    </motion.section>
  );
}

type OverviewPointProps = {
  title: string;
  body: string;
};

function OverviewPoint({ title, body }: OverviewPointProps) {
  return (
    <div className="space-y-1.5 rounded-2xl bg-page px-4 py-3">
      <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
        {title}
      </dt>
      <dd className="text-xs leading-relaxed text-muted">{body}</dd>
    </div>
  );
}

type FactBoxProps = {
  label: string;
  value: string;
};

function FactBox({ label, value }: FactBoxProps) {
  return (
    <div className="space-y-1 rounded-2xl bg-surface p-3 text-xs shadow-sm ring-1 ring-black/5">
      <p className="text-[11px] font-medium uppercase tracking-wide text-muted">
        {label}
      </p>
      <p className="text-sm font-semibold leading-snug text-ink">{value}</p>
    </div>
  );
}

