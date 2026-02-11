"use client";

import { motion } from "framer-motion";

interface TextRevealProps {
  children: string;
  delay?: number;
}

export function TextReveal({ children, delay = 0 }: TextRevealProps) {
  const words = children.split(" ");

  return (
    <span className="inline-block overflow-hidden">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.8,
            delay: delay + i * 0.05,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="inline-block mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
