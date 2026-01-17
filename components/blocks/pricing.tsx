import { Button } from "../ui/button";

const packages = [
  {
    name: "Portrait Session",
    price: "850",
    description: "Perfect for individuals seeking timeless portraits",
    features: [
      "2-hour photography session",
      "One location of your choice",
      "Professional retouching",
      "15 high-resolution images",
      "Private online gallery",
      "Print release included",
    ],
  },
  {
    name: "Editorial",
    price: "2,400",
    description: "For brands and publications demanding excellence",
    features: [
      "Full-day creative session",
      "Multiple locations & setups",
      "Art direction consultation",
      "40 high-resolution images",
      "Commercial usage rights",
      "Priority delivery",
    ],
    featured: true,
  },
  {
    name: "Wedding",
    price: "4,800",
    description: "Capturing your love story with artistic vision",
    features: [
      "Full-day coverage (10 hours)",
      "Second photographer included",
      "Engagement session",
      "300+ edited images",
      "Luxury album design",
      "Same-day preview gallery",
    ],
  },
];

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-primary flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section className="w-full py-32 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-6 font-light">
            Investment
          </p>
          <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-6">
            Pricing & Packages
          </h2>
          <div className="w-16 h-px bg-primary/30 mx-auto mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto font-light leading-relaxed">
            Every project is unique. Choose a package as your starting point, and we&apos;ll tailor the experience to your vision.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative group ${pkg.featured ? "md:-mt-4 md:mb-4" : ""}`}
            >
              {/* Featured badge */}
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-primary text-primary-foreground text-xs tracking-widest uppercase px-4 py-1.5">
                    Most Popular
                  </span>
                </div>
              )}

              <div
                className={`h-full bg-card border transition-all duration-500 p-8 md:p-10 ${
                  pkg.featured
                    ? "border-primary/40"
                    : "border-border hover:border-primary/20"
                }`}
              >
                {/* Package name */}
                <h3 className="text-lg font-light tracking-wide text-foreground mb-2">
                  {pkg.name}
                </h3>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-primary text-sm">$</span>
                  <span className="text-4xl font-extralight text-foreground tracking-tight">
                    {pkg.price}
                  </span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm font-light mb-8 leading-relaxed">
                  {pkg.description}
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-border mb-8" />

                {/* Features */}
                <ul className="space-y-4 mb-10">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className="text-sm text-muted-foreground font-light">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant={pkg.featured ? "default" : "outline"}
                  className="w-full tracking-widest"
                >
                  Book Consultation
                </Button>
              </div>

              {/* Subtle glow for featured */}
              {pkg.featured && (
                <div className="absolute -inset-px bg-primary/5 blur-xl -z-10" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground/60 text-sm font-light">
            Custom packages available for destination weddings, commercial campaigns, and multi-day shoots.
          </p>
          <p className="text-primary text-sm tracking-widest uppercase mt-4">
            <a href="#contact" className="border-b border-primary/30 pb-1 hover:border-primary transition-colors">
              Let&apos;s discuss your project
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
