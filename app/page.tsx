import Hero from "@/components/blocks/hero";
import Portfolio from "@/components/blocks/portfolio";
import Pricing from "@/components/blocks/pricing";
import ProductShowcase from "@/components/blocks/product-showcase";

export default function Home() {
  return (
    <main className="pt-20">
      <Hero />
      <ProductShowcase />
      <Portfolio />
      <Pricing />
    </main>
  );
}
