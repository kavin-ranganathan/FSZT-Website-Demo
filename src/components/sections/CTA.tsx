"use client";

import { motion } from "framer-motion";
import { CTA_SECTION, SITE } from "@/lib/constants";
import { scaleIn } from "@/lib/animation-variants";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative py-28 md:py-40 bg-surface-darker overflow-hidden"
    >
      {/* Gradient orb */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-purple/[0.06] blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight text-balance mb-6"
        >
          {CTA_SECTION.headline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-lg md:text-xl text-white/40 leading-relaxed mb-10 max-w-xl mx-auto"
        >
          {CTA_SECTION.subtext}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href={`mailto:${SITE.email}`} size="lg">
            Get in Touch
          </Button>
          <a
            href={`mailto:${SITE.email}`}
            className="text-brand-cyan/80 hover:text-brand-cyan transition-colors text-base font-medium"
          >
            {SITE.email}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
