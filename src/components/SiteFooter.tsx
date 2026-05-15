export function SiteFooter() {
  return (
    <footer className="bg-background pt-24 pb-12 border-t border-border/50">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <a href="/" className="font-sans font-bold text-2xl tracking-tight block mb-6">
              Olayemi<span className="text-primary/40">.</span>
            </a>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Building brands, products, and AI-powered systems that speak wow and deliver results.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-sm mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-foreground transition-colors">Brand & Identity</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">Web Design</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">Product UI/UX</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">AI Automation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-foreground transition-colors">About</a></li>
              <li><a href="#work" className="hover:text-foreground transition-colors">Customers</a></li>
              <li><a href="mailto:awoyemi.olayemi@gmail.com" className="hover:text-foreground transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-6">Social</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Dribbble</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-muted-foreground font-medium">
          <p>© {new Date().getFullYear()} Olayemi Awoyemi. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

