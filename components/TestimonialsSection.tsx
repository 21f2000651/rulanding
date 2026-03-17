"use client";

import { motion, useReducedMotion } from "framer-motion";

const teacherTestimonials = [
  {
    name: "Ananya Rao",
    role: "Head of Academics, Horizon International School",
    quote:
      "RigorUp finally gave us a live view of our academic year. We now intervene in September instead of apologising in March.",
  },
  {
    name: "James Carter",
    role: "Mathematics Teacher, Northbridge High",
    quote:
      "The platform has taken admin off my plate. I spend my evenings planning creative lessons, not grading piles of papers.",
  },
];

const studentTestimonials = [
  {
    name: "Ishita",
    role: "Grade 9 Student",
    quote:
      "My dashboard shows exactly what I should revise today. It feels like having a quiet coach that knows how I actually learn.",
  },
  {
    name: "Rahul",
    role: "Grade 11 Student",
    quote:
      "Instead of being scared of report cards, I now track my progress every week. Small wins keep me motivated.",
  },
];

const marqueeSchools = [
  "Horizon International",
  "Northbridge High",
  "Cedar Grove Academy",
  "St. Mary’s Collegiate",
  "Brightfields Public School",
  "Green Oaks Institute",
  "Riverstone High",
];

export function TestimonialsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="impact"
      aria-labelledby="testimonials-heading"
      className="space-y-10 py-12 md:py-16"
    >
      <motion.div
        className="space-y-3 text-center md:text-left"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
          Voices from the classroom
        </p>
        <h2
          id="testimonials-heading"
          className="text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
        >
          Teachers feel supported. Students feel{" "}
          <span className="text-primary">seen.</span>
        </h2>
        <p className="max-w-3xl text-sm leading-relaxed text-muted sm:text-[15px]">
          RigorUp sits quietly behind the scenes, orchestrating data so that
          human relationships—between teachers, students, and parents—can take
          center stage.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
            Teachers
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {teacherTestimonials.map((t, i) => (
              <motion.figure
                key={t.name}
                className="flex h-full flex-col justify-between rounded-3xl bg-surface p-5 text-sm shadow-sm ring-1 ring-black/5"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
              >
                <blockquote className="text-sm leading-relaxed text-muted">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-4 text-xs">
                  <p className="font-semibold text-ink">{t.name}</p>
                  <p className="mt-0.5 text-[11px] text-muted">{t.role}</p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
            Students
          </h3>
          <div className="space-y-4">
            {studentTestimonials.map((t, i) => (
              <motion.figure
                key={t.name}
                className="rounded-3xl bg-primary/8 p-5 text-sm shadow-sm ring-1 ring-primary/15"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
              >
                <blockquote className="text-sm leading-relaxed text-ink">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-4 text-xs">
                  <p className="font-semibold text-ink">{t.name}</p>
                  <p className="mt-0.5 text-[11px] text-muted">{t.role}</p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>

      <div aria-label="Schools partnering with RigorUp" className="space-y-3">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
          Trusted by progressive schools
        </p>
        <div className="relative overflow-hidden py-3">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-page via-page/70 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-page via-page/70 to-transparent" />

          {prefersReducedMotion ? (
            <div className="flex gap-10 px-8 text-sm font-semibold tracking-wide text-muted">
              {marqueeSchools.map((name) => (
                <span key={name}>{name}</span>
              ))}
            </div>
          ) : (
            <motion.div
              className="flex min-w-full gap-10 px-8 text-sm font-semibold tracking-wide text-muted"
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                duration: 30,
              }}
            >
              {[...marqueeSchools, ...marqueeSchools].map((name, index) => (
                <span key={`${name}-${index}`}>{name}</span>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

