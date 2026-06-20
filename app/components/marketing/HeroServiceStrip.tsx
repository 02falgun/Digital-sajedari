"use client";

import * as React from "react";

const items = [
  "SEO Optimization",
  "Social Media Campaigns",
  "Web Development",
  "Premium Branding",
  "Content Design",
  "AI Marketing Automation",
];

export function HeroServiceStrip() {
  return (
    <div className="relative mt-8">
      {/* Sleek, thin border and transparent dark glass background */}
      <div className="absolute inset-0 rounded-[24px] bg-white/2 border border-white/5" />
      <div className="relative overflow-hidden rounded-[24px] px-4 py-3">
        <div className="flex gap-8 whitespace-nowrap items-center stripAnim">
          {items.map((t) => (
            <div
              key={t}
              className="flex items-center gap-3 text-white/80 font-bold"
            >
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#CCFF00] shadow-[0_0_6px_#CCFF00]" />
              <span className="text-[12px] uppercase tracking-wider font-display">{t}</span>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {items.map((t) => (
            <div
              key={t + "_dup"}
              className="flex items-center gap-3 text-white/80 font-bold"
            >
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#CCFF00] shadow-[0_0_6px_#CCFF00]" />
              <span className="text-[12px] uppercase tracking-wider font-display">{t}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes stripMove {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .stripAnim {
          animation: stripMove 22s linear infinite;
        }
      `}</style>
    </div>
  );
}
