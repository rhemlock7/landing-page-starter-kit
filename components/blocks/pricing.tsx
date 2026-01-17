import { Button } from "../ui/button";

const features = [
  "Unlimited downloads",
  "Access to 10,000+ audio files",
  "New sounds added weekly",
  "Commercial license included",
  "Stem files & project files",
  "Priority support",
  "Cancel anytime",
];

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-primary flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Simple Pricing
          </p>
          <h2 className="text-4xl font-bold mb-4">
            One plan. Everything included.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            No hidden fees, no complicated tiers. Get full access to our entire
            library with a single subscription.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="relative max-w-lg mx-auto">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 via-violet-500/50 to-primary/50 rounded-3xl blur-lg opacity-30" />

          <div className="relative bg-card border-2 border-primary/20 rounded-3xl p-8 md:p-10 shadow-xl">
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-primary text-primary-foreground text-sm font-semibold px-4 py-1.5 rounded-full">
                Most Popular
              </span>
            </div>

            {/* Price */}
            <div className="text-center mb-8 pt-4">
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl md:text-6xl font-bold">$19</span>
                <span className="text-muted-foreground text-lg">/month</span>
              </div>
              <p className="text-muted-foreground mt-2">
                Billed monthly. Cancel anytime.
              </p>
            </div>

            {/* Features */}
            <ul className="space-y-4 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <CheckIcon />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Button size="lg" className="w-full text-lg py-6">
              Start Your Free Trial
            </Button>

            <p className="text-center text-sm text-muted-foreground mt-4">
              14-day free trial. No credit card required.
            </p>
          </div>
        </div>

        {/* Trust signals */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <span>Secure payment</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Instant access</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span>Loved by 50,000+ creators</span>
          </div>
        </div>
      </div>
    </section>
  );
}
