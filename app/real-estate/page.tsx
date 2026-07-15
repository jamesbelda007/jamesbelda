"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { config } from "./config";

const ease = [0.16, 1, 0.3, 1] as const;
const BG = "#f8f7f5";
const BG2 = "#f0ede8";
const TEXT = "#0f1a12";
const GREEN = "#1a5c2a";
const GREEN_LIGHT = "#e8f5ea";
const MUTED = "#6a7a6a";
const BORDER = "#dde8dd";

function FadeIn({
  children,
  delay = 0,
  className = "",
  y = 24,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Icons ────────────────────────────────────────────────────────────────────
const BedIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M1 9V5.5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2V9M1 9v2M13 9v2M1 7h12" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
  </svg>
);
const BathIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M2 7h10v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7ZM2 7V3.5A1.5 1.5 0 0 1 3.5 2v0A1.5 1.5 0 0 1 5 3.5V4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
  </svg>
);
const SqmIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <rect x="2" y="2" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="1.1" />
    <path d="M5 5h4v4H5z" stroke="currentColor" strokeWidth="1.1" />
  </svg>
);

// ─── Nav ──────────────────────────────────────────────────────────────────────
function Nav() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease }}
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: isScrolled ? "rgba(248,247,245,0.95)" : "transparent",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        borderBottom: isScrolled ? `1px solid ${BORDER}` : "none",
      }}
    >
      <div className="flex items-center justify-between px-6 md:px-10 lg:px-16 py-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest uppercase transition-colors" style={{ color: MUTED }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M9.5 6H2.5M5 3 2.5 6 5 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back
          </Link>
          <span className="w-px h-4" style={{ backgroundColor: BORDER }} />
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded flex items-center justify-center" style={{ backgroundColor: GREEN }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 1 L11 5.5 V11 H7.5 V8 H4.5 V11 H1 V5.5 Z" fill="white" />
              </svg>
            </div>
            <span className="text-[14px] font-semibold tracking-tight" style={{ color: TEXT }}>{config.company.name}</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {config.nav.links.map((l) => (
            <a key={l.label} href={l.href} className="text-[13px] font-medium transition-colors" style={{ color: MUTED }}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href={config.nav.cta.href} className="text-[12px] font-semibold rounded-full px-5 py-2.5 transition-all duration-200 hover:opacity-90" style={{ backgroundColor: GREEN, color: "#fff" }}>
            {config.nav.cta.label}
          </a>
        </div>

        <button className="md:hidden p-2" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
            <path d={open ? "M1 1l18 12M1 13L19 1" : "M0 1h20M0 7h14M0 13h20"} stroke={TEXT} strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6 pt-4 flex flex-col gap-4" style={{ backgroundColor: BG, borderTop: `1px solid ${BORDER}` }}>
          {config.nav.links.map((l) => (
            <a key={l.label} href={l.href} className="text-[14px] font-medium" style={{ color: MUTED }} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href={config.nav.cta.href} className="mt-2 text-center text-[13px] font-semibold rounded-full px-5 py-3" style={{ backgroundColor: GREEN, color: "#fff" }} onClick={() => setOpen(false)}>
            {config.nav.cta.label}
          </a>
        </div>
      )}
    </motion.header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-end overflow-hidden" style={{ backgroundColor: "#0a1208" }}>
      <div className="absolute inset-0">
        <Image src={config.hero.image} alt="Haven Properties" fill className="object-cover object-center" priority sizes="100vw" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 w-full px-6 md:px-10 lg:px-16 pb-16 md:pb-24 pt-28">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease }}
            className="font-mono text-[11px] tracking-[0.3em] uppercase mb-5"
            style={{ color: "#4ade80" }}
          >
            {config.hero.eyebrow}
          </motion.p>

          {config.hero.headline.map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.h1
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.1 + i * 0.14, duration: 1.05, ease }}
                className="font-black tracking-tighter leading-[0.88] text-white"
                style={{ fontSize: "clamp(3.5rem,12vw,12rem)" }}
              >
                {line}
              </motion.h1>
            </div>
          ))}

          <div className="mt-8 md:mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7, ease }}
              className="max-w-sm text-[15px] leading-relaxed"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              {config.hero.subtext}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.7, ease }}
              className="flex flex-wrap gap-3"
            >
              <a href={config.hero.cta.primary.href} className="text-[12px] font-semibold rounded-full px-7 py-3.5 transition-all" style={{ backgroundColor: GREEN, color: "#fff" }}>
                {config.hero.cta.primary.label}
              </a>
              <a href={config.hero.cta.secondary.href} className="text-[12px] font-medium rounded-full px-7 py-3.5 border transition-all" style={{ borderColor: "rgba(255,255,255,0.25)", color: "#fff" }}>
                {config.hero.cta.secondary.label}
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Stats ─────────────────────────────────────────────────────────────────────
function Stats() {
  return (
    <section style={{ backgroundColor: GREEN }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/15">
          {config.stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.07} className="px-6 md:px-10 py-8 md:py-10">
              <p className="text-[clamp(1.8rem,4vw,2.8rem)] font-black tracking-tighter leading-none text-white mb-1">
                {s.value}
              </p>
              <p className="font-mono text-[10px] tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.55)" }}>
                {s.label}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Listings ─────────────────────────────────────────────────────────────────
function ListingCard({ listing, index }: { listing: (typeof config.listings)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.08 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.07, ease }}
      className="group cursor-pointer"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3] mb-4 rounded-lg" style={{ backgroundColor: BG2 }}>
        <Image
          src={listing.image}
          alt={listing.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {listing.tag && (
          <div className="absolute top-3 left-3 text-[10px] font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full" style={{ backgroundColor: GREEN, color: "#fff" }}>
            {listing.tag}
          </div>
        )}
        <div className="absolute bottom-3 right-3 font-mono text-[11px] font-bold px-3 py-1.5 rounded-full" style={{ backgroundColor: "rgba(15,26,18,0.85)", color: "#fff" }}>
          {listing.price}
        </div>
      </div>

      {/* Info */}
      <div>
        <div className="flex items-start justify-between mb-1">
          <h3 className="text-[1rem] font-bold tracking-tight" style={{ color: TEXT }}>{listing.name}</h3>
          <span className="font-mono text-[10px] uppercase tracking-wide shrink-0 ml-2 mt-0.5" style={{ color: MUTED }}>{listing.type}</span>
        </div>
        <p className="text-[12px] mb-3 flex items-center gap-1" style={{ color: MUTED }}>
          <svg width="10" height="12" viewBox="0 0 10 12" fill="none"><path d="M5 1C2.8 1 1 2.8 1 5c0 3 4 7 4 7s4-4 4-7c0-2.2-1.8-4-4-4Z" stroke="currentColor" strokeWidth="1.1"/><circle cx="5" cy="5" r="1.2" stroke="currentColor" strokeWidth="1.1"/></svg>
          {listing.location}
        </p>
        <div className="flex items-center gap-4 text-[12px]" style={{ color: MUTED }}>
          <span className="flex items-center gap-1.5"><BedIcon />{listing.beds} Beds</span>
          <span className="flex items-center gap-1.5"><BathIcon />{listing.baths} Baths</span>
          <span className="flex items-center gap-1.5"><SqmIcon />{listing.sqm} sqm</span>
        </div>
      </div>
    </motion.div>
  );
}

function Listings() {
  return (
    <section id="listings" className="py-20 md:py-28 px-6 md:px-10 lg:px-16" style={{ backgroundColor: BG }}>
      <div className="max-w-7xl mx-auto">
        <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: "2.5rem" }}>
          <FadeIn className="flex items-end justify-between mb-12 md:mb-16">
            <div>
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase" style={{ color: GREEN }}>Featured Listings</span>
              <h2 className="font-black tracking-tighter mt-2 leading-[0.9]" style={{ fontSize: "clamp(2rem,5vw,4rem)", color: TEXT }}>
                Properties for sale
              </h2>
            </div>
            <a href="#" className="hidden md:flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase transition-colors" style={{ color: MUTED }}>
              View All
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
            </a>
          </FadeIn>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {config.listings.map((l, i) => (
            <ListingCard key={l.name} listing={l} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────
const SERVICE_ICONS = [
  <svg key="buy" width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 2L3 8v12h5v-5h6v5h5V8L11 2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg>,
  <svg key="sell" width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.4"/><path d="M11 7v8M8 9.5l3-2.5 3 2.5M8 12.5l3 2.5 3-2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>,
  <svg key="rent" width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="3" y="8" width="16" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.4"/><path d="M7 8V6a4 4 0 0 1 8 0v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><circle cx="11" cy="14" r="1.5" stroke="currentColor" strokeWidth="1.4"/></svg>,
  <svg key="invest" width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M3 17l5-5 4 4 7-8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 9h4v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
];

function Services() {
  return (
    <section id="services" className="py-20 md:py-28 px-6 md:px-10 lg:px-16" style={{ backgroundColor: BG2 }}>
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-14">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase" style={{ color: GREEN }}>What We Do</span>
          <h2 className="font-black tracking-tighter mt-2 leading-[0.9]" style={{ fontSize: "clamp(2rem,5vw,4rem)", color: TEXT }}>
            Our Services
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {config.services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.09} className="group p-8 rounded-2xl cursor-default transition-all duration-300 hover:shadow-lg bg-[#f8f7f5]">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: GREEN_LIGHT, color: GREEN }}>
                {SERVICE_ICONS[i]}
              </div>
              <h3 className="text-[1.1rem] font-bold mb-2 tracking-tight" style={{ color: TEXT }}>{s.title}</h3>
              <p className="text-[13px] leading-relaxed" style={{ color: MUTED }}>{s.desc}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── About ─────────────────────────────────────────────────────────────────────
function About() {
  const ab = config.about;
  return (
    <section id="about" className="py-20 md:py-28 px-6 md:px-10 lg:px-16" style={{ backgroundColor: BG }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <FadeIn className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl" style={{ backgroundColor: BG2 }}>
              <Image src={ab.image} alt="Haven team" fill className="object-cover" sizes="(max-width: 768px) 100vw, 45vw" />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-4 -right-3 md:-right-6 rounded-2xl px-6 py-4 shadow-xl"
              style={{ backgroundColor: GREEN }}
            >
              <p className="text-[1.8rem] font-black text-white leading-none">15+</p>
              <p className="font-mono text-[9px] tracking-widest uppercase mt-0.5" style={{ color: "rgba(255,255,255,0.65)" }}>
                Years of Trust
              </p>
            </motion.div>
          </FadeIn>

          <div className="space-y-5">
            <FadeIn delay={0.1}>
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase" style={{ color: GREEN }}>{ab.eyebrow}</span>
              <h2 className="font-black tracking-tighter mt-3 leading-[0.9] whitespace-pre-line" style={{ fontSize: "clamp(2rem,4.5vw,3.8rem)", color: TEXT }}>
                {ab.heading}
              </h2>
            </FadeIn>
            {ab.body.map((p, i) => (
              <FadeIn key={i} delay={0.15 + i * 0.07}>
                <p className="text-[15px] leading-relaxed" style={{ color: MUTED }}>{p}</p>
              </FadeIn>
            ))}
            <FadeIn delay={0.3}>
              <a href={ab.cta.href} className="inline-flex items-center gap-2 text-[13px] font-semibold transition-colors" style={{ color: GREEN }}>
                {ab.cta.label}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7h9M8 3.5 11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Contact CTA ──────────────────────────────────────────────────────────────
function Contact() {
  const ct = config.contact;
  return (
    <section id="contact" className="py-24 md:py-40 px-6 md:px-10 lg:px-16 relative overflow-hidden" style={{ backgroundColor: "#0f1a12" }}>
      {/* Grid texture */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.15) 1px,transparent 1px)", backgroundSize: "50px 50px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-3xl pointer-events-none" style={{ backgroundColor: "rgba(26,92,42,0.3)" }} />

      <div className="relative z-10 max-w-3xl">
        <FadeIn>
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase" style={{ color: "#4ade80" }}>{ct.eyebrow}</span>
          <h2 className="font-black tracking-tighter mt-3 mb-5 leading-[0.88] whitespace-pre-line text-white" style={{ fontSize: "clamp(2.5rem,8vw,7rem)" }}>
            {ct.heading}
          </h2>
          <p className="text-[15px] mb-10 max-w-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
            {ct.subtext}
          </p>
          <a href={ct.cta.href} className="inline-flex items-center gap-3 text-[12px] font-semibold rounded-full px-8 py-4 transition-all duration-300 hover:opacity-90" style={{ backgroundColor: GREEN, color: "#fff" }}>
            {ct.cta.label}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7h9M8 3.5 11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="px-6 md:px-10 lg:px-16 py-8" style={{ backgroundColor: "#0a1208", borderTop: `1px solid rgba(255,255,255,0.06)` }}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-[13px] font-semibold tracking-tight text-white">{config.company.name}</span>
          <p className="font-mono text-[10px] tracking-widest uppercase mt-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>
            {config.company.descriptor}
          </p>
        </div>
        <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.25)" }}>
          Sample page ·{" "}
          <Link href="/" className="underline underline-offset-2" style={{ color: "rgba(255,255,255,0.4)" }}>
            Built by James Belda
          </Link>
        </span>
        <div className="flex gap-6">
          {config.footer.links.map((l) => (
            <a key={l.label} href={l.href} className="font-mono text-[10px] tracking-widest uppercase hover:opacity-70 transition-opacity" style={{ color: "rgba(255,255,255,0.25)" }}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function RealEstatePage() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: BG, color: TEXT }}>
      <Nav />
      <Hero />
      <Stats />
      <Listings />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
