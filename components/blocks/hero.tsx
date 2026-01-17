import React from "react";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      {/* Subtle accent glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Eyebrow text */}
        <p className="text-primary text-sm tracking-[0.3em] uppercase mb-8 font-light">
          Fine Art Photography
        </p>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tight mb-6 leading-[0.9]">
          <span className="block">Capturing</span>
          <span className="block text-primary font-light italic">Timeless</span>
          <span className="block">Moments</span>
        </h1>

        {/* Subheading */}
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Bespoke photography for those who appreciate the art of light, shadow, and emotion.
        </p>

        {/* Hero image placeholder */}
        <div className="relative w-full max-w-4xl mx-auto mb-12">
          <div className="aspect-[16/9] w-full bg-gradient-to-br from-secondary via-card to-muted border border-border/50 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 border border-primary/30 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-muted-foreground/50 text-sm tracking-widest uppercase">Featured Work</p>
              </div>
            </div>
          </div>
          {/* Elegant frame accent */}
          <div className="absolute -inset-px border border-primary/10 pointer-events-none" />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="min-w-[200px] tracking-wider">
            View Portfolio
          </Button>
          <Button variant="outline" size="lg" className="min-w-[200px] tracking-wider">
            Book a Session
          </Button>
        </div>

        {/* Trust line */}
        <p className="text-muted-foreground/60 text-xs tracking-widest uppercase mt-8">
          Editorial &bull; Portraits &bull; Weddings &bull; Commercial
        </p>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
