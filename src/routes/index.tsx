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

function thumbnailFor(url: string) {
  const encoded = encodeURIComponent(url);
  return `https://s.wordpress.com/mshots/v1/${encoded}?w=1200&h=900`;
}

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <SiteHeader />

      {/* Outer grid frame — mimics Crescent's dashed columns */}
      <div className="mx-auto max-w-[1280px] border-x border-dashed border-grid-line">
        {/* HERO */}
        <section className="border-b border-dashed border-grid-line px-6 md:px-12 pt-16 md:pt-24 pb-16 md:pb-24">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <p className="text-[14px] text-muted-foreground mb-6">Communicative Designer</p>
              <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-semibold tracking-[-0.02em] leading-[1.05] text-foreground">
                How Olayemi turns brand vision into products that ship and brands that speak wow.
              </h1>
            </div>
            <div className="aspect-square w-full rounded-2xl overflow-hidden bg-muted relative">
              <img
                src="https://s.wordpress.com/mshots/v1/https%3A%2F%2Fdesigners.guru?w=1400&h=1400"
                alt="Featured work — Guru Designers"
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>

          {/* Stat cards */}
          <div className="grid sm:grid-cols-2 gap-5 mt-12 max-w-3xl">
            <div className="rounded-2xl bg-stat-blue p-7 min-h-[180px] flex flex-col justify-between">
              <div>
                <p className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">10+ years</p>
                <p className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">shipping</p>
              </div>
              <p className="text-[14px] text-foreground/70 mt-6">across brand, product UI, and AI systems</p>
            </div>
            <div className="rounded-2xl bg-stat-green p-7 min-h-[180px] flex flex-col justify-between">
              <div>
                <p className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">Available</p>
                <p className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">for new work</p>
              </div>
              <p className="text-[14px] text-foreground/70 mt-6">accepting 2-3 engagements this quarter</p>
            </div>
          </div>
        </section>

        {/* QUOTE + ABOUT */}
        <section className="grid lg:grid-cols-2 border-b border-dashed border-grid-line">
          {/* About card */}
          <div className="border-b lg:border-b-0 lg:border-r border-dashed border-grid-line p-8 md:p-12">
            <div className="rounded-2xl bg-card border border-border p-8">
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="inline-block h-6 w-6 rounded-full border-2 border-foreground" />
                <span className="font-semibold tracking-tight">Olayemi Awoyemi</span>
              </div>
              <p className="text-[13px] text-muted-foreground mb-2">About</p>
              <p className="text-[15px] leading-relaxed text-foreground/85">
                Olayemi is a versatile communicative designer and technical product manager based in Ile-Ife. He works with founders and teams across Africa, the US, and beyond — pairing design discipline with the technical depth to ship products that hold up.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6 pt-6 border-t border-dashed border-grid-line">
                <div>
                  <p className="text-[12px] uppercase tracking-widest text-muted-foreground mb-1">Based in</p>
                  <p className="text-sm font-medium">Ile-Ife, Nigeria</p>
                </div>
                <div>
                  <p className="text-[12px] uppercase tracking-widest text-muted-foreground mb-1">Working since</p>
                  <p className="text-sm font-medium">2015</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="p-8 md:p-12 flex items-center bg-secondary/40">
            <div>
              <blockquote className="text-2xl md:text-[32px] leading-[1.25] tracking-[-0.01em] text-foreground/90 font-medium">
                "I meet demands efficiently and in record time — pairing design discipline with the technical depth to ship products that hold up."
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-11 w-11 rounded-full bg-foreground text-background flex items-center justify-center font-semibold text-sm">OA</div>
                <div>
                  <p className="font-semibold text-[15px] leading-tight">Olayemi Awoyemi</p>
                  <p className="text-[13px] text-muted-foreground">Communicative Designer & Product Manager</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="border-b border-dashed border-grid-line px-6 md:px-12 py-16 md:py-24">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <p className="text-[13px] text-muted-foreground mb-3">Services</p>
              <h2 className="text-3xl md:text-[40px] font-semibold tracking-[-0.02em] leading-tight">
                Tailored for growth, built to ship.
              </h2>
            </div>
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-10 gap-y-8">
              {services.map((s) => (
                <div key={s.title} className="border-t border-dashed border-grid-line pt-5">
                  <h3 className="font-semibold text-[17px] mb-2">{s.title}</h3>
                  <p className="text-[14px] text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="border-b border-dashed border-grid-line px-6 md:px-12 py-16 md:py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-[13px] text-muted-foreground mb-3">Selected works</p>
              <h2 className="text-3xl md:text-[40px] font-semibold tracking-[-0.02em] leading-tight">Proof of concept.</h2>
            </div>
            <a href="#contact" className="text-[14px] font-medium text-primary hover:opacity-80 transition-opacity">
              Start a project →
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((p) => (
              <a
                key={p.title}
                href={p.url}
                target={p.url.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                className="group block"
              >
                <div className={`relative overflow-hidden aspect-[4/3] rounded-2xl ${p.isCta ? "bg-primary flex items-center justify-center text-primary-foreground p-10" : "bg-muted"}`}>
                  {!p.isCta && (
                    <img
                      src={thumbnailFor(p.url)}
                      alt={p.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  )}
                  {p.isNew && (
                    <span className="absolute top-5 left-5 z-20 bg-stat-green text-foreground text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      New
                    </span>
                  )}
                  {p.isCta && (
                    <div className="text-center">
                      <h3 className="text-2xl md:text-3xl font-semibold mb-3 tracking-tight">Your project should be next.</h3>
                      <p className="text-primary-foreground/80">Let's craft something memorable.</p>
                    </div>
                  )}
                </div>
                <div className="mt-5 flex justify-between items-start gap-4">
                  <div>
                    <h3 className="font-semibold text-[17px] mb-1">{p.title}</h3>
                    <p className="text-[14px] text-muted-foreground">{p.blurb}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-[13px] font-medium">{p.year}</p>
                    <p className="text-[11px] uppercase tracking-widest text-muted-foreground mt-1">{p.tags.join(" · ")}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="about" className="border-b border-dashed border-grid-line px-6 md:px-12 py-16 md:py-24">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <p className="text-[13px] text-muted-foreground mb-3">Experience</p>
              <h2 className="text-3xl md:text-[40px] font-semibold tracking-[-0.02em] leading-tight">
                A track record across teams and continents.
              </h2>
            </div>
            <div className="lg:col-span-8">
              {experience.map((e) => (
                <div key={e.co + e.period} className="flex flex-col sm:flex-row sm:items-center justify-between py-5 border-t border-dashed border-grid-line first:border-t-0">
                  <div>
                    <h4 className="font-semibold text-[16px]">{e.co}</h4>
                    <p className="text-[14px] text-muted-foreground">{e.role}</p>
                  </div>
                  <p className="text-[13px] font-medium text-muted-foreground mt-2 sm:mt-0">{e.period}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="px-6 md:px-12 py-20 md:py-32">
          <div className="rounded-3xl bg-foreground text-background p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.02em] mb-6">
              Ready to build something extraordinary?
            </h2>
            <p className="text-base md:text-lg text-background/70 mb-10 max-w-xl mx-auto">
              Currently accepting new projects and consulting engagements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:awoyemi.olayemi@gmail.com"
                className="bg-primary text-primary-foreground px-7 py-3.5 rounded-full text-[15px] font-medium hover:opacity-90 transition-opacity"
              >
                Get in touch
              </a>
              <a
                href="tel:+2348141894696"
                className="text-[15px] font-medium text-background/80 hover:text-background transition-colors"
              >
                +234 814 189 4696
              </a>
            </div>
          </div>
        </section>
      </div>

      <SiteFooter />
    </div>
  );
}
