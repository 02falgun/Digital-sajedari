"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "../components/marketing/Navigation";
import { Footer } from "../components/marketing/Footer";
import { AnimatedButton } from "../components/marketing/ui/AnimatedButton";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  img: string;
}

export default function TestimonialsPage() {
  const [mounted, setMounted] = useState(false);
  const [reviews, setReviews] = useState<Testimonial[]>([]);

  // Form State
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [rating, setRating] = useState(5);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMounted(true);
    const local = localStorage.getItem("ds_testimonials");
    if (local) {
      setReviews(JSON.parse(local));
    } else {
      const initial = [
        {
          id: "1",
          name: "Hassan Ali",
          role: "Marketing Lead, OrbitSoft",
          quote: "From social media management to AI content creation—every deliverable looked premium and performed.",
          rating: 5,
          img: "/hassan_ali.png",
        },
        {
          id: "2",
          name: "Ayesha Khan",
          role: "Founder, GreenMart",
          quote: "Digital Sajhedari transformed our visibility. Their SEO + content strategy brought consistent organic leads within weeks, and the analytics reporting was crystal clear.",
          rating: 5,
          img: "/ayesha_khan.png",
        },
        {
          id: "3",
          name: "Sara Patel",
          role: "Director, Lumina Brand",
          quote: "The branding and website development work elevated our trust. Conversion rates increased immediately, and the collaboration process felt high-end.",
          rating: 5,
          img: "/sara_patel.png",
        },
      ];
      setReviews(initial);
      localStorage.setItem("ds_testimonials", JSON.stringify(initial));
    }
  }, []);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !role || !message) return;

    const newReview: Testimonial = {
      id: Date.now().toString(),
      name,
      role,
      quote: message,
      rating,
      img: "/logo.jpg", // default fallback headshot logo
    };

    const updated = [newReview, ...reviews];
    setReviews(updated);
    localStorage.setItem("ds_testimonials", JSON.stringify(updated));

    // Reset Form Fields
    setName("");
    setRole("");
    setRating(5);
    setMessage("");
  };

  if (!mounted) {
    return (
      <div className="min-h-full bg-bg-primary text-text-primary flex flex-col justify-between">
        <Navigation />
        <main className="flex-grow max-w-7xl mx-auto px-6 py-20 w-full text-center">
          <div className="text-sm font-semibold text-text-secondary">Loading Testimonial Reviews...</div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-full bg-bg-primary text-text-primary flex flex-col justify-between transition-colors duration-300">
      <Navigation />

      <main className="flex-grow py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
              REVIEWS
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl leading-[1.0] font-display font-extrabold text-text-primary uppercase">
              Partner <span className="text-accent">Reviews</span>
            </h1>
            <p className="mt-4 text-sm sm:text-base leading-7 text-text-secondary font-semibold max-w-xl">
              We focus on delivering high-end growth campaigns. Inspect client partner testimonies below or submit a new review.
            </p>
          </div>

          {/* Dual Column Layout (Form on left, Reviews on right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Form Column */}
            <div className="lg:col-span-5">
              <div className="rounded-xl border border-border-custom bg-bg-secondary p-8 shadow-sm sticky top-28">
                
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-accent">Contribute</span>
                  <h2 className="text-xl font-display font-extrabold text-text-primary mt-1 uppercase">
                    Submit a Review
                  </h2>
                  <p className="text-xs text-text-secondary mt-1 font-semibold">
                    Submit your feedback. It will instantly update the feedback log.
                  </p>
                </div>

                <form onSubmit={handleSubmitReview} className="space-y-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="rev-name" className="text-[10px] font-bold uppercase tracking-wider text-text-secondary">Your Name</label>
                    <Input
                      id="rev-name"
                      placeholder="e.g. Hassan Ali"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="rev-role" className="text-[10px] font-bold uppercase tracking-wider text-text-secondary">Company & Role</label>
                    <Input
                      id="rev-role"
                      placeholder="e.g. Marketing Lead, OrbitSoft"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      required
                    />
                  </div>

                  {/* Star Rating Selectors */}
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-text-secondary">Rating Score</span>
                    <div className="flex items-center gap-1.5 mt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          className="focus:outline-none transition-transform active:scale-90"
                          aria-label={`Rate ${star} stars`}
                        >
                          <span className={`text-xl ${star <= rating ? "text-accent" : "text-border-custom"}`}>
                            ★
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="rev-msg" className="text-[10px] font-bold uppercase tracking-wider text-text-secondary">Your Testimony</label>
                    <Textarea
                      id="rev-msg"
                      placeholder="Write your review here..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="min-h-[100px]"
                      required
                    />
                  </div>

                  <div className="pt-2">
                    <AnimatedButton type="submit" className="w-full">
                      Submit Review
                    </AnimatedButton>
                  </div>
                </form>

              </div>
            </div>

            {/* Reviews List Column */}
            <div className="lg:col-span-7 space-y-6">
              <AnimatePresence initial={false}>
                {reviews.map((r, index) => (
                  <motion.div
                    key={r.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="rounded-xl border border-border-custom bg-bg-secondary p-8 transition-all hover:border-accent/40"
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-border-custom bg-bg-primary">
                        <Image
                          src={r.img}
                          alt={r.name}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-base font-display font-extrabold text-text-primary leading-tight">
                          {r.name}
                        </div>
                        <div className="text-xs text-accent font-bold uppercase tracking-wider mt-0.5">
                          {r.role}
                        </div>
                      </div>
                    </div>

                    <p className="mt-5 text-sm sm:text-base leading-7 text-text-secondary font-semibold italic">
                      “{r.quote}”
                    </p>

                    <div className="mt-5 pt-4 border-t border-border-custom flex items-center justify-between">
                      <div className="flex gap-1 text-xs text-accent">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span key={i} className={i < r.rating ? "text-accent" : "text-border-custom"}>
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="text-[9px] uppercase tracking-wider text-text-secondary/50 font-bold">
                        Verified Partner
                      </span>
                    </div>

                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
