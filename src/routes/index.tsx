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

function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground tabular-nums">
      {n} — {label}
    </p>
  );
}

function thumbnailFor(url: string) {
  // WordPress.com mShots service — public, free, generates a screenshot of any URL
  const encoded = encodeURIComponent(url);
  return `https://s.wordpress.com/mshots/v1/${encoded}?w=1200&h=900`;
}

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SiteHeader />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 md:px-10 max-w-[1400px] mx-auto">
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-8">
          <span className="block md:inline">Communicative Designer</span>
          <span className="hidden md:inline"> · </span>
          <span className="block md:inline">Product Manager</span>
        </p>
        <h1 className="font-sans font-bold text-4xl md:text-5xl lg:text-[64px] leading-[1.02] tracking-[-0.03em]">
          Brands that<br />speak wow.
        </h1>
        <div className="mt-10 flex items-center gap-6">
          <a
            href="#work"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground rounded-full px-5 py-2.5 md:px-6 md:py-3 text-[12px] md:text-[13px] font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            See my Works
          </a>
          <span className="flex items-center gap-2 text-[12px] md:text-[13px] text-muted-foreground whitespace-nowrap">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for new projects.
          </span>
        </div>
      </section>

      {/* Intro paragraph */}
      <section className="px-6 md:px-10 max-w-[1400px] mx-auto pb-28">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-2">
            <SectionLabel n="01" label="Intro" />
          </div>
          <p className="md:col-span-10 text-xl md:text-2xl lg:text-[26px] leading-[1.45] tracking-[-0.015em] font-normal text-foreground/85">
            I'm <strong className="font-semibold text-foreground">Olayemi Awoyemi</strong> — a versatile communicative designer and technical product manager.
            I build <strong className="font-semibold text-foreground">high-converting brands</strong>, polished product interfaces, and <strong className="font-semibold text-foreground">AI-powered systems</strong>.
            Operating from Ile-Ife, working with clients across Africa, the US, and beyond.
          </p>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="px-6 md:px-10 max-w-[1400px] mx-auto pb-32 scroll-mt-24">
        <div className="grid md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-2">
            <SectionLabel n="02" label="Works" />
          </div>
          <h2 className="md:col-span-10 font-sans font-bold text-3xl md:text-4xl lg:text-[44px] tracking-[-0.03em]">Selected works.</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-16">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.url}
              target={p.url.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              className="group block"
            >
              <div className={`relative overflow-hidden aspect-[4/3] rounded-[12px] ${p.isCta ? "bg-gradient-to-br from-primary/10 via-secondary to-secondary border border-dashed border-foreground/20 flex items-center justify-center p-8" : "bg-secondary"}`}>
                {p.isNew && (
                  <span className="absolute top-4 left-4 z-20 bg-lime-300 text-black text-xs font-medium px-2 py-0.5 rounded-sm">
                    New
                  </span>
                )}
                {p.isCta ? (
                  <div className="text-center">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-4">Now booking</p>
                    <p className="font-sans font-bold text-2xl md:text-3xl tracking-[-0.025em] leading-[1.1]">
                      Your project<br />should be next.
                    </p>
                    <p className="mt-5 inline-flex items-center gap-1.5 text-[12px] font-medium text-foreground border-b border-foreground/40 pb-0.5">
                      Start a conversation →
                    </p>
                  </div>
                ) : (
                  <img
                    src={thumbnailFor(p.url)}
                    alt={`${p.title} website screenshot`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                )}
              </div>
              <div className="mt-5 flex items-start justify-between gap-6">
                <div>
                  <h3 className="font-sans font-semibold text-lg tracking-[-0.015em]">{p.title}</h3>
                  <p className="text-muted-foreground text-[13px] mt-1.5 leading-relaxed">{p.blurb}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-[13px] font-semibold tabular-nums">{p.year}</p>
                  <p className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground mt-1.5">
                    <span className="flex flex-col md:block text-right">
                      {p.tags.map((t, i) => (
                        <span key={t}>
                          {t}
                          {i < p.tags.length - 1 && <span className="hidden md:inline"> · </span>}
                        </span>
                      ))}
                    </span>
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-6 md:px-10 max-w-[1400px] mx-auto pb-32 scroll-mt-24">
        <div className="grid md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-2">
            <SectionLabel n="03" label="Services" />
          </div>
          <h2 className="md:col-span-10 font-sans font-bold text-3xl md:text-4xl lg:text-[44px] tracking-[-0.03em]">What I do.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((s) => (
            <div key={s.title} className="bg-background p-8 md:p-10">
              <h3 className="font-sans font-semibold text-lg tracking-[-0.015em]">{s.title}</h3>
              <p className="text-muted-foreground text-[13px] mt-3 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About / Experience */}
      <section id="about" className="px-6 md:px-10 max-w-[1400px] mx-auto pb-32 scroll-mt-24">
        <div className="grid md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-2">
            <SectionLabel n="04" label="About" />
          </div>
          <h2 className="md:col-span-10 font-sans font-bold text-2xl md:text-3xl lg:text-[36px] tracking-[-0.025em] leading-[1.25]">
            I'm Olayemi — I build <strong className="font-bold">brands</strong> and <strong className="font-bold">digital products</strong> that work.
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-8 mt-20">
          <p className="md:col-span-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Experience</p>
          <ul className="md:col-span-10 divide-y divide-border border-y border-border">
            {experience.map((e) => (
              <li key={e.co + e.period} className="grid grid-cols-12 gap-4 py-5">
                <span className="col-span-12 md:col-span-5 font-sans font-semibold text-lg tracking-[-0.015em]">{e.co}</span>
                <span className="col-span-7 md:col-span-4 text-muted-foreground text-[14px]">{e.role}</span>
                <span className="col-span-5 md:col-span-3 text-right md:text-left text-muted-foreground text-[13px] tabular-nums">
                  {e.period}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid md:grid-cols-12 gap-8 mt-16">
          <p className="md:col-span-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Toolkit</p>
          <p className="md:col-span-10 text-[15px] md:text-base leading-relaxed text-muted-foreground">
            <strong className="font-semibold text-foreground">Design:</strong> Figma, Adobe Suite, Affinity Designer, Corel, Canva, WordPress, Excel.
            <br />
            <strong className="font-semibold text-foreground">Build:</strong> HTML, CSS, JavaScript, Lovable.dev, GitHub, Vercel, CPanel.
          </p>
        </div>
      </section>

      {/* Testimonial */}
      <section className="px-6 md:px-10 max-w-[1400px] mx-auto pb-32">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-2">
            <SectionLabel n="05" label="Note" />
          </div>
          <blockquote className="md:col-span-10 text-xl md:text-2xl lg:text-[28px] leading-[1.4] tracking-[-0.015em] font-normal text-muted-foreground">
            "I meet demands <strong className="font-semibold text-foreground">efficiently and in record time</strong> — pairing design discipline
            with the <strong className="font-semibold text-foreground">technical depth to ship products</strong> that hold up."
          </blockquote>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 md:px-10 max-w-[1400px] mx-auto pb-32 scroll-mt-24">
        <div className="grid md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-2">
            <SectionLabel n="06" label="Contact" />
          </div>
          <h2 className="md:col-span-10 font-sans font-bold text-4xl md:text-5xl lg:text-[64px] tracking-[-0.03em] leading-[1.02]">
            Have a project?<br />
            <span className="text-muted-foreground font-bold">Let's talk.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-start-3 md:col-span-10 flex flex-col md:flex-row md:flex-wrap md:items-center items-start gap-4">
            <a
              href="mailto:awoyemi.olayemi@gmail.com"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground rounded-full px-6 py-3 text-[13px] font-medium hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </a>
            <a
              href="mailto:awoyemi.olayemi@gmail.com"
              className="text-[13px] text-muted-foreground hover:text-foreground transition-colors"
            >
              awoyemi.olayemi@gmail.com
            </a>
            <a
              href="tel:+2348141894696"
              className="text-[13px] text-muted-foreground hover:text-foreground transition-colors tabular-nums"
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
