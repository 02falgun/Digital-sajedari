import * as React from "react";
import { Navigation } from "./components/marketing/Navigation";
import { HeroSection } from "./components/marketing/HeroSection";
import { ServicesSection } from "./components/marketing/ServicesSection";
import { PortfolioSection } from "./components/marketing/PortfolioSection";
import { ContactSection } from "./components/marketing/ContactSection";
import { Footer } from "./components/marketing/Footer";

export default function Home() {
  return (
    <div className="min-h-full bg-bg-primary text-text-primary transition-colors duration-300">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        {/* Displays the top 3 featured portfolio items */}
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
