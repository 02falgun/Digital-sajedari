"use client";

import * as React from "react";

export function WorkProcessCards() {
  const steps = [
    {
      step: "STEP 01",
      title: "Research & Strategy",
      desc: "We map your market, customers, and opportunities—then turn insights into a measurable growth plan.",
    },
    {
      step: "STEP 02",
      title: "Execution & Optimization",
      desc: "Launch creative, content, and performance campaigns—then continuously optimize for higher ROI.",
    },
    {
      step: "STEP 03",
      title: "Analyze & Scale",
      desc: "We analyze results, refine messaging, and scale what works—month after month.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12">
      {steps.map((s, idx) => (
        <div 
          key={s.step} 
          className="relative rounded-xl border border-border-custom bg-bg-secondary p-8 flex flex-col justify-between transition-all duration-300 hover:border-accent/40"
        >
          {/* Step badge overlay watermark */}
          <div 
            className="absolute top-6 right-6 font-display text-4xl font-extrabold text-text-secondary/10 select-none"
            aria-hidden
          >
            0{idx + 1}
          </div>

          <div>
            <span className="text-[11px] font-extrabold tracking-widest text-accent uppercase font-display">
              {s.step}
            </span>
            <h3 className="mt-4 text-lg font-display font-extrabold text-text-primary">
              {s.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-text-secondary font-semibold">
              {s.desc}
            </p>
          </div>

          <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Built for growth
          </div>
        </div>
      ))}
    </div>
  );
}
