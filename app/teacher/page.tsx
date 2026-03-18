"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const teacherPillars = [
  "AUTOMATED ASSESSMENTS",
  "CLASSROOM ANALYTICS",
  "LESSON PLANNING SUPPORT",
];

const teacherFaqs = [
  {
    question: "How much teacher time can RigorUp save every week?",
    answer:
      "Most teachers save 8–12 hours weekly by reducing manual grading, repetitive tracking, and report preparation through AI-powered workflows.",
  },
  {
    question: "Can I still teach using my own classroom style?",
    answer:
      "Yes. RigorUp supports your existing pedagogy and provides insights, suggestions, and automation without forcing a rigid teaching template.",
  },
  {
    question: "Does RigorUp help identify weak concepts early?",
    answer:
      "Absolutely. Concept-level analytics highlight where students are struggling so interventions can happen before gaps become performance drops.",
  },
  {
    question: "Can I generate worksheets and quick checks instantly?",
    answer:
      "Yes. Teachers can generate differentiated worksheets, formative checks, and review prompts in minutes aligned to current classroom progress.",
  },
  {
    question: "How does this improve parent communication?",
    answer:
      "RigorUp prepares clear progress snapshots and action-ready notes so teacher-parent communication stays focused, timely, and constructive.",
  },
];

export default function TeacherPage() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col px-4 pb-16 pt-8 sm:px-6 md:pb-20 lg:px-8">
      <section
        aria-labelledby="teacher-hero-heading"
        className="flex flex-col items-center gap-7 py-7 text-center md:gap-8 md:py-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-3"
        >
          <h1
            id="teacher-hero-heading"
            className="text-balance text-[2rem] font-semibold tracking-tight text-ink sm:text-[2.5rem] md:text-[2.85rem] md:leading-[1.1]"
          >
            AI-Powered Smart
            <span className="block text-primary">Teaching Assistant</span>
          </h1>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted sm:text-[15px]">
            Helping teachers reclaim time, reduce academic workload, and focus
            deeply on instruction with intelligent classroom support.
          </p>
        </motion.div>

        <button
          onClick={() =>
            document
              .getElementById("get-demo")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-primary px-5 py-2.5 text-xs font-semibold uppercase text-white shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-page"
          aria-label="Get demo for teacher platform"
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
                src="/svgs/Teacher.png"
                alt="Teacher using RigorUp classroom assistant"
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
        aria-labelledby="teacher-help-heading"
        className="space-y-6 py-10 md:py-12"
      >
        <div className="space-y-2 text-center">
          <h2
            id="teacher-help-heading"
            className="text-2xl font-semibold tracking-tight text-ink sm:text-[2rem]"
          >
            What all <span className="text-primary">RigorUp helps teachers with?</span>
          </h2>
          <p className="text-sm text-muted sm:text-[15px]">
            Essential tools for better teaching outcomes under one platform.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {teacherPillars.map((title) => (
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
        aria-labelledby="teacher-faq-heading"
        className="space-y-6 rounded-[2rem] bg-primary/[0.05] px-4 py-10 sm:px-6 md:px-8 md:py-12"
      >
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            FAQ
          </p>
          <h2
            id="teacher-faq-heading"
            className="text-balance text-2xl font-semibold tracking-tight text-ink sm:text-[2rem]"
          >
            Everything teachers ask before they <span className="text-primary">switch on RigorUp.</span>
          </h2>
          <p className="text-sm text-muted sm:text-[15px]">
            Quick answers for educators evaluating the platform.
          </p>
        </div>

        <div className="space-y-3 rounded-[1.4rem] border border-black/8 bg-surface/90 p-3 shadow-[0_12px_30px_rgba(24,19,47,0.08)] sm:p-4">
          {teacherFaqs.map((item, index) => {
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
                  aria-controls={`teacher-faq-panel-${index}`}
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
                      id={`teacher-faq-panel-${index}`}
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
            Ready to lighten your teaching workload?
          </h2>
          <button
            type="button"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-primary px-5 py-2.5 text-xs font-semibold uppercase text-white shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark"
            aria-label="Book teacher demo now"
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

