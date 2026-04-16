"use client";

import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  vivid?: boolean;
}

export default function GradientText({
  children,
  className,
  vivid = false,
}: GradientTextProps) {
  return (
    <span className={cn(vivid ? "gradient-text-vivid" : "gradient-text", className)}>
      {children}
    </span>
  );
}
