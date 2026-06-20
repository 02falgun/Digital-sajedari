"use client";

import Link from "next/link";
import Image from "next/image";
import * as React from "react";
import { ThemeToggle } from "./ui/ThemeToggle";
import { AnimatedButton } from "./ui/AnimatedButton";

const links = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/testimonials", label: "Testimonials" },
];

export function Navigation() {
  return (
    <header className="w-full sticky top-0 z-50 bg-bg-primary/85 border-b border-border-custom backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo Brand Link */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
            aria-label="Digital Sajhedari home"
          >
            <Image
              src="/logo.jpg"
              alt="Digital Sajhedari logo"
              width={40}
              height={40}
              className="w-[36px] h-[36px] object-contain rounded-lg border border-border-custom bg-bg-primary"
              priority
            />
            <span className="font-display text-lg sm:text-xl font-black uppercase tracking-tight text-text-primary group-hover:text-accent transition-colors">
              Digital Sajhedari
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-text-secondary hover:text-text-primary hover:bg-bg-secondary transition-all"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            
            <Link href="/#contact">
              <AnimatedButton variant="primary">
                Get Started
              </AnimatedButton>
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}
