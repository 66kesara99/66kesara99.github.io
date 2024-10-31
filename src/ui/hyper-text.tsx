"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface HyperTextProps {
  text: string;
  duration?: number;
  framerProps?: Variants;
  className?: string;
}

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function HyperText({
  text,
  duration = 800,
  framerProps = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 3 },
  },
  className,
}: HyperTextProps) {
  const [displayText, setDisplayText] = useState(text.split(""));

  const getRandomInt = (max: number) => Math.floor(Math.random() * max);

  const triggerAnimation = () => {
    let iterations = 0;
    const interval = setInterval(() => {
      if (iterations < text.length) {
        setDisplayText((t) =>
          t.map((l, i) =>
            l === " "
              ? l
              : i <= iterations
              ? text[i]
              : alphabets[getRandomInt(26)]
          )
        );
        iterations = iterations + 0.1;
      } else {
        clearInterval(interval);
      }
    }, duration / (text.length * 10));
  };

  useEffect(() => {
    if (text && document.hasFocus()) {
      setDisplayText(text.split(""));
      triggerAnimation();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return (
    <div className="overflow-hidden py-2 flex cursor-default scale-100">
      <AnimatePresence mode="sync">
        {displayText.map((letter, i) => (
          <motion.h1
            key={i}
            className={cn("font-mono", letter === " " ? "w-3" : "", className)}
            {...framerProps}
          >
            {letter && letter.toUpperCase()}
          </motion.h1>
        ))}
      </AnimatePresence>
    </div>
  );
}
