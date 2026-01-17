import { Button } from "../ui/button";

const audioProducts = [
  {
    id: 1,
    title: "Midnight Dreams",
    category: "Ambient",
    duration: "3:24",
    waveform: [40, 65, 30, 80, 55, 90, 45, 70, 35, 85, 50, 75, 40, 60, 45],
  },
  {
    id: 2,
    title: "Urban Pulse",
    category: "Electronic",
    duration: "4:12",
    waveform: [70, 45, 85, 35, 90, 50, 75, 40, 80, 55, 65, 45, 70, 85, 50],
  },
  {
    id: 3,
    title: "Ocean Waves",
    category: "Nature",
    duration: "5:00",
    waveform: [35, 55, 45, 60, 50, 70, 55, 65, 50, 75, 60, 70, 55, 65, 50],
  },
  {
    id: 4,
    title: "City Nights",
    category: "Lo-Fi",
    duration: "2:58",
    waveform: [50, 70, 40, 85, 55, 75, 45, 90, 60, 80, 50, 70, 45, 65, 55],
  },
];

function WaveformVisual({ bars, color }: { bars: number[]; color: string }) {
  return (
    <div className="flex items-center justify-center gap-[3px] h-24">
      {bars.map((height, i) => (
        <div
          key={i}
          className="w-2 rounded-full transition-all duration-300 group-hover:animate-pulse"
          style={{
            height: `${height}%`,
            backgroundColor: color,
            animationDelay: `${i * 50}ms`,
          }}
        />
      ))}
    </div>
  );
}

function PlayButton() {
  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
        <svg
          className="w-6 h-6 text-primary ml-1"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>
  );
}

const cardColors = [
  { bg: "bg-gradient-to-br from-violet-500 to-purple-700", wave: "#c4b5fd" },
  { bg: "bg-gradient-to-br from-amber-400 to-orange-600", wave: "#fde68a" },
  { bg: "bg-gradient-to-br from-emerald-400 to-teal-600", wave: "#a7f3d0" },
  { bg: "bg-gradient-to-br from-rose-400 to-pink-600", wave: "#fecdd3" },
];

export default function ProductShowcase() {
  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Premium Collection
          </p>
          <h2 className="text-4xl font-bold mb-4">Sounds That Inspire</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our curated library of high-quality audio files, crafted by
            world-class sound designers and musicians.
          </p>
        </div>

        {/* Audio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audioProducts.map((product, index) => (
            <div
              key={product.id}
              className="group relative rounded-2xl overflow-hidden cursor-pointer transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl"
            >
              {/* Card Visual */}
              <div
                className={`${cardColors[index].bg} p-6 aspect-square flex flex-col justify-between`}
              >
                {/* Category Badge */}
                <span className="self-start px-3 py-1 text-xs font-medium bg-white/20 text-white rounded-full backdrop-blur-sm">
                  {product.category}
                </span>

                {/* Waveform Visualization */}
                <WaveformVisual
                  bars={product.waveform}
                  color={cardColors[index].wave}
                />

                {/* Sound Rings Animation */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
                  <div className="w-32 h-32 rounded-full border-2 border-white/40 animate-ping" />
                </div>

                <PlayButton />
              </div>

              {/* Card Info */}
              <div className="bg-card p-4 border border-t-0 border-border rounded-b-2xl">
                <h3 className="font-semibold text-lg">{product.title}</h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm text-muted-foreground">
                    {product.duration}
                  </span>
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4 text-primary"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                    </svg>
                    <span className="text-sm font-medium">Preview</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Access over 10,000+ premium audio files
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button variant="outline" size="lg">
              Browse Library
            </Button>
            <Button size="lg">Start Free Trial</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
