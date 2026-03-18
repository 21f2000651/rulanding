"use client";

import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const navItems = [
  { href: "#story", label: "The Problem" },
  { href: "#dashboards", label: "Our Solution" },
  { href: "#impact", label: "Impact" },
  { href: "#partners", label: "Partners" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 80);
  });

  const isFloating = scrolled;

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`sticky top-0 z-30 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isFloating
          ? "bg-transparent border-b border-transparent py-2"
          : "border-b border-white/40 bg-page/70 backdrop-blur-xl"
      }`}
      aria-label="RigorUp primary navigation"
    >
      <div
        className={`mx-auto flex ${isFloating ? '' : 'max-w-6xl'} items-center justify-between px-4 py-2 sm:px-6 lg:px-8 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]`}
      >
        {/* Logo + Brand */}
        <motion.div
          layout
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href="/"
            className={`no-link-underline flex items-center gap-2 rounded-full px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-page transition-all duration-500`}
            aria-label="RigorUp home"
          >
            <Image src="/logo.svg" alt="RigorUp logo" width={16} height={16} />
            <div className="flex flex-col leading-tight">
              <span className="text-base font-semibold tracking-tight text-ink">
                RigorUp
              </span>
              <span className="text-[11px] font-medium text-muted">
                Unlocking Academic Excellence
              </span>
            </div>
          </Link>
        </motion.div>

        {/* Nav Links — centered pill when floating */}
        <motion.nav
          layout
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className={`hidden items-center gap-6 text-sm font-medium text-muted md:flex transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isFloating
              ? "rounded-full bg-white/95 backdrop-blur-md px-6 py-2.5 shadow-[0_2px_20px_rgba(0,0,0,0.08)] ring-1 ring-black/[0.06]"
              : ""
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-page uppercase tracking-wide text-xs font-semibold"
            >
              {item.label}
            </Link>
          ))}
        </motion.nav>

        {/* CTA Button */}
        <motion.div
          layout
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-2"
        >
          <button
            onClick={() => document.getElementById("get-demo")?.scrollIntoView({ behavior: "smooth" })}
            className={`group relative inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-white transition-all duration-500 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-page overflow-hidden text-xs ${
              isFloating
                ? "bg-primary shadow-none"
                : "bg-primary shadow-sm"
            }`}
            aria-label="Get a demo of RigorUp"
          >
            <span className="relative z-10 uppercase">Book Demo</span>
            <span className="absolute inset-0 -z-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
          </button>
        </motion.div>
      </div>
    </motion.header>
  );
}
