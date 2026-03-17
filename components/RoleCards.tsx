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
  },
  {
    id: "teachers",
    title: "For Teachers",
    href: "/teacher",
    summary: "Give teachers their time back without losing academic rigour.",
    bullets: ["Automated grading & insights", "Lesson-ready analytics"],
  },
  {
    id: "students",
    title: "For Students",
    href: "/student",
    summary: "Help every learner progress with confidence, not anxiety.",
    bullets: ["Adaptive practice journeys", "Clear weekly goals"],
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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ y: -6, rotate: -0.5 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <Link
        href={role.href}
        aria-label={`Explore RigorUp for ${role.title}`}
        className="no-link-underline group flex h-full flex-col justify-between rounded-3xl bg-surface p-5 text-left shadow-sm ring-1 ring-black/5 transition-colors hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-page"
      >
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
        <div className="mt-4 flex items-center justify-between text-xs font-medium text-primary">
          <span>View journey</span>
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-[11px] transition-transform group-hover:translate-x-1 group-hover:bg-primary group-hover:text-white">
            ↗
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

