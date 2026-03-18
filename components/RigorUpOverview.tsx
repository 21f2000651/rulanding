"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
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
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const glowY = useTransform(scrollYProgress, [0, 1], ["-14%", "14%"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.35, 0.72, 0.35]);
  const topFadeOpacity = useTransform(scrollYProgress, [0, 0.2, 0.34], [1, 0.45, 0]);
  const bottomFadeOpacity = useTransform(scrollYProgress, [0.66, 0.8, 1], [0, 0.45, 1]);

  return (
    <motion.section
      ref={sectionRef}
      id="dashboards"
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      aria-labelledby="rigorup-overview-heading"
      className="relative isolate overflow-hidden py-20 sm:py-24"
    >
      <motion.div
        aria-hidden="true"
        style={{ y: backgroundY }}
        className="pointer-events-none absolute inset-x-0 -top-24 -bottom-24 -z-20 bg-primary-dark"
      />
      <motion.div
        aria-hidden="true"
        style={{ y: glowY, opacity: glowOpacity }}
        className="pointer-events-none absolute inset-x-0 top-[8%] -z-10 h-[34rem] bg-[radial-gradient(circle_at_50%_18%,rgba(178,167,243,0.28),rgba(108,89,252,0.12)_28%,rgba(60,49,91,0)_64%)]"
      />
      <motion.div
        aria-hidden="true"
        style={{ opacity: topFadeOpacity }}
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-page via-page/65 to-transparent sm:h-40"
      />
      <motion.div
        aria-hidden="true"
        style={{ opacity: bottomFadeOpacity }}
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-page via-page/65 to-transparent sm:h-40"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-y-10 px-4 sm:px-6 md:grid-cols-[minmax(0,1.08fr)_minmax(20rem,0.92fr)] md:gap-x-8 lg:gap-x-10 lg:px-8">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-light">
              Presenting RigorUp
            </p>
            <h2
              id="rigorup-overview-heading"
              className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl"
            >
              One platform that turns every class into{" "}
              <span className="text-primary-light">a predictable success story.</span>
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-white/70 sm:text-[15px]">
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

          <div className="relative flex items-center justify-center pt-0 md:justify-end md:pt-8">
            <div className="absolute inset-4 -z-10 rounded-[3rem] bg-primary/20 blur-3xl" />
            <CardSwap
              cardDistance={22}
              verticalDistance={22}
              dropDistance={170}
              delay={4200}
              pauseOnHover
              isActive={isSectionInView}
              skewAmount={2}
              easing="elastic"
              containerClassName="h-[430px] w-full max-w-[30rem] sm:h-[460px]"
            >
              {dashboardCards.map((card) => (
                <Card key={card.title} className="h-[360px] w-[min(100%,21.5rem)] p-4 sm:h-[390px] sm:p-5">
                  <div className="grid h-full gap-4 rounded-[1.35rem] border border-[#d7d2f4] bg-[#fcfbff] p-3 shadow-[0_18px_40px_rgba(19,14,40,0.08)] sm:p-4">
                    <div className="rounded-2xl bg-[#171223] px-4 py-3 text-white shadow-[0_8px_20px_rgba(23,18,35,0.18)]">
                      <div className="flex items-center justify-between gap-3 text-[11px] text-white/72">
                        <span>{card.title}</span>
                        <span className="inline-flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          {card.status}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-[#5a5570] sm:text-[15px]">{card.fact}</p>
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
    <div className="space-y-1.5 rounded-2xl bg-white/8 px-4 py-3 ring-1 ring-white/10">
      <dt className="text-xs font-semibold uppercase tracking-wide text-primary-light">
        {title}
      </dt>
      <dd className="text-xs leading-relaxed text-white/60">{body}</dd>
    </div>
  );
}

type FactBoxProps = {
  label: string;
  value: string;
};

function FactBox({ label, value }: FactBoxProps) {
  return (
    <div className="space-y-1 rounded-2xl border border-[#ece8fb] bg-white p-3 text-xs shadow-[0_10px_24px_rgba(20,14,40,0.05)]">
      <p className="text-[11px] font-medium uppercase tracking-wide text-[#7d7797]">
        {label}
      </p>
      <p className="text-sm font-semibold leading-snug text-[#171223]">{value}</p>
    </div>
  );
}
