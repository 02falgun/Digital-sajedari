"use client";

import React, { useState, useEffect } from "react";
import { Navigation } from "../components/marketing/Navigation";
import { Footer } from "../components/marketing/Footer";
import { AnimatedButton } from "../components/marketing/ui/AnimatedButton";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  tech: string;
}

const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80";

export default function PortfolioPage() {
  const [mounted, setMounted] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  
  // Form State
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Branding");
  const [tech, setTech] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setMounted(true);
    const local = localStorage.getItem("ds_portfolio_projects");
    if (local) {
      setProjects(JSON.parse(local));
    } else {
      const initial = [
        {
          id: "1",
          title: "Luxury Identity Design",
          category: "Branding",
          description: "A cohesive, luxurious brand architecture designed to engage high-net-worth audiences.",
          imageUrl: "https://images.pexels.com/photos/1181245/pexels-photo-1181245.jpeg?auto=compress&cs=tinysrgb&w=1400&h=800&dpr=1",
          tech: "Adobe CC, Figma, Cinema4D"
        },
        {
          id: "2",
          title: "High-Performance eCommerce Portal",
          category: "Development",
          description: "A lightning-fast, high-end headless shop built for speed, performance, and seamless checkout integrations.",
          imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
          tech: "Next.js, TailwindCSS, Shopify API"
        },
        {
          id: "3",
          title: "Organic SEO Scaling Campaign",
          category: "SEO",
          description: "Technical indexing restructuring and editorial hubs driving consistent conversion metrics.",
          imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
          tech: "Next.js, Contentful, Search Analytics"
        },
        {
          id: "4",
          title: "Creative Brand Strategy",
          category: "Branding",
          description: "Market research, user positioning, and core campaign directives mapping digital outcomes.",
          imageUrl: "https://images.pexels.com/photos/1181245/pexels-photo-1181245.jpeg?auto=compress&cs=tinysrgb&w=1400&h=800&dpr=1",
          tech: "Figma, Notion, Google Workspace"
        }
      ];
      setProjects(initial);
      localStorage.setItem("ds_portfolio_projects", JSON.stringify(initial));
    }
  }, []);

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description) return;

    const newProject: Project = {
      id: Date.now().toString(),
      title,
      category,
      description,
      imageUrl: imageUrl.trim() || DEFAULT_IMAGE,
      tech: tech || "Figma, Next.js"
    };

    const updated = [...projects, newProject];
    setProjects(updated);
    localStorage.setItem("ds_portfolio_projects", JSON.stringify(updated));

    // Reset Form Fields
    setTitle("");
    setCategory("Branding");
    setTech("");
    setImageUrl("");
    setDescription("");
  };

  if (!mounted) {
    return (
      <div className="min-h-full bg-bg-primary text-text-primary flex flex-col justify-between">
        <Navigation />
        <main className="flex-1 max-w-7xl mx-auto px-6 py-20 w-full text-center">
          <div className="text-sm font-semibold text-text-secondary">Loading Portfolio Case Studies...</div>
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
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
              CASE STUDIES
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl leading-[1.0] font-display font-extrabold text-text-primary uppercase">
              Portfolio & <span className="text-accent">Work</span>
            </h1>
            <p className="mt-4 text-sm sm:text-base leading-7 text-text-secondary font-semibold max-w-xl">
              Explore our bento grid of premium digital execution. Click "View Case Study" inside the hovered cards to check parameters.
            </p>
          </div>

          {/* Bento Box Grid of Projects */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((p, index) => {
              // Asymmetric bento formula:
              // index 0 -> Col Span 2, index 1 -> Col Span 1
              // index 2 -> Col Span 1, index 3 -> Col Span 2
              // Pattern repeats: [2, 1], [1, 2]
              const gridPattern = Math.floor(index / 2) % 2 === 0;
              const isEvenItemInRow = index % 2 === 0;
              const spanClass = 
                gridPattern
                  ? (isEvenItemInRow ? "md:col-span-2" : "md:col-span-1")
                  : (isEvenItemInRow ? "md:col-span-1" : "md:col-span-2");

              return (
                <div key={p.id} className={spanClass}>
                  <article className="group relative rounded-xl overflow-hidden border border-border-custom bg-bg-secondary h-[360px] w-full transition-all duration-500">
                    
                    {/* Background Image */}
                    <img
                      src={p.imageUrl}
                      alt={p.title}
                      className="absolute inset-0 h-full w-full object-cover pointer-events-none transition-transform duration-700 group-hover:scale-103"
                      loading="lazy"
                    />

                    {/* Dark gradient shadow */}
                    <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none transition-colors duration-500 group-hover:bg-black/85" />

                    {/* ALWAYS VISIBLE: Category Badge top-left */}
                    <div className="absolute left-6 top-6 rounded-lg bg-bg-primary/95 border border-border-custom text-text-primary px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-widest z-20 transition-all duration-300">
                      {p.category}
                    </div>

                    {/* ALWAYS VISIBLE: Card Title bottom-left (moves up on hover) */}
                    <div className="absolute inset-x-0 bottom-0 p-8 z-20 flex flex-col justify-end text-white transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
                      <h3 className="text-xl font-display font-extrabold uppercase leading-tight">
                        {p.title}
                      </h3>
                      <p className="text-xs text-slate-300 font-semibold mt-1">Hover to inspect tech stack</p>
                    </div>

                    {/* HOVER ONLY OVERLAY (fades in) */}
                    <div className="absolute inset-0 bg-black/85 opacity-0 group-hover:opacity-100 flex flex-col justify-end p-8 z-25 transition-all duration-500 ease-in-out">
                      <div className="text-xs text-accent font-bold uppercase tracking-wider font-display">
                        {p.category}
                      </div>
                      <h3 className="mt-2 text-xl sm:text-2xl font-display font-extrabold text-white leading-tight uppercase">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm leading-6 text-slate-300 font-semibold max-w-xl">
                        {p.description}
                      </p>

                      <div className="mt-4 pt-4 border-t border-white/10">
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block">Technologies Used</span>
                        <span className="text-xs text-white font-bold block mt-1">{p.tech}</span>
                      </div>

                      <div className="mt-6 flex justify-start">
                        <AnimatedButton variant="secondary">
                          View Case Study
                        </AnimatedButton>
                      </div>
                    </div>

                  </article>
                </div>
              );
            })}
          </div>

          {/* Form Divider */}
          <div className="mt-20 border-t border-border-custom" />

          {/* Add New Case Study Form */}
          <div className="mt-20 max-w-3xl mx-auto">
            <div className="rounded-xl border border-border-custom bg-bg-secondary p-8 md:p-10 shadow-sm">
              
              <div className="text-center mb-8">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
                  CONTRIBUTE
                </span>
                <h2 className="mt-2 text-2xl font-display font-extrabold text-text-primary uppercase">
                  Add a New Case Study
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-text-secondary font-semibold">
                  Contribute your project details. It will persist in your browser's local state.
                </p>
              </div>

              <form onSubmit={handleAddProject} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="form-title" className="text-xs font-bold uppercase tracking-wider text-text-secondary">Project Title</label>
                    <Input 
                      id="form-title" 
                      placeholder="e.g. Headless Commerce Portal" 
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required 
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="form-category" className="text-xs font-bold uppercase tracking-wider text-text-secondary">Category</label>
                    <select
                      id="form-category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="flex h-12 w-full rounded-lg border border-border-custom bg-bg-secondary px-4 text-sm text-text-primary outline-none focus:border-accent focus:ring-2 focus:ring-accent/15"
                    >
                      <option value="Branding">Branding</option>
                      <option value="Development">Development</option>
                      <option value="SEO">SEO</option>
                      <option value="Social">Social</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="form-tech" className="text-xs font-bold uppercase tracking-wider text-text-secondary">Tech Stack</label>
                    <Input 
                      id="form-tech" 
                      placeholder="e.g. Next.js, Framer Motion, Tailwind" 
                      value={tech}
                      onChange={(e) => setTech(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="form-image" className="text-xs font-bold uppercase tracking-wider text-text-secondary">Image URL</label>
                    <Input 
                      id="form-image" 
                      placeholder="Leave blank for high-quality mock graphic" 
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="form-desc" className="text-xs font-bold uppercase tracking-wider text-text-secondary">Description</label>
                  <Textarea 
                    id="form-desc" 
                    placeholder="Provide a brief summary of what you built and how it drove brand performance..." 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required 
                  />
                </div>

                <div className="pt-2 text-center">
                  <AnimatedButton type="submit" variant="primary" className="w-full sm:w-auto px-10">
                    Add Project Case Study
                  </AnimatedButton>
                </div>

              </form>

            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
