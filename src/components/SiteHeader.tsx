const nav = [
  { to: "/#work", label: "Work" },
  { to: "/#services", label: "Services" },
  { to: "/#about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-dashed border-grid-line">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 font-sans font-semibold text-base tracking-tight">
          <span className="inline-block h-5 w-5 rounded-full border-2 border-foreground" />
          olayemi
        </a>

        <nav className="hidden md:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
          {nav.map((n) => (
            <a
              key={n.to}
              href={n.to}
              className="text-[15px] font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <a
            href="mailto:awoyemi.olayemi@gmail.com"
            className="text-[15px] font-medium text-foreground/80 hover:text-foreground transition-colors hidden sm:block"
          >
            Login
          </a>
          <a
            href="mailto:awoyemi.olayemi@gmail.com"
            className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-[15px] font-medium hover:opacity-90 transition-opacity"
          >
            Get started
          </a>
        </div>
      </div>
    </header>
  );
}
