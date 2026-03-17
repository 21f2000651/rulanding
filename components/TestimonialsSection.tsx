"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import type { KeyboardEvent } from "react";

type Review = {
  name: string;
  role: string;
  quote: string;
};

const teacherTestimonials: Review[] = [
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
  {
    name: "Dr. Sarah Mitchell",
    role: "Deputy Head, Cedar Grove Academy",
    quote:
      "The early warning system has transformed how we support struggling learners. We catch gaps in understanding before they become problems.",
  },
  {
    name: "Thomas Chen",
    role: "Science & Biology Teacher, Green Oaks Institute",
    quote:
      "Having transparent access to student performance data means I can personalize lessons better. Every student gets exactly what they need.",
  },
  {
    name: "Mrs. Lisa Patel",
    role: "English Department Lead, Brightfields Public School",
    quote:
      "Parents appreciate the weekly updates. Conversations with families are now proactive instead of reactive. Trust has improved dramatically.",
  },
];

const studentTestimonials: Review[] = [
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
      "Instead of being scared of report cards, I now track my progress every week. Small wins keep me motivated.I actually look forward to exams now.",
  },
  {
    name: "Aisha",
    role: "Grade 10 Student",
    quote:
      "The nudges help me stay on track without feeling overwhelming. I actually understand what I need to work on instead of just guessing.",
  },
  {
    name: "Marcus",
    role: "Grade 8 Student",
    quote:
      "I love seeing my progress visually. When I hit a goal, it's so satisfying. Makes me want to push even harder next week. It's like a game now.",
  },
  {
    name: "Priya",
    role: "Grade 12 Student",
    quote:
      "This has honestly changed how I approach studying. I'm strategic now instead of just cramming. My grades reflect the effort.",
  },
];

const marqueeSchools = [
  "Horizon International",
  "Northbridge High",
  "Cedar Grove Academy",
  "St. Mary's Collegiate",
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
      className="space-y-8 py-12 md:space-y-10 md:py-24"
    >
      <motion.div
        className="space-y-3"
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

      <div className="relative rounded-[2rem] bg-surface/92 p-4 shadow-[0_16px_45px_rgba(24,21,46,0.08)] ring-1 ring-black/7 sm:p-6">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(108,89,252,0.08),transparent_55%)]" />

        <div className="grid gap-6 md:grid-cols-2">
          <ReviewCarousel
            label="Teachers"
            reviews={teacherTestimonials}
            prefersReducedMotion={prefersReducedMotion}
            variant="teacher"
          />
          <ReviewCarousel
            label="Students"
            reviews={studentTestimonials}
            prefersReducedMotion={prefersReducedMotion}
            variant="student"
          />
        </div>

        <SchoolMarquee marqueeSchools={marqueeSchools} prefersReducedMotion={prefersReducedMotion} />
      </div>
    </section>
  );
}

type ReviewCarouselProps = {
  label: string;
  reviews: Review[];
  prefersReducedMotion: boolean | null;
  variant: "teacher" | "student";
};

function ReviewCarousel({
  label,
  reviews,
  prefersReducedMotion,
  variant,
}: ReviewCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const reduceMotion = Boolean(prefersReducedMotion);

  const transitionDuration = reduceMotion ? 0 : 0.44;
  const currentReview = useMemo(() => reviews[activeIndex], [reviews, activeIndex]);
  const totalReviews = reviews.length;
  const labelSlug = label.toLowerCase();
  const isStudent = variant === "student";

  useEffect(() => {
    if (reduceMotion || isPaused || totalReviews <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % totalReviews);
    }, 5400);

    return () => window.clearInterval(timer);
  }, [isPaused, reduceMotion, totalReviews]);

  const moveToPrevious = () => {
    if (activeIndex === 0) {
      return;
    }
    setActiveIndex((current) => current - 1);
  };

  const moveToNext = () => {
    if (activeIndex === totalReviews - 1) {
      return;
    }
    setActiveIndex((current) => current + 1);
  };

  const handleCarouselKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      moveToPrevious();
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      moveToNext();
    }
  };

  return (
    <div
      className={`relative overflow-hidden rounded-[1.4rem] p-3 ring-1 sm:p-4 ${
        isStudent
          ? "bg-gradient-to-b from-primary/8 to-surface ring-primary/18"
          : "bg-gradient-to-b from-surface to-page/45 ring-black/8"
      }`}
      tabIndex={0}
      role="region"
      aria-label={`${label} reviews carousel`}
      onKeyDown={handleCarouselKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="mb-4 flex items-center justify-between">
        <h3
          className={`inline-flex items-center rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] ${
            isStudent
              ? "bg-primary/10 text-primary ring-1 ring-primary/20"
              : "bg-surface text-muted ring-1 ring-black/10"
          }`}
        >
          {label}
        </h3>
      </div>

      <div className="relative min-h-[280px] pb-6 pt-6 sm:min-h-[300px]">
        <div className="pointer-events-none absolute left-1/2 top-1 h-[72%] w-[91%] -translate-x-1/2 rounded-[1rem] border border-black/8 bg-surface/65" />
        <div className="pointer-events-none absolute left-1/2 top-3.5 h-[72%] w-[95%] -translate-x-1/2 rounded-[1rem] border border-black/7 bg-surface/72" />
        <div className="pointer-events-none absolute left-1/2 top-6 h-[72%] w-[99%] -translate-x-1/2 rounded-[1rem] border border-black/6 bg-surface/78" />

        <motion.figure
          key={`${label}-${activeIndex}`}
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 14, scale: 0.99 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: transitionDuration, ease: "easeOut" }}
          className="relative rounded-[1rem] border border-black/10 bg-surface p-4 shadow-[0_12px_26px_rgba(17,15,34,0.09)] sm:p-5"
        >
          <blockquote className="text-sm leading-relaxed text-ink/85 sm:text-[0.98rem]">
            &ldquo;{currentReview.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-4 border-t border-black/10 pt-3">
            <p className="text-[1.02rem] font-semibold text-ink">{currentReview.name}</p>
            <p className="mt-0.5 text-sm text-muted">{currentReview.role}</p>
          </figcaption>
        </motion.figure>
      </div>

      <div className="flex items-center justify-center gap-3 pt-6">
        <button
          type="button"
          onClick={moveToPrevious}
          aria-label={`Previous ${labelSlug} review`}
          disabled={activeIndex === 0}
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-surface text-muted transition-colors hover:bg-page disabled:cursor-not-allowed disabled:opacity-45"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div className="flex items-center gap-1.5">
          {reviews.map((item, index) => (
            <button
              key={`${label}-${item.name}-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to ${labelSlug} review ${index + 1}`}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex
                  ? "w-7 bg-primary"
                  : "w-2 bg-primary/25 hover:bg-primary/40"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={moveToNext}
          aria-label={`Next ${labelSlug} review`}
          disabled={activeIndex === totalReviews - 1}
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-surface text-muted transition-colors hover:bg-page disabled:cursor-not-allowed disabled:opacity-45"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}

type SchoolMarqueeProps = {
  marqueeSchools: string[];
  prefersReducedMotion: boolean | null;
};

function SchoolMarquee({ marqueeSchools, prefersReducedMotion }: SchoolMarqueeProps) {
  const reduceMotion = Boolean(prefersReducedMotion);

  return (
    <div aria-label="Schools partnering with RigorUp" className="mt-8 space-y-3 border-t border-primary/15 pt-6">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
        Trusted by progressive schools
      </p>
      <div className="relative overflow-hidden py-2">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-page via-page/75 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-page via-page/75 to-transparent" />

        {reduceMotion ? (
          <div className="flex flex-wrap gap-6 px-2">
            {marqueeSchools.map((name) => (
              <span
                key={name}
                className="text-xs font-bold uppercase tracking-widest text-ink/75 transition-colors duration-300 hover:text-primary cursor-pointer"
              >
                {name}
              </span>
            ))}
          </div>
        ) : (
          <motion.div
            className="flex min-w-max gap-6 px-2"
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
              <span
                key={`${name}-${index}`}
                className="shrink-0 text-xs font-bold uppercase tracking-widest text-ink/75 transition-colors duration-300 cursor-pointer hover:text-primary"
              >
                {name}
              </span>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}

