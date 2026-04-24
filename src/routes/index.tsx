import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import greenpeople from "@/assets/project-greenpeople.jpg";
import prepper from "@/assets/project-prepper.jpg";
import housefada from "@/assets/project-housefada.jpg";
import jikona from "@/assets/project-jikona.jpg";
import hellocv from "@/assets/project-hellocv.jpg";
import guru from "@/assets/project-guru.jpg";

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
    img: guru,
    url: "https://designers.guru",
    isNew: true,
  },
  {
    title: "Hello CV",
    blurb: "Domain administrator for professional .cv pages — 150+ countries.",
    year: "2025",
    tags: ["Brand Strategy", "UX"],
    img: hellocv,
    url: "https://hello.cv",
    isNew: true,
  },
  {
    title: "Green People",
    blurb: "Political awareness platform for electoral credibility in Nigeria.",
    year: "2024",
    tags: ["Web Design", "Civic Tech"],
    img: greenpeople,
    url: "https://greenpeople.ng",
  },
  {
    title: "Prepper Learning",
    blurb: "A mobile app that helps users learn the way they chat.",
    year: "2023",
    tags: ["Product UI", "Mobile"],
    img: prepper,
    url: "https://prepperlearning.com",
  },
  {
    title: "HouseFada",
    blurb: "Multiservice platform for premium living solutions in Nigeria.",
    year: "2023",
    tags: ["Web Design", "Brand"],
    img: housefada,
    url: "https://housefada.com",
  },
  {
    title: "Jikona Evalora",
    blurb: "Data analytics & research firm — rigorous M&E across Africa.",
    year: "2022",
    tags: ["Brand", "Web Design"],
    img: jikona,
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
    <p className="text-sm text-muted-foreground tracking-wide">
      {n} — {label}
    </p>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SiteHeader />

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 md:px-10 max-w-[1400px] mx-auto">
        <p className="text-sm text-muted-foreground mb-8">Communicative Designer · Product Manager</p>
        <h1 className="font-serif text-[14vw] md:text-[10vw] leading-[0.95] tracking-tight">
          Brands that<br />speak loud.
        </h1>
        <div className="mt-12 flex items-center gap-6">
          <a
            href="#work"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground rounded-full px-7 py-3.5 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            See the Work
          </a>
          <span className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for new projects.
          </span>
        </div>
      </section>

      {/* Intro paragraph */}
      <section className="px-6 md:px-10 max-w-[1400px] mx-auto pb-32">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-2">
            <SectionLabel n="01" label="Intro" />
          </div>
          <p className="md:col-span-10 font-serif text-3xl md:text-5xl leading-[1.15] tracking-tight">
            I'm Olayemi Awoyemi — a versatile communicative designer and technical product manager.
            I build high-converting brands, polished product interfaces, and AI-powered systems.
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
          <h2 className="md:col-span-10 font-serif text-5xl md:text-7xl tracking-tight">The work.</h2>
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
              <div className="relative overflow-hidden bg-secondary aspect-[4/3] rounded-sm">
                {p.isNew && (
                  <span className="absolute top-4 left-4 z-10 bg-lime-300 text-black text-xs font-medium px-2 py-0.5">
                    New
                  </span>
                )}
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-5 flex items-start justify-between gap-6">
                <div>
                  <h3 className="font-serif text-2xl tracking-tight">{p.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{p.blurb}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-sm">{p.year}</p>
                  <p className="text-xs text-muted-foreground mt-1">{p.tags.join(" · ")}</p>
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
          <h2 className="md:col-span-10 font-serif text-5xl md:text-7xl tracking-tight">What I do.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((s) => (
            <div key={s.title} className="bg-background p-8 md:p-10">
              <h3 className="font-serif text-2xl tracking-tight">{s.title}</h3>
              <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{s.desc}</p>
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
          <h2 className="md:col-span-10 font-serif text-4xl md:text-6xl tracking-tight leading-[1.05]">
            I'm Olayemi — I build brands and digital products that work.
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-8 mt-20">
          <p className="md:col-span-2 text-sm text-muted-foreground">Experience</p>
          <ul className="md:col-span-10 divide-y divide-border border-y border-border">
            {experience.map((e) => (
              <li key={e.co + e.period} className="grid grid-cols-12 gap-4 py-6">
                <span className="col-span-12 md:col-span-5 font-serif text-2xl tracking-tight">{e.co}</span>
                <span className="col-span-7 md:col-span-4 text-muted-foreground">{e.role}</span>
                <span className="col-span-5 md:col-span-3 text-right md:text-left text-muted-foreground text-sm">
                  {e.period}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid md:grid-cols-12 gap-8 mt-16">
          <p className="md:col-span-2 text-sm text-muted-foreground">Toolkit</p>
          <p className="md:col-span-10 text-lg leading-relaxed">
            Figma, Adobe Suite, Affinity Designer, Corel, Canva, WordPress, CPanel, Excel.
            <span className="text-muted-foreground"> · </span>
            HTML, CSS, JavaScript, Lovable.dev, GitHub, Vercel.
          </p>
        </div>
      </section>

      {/* Testimonial */}
      <section className="px-6 md:px-10 max-w-[1400px] mx-auto pb-32">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-2">
            <SectionLabel n="05" label="Note" />
          </div>
          <blockquote className="md:col-span-10 font-serif text-3xl md:text-5xl leading-[1.2] tracking-tight">
            "I meet demands efficiently and in record time — pairing design discipline
            with the technical depth to ship products that hold up."
          </blockquote>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 md:px-10 max-w-[1400px] mx-auto pb-32 scroll-mt-24">
        <div className="grid md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-2">
            <SectionLabel n="06" label="Contact" />
          </div>
          <h2 className="md:col-span-10 font-serif text-5xl md:text-8xl tracking-tight leading-[0.95]">
            Have a project?<br />
            <span className="text-muted-foreground">Let's talk.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-start-3 md:col-span-10 flex flex-wrap items-center gap-4">
            <a
              href="mailto:awoyemi.olayemi@gmail.com"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground rounded-full px-7 py-3.5 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </a>
            <a
              href="mailto:awoyemi.olayemi@gmail.com"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              awoyemi.olayemi@gmail.com
            </a>
            <a
              href="tel:+2348141894696"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
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
