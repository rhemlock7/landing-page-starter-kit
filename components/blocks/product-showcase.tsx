import AudioPlayer from "../custom/audio-player";
import CTASection from "../custom/cta-section";

export default function ProductShowcase() {
  

  return (
    <section className="relative w-full py-32 px-6 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-3xl rounded-full" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/3 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-6 font-light">
            Exclusive Preview
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight tracking-tight mb-6 leading-tight">
            <span className="block">Embrace Your</span>
            <span className="text-primary font-light italic">Radiance</span>
          </h2>
          <div className="w-16 h-px bg-primary/30 mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed text-lg">
            A transformative 7-day journey designed to help you reconnect with
            your inner confidence and feel beautifully comfortable in your own skin.
          </p>
        </div>

        {/* Audio Player Card */}
        <AudioPlayer />

        {/* Course highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "7 Days",
              description: "Guided audio sessions",
            },
            {
              title: "Transform",
              description: "Your relationship with self",
            },
            {
              title: "Lifetime",
              description: "Access included",
            },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <h4 className="text-2xl font-light tracking-wide text-foreground mb-2">
                {item.title}
              </h4>
              <p className="text-muted-foreground text-sm tracking-wider font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <CTASection
          primaryLabel="Get the Full Course"
          secondaryLabel="Learn More"
          subtitle="Join thousands of women on their journey"
        />
      </div>
    </section>
  );
}
