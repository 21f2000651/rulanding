"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.1 },
  },
};

export function HeroSection() {
  return (
    <section
      className="grid items-center gap-8 md:grid-cols-[1fr_minmax(0,1.1fr)]  w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24"
      aria-labelledby="hero-heading"
    >
      <motion.div
        className="space-y-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-surface/80 px-3 py-1 text-xs font-medium text-muted shadow-sm ring-1 ring-black/5">
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
          AI-powered smart education for British curriculum
        </div>

        <div className="space-y-4">
          {/* <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
            RigorUp · Unlocking Academic Excellence
          </p> */}
          <h1
            id="hero-heading"
            className="text-balance text-[1.65rem] font-semibold tracking-[-0.03em] text-ink sm:text-[2rem] lg:text-[2.75rem] leading-[1.12]"
          >
            <span className="block">Smart AI Analytics.</span>
            <span className="block">Personalized Learning.</span>
            <span className="block text-primary">Proven Results.</span>
          </h1>
        </div>

        <p className="max-w-[520px] text-[17px] leading-[1.78] tracking-[0.004em] text-muted sm:text-[18px]">
          Empowering Schools, Teachers, and Students through a Smart AI
          Platform built for unlocking academic excellence and future-ready
          learners.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={() => document.getElementById("get-demo")?.scrollIntoView({ behavior: "smooth" })}
            className="group relative inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-page overflow-hidden uppercase"
            aria-label="Get a personalized demo of RigorUp"
          >
            <span className="relative z-10">Book Demo</span>
            <span className="absolute inset-0 -z-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
          </button>
          <p className="text-xs text-muted">
            Built for Schools, Institutes, Teachers & Students.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="relative mx-auto flex w-full max-w-[520px] items-center justify-center"
        initial="hidden"
        animate="visible"
        variants={imageVariants}
      >
        <div className="absolute inset-6 -z-10 rounded-[3rem] bg-primary-light/40 blur-3xl" />
        <div className="relative overflow-hidden rounded-[2.5rem]">
          <Image
            src="/svgs/Graduation.png"
            // src="/svgs/herotry.svg"
            alt="A student celebrating graduation, representing successful learning outcomes with RigorUp"
            width={480}
            height={480}
            className="h-auto w-full"
            priority
            sizes="(min-width: 1024px) 420px, (min-width: 640px) 360px, 280px"
          />
        </div>
      </motion.div>
    </section>
  );
}

