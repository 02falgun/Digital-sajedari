import * as React from "react";
import { TestimonialsCarousel } from "./TestimonialsCarousel";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 lg:py-24 bg-bg-primary relative border-t border-border-custom transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
            TESTIMONIALS
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl leading-[1.1] font-display font-extrabold tracking-tight text-text-primary uppercase">
            Client <span className="text-accent">Experiences</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-7 text-text-secondary font-semibold max-w-xl mx-auto">
            Read from our client partners about their strategy-first execution and growth journeys with us.
          </p>
        </div>

        {/* Testimonials Carousel Slider */}
        <div className="mt-12 max-w-3xl mx-auto">
          <TestimonialsCarousel />
        </div>

      </div>
    </section>
  );
}
