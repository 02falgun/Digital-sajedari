import * as React from "react";
import { StatsCounters } from "./StatsCounters";

export function StatsSection() {
  return (
    <section className="w-full bg-bg-secondary border-t border-b border-border-custom py-12 md:py-16 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <StatsCounters />
      </div>
    </section>
  );
}
