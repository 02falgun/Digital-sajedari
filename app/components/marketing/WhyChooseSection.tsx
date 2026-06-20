import * as React from "react";
import { WhyChooseCollage } from "./ui/ImageCollage";
import { WhyChooseUsGrid } from "./WhyGrid";
import { ScrollFadeIn } from "./ScrollFadeIn";

export function WhyChooseSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <ScrollFadeIn className="text-center">
          <div className="text-xs font-extrabold tracking-[0.22em] uppercase text-[#184D3B]">
            Why Choose Us
          </div>
          <h2 className="mt-4 text-[56px] leading-[1.02] font-extrabold tracking-tight text-[#0F172A]">
            Why Our Clients Choose Digital Sajhedari
          </h2>
        </ScrollFadeIn>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <ScrollFadeIn delay={80} direction="left">
            <div>
              <WhyChooseCollage />
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn delay={140} direction="right">
            <div>
              <WhyChooseUsGrid />
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
}

