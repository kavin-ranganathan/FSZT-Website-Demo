"use client";

import { motion } from "framer-motion";
import { Heart, Film, GraduationCap } from "lucide-react";
import { DOMAINS } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animation-variants";
import FadeInUp from "@/components/animations/FadeInUp";
import SectionHeading from "@/components/ui/SectionHeading";

const icons = [Heart, Film, GraduationCap];
const colors = ["#3AE5FF", "#8F6BFF", "#F3C98B"];

export default function Domains() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeInUp>
          <SectionHeading
            overline="Domain Focus"
            title="Where We Go Deep"
            subtitle="Deep vertical expertise in industries where AI creates transformative value."
            className="mb-16"
          />
        </FadeInUp>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {DOMAINS.map((domain, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={domain}
                variants={fadeInUp}
                className="group relative text-center py-12 px-8 rounded-2xl hover:bg-surface-off transition-colors duration-300"
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 h-[3px] w-0 group-hover:w-16 transition-all duration-500 rounded-full"
                  style={{ backgroundColor: colors[i] }}
                />

                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
                  style={{ backgroundColor: `${colors[i]}08` }}
                >
                  <Icon size={28} style={{ color: colors[i] }} />
                </div>

                <h3 className="font-display text-xl font-semibold text-text-primary">
                  {domain}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
