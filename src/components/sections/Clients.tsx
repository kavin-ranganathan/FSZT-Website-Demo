"use client";

import { CLIENTS } from "@/lib/constants";
import FadeInUp from "@/components/animations/FadeInUp";

export default function Clients() {
  // Duplicate for seamless marquee loop
  const marqueeItems = [...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS];

  return (
    <section className="py-16 md:py-20 bg-surface-off border-y border-black/[0.04]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeInUp>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-text-muted mb-10">
            Clients Our Founders Have Worked With
          </p>
        </FadeInUp>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {marqueeItems.map((client, i) => (
            <span
              key={`${client}-${i}`}
              className="mx-8 md:mx-16 font-display text-xl md:text-2xl font-semibold text-text-primary/15 flex-shrink-0"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
