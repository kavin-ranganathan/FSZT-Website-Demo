"use client";

import { useRef, useEffect } from "react";
import { MANIFESTO } from "@/lib/constants";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function Manifesto() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (!isDesktop || typeof window === "undefined") return;

    let cleanup: (() => void) | undefined;

    (async () => {
      const { gsap, ScrollTrigger } = await import("@/lib/gsap-config");

      const words = wordsRef.current.filter(Boolean);
      if (words.length === 0) return;

      gsap.set(words, { opacity: 0.15 });

      gsap.to(words, {
        opacity: 1,
        stagger: 0.02,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 50%",
          scrub: 1,
        },
      });

      cleanup = () => ScrollTrigger.getAll().forEach((t) => t.kill());
    })();

    return () => cleanup?.();
  }, [isDesktop]);

  const fullText = `${MANIFESTO.lead} ${MANIFESTO.body} ${MANIFESTO.highlight} ${MANIFESTO.closing}`;
  const allWords = fullText.split(" ");

  return (
    <section ref={sectionRef} className="py-28 md:py-40 bg-white">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <p className="font-display text-2xl md:text-3xl lg:text-[2.2rem] font-semibold leading-relaxed tracking-tight text-text-primary">
          {allWords.map((word, i) => (
            <span
              key={i}
              ref={(el) => {
                if (el) wordsRef.current[i] = el;
              }}
              className="inline-block mr-[0.3em] transition-opacity duration-200"
              style={!isDesktop ? { opacity: 1 } : undefined}
            >
              {word}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
