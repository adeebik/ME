"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface FlippingTextProps {
  words: string[];
}

export function FlippingText({ words }: FlippingTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="relative h-8 overflow-hidden w-full text-xl text-muted-foreground font-medium">
      <AnimatePresence mode="wait">
        <motion.div
          key={words[index]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute left-0 top-0"
        >
          {words[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
