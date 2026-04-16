"use client";

import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-white text-surface-dark hover:bg-white/90 hover:shadow-[0_0_30px_rgba(58,229,255,0.3)]",
    outline:
      "border border-white/20 text-white hover:border-brand-cyan/50 hover:shadow-[0_0_20px_rgba(58,229,255,0.15)]",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-9 py-4 text-lg",
  };

  const Tag = href ? "a" : "button";

  return (
    <Tag
      href={href}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
    >
      {children}
    </Tag>
  );
}
