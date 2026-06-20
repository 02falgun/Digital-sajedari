"use client";

import * as React from "react";
import { PortfolioCard } from "./PortfolioCard";

const projects = [
  {
    category: "Branding",
    title: "Premium Identity Design",
    description:
      "Elegant logomarks and cohesive branding guidelines tailored to capture high-net-worth clients for premium firms.",
    imageUrl:
      "https://images.pexels.com/photos/1181245/pexels-photo-1181245.jpeg?auto=compress&cs=tinysrgb&w=1400&h=800&dpr=1",
  },
  {
    category: "Development",
    title: "High-Performance Portal",
    description:
      "A lightning-fast, conversion-optimized web application featuring tailored micro-interactions and scalable databases.",
    imageUrl:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    category: "SEO",
    title: "Organic SEO Scaling",
    description:
      "Technical search optimizations, semantic content cluster mapping, and indexing authority setups driving target organic acquisitions.",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 lg:py-24 bg-bg-primary border-t border-border-custom transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
            PORTFOLIO
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl leading-[1.1] font-display font-extrabold tracking-tight text-text-primary uppercase">
            Work That Delivers <span className="text-accent">Results</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-7 text-text-secondary font-semibold max-w-xl">
            Browse our curated bento grid of results-oriented case studies. Every deliverable represents consulting-level execution.
          </p>
        </div>

        {/* Structured Bento Box Grid (aligned columns) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((p, index) => {
            // Layout mapping:
            // Item 1 (Branding) -> 1 col span
            // Item 2 (Development) -> 2 cols span
            // Item 3 (SEO) -> 3 cols span (spans entire width)
            const spanClass = 
              index === 0 
                ? "md:col-span-1" 
                : index === 1 
                ? "md:col-span-2" 
                : "md:col-span-3";

            return (
              <div key={p.title} className={spanClass}>
                <PortfolioCard
                  category={p.category}
                  title={p.title}
                  description={p.description}
                  imageUrl={p.imageUrl}
                />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
