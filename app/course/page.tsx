import ProductShowcase from "@/components/blocks/product-showcase";
import { Button } from "@/components/ui/button";

export default function CoursePage() {
  return (
    <main className="pt-20">
      {/* Hero Section - Product Showcase */}
      <ProductShowcase />

      {/* Course Details Section */}
      <section className="relative w-full py-24 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-6 font-light">
              What You&apos;ll Experience
            </p>
            <h2 className="text-3xl md:text-4xl font-extralight tracking-tight mb-6">
              Your 7-Day Transformation
            </h2>
            <div className="w-16 h-px bg-primary/30 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                day: "Days 1-2",
                title: "Foundation",
                description:
                  "Begin with gentle guided meditations that help you reconnect with your body and release self-criticism.",
              },
              {
                day: "Days 3-4",
                title: "Awakening",
                description:
                  "Explore exercises designed to help you see yourself through a lens of compassion and appreciation.",
              },
              {
                day: "Days 5-6",
                title: "Embodiment",
                description:
                  "Practice movement and breathwork that celebrates your unique beauty and builds lasting confidence.",
              },
              {
                day: "Day 7",
                title: "Integration",
                description:
                  "Bring everything together with a powerful session that anchors your transformation for life.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 bg-background rounded-2xl border border-border/50 hover:border-primary/30 transition-colors"
              >
                <p className="text-primary text-xs tracking-[0.2em] uppercase mb-3 font-light">
                  {item.day}
                </p>
                <h3 className="text-xl font-light tracking-wide mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground font-light text-lg max-w-2xl mx-auto">
              Each session is carefully crafted to guide you deeper into
              self-love, helping you shed limiting beliefs and embrace your
              authentic radiance.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative w-full py-24 px-6 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-3xl rounded-full" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-6 font-light">
              Investment in Yourself
            </p>
            <h2 className="text-3xl md:text-4xl font-extralight tracking-tight mb-6">
              Choose Your Path
            </h2>
            <div className="w-16 h-px bg-primary/30 mx-auto" />
          </div>

          <div className="bg-background border border-border/50 rounded-3xl p-10 text-center hover:border-primary/30 transition-colors">
            <p className="text-primary text-xs tracking-[0.2em] uppercase mb-4 font-light">
              Complete Course
            </p>
            <div className="mb-6">
              <span className="text-5xl md:text-6xl font-extralight tracking-tight">
                $97
              </span>
              <span className="text-muted-foreground font-light ml-2">
                one-time
              </span>
            </div>

            <ul className="space-y-4 mb-10 text-left max-w-sm mx-auto">
              {[
                "7 guided audio sessions",
                "Downloadable workbook & journal prompts",
                "Lifetime access to all materials",
                "Private community membership",
                "Bonus: Morning affirmation recordings",
              ].map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-muted-foreground font-light"
                >
                  <span className="text-primary mt-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <Button size="lg" className="min-w-64 tracking-widest">
              Begin Your Journey
            </Button>

            <p className="text-muted-foreground/60 text-xs tracking-wider mt-6">
              30-day money-back guarantee
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative w-full py-24 px-6 bg-muted/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tight mb-6 leading-tight">
            Ready to Embrace Your{" "}
            <span className="text-primary font-light italic">Radiance</span>?
          </h2>
          <p className="text-muted-foreground font-light text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Join thousands of women who have transformed their relationship
            with themselves. Your journey to feeling beautiful and confident
            starts today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <Button size="lg" className="min-w-52 tracking-widest">
              Get Instant Access
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="min-w-52 tracking-widest"
            >
              Have Questions?
            </Button>
          </div>

          <p className="text-muted-foreground/60 text-xs tracking-widest uppercase">
            Secure checkout • Instant access • Lifetime updates
          </p>
        </div>
      </section>
    </main>
  );
}
