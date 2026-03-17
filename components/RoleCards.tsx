"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const roles = [
  {
    id: "schools",
    title: "For Schools & Institutes",
    href: "/school",
    summary: "Design predictable outcomes across grades, campuses, and boards.",
    bullets: ["Cohort-level forecasting", "Campus performance dashboards"],
    cta: "Let's try it out",
    hoverLine: "Let's get deep insights into my school's performance",
    tone: "from-cyan-400/25 via-primary/18 to-transparent",
  },
  {
    id: "teachers",
    title: "For Teachers",
    href: "/teacher",
    summary: "Give teachers their time back without losing academic rigour.",
    bullets: ["Automated grading & insights", "Lesson-ready analytics"],
    cta: "Let's offload my burden & focus on teaching",
    hoverLine: "Proceed to teacher workspace",
    tone: "from-indigo-400/28 via-primary/22 to-transparent",
  },
  {
    id: "students",
    title: "For Students",
    href: "/student",
    summary: "Help every learner progress with confidence, not anxiety.",
    bullets: ["Adaptive practice journeys", "Clear weekly goals"],
    cta: "I'm excited for personalized learning",
    hoverLine: "Let's go",
    tone: "from-violet-300/30 via-primary/20 to-transparent",
  },
];

export function RoleCards() {
  return (
    <section
      id="partners"
      aria-labelledby="role-cards-heading"
      className="space-y-6 py-12 md:py-24"
    >
      <motion.div
        className="space-y-3 text-center md:text-left"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
          Built for your role
        </p>
        <h2
          id="role-cards-heading"
          className="text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
        >
          Choose how you want to{" "}
          <span className="text-primary">unlock excellence.</span>
        </h2>
        <p className="max-w-3xl text-sm leading-relaxed text-muted sm:text-[15px]">
          Explore how RigorUp supports schools, teachers, and students with a
          unified platform tuned to each perspective.
        </p>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-3">
        {roles.map((role) => (
          <RoleCard key={role.id} role={role} />
        ))}
      </div>
    </section>
  );
}

type Role = (typeof roles)[number];

type RoleCardProps = {
  role: Role;
};

function RoleCard({ role }: RoleCardProps) {
  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ y: -8, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 230, damping: 19, mass: 0.7 }}
    >
      <Link
        href={role.href}
        aria-label={`Go to ${role.title} dashboard`}
        className="no-link-underline group relative flex h-full min-h-[340px] flex-col justify-between overflow-hidden rounded-3xl border border-black/5 bg-surface/95 p-6 text-left shadow-[0_8px_26px_rgba(18,15,36,0.08)] transition-all duration-500 hover:shadow-[0_24px_45px_rgba(44,34,110,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-page md:min-h-[375px]"
      >
        <div className={`pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-gradient-to-br blur-2xl transition-opacity duration-500 group-hover:opacity-95 ${role.tone}`} />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.52)_35%,transparent_68%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-dark/80">
            {role.title}
          </p>
          <p className="text-sm leading-relaxed text-muted">{role.summary}</p>
          <ul className="mt-2 space-y-1.5 text-xs text-muted">
            {role.bullets.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-7">
          <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-[#5f4ef1] text-white ring-1 ring-primary-dark/20 transition-all duration-400 group-hover:translate-y-[-2px] group-hover:shadow-[0_14px_30px_rgba(71,56,188,0.38)]">
            <div className="flex items-center justify-between gap-3 px-4 py-3.5 transition-all duration-300 group-hover:px-5 group-hover:py-4">
              <span className="text-sm font-semibold leading-snug">{role.cta}</span>
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20 text-base transition-all duration-300 group-hover:translate-x-1.5 group-hover:bg-white group-hover:text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 6.65032C9 6.65032 15.9383 6.10759 16.9154 7.08463C17.8924 8.06167 17.3496 15 17.3496 15M16.5 7.5L6.5 17.5" />
                </svg>
              </span>
            </div>
            <div className="max-h-0 px-4 pb-0 text-xs text-white/90 opacity-0 transition-all duration-500 ease-out group-hover:max-h-14 group-hover:px-5 group-hover:pb-4 group-hover:opacity-100">
              {role.hoverLine}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

