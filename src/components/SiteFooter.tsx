export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 mt-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Olayemi Awoyemi. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="mailto:awoyemi.olayemi@gmail.com" className="hover:text-foreground transition-colors">
            awoyemi.olayemi@gmail.com
          </a>
          <a href="tel:+2348141894696" className="hover:text-foreground transition-colors">
            +234 814 189 4696
          </a>
        </div>
      </div>
    </footer>
  );
}
