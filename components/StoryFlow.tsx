"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stages = [
  {
    id: "01",
    title: "The Hook",
    label: "For Parents & School Leaders",
    image: "/svgs/School.png",
    alt: "Students walking towards school, representing trust placed in institutions",
    body: [
      "Parents don’t just send their children to school for grades; they send them there for a future.",
      "Parents trust schools to make their children future-ready and globally competitive. They are looking for more than just literacy; they want their child to thrive in a rapidly evolving world.",
      "But here’s the uncomfortable truth: Schools cannot guarantee success. They provide the curriculum, but they can’t promise the outcome once the final bell rings. Why is there such a massive disconnect between the effort put in and the results achieved?",
    ],
  },
  {
    id: "02",
    title: "The Fact",
    label: "Visibility & Predictive Insight",
    image: "/svgs/Performance Evaluation 3.png",
    alt: "Educator reviewing performance dashboards, symbolizing predictive analytics",
    body: [
      "You can’t fix what you can’t see.",
      "Most schools operate in the dark, with no real-time visibility into how the academic year will actually end. They lack the analytical tools to see where a student is stumbling or where a teacher needs support before the final exam.",
      "It’s like trying to navigate a ship without a compass—you only realize you’re off course when you hit the rocks.",
    ],
  },
  {
    id: "03",
    title: "The Connection",
    label: "Honouring Teacher Craft",
    image: "/svgs/Overworked .png",
    alt: "Teacher overwhelmed with paperwork at a desk",
    body: [
      "We value teachers, but we drown them in paperwork.",
      "In a room of 50 students and only one teacher, individualized attention becomes a luxury. A teacher’s true gift is their pedagogical artistry—the ability to spark curiosity and mentor a soul.",
      "Unfortunately, that magic is being suffocated. Teachers spend the vast majority of their time on administrative drudgery: grading papers, creating assignments, and managing logistics. There’s no room left for the human connection that actually drives learning.",
    ],
  },
  {
    id: "04",
    title: "The Reality",
    label: "Every Learner is Unique",
    image: "/svgs/Busy 1.png",
    alt: "Student surrounded by tasks and notifications, needing personalized support",
    body: [
      "Education is currently one size fits none.",
      "Every child is a unique ecosystem of strengths and weaknesses. By nature, students have diverse cognitive profiles. One might be a visual genius; another might need kinesthetic practice.",
      "To truly excel, every student needs a personalized learning companion—someone (or something) that understands their pace and adapts to their needs.",
    ],
  },
];

export function StoryFlow() {
  return (
    <section
      id="story"
      aria-labelledby="story-heading"
      className="space-y-10 py-12 md:py-16"
    >
        <motion.div
          className="space-y-4 text-center md:text-left"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
          The RigorUp Story
        </p>
        <h2
          id="story-heading"
          className="text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
        >
          From hidden gaps to{" "}
          <span className="text-primary">measurable academic excellence.</span>
        </h2>
        <p className="max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
          We designed RigorUp around the real journey of a school year—what
          parents expect, what educators experience, and what students actually
          need. Follow the story that shaped our platform.
        </p>
        </motion.div>

      <div className="relative">
        <div className="pointer-events-none absolute left-1/2 top-0 z-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-primary/10 via-primary/30 to-primary/0 md:block" />

        <div className="relative z-10 space-y-10">
          {stages.map((stage, index) => {
            const isEven = index % 2 === 1;
            return (
              <motion.article
                key={stage.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`grid gap-6 rounded-3xl bg-surface/90 p-6 shadow-sm ring-1 ring-black/5 sm:p-8 md:grid-cols-2 ${
                  isEven ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="flex flex-col gap-4">
                  <div className="inline-flex items-center gap-3">
                    {/* <span className="inline-flex h-7 rounded-full bg-primary/10 px-3 text-xs font-semibold uppercase tracking-wide text-primary">
                      {stage.id} · {stage.title}
                    </span> */}
                    <span className="inline-flex h-7 rounded-full bg-primary/10 px-3 text-xs font-semibold uppercase tracking-wide text-primary py-1.5">
                      {stage.label}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                    {stage.title}
                  </h3>
                  <div className="space-y-3 text-sm leading-relaxed text-muted sm:text-[15px]">
                    {stage.body.map((paragraph) => (
                      <p key={paragraph.slice(0, 20)}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                <div className="relative flex items-center">
                  <div className="absolute inset-4 -z-10 rounded-[2.25rem] bg-primary-light/35 blur-2xl" />
                  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[2rem] bg-page shadow-lg shadow-primary/15 ring-1 ring-black/5">
                    <Image
                      src={stage.image}
                      alt={stage.alt}
                      fill
                      className="object-contain p-5"
                      sizes="(min-width: 1024px) 440px, (min-width: 640px) 360px, 320px"
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

