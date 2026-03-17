"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const navItems = [
  { href: "#story", label: "The Story" },
  { href: "#dashboards", label: "Dashboards" },
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
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-full px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-page"
          aria-label="RigorUp home"
        >
          {/* <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-primary text-sm font-semibold text-white shadow-sm">
            RU
          </div> */}
          <Image src="/logo.svg" alt="RigorUp logo" width={20} height={20} />
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
              className="transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-page"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="#get-demo"
            className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition-transform transition-colors hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-page"
            aria-label="Get a demo of RigorUp"
          >
            Get Demo
          </Link>
        </div>
      </div>
    </motion.header>
  );
}

