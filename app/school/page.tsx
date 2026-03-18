"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const schoolPillars = [
  "ACADEMIC PERFORMANCE TRACKING",
  "CAMPUS LEVEL ANALYTICS",
  "INTERVENTION PLANNING",
];

const schoolFaqs = [
  {
    question: "How quickly can our institution get started with RigorUp?",
    answer:
      "Most institutions go live in 2–4 weeks with structured onboarding, role-based setup, and milestone support for leadership and faculty teams.",
  },
  {
    question: "Can we monitor performance across campuses and grades?",
    answer:
      "Yes. RigorUp gives unified visibility across classes, grades, and campuses with drill-down analytics for timely intervention planning.",
  },
  {
    question: "Will this work with our current academic workflow?",
    answer:
      "Absolutely. RigorUp layers into your existing systems and routines while reducing manual operations and improving academic decision speed.",
  },
  {
    question: "How does leadership identify risk before exams?",
    answer:
      "Predictive analytics and concept-level signals surface at-risk cohorts early, helping leadership teams act proactively before term-end outcomes.",
  },
  {
    question: "Can parents be included in a transparent progress loop?",
    answer:
      "Yes. The platform supports structured progress reporting that improves parent communication and confidence through clear, timely updates.",
  },
];

export default function SchoolPage() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col px-4 pb-16 pt-8 sm:px-6 md:pb-20 lg:px-8">
      <section
        aria-labelledby="school-hero-heading"
        className="flex flex-col items-center gap-7 py-7 text-center md:gap-8 md:py-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-3"
        >
          <h1
            id="school-hero-heading"
            className="text-balance text-[2rem] font-semibold tracking-tight text-ink sm:text-[2.5rem] md:text-[2.85rem] md:leading-[1.1]"
          >
            AI-Powered Smart
            <span className="block text-primary">Academic Management</span>
          </h1>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted sm:text-[15px]">
            Empower school leaders with early risk visibility, campus-wide
            analytics, and predictable academic excellence across cohorts.
          </p>
        </motion.div>

        <button
          onClick={() =>
            document
              .getElementById("get-demo")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-primary px-5 py-2.5 text-xs font-semibold uppercase text-white shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-page"
          aria-label="Get demo for school platform"
        >
          <span className="relative z-10">Get Demo</span>
          <span className="absolute inset-0 -z-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full" />
        </button>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="w-full max-w-[860px] rounded-[1.75rem] border border-primary-dark/20 bg-page/75 p-2.5 shadow-[0_16px_36px_rgba(28,23,54,0.08)] sm:p-3"
        >
          <div className="overflow-hidden rounded-[1.35rem] border border-primary/10 bg-white p-4 sm:p-6">
            <div className="relative mx-auto aspect-[16/9] w-full max-w-[780px] rounded-2xl bg-[radial-gradient(circle_at_top_right,rgba(108,89,252,0.16),transparent_60%)]">
              <Image
                src="/svgs/School.png"
                alt="School leadership using RigorUp academic dashboard"
                fill
                className="object-contain"
                sizes="(min-width: 1280px) 780px, (min-width: 768px) 85vw, 95vw"
                priority
              />
            </div>
          </div>
        </motion.div>
      </section>

      <section
        aria-labelledby="school-help-heading"
        className="space-y-6 py-10 md:py-12"
      >
        <div className="space-y-2 text-center">
          <h2
            id="school-help-heading"
            className="text-2xl font-semibold tracking-tight text-ink sm:text-[2rem]"
          >
            What all <span className="text-primary">RigorUp helps schools with?</span>
          </h2>
          <p className="text-sm text-muted sm:text-[15px]">
            Critical capabilities to run stronger academic systems at scale.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {schoolPillars.map((title) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="flex min-h-[370px] items-start rounded-[1.35rem] border border-black/10 bg-page/50 p-5 shadow-[0_8px_22px_rgba(40,34,72,0.06)]"
              aria-label={`School support card: ${title}`}
            >
              <h3 className="text-sm font-medium uppercase tracking-wide text-primary-dark/90">
                {title}
              </h3>
            </motion.article>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="school-faq-heading"
        className="space-y-6 rounded-[2rem] bg-primary/[0.05] px-4 py-10 sm:px-6 md:px-8 md:py-12"
      >
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            FAQ
          </p>
          <h2
            id="school-faq-heading"
            className="text-balance text-2xl font-semibold tracking-tight text-ink sm:text-[2rem]"
          >
            Everything school teams ask before they <span className="text-primary">switch on RigorUp.</span>
          </h2>
          <p className="text-sm text-muted sm:text-[15px]">
            Quick answers for institutions evaluating the platform.
          </p>
        </div>

        <div className="space-y-3 rounded-[1.4rem] border border-black/8 bg-surface/90 p-3 shadow-[0_12px_30px_rgba(24,19,47,0.08)] sm:p-4">
          {schoolFaqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={item.question}
                className="overflow-hidden rounded-2xl border border-black/7 bg-page/50"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  aria-controls={`school-faq-panel-${index}`}
                  className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left transition-colors hover:bg-primary/[0.06] sm:px-5"
                  aria-label={`Toggle FAQ: ${item.question}`}
                >
                  <span className="text-sm font-semibold text-ink sm:text-[15px]">
                    {item.question}
                  </span>
                  <span
                    className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors ${
                      isOpen
                        ? "border-primary/25 bg-primary/10 text-primary"
                        : "border-black/15 bg-white text-ink"
                    }`}
                    aria-hidden="true"
                  >
                    {isOpen ? <CrossIcon /> : <PlusIcon />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      id={`school-faq-panel-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-4 pb-4 text-sm leading-relaxed text-muted sm:px-5 sm:text-[15px]">
                        {item.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </section>

      <section id="get-demo" className="py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto flex max-w-2xl flex-col items-center gap-5 rounded-[1.4rem] bg-primary-dark px-6 py-10 text-center text-white sm:px-8"
        >
          <h2 className="text-2xl font-semibold tracking-tight sm:text-[2rem]">
            Ready to scale predictable academic outcomes?
          </h2>
          <button
            type="button"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-primary px-5 py-2.5 text-xs font-semibold uppercase text-white shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark"
            aria-label="Book school demo now"
          >
            <span className="relative z-10">Book Demo Now</span>
            <span className="absolute inset-0 -z-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full" />
          </button>
        </motion.div>
      </section>
    </div>
  );
}

function PlusIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.001 5.00003V19.002" />
      <path d="M19.002 12.002L4.99998 12.002" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6L6.00081 17.9992M17.9992 18L6 6.00085" />
    </svg>
  );
}

