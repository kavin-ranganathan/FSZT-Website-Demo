"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeInUp } from "@/lib/animation-variants";

function ProcessPanel({
  step,
}: {
  step: (typeof PROCESS_STEPS)[number];
}) {
  return (
    <div className="process-panel flex-shrink-0 w-screen h-screen flex items-center justify-center px-6">
      <div className="max-w-xl">
        <div
          className="font-display text-[8rem] md:text-[10rem] font-bold leading-none mb-6"
          style={{ color: step.hex, opacity: 0.15 }}
        >
          {step.number}
        </div>
        <h3 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
          {step.title}
          <span style={{ color: step.hex }}>.</span>
        </h3>
        <p className="text-lg md:text-xl text-white/50 leading-relaxed max-w-md">
          {step.description}
        </p>
        <div
          className="mt-8 h-[2px] w-16"
          style={{ backgroundColor: step.hex }}
        />
      </div>
    </div>
  );
}

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelWrapperRef = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isDesktop || !mounted || typeof window === "undefined") return;

    let cleanup: (() => void) | undefined;

    // Small delay to ensure DOM is ready
    const timer = setTimeout(async () => {
      const { gsap, ScrollTrigger } = await import("@/lib/gsap-config");

      const wrapper = panelWrapperRef.current;
      const panels = gsap.utils.toArray<HTMLElement>(".process-panel");
      if (!wrapper || panels.length === 0) return;

      const totalWidth = wrapper.scrollWidth;

      const tween = gsap.to(wrapper, {
        x: () => -(totalWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          end: () => "+=" + totalWidth,
          invalidateOnRefresh: true,
        },
      });

      cleanup = () => {
        tween.kill();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    }, 100);

    return () => {
      clearTimeout(timer);
      cleanup?.();
    };
  }, [isDesktop, mounted]);

  // Mobile: vertical stack (also initial SSR render)
  if (!mounted || !isDesktop) {
    return (
      <section id="process" className="py-20 bg-surface-dark">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            overline="How We Work"
            title="The 4D&rsquo;s"
            subtitle="Big consultancies bring armies. We bring precision strikes."
            dark
            className="mb-16"
          />
          <div className="space-y-16">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1 }}
                className="max-w-md mx-auto"
              >
                <div
                  className="font-display text-6xl font-bold leading-none mb-4"
                  style={{ color: step.hex, opacity: 0.2 }}
                >
                  {step.number}
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-3">
                  {step.title}
                  <span style={{ color: step.hex }}>.</span>
                </h3>
                <p className="text-base text-white/50 leading-relaxed">
                  {step.description}
                </p>
                <div
                  className="mt-5 h-[2px] w-12"
                  style={{ backgroundColor: step.hex }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Desktop: horizontal scroll
  return (
    <section
      id="process"
      ref={containerRef}
      className="bg-surface-dark overflow-hidden h-screen"
    >
      <div
        ref={panelWrapperRef}
        className="flex h-screen"
        style={{ width: `${(PROCESS_STEPS.length + 1) * 100}vw` }}
      >
        {/* Title panel */}
        <div className="process-panel flex-shrink-0 w-screen h-screen flex items-center justify-center px-6">
          <SectionHeading
            overline="How We Work"
            title="The 4D&rsquo;s"
            subtitle="Big consultancies bring armies. We bring precision strikes."
            dark
          />
        </div>

        {/* Step panels */}
        {PROCESS_STEPS.map((step) => (
          <ProcessPanel key={step.number} step={step} />
        ))}
      </div>
    </section>
  );
}
