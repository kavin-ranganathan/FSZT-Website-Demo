"use client";

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  overline?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

export default function SectionHeading({
  overline,
  title,
  subtitle,
  align = "center",
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {overline && (
        <p
          className={cn(
            "font-display text-xs font-semibold uppercase tracking-[0.2em] mb-4",
            dark ? "text-brand-cyan" : "text-brand-purple"
          )}
        >
          {overline}
        </p>
      )}
      <h2
        className={cn(
          "font-display font-bold tracking-tight text-balance",
          "text-3xl md:text-4xl lg:text-5xl",
          dark ? "text-white" : "text-text-primary"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-5 text-lg md:text-xl leading-relaxed",
            dark ? "text-white/60" : "text-text-secondary"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
