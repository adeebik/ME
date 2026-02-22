"use client";

import { useEffect, useState } from "react";

export function Background() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-background overflow-hidden">
      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Animated Glowing Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] rounded-full bg-purple-400/30 mix-blend-multiply filter blur-[120px] opacity-70 animate-blob dark:bg-purple-900/40 dark:mix-blend-screen pointer-events-none" />
      <div className="absolute top-[-10%] right-[-10%] w-[40rem] h-[40rem] rounded-full bg-blue-400/30 mix-blend-multiply filter blur-[120px] opacity-70 animate-blob animation-delay-2000 dark:bg-blue-900/40 dark:mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[20%] w-[40rem] h-[40rem] rounded-full bg-teal-400/30 mix-blend-multiply filter blur-[120px] opacity-70 animate-blob animation-delay-4000 dark:bg-teal-900/40 dark:mix-blend-screen pointer-events-none" />
    </div>
  );
}
