"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type RevealDirection = "center" | "left" | "right" | "top" | "bottom";

interface RevealProps {
  children: React.ReactNode;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

const clipPaths: Record<RevealDirection, { hidden: string; visible: string }> = {
  center: {
    hidden: "inset(50% 50% 50% 50%)",
    visible: "inset(0% 0% 0% 0%)",
  },
  left: {
    hidden: "inset(0 100% 0 0)",
    visible: "inset(0 0% 0 0)",
  },
  right: {
    hidden: "inset(0 0 0 100%)",
    visible: "inset(0 0 0 0%)",
  },
  top: {
    hidden: "inset(0 0 100% 0)",
    visible: "inset(0 0 0% 0)",
  },
  bottom: {
    hidden: "inset(100% 0 0 0)",
    visible: "inset(0% 0 0 0)",
  },
};

export function Reveal({
  children,
  direction = "bottom",
  delay = 0,
  duration = 1.2,
  className = "",
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-80px" });

  const clip = clipPaths[direction];

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ clipPath: clip.hidden }}
        animate={isInView ? { clipPath: clip.visible } : { clipPath: clip.hidden }}
        transition={{
          duration,
          delay,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
