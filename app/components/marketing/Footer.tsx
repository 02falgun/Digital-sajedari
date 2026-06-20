"use client";

import * as React from "react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative bg-bg-secondary text-text-primary border-t border-border-custom transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 py-16">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          
          {/* Brand/Socials Column */}
          <div className="md:col-span-2 flex flex-col items-start">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.jpg"
                alt="Digital Sajhedari logo"
                width={56}
                height={56}
                className="w-[44px] h-[44px] object-contain rounded-lg border border-border-custom bg-bg-primary"
              />
              <div>
                <div className="text-[17px] font-display font-extrabold tracking-tight">
                  Digital Sajhedari
                </div>
                <div className="text-[11px] text-text-secondary font-bold uppercase tracking-wider mt-0.5">
                  Consulting & Digital Marketing
                </div>
              </div>
            </div>

            <p className="mt-6 text-sm leading-6 text-text-secondary font-semibold max-w-sm">
              Empowering brands through strategic digital marketing, conversion-focused websites, and structured brand development campaigns.
            </p>

            {/* Structured Social Buttons */}
            <div className="mt-8 flex items-center gap-2">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/digitalsajhedari/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-bg-primary border border-border-custom flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/40 active:scale-95 transition-all"
                aria-label="Facebook"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v9h4v-9h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/digitalsajhedari/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-bg-primary border border-border-custom flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/40 active:scale-95 transition-all"
                aria-label="Instagram"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
                  <path d="M17.5 6.5h.01" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-bg-primary border border-border-custom flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/40 active:scale-95 transition-all"
                aria-label="WhatsApp"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.5 11.7A8.5 8.5 0 0 1 7.2 18l-3.2 1 1-3.2A8.5 8.5 0 1 1 20.5 11.7Z" />
                  <path d="M9.3 9.6c.3-.6.7-.6 1.1-.5l.8.3c.3.1.5.3.4.7l-.3 1c-.1.3 0 .6.2.9.6.9 1.4 1.6 2.4 2 .3.1.6.1.8-.1l.8-.7c.3-.2.6-.2.9-.1l.8.4c.4.2.5.5.4.9-.1.6-.5 1.1-1.1 1.3-1 .3-2.2.1-3.3-.5-1.8-1-3.3-2.5-4.2-4.3-.5-1-.5-2.1 0-3Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-accent font-display">
              Services
            </div>
            <ul className="mt-5 space-y-3 text-xs uppercase font-bold tracking-wider text-text-secondary">
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  SEO Scaling
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  Branding Identity
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  Web Development
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-accent font-display">
              Company
            </div>
            <ul className="mt-5 space-y-3 text-xs uppercase font-bold tracking-wider text-text-secondary">
              <li>
                <a href="#process" className="hover:text-accent transition-colors">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-accent transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-accent transition-colors">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-accent font-display">
              Newsletter
            </div>
            <p className="mt-4 text-xs font-semibold text-text-secondary leading-5">
              Subscribe to get premium digital strategy briefs.
            </p>
            
            <form onSubmit={(e) => e.preventDefault()} className="mt-5 flex gap-2">
              <input
                type="email"
                required
                placeholder="Email Address"
                className="flex-1 h-11 rounded-lg px-4 text-xs bg-bg-primary border border-border-custom outline-none text-text-primary placeholder:text-text-secondary/50 focus:border-accent transition-colors"
              />
              <button
                type="submit"
                className="h-11 px-4 rounded-lg bg-accent text-bg-primary font-bold text-xs uppercase tracking-wider hover:bg-accent-hover transition-colors"
              >
                Join
              </button>
            </form>

            <div className="mt-6 text-xs text-text-secondary/50 font-bold uppercase tracking-wider">
              hello@digitalsajhedari.com
            </div>
          </div>

        </div>

        {/* Footer Bottom copyright strip */}
        <div className="mt-16 pt-8 border-t border-border-custom flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-secondary/40 font-bold uppercase tracking-widest">
          <div>
            © 2026 Digital Sajhedari. All rights reserved.
          </div>
          <div className="normal-case tracking-normal text-text-secondary/40 font-semibold flex items-center gap-1">
            <span>Powered by</span>
            <a
              href="https://kavyathakur.com.np/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent text-text-secondary/60 transition-colors font-bold"
            >
              Kavtech
            </a>
          </div>
          <div>
            Consulting with Precision.
          </div>
        </div>

      </div>
    </footer>
  );
}
