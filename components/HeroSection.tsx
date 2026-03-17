"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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
      className="grid items-center gap-10 py-12 md:grid-cols-[1.1fr_minmax(0,1fr)] md:py-20"
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
          AI-powered smart education platform for British curriculum
        </div>

        <div className="space-y-4">
          {/* <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
            RigorUp · Unlocking Academic Excellence
          </p> */}
          <h1
            id="hero-heading"
            className="text-balance text-2xl font-semibold tracking-tight text-ink sm:text-3xl lg:text-5xl leading-[1.1]"
          >
            <span className="block">Smart AI Analytics.</span>
            <span className="block">Personalized Learning.</span>
            <span className="block text-primary">Proven Results.</span>
          </h1>
        </div>

        <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          Empowering Schools, Teachers, and Students through a Smart AI
          Platform built for unlocking academic excellence and future-ready
          learners.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="#get-demo"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-transform transition-colors hover:-translate-y-0.5 hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-page"
            aria-label="Get a personalized demo of RigorUp"
          >
            Get Demo
          </Link>
          <p className="text-xs text-muted">
            Built for Schools, Institutes, Teachers & Students.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="relative mx-auto flex w-full max-w-md items-center justify-center"
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

