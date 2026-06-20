"use client";

import * as React from "react";
import { Smartphone, Layout, ShoppingBag, TrendingUp } from "lucide-react";
import { ServiceCard } from "./ServiceCards";

const services = [
  {
    title: "Mobile App Development",
    description:
      "Design and develop high-performance mobile applications for Android and iOS using modern native-compiled tech.",
    icon: Smartphone,
  },
  {
    title: "Website Design & Dev",
    description:
      "Modern, responsive, and ultra-fast web experiences built with cutting-edge frameworks and luxury visuals.",
    icon: Layout,
  },
  {
    title: "eCommerce Development",
    description:
      "Custom eCommerce systems featuring lightning-fast catalogs, secure payments, and fully integrated management tools.",
    icon: ShoppingBag,
  },
  {
    title: "Digital Marketing & SEO",
    description:
      "Data-driven SEO campaigns, targeted social media channels, branding identity, and AI content flows built to convert.",
    icon: TrendingUp,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-24 bg-bg-primary border-t border-border-custom transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Title Block (Aligned left in grid) */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
            SERVICES
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl leading-[1.1] font-display font-extrabold tracking-tight text-text-primary uppercase">
            We provide end-to-end <br />
            <span className="text-accent">digital solutions</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-7 text-text-secondary font-semibold max-w-xl">
            We specialize in creating premium digital ecosystems. Every design is built to convert, scale, and leave a memorable brand impression.
          </p>
        </div>

        {/* Services Grid (Strict 2x2 structured grid layout) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
