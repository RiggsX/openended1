"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SlowFadeProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  offsetY?: number;
}

export function SlowFade({
  children,
  delay = 0,
  duration = 1.2,
  className = "",
  once = true,
  offsetY = 8,
}: SlowFadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: offsetY }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: offsetY }}
      transition={{
        duration,
        delay,
        ease: [0.76, 0, 0.24, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
