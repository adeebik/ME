"use client";

import Link from "next/link";
import { Github, Sun, Moon, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  if (!mounted) return null;

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-[1001] w-max">
      <div className="glass flex items-center gap-2 px-3 py-1.5 rounded-full shadow-sm hover:shadow-md transition-shadow">
        <Link href="/" className="px-3 py-1.5 text-xs font-medium hover:text-muted-foreground transition-colors">
          Home
        </Link>
        <div className="w-px h-4 bg-border mx-1" />
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-muted transition-colors"
          aria-label="Toggle Theme"
        >
          {theme === "dark" ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
        </button>
        <Link 
          href="https://github.com/adeebik" 
          target="_blank" 
          className="p-2 rounded-full hover:bg-muted transition-colors"
        >
          <Github className="w-3.5 h-3.5" />
        </Link>
        <Link 
          href="https://linkedin.com" 
          target="_blank" 
          className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
        >
          <Linkedin className="w-3.5 h-3.5" />
        </Link>
      </div>
    </nav>
  );
}


