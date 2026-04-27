"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { HERO, SITE } from "@/lib/constants";
import Button from "@/components/ui/Button";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const SCENE_TINTS = [
  "rgba(58, 229, 255, 0.18)",
  "rgba(143, 107, 255, 0.20)",
  "rgba(242, 92, 193, 0.18)",
  "rgba(243, 201, 139, 0.16)",
] as const;

export default function Hero() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const sectionRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const tintRef = useRef<HTMLDivElement>(null);
  const sceneRefs = useRef<(HTMLDivElement | null)[]>([]);
  const progressRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const [reducedMotion, setReducedMotion] = useState(false);
  const [mediaError, setMediaError] = useState(false);
  const [activeScene, setActiveScene] = useState(0);

  const scenes = HERO.scenes;

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (reducedMotion) return;

    let cleanup: (() => void) | undefined;
    let cancelled = false;

    (async () => {
      const { gsap, ScrollTrigger } = await import("@/lib/gsap-config");
      if (cancelled || !sectionRef.current || !stageRef.current) return;

      const sceneEls = sceneRefs.current.filter(Boolean) as HTMLDivElement[];
      const dotEls = dotRefs.current.filter(Boolean) as HTMLSpanElement[];
      const tintEl = tintRef.current;
      const mediaEl = mediaRef.current;
      const progressEl = progressRef.current;

      gsap.set(sceneEls, { opacity: 0, y: 24, filter: "blur(6px)" });
      gsap.set(sceneEls[0], { opacity: 1, y: 0, filter: "blur(0px)" });
      if (mediaEl) gsap.set(mediaEl, { scale: 1.04 });

      const travel = isDesktop ? 200 : 140;

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${travel}%`,
          pin: stageRef.current,
          scrub: 0.6,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const idx = Math.min(
              scenes.length - 1,
              Math.floor(self.progress * scenes.length - 1e-6)
            );
            setActiveScene(Math.max(0, idx));
            if (progressEl) {
              progressEl.style.transform = `scaleY(${self.progress})`;
            }
          },
        },
      });

      // Continuous media zoom + tint travel across the whole pin
      if (mediaEl) {
        tl.to(mediaEl, { scale: 1.18 }, 0);
      }
      if (tintEl) {
        tl.to(
          tintEl,
          {
            keyframes: SCENE_TINTS.map((c) => ({
              background: `radial-gradient(60% 60% at 50% 45%, ${c} 0%, rgba(5,5,8,0) 70%)`,
            })),
          },
          0
        );
      }

      // Stepped cue points — crossfade scenes and pulse dots
      sceneEls.forEach((el, i) => {
        if (i === 0) return;
        const at = i / scenes.length;
        tl.to(
          sceneEls[i - 1],
          { opacity: 0, y: -24, filter: "blur(6px)", duration: 0.12 },
          at - 0.06
        );
        tl.to(
          el,
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.12 },
          at - 0.02
        );
        if (dotEls[i]) {
          tl.to(
            dotEls[i],
            { backgroundColor: "rgba(255,255,255,0.95)", duration: 0.05 },
            at - 0.02
          );
        }
        if (dotEls[i - 1]) {
          tl.to(
            dotEls[i - 1],
            { backgroundColor: "rgba(255,255,255,0.25)", duration: 0.05 },
            at - 0.02
          );
        }
      });

      cleanup = () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
        tl.kill();
      };
    })();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [reducedMotion, isDesktop, scenes.length]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-surface-darker"
      style={{
        height: reducedMotion ? "100vh" : isDesktop ? "300vh" : "240vh",
      }}
    >
      <div
        ref={stageRef}
        className="relative h-screen w-full overflow-hidden"
      >
        {/* Media layer — animated WebP as the persistent hero canvas */}
        <div
          ref={mediaRef}
          className="absolute inset-0 will-change-transform"
          aria-hidden
        >
          {!mediaError ? (
            <img
              src="/AI_Workflow_Motion_Design_Video1-ezgif.com-video-to-webp-converter.webp"
              alt=""
              onError={() => setMediaError(true)}
              className="absolute inset-0 h-full w-full object-cover select-none pointer-events-none"
              draggable={false}
            />
          ) : (
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 40%, #1a1740 0%, #0A0A0F 55%, #050508 100%)",
              }}
            />
          )}

          {/* Subtle film grain via layered gradients */}
          <div className="absolute inset-0 mix-blend-overlay opacity-[0.18] bg-[radial-gradient(circle_at_30%_20%,rgba(58,229,255,0.25),transparent_55%),radial-gradient(circle_at_75%_75%,rgba(143,107,255,0.22),transparent_60%)]" />
        </div>

        {/* Scroll-driven color tint */}
        <div
          ref={tintRef}
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(60% 60% at 50% 45%, ${SCENE_TINTS[0]} 0%, rgba(5,5,8,0) 70%)`,
          }}
          aria-hidden
        />

        {/* Bottom legibility gradient — preserves dark base, keeps text readable */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(5,5,8,0.55) 0%, rgba(5,5,8,0.2) 28%, rgba(5,5,8,0.25) 60%, rgba(5,5,8,0.85) 100%)",
          }}
          aria-hidden
        />

        {/* Foreground content */}
        <div className="relative z-10 flex h-full w-full flex-col">
          {/* Top meta row */}
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 pt-24 lg:px-8">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-display text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-cyan"
            >
              {HERO.overline}
            </motion.p>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="hidden md:inline font-display text-[11px] font-medium uppercase tracking-[0.28em] text-white/35"
            >
              {SITE.tagline}
            </motion.span>
          </div>

          {/* Scene stack */}
          <div className="relative flex flex-1 items-center justify-center px-6">
            <div className="relative mx-auto w-full max-w-4xl text-center">
              {scenes.map((scene, i) => (
                <div
                  key={i}
                  ref={(el) => {
                    sceneRefs.current[i] = el;
                  }}
                  className={
                    i === 0
                      ? "relative"
                      : "absolute inset-0 flex flex-col items-center justify-center"
                  }
                  aria-hidden={!reducedMotion && i !== activeScene}
                >
                  <p className="font-display text-[11px] font-semibold uppercase tracking-[0.28em] text-white/55">
                    {scene.eyebrow}
                  </p>
                  <h1 className="mt-6 font-display font-bold tracking-tight text-white text-5xl md:text-7xl lg:text-[5.25rem] leading-[1.04] text-balance">
                    <span
                      className="gradient-text animate-gradient-shift"
                      style={{ backgroundSize: "200% auto" }}
                    >
                      {scene.title}
                    </span>
                  </h1>
                  <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-white/60 leading-relaxed text-balance">
                    {scene.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom row — CTA + progress */}
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-6 pb-12 lg:px-8 md:flex-row md:items-end md:justify-between">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex flex-col items-center gap-4 md:items-start"
            >
              <Button href={`mailto:${SITE.email}`} size="lg">
                {HERO.cta}
              </Button>
              <span className="font-display text-[11px] uppercase tracking-[0.25em] text-white/35">
                Scroll to explore
              </span>
            </motion.div>

            {/* Progress / cue indicator */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex flex-col gap-2 text-right">
                <span className="font-display text-[11px] uppercase tracking-[0.25em] text-white/40">
                  {String(Math.min(activeScene + 1, scenes.length)).padStart(
                    2,
                    "0"
                  )}{" "}
                  / {String(scenes.length).padStart(2, "0")}
                </span>
                <span className="font-display text-xs text-white/70">
                  {scenes[activeScene]?.eyebrow.split("—")[1]?.trim() ??
                    scenes[0].eyebrow}
                </span>
              </div>

              <div className="flex items-center gap-2 md:flex-col">
                {scenes.map((_, i) => (
                  <span
                    key={i}
                    ref={(el) => {
                      dotRefs.current[i] = el;
                    }}
                    className="block h-[6px] w-[6px] rounded-full transition-colors"
                    style={{
                      backgroundColor:
                        i === 0
                          ? "rgba(255,255,255,0.95)"
                          : "rgba(255,255,255,0.25)",
                    }}
                  />
                ))}
              </div>

              <div className="relative ml-2 hidden md:block h-16 w-[2px] overflow-hidden rounded-full bg-white/10">
                <div
                  ref={progressRef}
                  className="absolute inset-x-0 top-0 h-full origin-top bg-gradient-to-b from-brand-cyan via-brand-purple to-brand-pink"
                  style={{ transform: "scaleY(0)" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue — only when fully at top */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: reducedMotion ? 0 : 0.55 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2"
          aria-hidden
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="text-white/40" size={22} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
