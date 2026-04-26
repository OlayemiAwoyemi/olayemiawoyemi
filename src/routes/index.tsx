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
    title: "Hello CV",
    blurb: "Domain administrator for professional .cv pages — 150+ countries.",
    year: "2025",
    tags: ["Brand Strategy", "UX"],
    url: "https://hello.cv",
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
];

const experience = [
  { co: "Guru Designers", role: "Managing Partner", period: "Feb 2026 — Present" },
  { co: "Hello CV", role: "Chief Design & Brand Officer", period: "Jan 2025 — Dec 2025" },
  { co: "Go54 (Whogohost)", role: "Head of Design", period: "Sep 2022 — Dec 2024" },
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
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-8">Communicative Designer · Product Manager</p>
        <h1 className="font-sans font-bold text-4xl md:text-5xl lg:text-[64px] leading-[1.02] tracking-[-0.03em]">
          Brands that<br />speak wow.
        </h1>
        <div className="mt-10 flex items-center gap-6">
          <a
            href="#work"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground rounded-full px-6 py-3 text-[13px] font-medium hover:opacity-90 transition-opacity"
          >
            See the Work
          </a>
          <span className="flex items-center gap-2 text-[13px] text-muted-foreground">
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
            <SectionLabel n="02" label="Work" />
          </div>
          <h2 className="md:col-span-10 font-sans font-bold text-3xl md:text-4xl lg:text-[44px] tracking-[-0.03em]">Selected work.</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-16">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden bg-secondary aspect-[4/3] rounded-[12px]">
                {p.isNew && (
                  <span className="absolute top-4 left-4 z-20 bg-lime-300 text-black text-xs font-medium px-2 py-0.5 rounded-sm">
                    New
                  </span>
                )}
                <img
                  src={thumbnailFor(p.url)}
                  alt={`${p.title} website screenshot`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-5 flex items-start justify-between gap-6">
                <div>
                  <h3 className="font-sans font-semibold text-lg tracking-[-0.015em]">{p.title}</h3>
                  <p className="text-muted-foreground text-[13px] mt-1.5 leading-relaxed">{p.blurb}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-[13px] font-semibold tabular-nums">{p.year}</p>
                  <p className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground mt-1.5">{p.tags.join(" · ")}</p>
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
          <h2 className="md:col-span-10 font-serif font-light text-3xl md:text-4xl lg:text-[44px] tracking-[-0.025em]">What I <em className="italic">do.</em></h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((s) => (
            <div key={s.title} className="bg-background p-8 md:p-10">
              <h3 className="font-serif font-normal text-lg tracking-[-0.015em]">{s.title}</h3>
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
          <h2 className="md:col-span-10 font-serif font-light text-2xl md:text-3xl lg:text-[36px] tracking-[-0.02em] leading-[1.25]">
            I'm Olayemi — I build <em className="italic">brands</em> and <em className="italic">digital products</em> that work.
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-8 mt-20">
          <p className="md:col-span-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Experience</p>
          <ul className="md:col-span-10 divide-y divide-border border-y border-border">
            {experience.map((e) => (
              <li key={e.co + e.period} className="grid grid-cols-12 gap-4 py-5">
                <span className="col-span-12 md:col-span-5 font-serif font-normal text-lg tracking-[-0.015em]">{e.co}</span>
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
            <span className="text-foreground">Design —</span> Figma, Adobe Suite, Affinity Designer, Corel, Canva, WordPress, CPanel, Excel.
            <br />
            <span className="text-foreground">Build —</span> HTML, CSS, JavaScript, Lovable.dev, GitHub, Vercel.
          </p>
        </div>
      </section>

      {/* Testimonial */}
      <section className="px-6 md:px-10 max-w-[1400px] mx-auto pb-32">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-2">
            <SectionLabel n="05" label="Note" />
          </div>
          <blockquote className="md:col-span-10 font-serif text-xl md:text-2xl lg:text-[28px] leading-[1.4] tracking-[-0.015em] font-light text-muted-foreground">
            <span className="italic">"I meet demands <span className="text-foreground not-italic">efficiently and in record time</span> — pairing design discipline
            with the <span className="text-foreground not-italic">technical depth to ship products</span> that hold up."</span>
          </blockquote>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 md:px-10 max-w-[1400px] mx-auto pb-32 scroll-mt-24">
        <div className="grid md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-2">
            <SectionLabel n="06" label="Contact" />
          </div>
          <h2 className="md:col-span-10 font-serif font-light text-4xl md:text-5xl lg:text-[64px] tracking-[-0.025em] leading-[1.02]">
            Have a project?<br />
            <em className="italic text-muted-foreground">Let's talk.</em>
          </h2>
        </div>
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-start-3 md:col-span-10 flex flex-wrap items-center gap-4">
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
