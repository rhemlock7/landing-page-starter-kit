import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4">
      <div className="text-xl font-bold">logo</div>
      <Button>Get Started</Button>
    </nav>
  );
}
