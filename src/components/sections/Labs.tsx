"use client";

import { motion } from "framer-motion";
import { LABS_PRODUCTS } from "@/lib/constants";
import { fadeInUp } from "@/lib/animation-variants";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import TypewriterText from "@/components/ui/TypewriterText";
import FadeInUp from "@/components/animations/FadeInUp";

export default function Labs() {
  return (
    <section id="labs" className="relative py-24 md:py-32 bg-surface-dark overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(58,229,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(58,229,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: info */}
          <FadeInUp>
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan mb-4">
                FSZT Labs
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                <AnimatedCounter target={7} suffix="+" className="gradient-text" />
                {" "}
                <span className="text-white">AI Products</span>
              </h2>
              <p className="text-lg text-white/50 leading-relaxed mb-8">
                We build AI-native products&mdash;not vaporware. Systems that
                run in production, delivering results 24/7.
              </p>

              {/* Typewriter showcase */}
              <div className="font-display text-2xl md:text-3xl font-semibold text-white h-12">
                <TypewriterText
                  words={LABS_PRODUCTS}
                  typingSpeed={70}
                  deletingSpeed={35}
                  pauseDuration={1800}
                />
              </div>
            </div>
          </FadeInUp>

          {/* Right: product list */}
          <motion.div
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-4"
          >
            {LABS_PRODUCTS.map((product, i) => (
              <motion.div
                key={product}
                variants={fadeInUp}
                className="group flex items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] px-6 py-4 hover:border-brand-cyan/20 hover:bg-white/[0.04] transition-all duration-300"
              >
                <span className="font-display text-sm font-semibold text-brand-cyan/40 w-8">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-white/80 group-hover:text-white transition-colors font-medium">
                  {product}
                </span>
                <div className="ml-auto h-[2px] w-0 group-hover:w-8 bg-brand-cyan/40 transition-all duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
