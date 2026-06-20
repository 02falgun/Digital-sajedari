"use client";

import * as React from "react";
import { Button } from "@/app/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-bg-primary overflow-hidden transition-colors duration-300">
      
      {/* Background Subtle Grid Lines (for consulting feel) */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02] pointer-events-none z-0" 
        style={{
          backgroundImage: "radial-gradient(#000 1px, transparent 1px), radial-gradient(#000 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          backgroundPosition: "0 0, 20px 20px"
        }}
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Eyebrow Text */}
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-4">
              CRAFTED WITH PRECISION
            </span>

            {/* Main Headline */}
            <h1 className="text-[44px] sm:text-[60px] lg:text-[72px] leading-[1.0] font-display font-extrabold tracking-tight text-text-primary uppercase">
              ELEVATE YOUR <br />
              <span className="text-accent">BRAND WITH US</span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-sm sm:text-base leading-7 text-text-secondary font-semibold max-w-xl">
              Growing Brands Through Smart Digital Marketing. Digital Sajhedari delivers luxury-level strategy and execution across social media, SEO, branding, website design, and AI content creation.
            </p>

            {/* Structured CTA buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              
              {/* Animated glowing gradient border around main CTA */}
              <a 
                href="#contact" 
                className="w-full sm:w-auto p-[2px] rounded-lg bg-gradient-to-r from-accent via-accent/30 to-accent animate-shimmer hover:shadow-[0_0_15px_rgba(5,150,105,0.2)] dark:hover:shadow-[0_0_15px_rgba(204,255,0,0.2)] transition-all"
              >
                <button className="h-11 px-6 rounded-[6px] bg-bg-primary text-text-primary font-bold text-xs uppercase tracking-wider w-full hover:bg-transparent hover:text-bg-primary dark:hover:text-black transition-colors cursor-pointer focus:outline-none">
                  Get Started
                </button>
              </a>

              <a href="#services" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto uppercase text-xs font-bold tracking-wider">
                  View Services
                </Button>
              </a>
            </div>

          </div>

          {/* Right Visual Column (Subtle, elegant geometric wireframe block) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-square rounded-xl border border-border-custom bg-bg-secondary p-8 flex items-center justify-center shadow-sm">
              
              {/* Technical overlapping concentric borders representing digital modeling */}
              <div className="w-full h-full rounded-lg border border-border-custom flex items-center justify-center relative">
                <div className="absolute inset-4 rounded-lg border border-border-custom flex items-center justify-center">
                  <div className="absolute inset-8 rounded-lg border border-border-custom flex items-center justify-center">
                    <div className="w-16 h-16 rounded-lg border border-accent/20 bg-accent/5 flex items-center justify-center">
                      <span className="text-xl text-accent font-black">DS</span>
                    </div>
                  </div>
                </div>

                {/* Structured quadrant markers / alignment lines */}
                <div className="absolute top-0 bottom-0 left-1/2 w-px bg-border-custom" />
                <div className="absolute left-0 right-0 top-1/2 h-px bg-border-custom" />

                {/* Geometric intersection nodes */}
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_6px_var(--color-accent)]" />
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_6px_var(--color-accent)]" />
                <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_6px_var(--color-accent)]" />
                <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_6px_var(--color-accent)]" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
