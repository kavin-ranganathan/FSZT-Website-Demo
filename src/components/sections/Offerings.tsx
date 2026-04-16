"use client";

import { motion } from "framer-motion";
import { FileText, GraduationCap, FlaskConical, Rocket } from "lucide-react";
import { OFFERINGS } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animation-variants";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import FadeInUp from "@/components/animations/FadeInUp";

const iconMap = {
  FileText,
  GraduationCap,
  FlaskConical,
  Rocket,
} as const;

const accentColors = ["#3AE5FF", "#8F6BFF", "#F25CC1", "#F3C98B"];

export default function Offerings() {
  return (
    <section id="services" className="py-24 md:py-32 bg-surface-off">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeInUp>
          <SectionHeading
            overline="What We Offer"
            title="Capability, Not Commentary"
            subtitle="End-to-end AI transformation across content, education, products, and embedded consulting."
            className="mb-16"
          />
        </FadeInUp>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {OFFERINGS.map((offering, i) => {
            const Icon = iconMap[offering.icon];
            return (
              <motion.div key={offering.title} variants={fadeInUp}>
                <Card className="h-full">
                  <div
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5"
                    style={{
                      backgroundColor: `${accentColors[i]}10`,
                    }}
                  >
                    <Icon
                      size={24}
                      style={{ color: accentColors[i] }}
                    />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-text-primary mb-3">
                    {offering.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {offering.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
