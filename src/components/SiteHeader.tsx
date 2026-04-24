import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/#work", label: "Work" },
  { to: "/#services", label: "Services" },
  { to: "/#about", label: "About" },
  { to: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        <a href="/" className="font-serif text-xl tracking-tight">
          olayemi<span className="text-muted-foreground">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-10 text-sm">
          {nav.map((n) => (
            <a key={n.to} href={n.to} className="text-foreground/80 hover:text-foreground transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="mailto:awoyemi.olayemi@gmail.com"
          className="text-sm text-foreground/80 hover:text-foreground transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </header>
  );
}
