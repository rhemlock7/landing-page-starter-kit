import Link from "next/link";
import NavCTAButton from "../custom/nav-cta-button";

const navLinks = [
  { href: "#portfolio", label: "Portfolio" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="group">
            <span className="text-xl tracking-[0.2em] uppercase font-extralight text-foreground group-hover:text-primary transition-colors">
              Studio
            </span>
          </Link>

          {/* Navigation Links */}
          {/* <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors font-light"
              >
                {link.label}
              </Link>
            ))}
          </div> */}

          {/* CTA */}
          <NavCTAButton />
        </div>
      </div>
    </nav>
  );
}
