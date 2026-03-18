"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const navItems = [
  { href: "#story", label: "The Problem" },
  { href: "#dashboards", label: "Our Solution" },
  { href: "#impact", label: "Impact" },
  { href: "#partners", label: "Partners" },
];

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-30 border-b border-white/40 bg-page/70 backdrop-blur-xl"
      aria-label="RigorUp primary navigation"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="no-link-underline flex items-center gap-2 rounded-full px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-page"
          aria-label="RigorUp home"
        >
          {/* <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-primary text-sm font-semibold text-white shadow-sm">
            RU
          </div> */}
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

        <nav className="hidden items-center gap-8 text-sm font-medium text-muted md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-page uppercase tracking-wide text-xs font-semibold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => document.getElementById("get-demo")?.scrollIntoView({ behavior: "smooth" })}
            className="group relative inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-page overflow-hidden text-xs"
            aria-label="Get a demo of RigorUp"
          >
            <span className="relative z-10 uppercase">Book Demo</span>
            <span className="absolute inset-0 -z-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
          </button>
        </div>
      </div>
    </motion.header>
  );
}

