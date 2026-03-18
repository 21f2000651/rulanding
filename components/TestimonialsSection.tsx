"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

type Review = {
  name: string;
  role: string;
  quote: string;
  audience: "teacher" | "student";
};

const allTestimonials: Review[] = [
  {
    name: "Ananya Rao",
    role: "Mathematics Teacher, Horizon International School",
    quote:
      "RigorUp finally gave us a live view of our academic year. We now intervene in September instead of apologising in March.",
    audience: "teacher",
  },
  {
    name: "Ishita",
    role: "Grade 9 Student",
    quote:
      "My dashboard shows exactly what I should revise today. It feels like having a quiet coach that knows how I actually learn.",
    audience: "student",
  },
  {
    name: "James Carter",
    role: "Mathematics Teacher, Northbridge High",
    quote:
      "The platform has taken admin off my plate. I spend my evenings planning creative lessons, not grading piles of papers.",
    audience: "teacher",
  },
  {
    name: "Rahul",
    role: "Grade 11 Student",
    quote:
      "Instead of being scared of report cards, I now track my progress every week. Small wins keep me motivated.",
    audience: "student",
  },
  {
    name: "Aisha",
    role: "Grade 10 Student",
    quote:
      "The nudges help me stay on track without feeling overwhelming. I actually understand what I need to work on instead of guessing.",
    audience: "student",
  },
  {
    name: "Thomas Chen",
    role: "Science & Biology Teacher, Green Oaks Institute",
    quote:
      "Having transparent access to student performance data means I can personalize lessons better. Every student gets what they need.",
    audience: "teacher",
  },
  {
    name: "Priya",
    role: "Grade 12 Student",
    quote:
      "This has honestly changed how I approach studying. I am strategic now instead of just cramming, and my grades reflect the effort.",
    audience: "student",
  },
  {
    name: "Mrs. Lisa Patel",
    role: "English Teacher, Brightfields Public School",
    quote:
      "Parents appreciate the weekly updates. Conversations with families are now proactive instead of reactive. Trust has improved dramatically.",
    audience: "teacher",
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

      {/* Testimonial Cards Grid — 4 columns × 2 rows */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {allTestimonials.map((review, index) => (
          <TestimonialCard
            key={review.name}
            review={review}
            index={index}
            prefersReducedMotion={prefersReducedMotion}
          />
        ))}
      </div>
      {/* Trusted Schools Marquee */}
      <SchoolMarquee marqueeSchools={marqueeSchools} prefersReducedMotion={prefersReducedMotion} />
    </section>
  );
}

type TestimonialCardProps = {
  review: Review;
  index: number;
  prefersReducedMotion: boolean | null;
};

function TestimonialCard({ review, index, prefersReducedMotion }: TestimonialCardProps) {
  const reduceMotion = Boolean(prefersReducedMotion);
  const isTeacher = review.audience === "teacher";

  return (
    <motion.figure
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay: reduceMotion ? 0 : index * 0.06 }}
      whileHover={reduceMotion ? {} : { y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
      className={`relative overflow-hidden rounded-2xl p-5 ${
        isTeacher
          ? "bg-gradient-to-br from-primary-dark to-primary/90 text-white"
          : "bg-gradient-to-br from-primary-light/50 to-primary-light/25 text-ink"
      }`}
      aria-label={`Testimonial from ${review.name}`}
    >
      {/* Star SVG — top left, partially clipped */}
      <div className="pointer-events-none absolute -left-5 -top-5 h-16 w-16 opacity-20">
        <Image
          src="/svgs/star.svg"
          alt=""
          width={64}
          height={64}
          className={isTeacher ? "brightness-200" : "brightness-75"}
          aria-hidden="true"
        />
      </div>

      {/* Star SVG — bottom right, partially clipped */}
      <div className="pointer-events-none absolute -bottom-5 -right-5 h-16 w-16 opacity-15">
        <Image
          src="/svgs/star.svg"
          alt=""
          width={64}
          height={64}
          className={isTeacher ? "brightness-200" : "brightness-75"}
          aria-hidden="true"
        />
      </div>

      <blockquote className={`relative z-10 text-sm leading-relaxed ${
        isTeacher ? "text-white/90" : "text-ink/85"
      }`}>
        &ldquo;{review.quote}&rdquo;
      </blockquote>

      <figcaption className={`relative z-10 mt-4 border-t pt-3 ${
        isTeacher ? "border-white/20" : "border-primary/15"
      }`}>
        <p className={`text-sm font-semibold ${isTeacher ? "text-white" : "text-ink"}`}>
          {review.name}
        </p>
        <p className={`mt-0.5 text-xs ${isTeacher ? "text-white/70" : "text-muted"}`}>
          {review.role}
        </p>
      </figcaption>
    </motion.figure>
  );
}

type SchoolMarqueeProps = {
  marqueeSchools: string[];
  prefersReducedMotion: boolean | null;
};

function SchoolMarquee({ marqueeSchools, prefersReducedMotion }: SchoolMarqueeProps) {
  const reduceMotion = Boolean(prefersReducedMotion);

  return (
    <div aria-label="Schools partnering with RigorUp" className="space-y-3">
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
