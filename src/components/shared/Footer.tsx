"use client";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/5 py-12 px-8 mt-20 z-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-2">
          <span className="text-sm font-bold tracking-tighter text-white">PORTFOLIO</span>
          <p className="text-xs text-zinc-500">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        
        <div className="flex items-center gap-8">
          <a href="mailto:hello@example.com" className="text-xs font-medium text-zinc-400 hover:text-white transition-colors">
            Contact
          </a>
          <a href="https://twitter.com" className="text-xs font-medium text-zinc-400 hover:text-white transition-colors">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
