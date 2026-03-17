"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "How quickly can we launch RigorUp in our school?",
    answer:
      "Most institutions go live in 2-4 weeks with role-based onboarding for leadership, teachers, and learners. We handle setup, migration guidance, and milestone check-ins.",
  },
  {
    question: "Will teachers need to change their existing workflow?",
    answer:
      "No full reset required. RigorUp layers into your current process and automates the repetitive admin tasks so teachers can focus on planning and student support.",
  },
  {
    question: "Can students get truly personalized practice plans?",
    answer:
      "Yes. Students receive weekly pathways based on concept mastery, pace, and confidence markers. The system adapts continuously as they improve.",
  },
  {
    question: "What does school leadership see in the dashboard?",
    answer:
      "Leadership gets cohort trends, risk alerts, and campus-level performance snapshots with drill-down views for classes, subjects, and intervention outcomes.",
  },
  {
    question: "How does RigorUp support parents and communication?",
    answer:
      "RigorUp generates structured progress summaries that make parent conversations proactive and transparent, with clear goals and measurable next steps.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="space-y-6 py-12 md:space-y-8 md:py-24"
    >
      <motion.div
        className="space-y-3"
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
          FAQ
        </p>
        <h2
          id="faq-heading"
          className="text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
        >
          Everything teams ask before they <span className="text-primary">switch on RigorUp.</span>
        </h2>
        <p className="max-w-3xl text-sm leading-relaxed text-muted sm:text-[15px]">
          Quick answers for school leaders, teachers, and students evaluating the platform.
        </p>
      </motion.div>

      <div className="relative overflow-hidden rounded-[2rem] border border-black/6 bg-surface/92 p-4 shadow-[0_14px_40px_rgba(22,18,46,0.08)] sm:p-6">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(108,89,252,0.16),transparent_72%)]" />
        <div className="relative space-y-3">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.article
                key={item.question}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
                className="rounded-2xl border border-black/8 bg-page/55 backdrop-blur-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition-colors hover:bg-primary/[0.06] sm:px-5"
                >
                  <span className="text-[15px] font-semibold text-ink sm:text-base">{item.question}</span>
                  <span
                    className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                      isOpen
                        ? "border-primary/30 bg-primary/12 text-primary"
                        : "border-black/15 bg-surface/90 text-ink"
                    }`}
                    aria-hidden
                  >
                    {isOpen ? <CrossIcon /> : <PlusIcon />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      id={`faq-panel-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-4 pt-1 pb-3 text-sm leading-relaxed text-muted sm:px-5 sm:pb-5 sm:text-[15px]">
                        {item.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PlusIcon() {
  return (
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
      width="18"
      height="18"
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
