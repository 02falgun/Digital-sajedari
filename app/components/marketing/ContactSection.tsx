"use client";

import * as React from "react";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Button } from "@/app/components/ui/button";

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handled locally
  };

  return (
    <section id="contact" className="py-20 lg:py-24 bg-bg-primary relative border-t border-border-custom transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Description Column */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
              CONNECT
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl leading-[1.1] font-display font-extrabold text-text-primary uppercase">
              Let's Grow <br />
              <span className="text-accent">Your Business</span>
            </h2>
            <p className="mt-6 text-sm sm:text-base leading-7 text-text-secondary font-semibold max-w-lg">
              Tell us what you're building—our team will respond with a focused, luxury-level plan and next steps.
            </p>

            <div className="mt-8 text-xs font-bold uppercase tracking-wider text-text-secondary/50">
              Response Time: Under 24 Hours
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-border-custom bg-bg-secondary p-8 md:p-10 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="form-name" className="text-xs font-bold uppercase tracking-wider text-text-secondary">Name</label>
                    <Input id="form-name" placeholder="Your Name" name="name" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="form-email" className="text-xs font-bold uppercase tracking-wider text-text-secondary">Email</label>
                    <Input id="form-email" placeholder="Your Email" name="email" type="email" required />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="form-phone" className="text-xs font-bold uppercase tracking-wider text-text-secondary">Phone</label>
                    <Input id="form-phone" placeholder="Phone Number" name="phone" type="tel" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="form-service" className="text-xs font-bold uppercase tracking-wider text-text-secondary">Service Required</label>
                    <Input id="form-service" placeholder="e.g. Website Design" name="service" />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="form-message" className="text-xs font-bold uppercase tracking-wider text-text-secondary">Project Details</label>
                  <Textarea id="form-message" placeholder="Describe your project, timeline, and goals..." name="message" required />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto font-bold text-xs uppercase tracking-wider"
                  >
                    Send Message
                  </Button>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
