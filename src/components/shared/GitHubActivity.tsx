"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const GitHubCalendar: any = dynamic(() => import("react-github-calendar").then((mod: any) => mod.GitHubCalendar), { ssr: false });

export function GitHubActivity() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="bg-card/20 border border-border rounded-[2.5rem] glass relative w-full overflow-hidden">
      <div className="github-calendar-wrapper w-full py-10 px-4 sm:px-8">
        <div className="w-full overflow-x-auto scrollbar-hide ">
          <div className="min-w-fit ">
            {/* @ts-ignore */}
            <GitHubCalendar 
              username="adeebik"
              blockSize={10}
              blockMargin={4}
              fontSize={12}
              blockRadius={10}
              theme={{
                light: ['#f0f0f0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                dark: ['#1a1a1a', '#0e4429', '#006d32', '#26a641', '#39d353']
              }}
              hideMonthLabels={false}
              labels={{
                totalCount: "{{count}} contributions in the last year",
              }}
            />
          </div>
        </div>
      </div>

      <style jsx global>{`
        .github-calendar-wrapper svg {
          overflow: visible !important;
        }
        .react-activity-calendar {
          margin: 0 auto;
        }
        .react-activity-calendar__footer {
          margin-top: 1.5rem !important;
          padding: 0 10px !important;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>


    </div>
  );
}
