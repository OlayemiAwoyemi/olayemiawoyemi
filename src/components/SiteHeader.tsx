

const nav = [
  { to: "/#work", label: "Work" },
  { to: "/#services", label: "Services" },
  { to: "/#about", label: "About" },
  { to: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
        <a href="/" className="font-sans font-bold text-xl tracking-tight">
          Olayemi<span className="text-primary/40">.</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <a 
              key={n.to} 
              href={n.to} 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="mailto:awoyemi.olayemi@gmail.com"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
          >
            Log in
          </a>
          <a
            href="mailto:awoyemi.olayemi@gmail.com"
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Get started
          </a>
        </div>
      </div>
    </header>
  );
}

