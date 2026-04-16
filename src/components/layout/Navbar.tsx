"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-black/[0.06] shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a
              href="#"
              className={`font-display text-xl font-bold transition-colors duration-300 ${
                scrolled ? "text-text-primary" : "text-white"
              }`}
            >
              FSZT
              <span
                className={`font-normal ml-1 transition-colors duration-300 ${
                  scrolled ? "text-text-muted" : "text-white/50"
                }`}
              >
                Partners
              </span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {["Process", "Services", "Labs", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    scrolled
                      ? "text-text-secondary hover:text-text-primary"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {item}
                </a>
              ))}
              <a
                href={`mailto:${SITE.email}`}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  scrolled
                    ? "bg-surface-dark text-white hover:bg-surface-dark/90"
                    : "bg-white text-surface-dark hover:bg-white/90"
                }`}
              >
                Get in Touch
              </a>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden transition-colors ${
                scrolled ? "text-text-primary" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-surface-darker/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
        >
          {["Process", "Services", "Labs", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileOpen(false)}
              className="font-display text-2xl font-semibold text-white hover:text-brand-cyan transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href={`mailto:${SITE.email}`}
            onClick={() => setMobileOpen(false)}
            className="mt-4 rounded-full bg-white px-8 py-3 text-base font-medium text-surface-dark"
          >
            Get in Touch
          </a>
        </motion.div>
      )}
    </>
  );
}
