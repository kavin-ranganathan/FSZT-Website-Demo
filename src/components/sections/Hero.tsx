"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { HERO, SITE } from "@/lib/constants";
import { wordReveal, staggerContainer } from "@/lib/animation-variants";
import Button from "@/components/ui/Button";
import ParticleGrid from "@/components/ui/ParticleGrid";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function Hero() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const words = HERO.headline.split(" ");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-surface-darker">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-80"
        >
          <source src="/AI_Motion_Graphics_Video_Generation.mp4" type="video/mp4" />
        </video>
        {/* Edge fade overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#050508_80%)]" />
      </div>

      {/* Particle grid — desktop only, layered on top */}
      {isDesktop && (
        <div className="absolute inset-0 mix-blend-screen opacity-40">
          <ParticleGrid />
        </div>
      )}

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(58,229,255,0.06)_0%,transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Overline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-brand-cyan mb-8"
        >
          {HERO.overline}
        </motion.p>

        {/* Headline — word by word reveal */}
        <motion.h1
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="font-display font-bold tracking-tight text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05]"
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={wordReveal}
              className="inline-block mr-[0.3em] gradient-text animate-gradient-shift"
              style={{ backgroundSize: "200% auto" }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-white/50 leading-relaxed"
        >
          {HERO.subtitle}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.3, ease: [0.34, 1.56, 0.64, 1] }}
          className="mt-10"
        >
          <Button href={`mailto:${SITE.email}`} size="lg">
            {HERO.cta}
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-white/20" size={28} />
        </motion.div>
      </motion.div>
    </section>
  );
}
