import { Button } from "../ui/button";

const portfolioItems = [
  {
    id: 1,
    title: "Ethereal Light",
    category: "Editorial",
    aspect: "portrait",
  },
  {
    id: 2,
    title: "Golden Hour",
    category: "Portrait",
    aspect: "landscape",
  },
  {
    id: 3,
    title: "Urban Dreams",
    category: "Commercial",
    aspect: "portrait",
  },
  {
    id: 4,
    title: "Timeless Romance",
    category: "Wedding",
    aspect: "landscape",
  },
  {
    id: 5,
    title: "Silent Whispers",
    category: "Fine Art",
    aspect: "portrait",
  },
  {
    id: 6,
    title: "Velvet Shadows",
    category: "Editorial",
    aspect: "landscape",
  },
];

function GalleryItem({ item }: { item: typeof portfolioItems[0] }) {
  const aspectClass = item.aspect === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]";

  return (
    <div className="group relative overflow-hidden cursor-pointer">
      {/* Image placeholder */}
      <div className={`${aspectClass} w-full bg-gradient-to-br from-secondary via-card to-muted relative overflow-hidden`}>
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:24px_24px]" />

        {/* Camera icon placeholder */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-10 transition-opacity duration-500">
          <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center">
          <p className="text-primary text-xs tracking-[0.3em] uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
            {item.category}
          </p>
          <h3 className="text-foreground text-xl font-light tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
            {item.title}
          </h3>
          <div className="mt-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
            <span className="text-primary text-sm tracking-widest uppercase border-b border-primary/50 pb-1 hover:border-primary transition-colors">
              View Project
            </span>
          </div>
        </div>
      </div>

      {/* Elegant border accent on hover */}
      <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/30 transition-colors duration-500 pointer-events-none" />
    </div>
  );
}

export default function ProductShowcase() {
  return (
    <section className="w-full py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-6 font-light">
            Selected Works
          </p>
          <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-6">
            The Portfolio
          </h2>
          <div className="w-16 h-px bg-primary/30 mx-auto mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto font-light leading-relaxed">
            A curated collection of moments frozen in time, each telling its own unique story through the interplay of light and shadow.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {portfolioItems.map((item) => (
            <GalleryItem key={item.id} item={item} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button variant="outline" size="lg" className="min-w-44 tracking-widest">
              View All Work
            </Button>
            <Button size="lg" className="min-w-44 tracking-widest">
              Commission a Shoot
            </Button>
          </div>
          <p className="text-muted-foreground/60 text-xs tracking-widest uppercase mt-8">
            Available for worldwide assignments
          </p>
        </div>
      </div>
    </section>
  );
}
