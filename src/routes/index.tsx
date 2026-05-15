import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Olayemi Awoyemi — Communicative Designer & Product Manager" },
      {
        name: "description",
        content:
          "Portfolio of Olayemi Awoyemi — Versatile Communicative Designer and Technical Product Manager building brands, products, and AI-powered systems.",
      },
      { property: "og:title", content: "Olayemi Awoyemi — Communicative Designer" },
      {
        property: "og:description",
        content: "Brands, products, and AI-powered systems that ship.",
      },
    ],
  }),
  component: Home,
});

const projects = [
  {
    title: "Guru Designers",
    blurb: "Branding, web design & AI automation agency.",
    year: "2026",
    tags: ["Brand", "Web Design"],
    url: "https://designers.guru",
    isNew: true,
  },
  {
    title: "Green People",
    blurb: "Political awareness platform for electoral credibility in Nigeria.",
    year: "2026",
    tags: ["Web Design", "Civic Tech"],
    url: "https://greenpeople.ng",
  },
  {
    title: "Prepper Learning",
    blurb: "A mobile app that helps users learn the way they chat.",
    year: "2023",
    tags: ["Product UI", "Mobile"],
    url: "https://prepperlearning.com",
  },
  {
    title: "HouseFada",
    blurb: "Multiservice platform for premium living solutions in Nigeria.",
    year: "2026",
    tags: ["Web Design", "Brand"],
    url: "https://housefada.com",
  },
  {
    title: "Jikona Evalora",
    blurb: "Data analytics & research firm — rigorous M&E across Africa.",
    year: "2026",
    tags: ["Brand", "Web Design"],
    url: "https://jikonaevalora.com",
  },
  {
    title: "Your project should be next",
    blurb: "Let's craft something memorable — brand, product, or AI-powered system.",
    year: "2026",
    tags: ["Available", "Let's Talk"],
    url: "mailto:awoyemi.olayemi@gmail.com",
    isCta: true,
  },
];

const experience = [
  { co: "Guru Designers", role: "Managing Partner", period: "Feb 2026 — Present" },
  { co: "Moneymie", role: "Senior Graphics Designer", period: "Apr 2022 — Sep 2022" },
  { co: "Prepper Learning", role: "Technical Product Manager", period: "Feb 2020 — Present" },
  { co: "WSPOT", role: "Head, Projects", period: "Jan 2018 — Feb 2020" },
  { co: "Business Day Newspapers", role: "Lead Designer, Digital Transformation", period: "Mar 2017 — Dec 2017" },
  { co: "Prunedge", role: "Lead, UI/UX", period: "Mar 2015 — Dec 2016" },
];

const services = [
  { title: "Brand & Identity", desc: "Distinctive visual systems that resonate and endure." },
  { title: "Web Design", desc: "Marketing sites and portfolios — designed to convert." },
  { title: "Product UI / UX", desc: "Interfaces that feel intuitive from the first click." },
  { title: "Technical Product Management", desc: "From requirements to ship — with QA discipline." },
  { title: "AI Automation", desc: "AI-powered systems that work harder than entire teams." },
  { title: "Webmaster & Hosting", desc: "Infrastructure, CPanel, WordPress, deployment." },
];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
      {children}
    </h2>
  );
}

function thumbnailFor(url: string) {
  // WordPress.com mShots service — public, free, generates a screenshot of any URL
  const encoded = encodeURIComponent(url);
  return `https://s.wordpress.com/mshots/v1/${encoded}?w=1200&h=900`;
}

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <SiteHeader />

      {/* Hero */}
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <p className="text-[11px] uppercase tracking-[0.25em] font-bold text-muted-foreground mb-8 font-mono">
            Case Study — Olayemi Awoyemi
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold tracking-[-0.035em] leading-[1.05] mb-12 max-w-[900px] mx-auto">
            How Olayemi builds brands that speak wow and products that ship.
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="#work"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-semibold hover:opacity-90 transition-opacity"
            >
              Read full portfolio
            </a>
            <span className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              Available for new projects
            </span>
          </div>
        </div>
      </section>

      {/* Quote Section - Impactful like Crescent */}
      <section className="py-24 px-6 border-y border-border/50">
        <div className="max-w-[900px] mx-auto">
          <blockquote className="text-2xl md:text-5xl font-medium italic leading-tight text-center text-foreground/90 font-serif">
            "I meet demands <span className="text-foreground font-bold not-italic">efficiently and in record time</span> — pairing design discipline with the technical depth to <span className="text-foreground font-bold not-italic">ship products</span> that hold up."
          </blockquote>
          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center font-bold text-lg">OA</div>
            <div className="text-left">
              <p className="font-bold text-sm">Olayemi Awoyemi</p>
              <p className="text-xs text-muted-foreground">Communicative Designer & Product Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Story Content - Two Column Layout */}
      <section className="py-32 px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-12 gap-20">
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-12">
            <div>
              <SectionHeading>Transforming brand vision into digital reality</SectionHeading>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                I'm <strong>Olayemi Awoyemi</strong> — a versatile communicative designer and technical product manager. 
                Operating from Ile-Ife, I work with clients across Africa, the US, and beyond to build high-converting brands and polished product interfaces.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mt-6">
                My approach combines the creative discipline of branding with the rigorous execution of product management. Whether it's an AI-powered system or a boutique visual identity, I ensure every pixel serves a purpose.
              </p>
            </div>

            <div>
              <SectionHeading>Services tailored for growth</SectionHeading>
              <div className="grid sm:grid-cols-2 gap-8">
                {services.map((s) => (
                  <div key={s.title} className="group">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeading>Experience that speaks for itself</SectionHeading>
              <div className="space-y-6">
                {experience.map((e) => (
                  <div key={e.co + e.period} className="flex flex-col sm:flex-row sm:items-center justify-between py-4 border-b border-border/50">
                    <div>
                      <h4 className="font-bold">{e.co}</h4>
                      <p className="text-sm text-muted-foreground">{e.role}</p>
                    </div>
                    <p className="text-sm font-medium text-muted-foreground mt-2 sm:mt-0 font-mono">{e.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar - Stats & Key Results */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 space-y-8 bg-secondary/30 p-8 md:p-12 rounded-3xl border border-border/50">
              <h3 className="text-xl font-bold mb-8">Key Highlights</h3>
              <div className="space-y-12">
                <div>
                  <p className="text-4xl md:text-5xl font-bold tracking-tight mb-2 font-mono">2026</p>
                  <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">Current Agency Peak</p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-bold tracking-tight mb-2 font-mono">10+</p>
                  <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">Global Jurisdictions</p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-bold tracking-tight mb-2 font-mono">100%</p>
                  <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">QA Discipline Ship Rate</p>
                </div>
              </div>

              
              <div className="pt-8 border-t border-border/50">
                <h4 className="font-bold text-sm mb-4 uppercase tracking-wider">Toolkit</h4>
                <p className="text-sm text-muted-foreground leading-relaxed font-mono">
                  <strong>Design:</strong> Figma, Adobe Suite, Affinity, WordPress.<br/>
                  <strong>Build:</strong> HTML/CSS, JS, Lovable, GitHub, Vercel.
                </p>
              </div>

              <a
                href="mailto:awoyemi.olayemi@gmail.com"
                className="block w-full bg-foreground text-background text-center py-4 rounded-full font-bold hover:opacity-90 transition-opacity mt-8"
              >
                Book a strategy call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="work" className="py-32 px-6 bg-secondary/10">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-muted-foreground mb-4">Selected Works</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Proof of concept.</h2>
            </div>
            <a href="#contact" className="text-sm font-bold border-b-2 border-foreground pb-1 hover:text-muted-foreground hover:border-muted-foreground transition-all">
              View all projects
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {projects.map((p) => (
              <a
                key={p.title}
                href={p.url}
                target={p.url.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                className="group block"
              >
                <div className={`relative overflow-hidden aspect-[16/10] rounded-2xl ${p.isCta ? "bg-primary flex items-center justify-center text-primary-foreground p-12" : "bg-muted"}`}>
                  {!p.isCta && (
                    <img
                      src={thumbnailFor(p.url)}
                      alt={p.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  )}
                  {p.isNew && (
                    <span className="absolute top-6 left-6 z-20 bg-lime-400 text-black text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider font-mono">
                      New
                    </span>
                  )}
                  {p.isCta && (
                    <div className="text-center">
                      <h3 className="text-3xl font-bold mb-4 tracking-tight">Your project should be next.</h3>
                      <p className="text-primary-foreground/80 font-medium">Let's craft something memorable.</p>
                    </div>
                  )}
                </div>
                <div className="mt-6 flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-xl mb-1">{p.title}</h3>
                    <p className="text-sm text-muted-foreground">{p.blurb}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold font-mono">{p.year}</p>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1 font-mono">{p.tags.join(" · ")}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-40 px-6 text-center">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            Ready to build something <span className="text-primary/40 italic">extraordinary?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            I'm currently accepting new projects and consulting engagements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="mailto:awoyemi.olayemi@gmail.com"
              className="bg-primary text-primary-foreground px-10 py-5 rounded-full text-lg font-bold hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </a>
            <a
              href="tel:+2348141894696"
              className="text-lg font-bold hover:text-muted-foreground transition-colors"
            >
              +234 814 189 4696
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

