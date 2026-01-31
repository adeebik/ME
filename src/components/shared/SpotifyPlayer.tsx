"use client";

import { Play, Music } from "lucide-react";
import Link from "next/link";

export function SpotifyPlayer() {
  return (
    <Link 
      href="https://music.youtube.com/watch?v=YpmDijlYOSM"
      target="_blank"
      className="w-fit px-4 py-3 rounded-2xl border border-border/50 bg-[#FF0000]/5 flex items-center gap-4 group hover:bg-[#FF0000]/10 transition-all duration-500 glass hover:scale-[1.02]"
    >
      <div className="flex items-center gap-3">
        <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-white/10 flex items-center justify-center border border-white/5">
          <img 
            src="https://lh3.googleusercontent.com/19TYq2StOd3QK-vd2Y2vpSfgh4XEfjAXg0uE-FMdpazX6k3nhMvc-4I90O7Lid4S3sH4n_1xDs8IVf5gxw=w544-h544-l90-rj" 
            alt="Noor - Balbir" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <Play className="w-4 h-4 fill-white text-white translate-x-0.5" />
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5 items-end h-2.5">
              {[1, 2, 3, 4].map(i => (
                <div 
                  key={i} 
                  className="w-0.5 bg-[#40c463] animate-[music-bar_1s_ease-in-out_infinite]" 
                  style={{ 
                    height: ['40%', '100%', '60%', '80%'][i-1],
                    animationDelay: `${i * 0.2}s`
                  }} 
                />
              ))}
            </div>
            <span className="text-[8px] font-black uppercase tracking-[0.1em] text-[#40c463]">Currently Jamming</span>
          </div>
          <h4 className="text-xs font-bold text-foreground">Noor - Balbir</h4>
        </div>
      </div>
      
      <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:rotate-12 transition-transform duration-500">
        <Music className="w-3.5 h-3.5 text-foreground" />
      </div>

      <style jsx>{`
        @keyframes music-bar {
          0%, 100% { height: 30%; }
          50% { height: 100%; }
        }
      `}</style>
    </Link>
  );
}
