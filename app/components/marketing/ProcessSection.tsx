import * as React from "react";
import { WorkProcessCards } from "./WorkProcessCards";

export function ProcessSection() {
  return (
    <section id="process" className="py-20 lg:py-24 bg-bg-primary border-t border-border-custom transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
            PROCESS
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl leading-[1.1] font-display font-extrabold tracking-tight text-text-primary uppercase">
            Our Growth <span className="text-accent">Process</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-7 text-text-secondary font-semibold max-w-xl">
            We follow a structured, three-step methodology built to guarantee consistent strategy execution and performance scaling.
          </p>
        </div>

        {/* Process Steps Component */}
        <WorkProcessCards />

      </div>
    </section>
  );
}
