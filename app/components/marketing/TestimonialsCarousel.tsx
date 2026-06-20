"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Hassan Ali",
    role: "Marketing Lead, OrbitSoft",
    quote:
      "From social media management to AI content creation—every deliverable looked premium and performed.",
    img: "/hassan_ali.png",
  },
  {
    name: "Ayesha Khan",
    role: "Founder, GreenMart",
    quote:
      "Digital Sajhedari transformed our visibility. Their SEO + content strategy brought consistent organic leads within weeks, and the analytics reporting was crystal clear.",
    img: "/ayesha_khan.png",
  },
  {
    name: "Sara Patel",
    role: "Director, Lumina Brand",
    quote:
      "The branding and website development work elevated our trust. Conversion rates increased immediately, and the collaboration process felt high-end.",
    img: "/sara_patel.png",
  },
];

export function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const active = testimonials[index];

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="relative min-h-[280px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="w-full"
          >
            {/* Sleek, structured glassmorphic card (curbed corner radii) */}
            <div className="rounded-xl border border-border-custom bg-bg-secondary p-8 md:p-10 transition-colors duration-300">
              
              {/* Header Profile Info */}
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-lg overflow-hidden border border-border-custom bg-bg-primary">
                  <Image
                    src={active.img}
                    alt={active.name}
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <div>
                  <div className="text-base sm:text-lg font-display font-extrabold text-text-primary leading-tight">
                    {active.name}
                  </div>
                  <div className="text-xs text-accent font-bold uppercase tracking-wider mt-1">
                    {active.role}
                  </div>
                </div>
              </div>

              {/* Testimonial Quote */}
              <p className="mt-6 text-sm sm:text-base leading-7 text-text-secondary font-semibold italic">
                “{active.quote}”
              </p>

              {/* Footer Indicator Row */}
              <div className="mt-6 pt-6 border-t border-border-custom flex items-center justify-between">
                <div className="flex gap-1 text-xs text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <span className="text-[10px] uppercase tracking-wider text-text-secondary/50 font-bold">
                  Verified Client Partner
                </span>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Indicators */}
      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((t, i) => (
          <button
            key={t.name}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index
                ? "bg-accent w-6"
                : "bg-border-custom hover:bg-text-secondary/20 w-1.5"
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
