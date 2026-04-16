"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export default function Card({
  children,
  className,
  hoverable = true,
}: CardProps) {
  return (
    <motion.div
      whileHover={hoverable ? { y: -4, scale: 1.02 } : undefined}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "rounded-2xl border border-black/[0.06] bg-white p-8",
        "shadow-[0_1px_3px_rgba(0,0,0,0.04)]",
        hoverable &&
          "hover:shadow-[0_8px_30px_rgba(58,229,255,0.08)] hover:border-brand-cyan/20",
        "transition-shadow duration-300",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
