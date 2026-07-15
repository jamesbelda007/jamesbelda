"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { config } from "./config";

const ease = [0.16, 1, 0.3, 1] as const;
const BG = "#faf8f4";
const TEXT = "#1a1207";
const ACCENT = "#c8511a";
const MUTED = "#8a7060";
const BORDER = "#e4ddd6";

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

// ─── Nav ──────────────────────────────────────────────────────────────────────
function Nav() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease }}
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: isScrolled ? "rgba(250,248,244,0.94)" : BG,
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        borderBottom: isScrolled ? `1px solid ${BORDER}` : "1px solid transparent",
      }}
    >
      <div className="flex items-center justify-between px-6 md:px-10 lg:px-14 py-4">
        {/* Back + logo */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest uppercase transition-colors"
            style={{ color: MUTED }}
            onMouseEnter={(e) => (e.currentTarget.style.color = TEXT)}
            onMouseLeave={(e) => (e.currentTarget.style.color = MUTED)}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M9.5 6H2.5M5 3 2.5 6 5 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back
          </Link>
          <span className="w-px h-4" style={{ backgroundColor: BORDER }} />
          <span className="text-[14px] font-bold tracking-tight" style={{ color: TEXT }}>
            {config.studio.name}
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {config.nav.links.map((l) => (
            <a key={l.label} href={l.href} className="text-[13px] font-medium transition-colors" style={{ color: MUTED }}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex">
          <a
            href={config.nav.cta.href}
            className="text-[12px] font-semibold rounded-full px-5 py-2.5 transition-all duration-200"
            style={{ backgroundColor: TEXT, color: BG }}
          >
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
        <div className="md:hidden px-6 pb-6 pt-4 flex flex-col gap-4" style={{ borderTop: `1px solid ${BORDER}` }}>
          {config.nav.links.map((l) => (
            <a key={l.label} href={l.href} className="text-[14px] font-medium" style={{ color: MUTED }} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href={config.nav.cta.href} className="mt-2 text-center text-[13px] font-semibold rounded-full px-5 py-3" style={{ backgroundColor: TEXT, color: BG }}>
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
    <section className="relative overflow-hidden pt-8 md:pt-14 pb-20 md:pb-28 px-6 md:px-10 lg:px-14" style={{ backgroundColor: BG }}>
      {/* Est. tag */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="font-mono text-[10px] tracking-[0.3em] uppercase mb-10 md:mb-14"
        style={{ color: MUTED }}
      >
        {config.studio.descriptor} · {config.studio.founded}
      </motion.p>

      <div className="grid lg:grid-cols-[1fr_380px] gap-10 lg:gap-16 items-end">
        {/* Headline */}
        <div>
          {config.hero.headline.map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.h1
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.08 + i * 0.13, duration: 1.05, ease }}
                className="font-black tracking-tighter leading-[0.88]"
                style={{
                  fontSize: "clamp(3rem,10vw,9.5rem)",
                  color: i === 2 ? ACCENT : TEXT,
                  fontStyle: i === 2 ? "italic" : "normal",
                }}
              >
                {line}
              </motion.h1>
            </div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7, ease }}
            className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-5"
          >
            <p className="text-[15px] leading-relaxed max-w-sm" style={{ color: MUTED }}>
              {config.hero.subtext}
            </p>
            <a
              href={config.hero.cta.href}
              className="shrink-0 text-[12px] font-semibold border rounded-full px-6 py-3 transition-all duration-200 hover:text-white"
              style={{ borderColor: TEXT, color: TEXT }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = TEXT; (e.currentTarget as HTMLElement).style.color = BG; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; (e.currentTarget as HTMLElement).style.color = TEXT; }}
            >
              {config.hero.cta.label} ↓
            </a>
          </motion.div>
        </div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1.1, ease }}
          className="relative aspect-[3/4] overflow-hidden rounded-2xl"
          style={{ backgroundColor: "#e8e0d8" }}
        >
          <Image
            src={config.hero.image}
            alt="Vantage Studio"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 380px"
          />
        </motion.div>
      </div>
    </section>
  );
}

// ─── Work ─────────────────────────────────────────────────────────────────────
function WorkCard({ project, index }: { project: (typeof config.work)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.08 });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.07, ease }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative cursor-pointer overflow-hidden rounded-2xl"
    >
      {/* Color background */}
      <div
        className="relative aspect-[4/3] md:aspect-[3/4] flex flex-col justify-end p-6 transition-transform duration-700 group-hover:scale-[1.02]"
        style={{ backgroundColor: project.bg }}
      >
        {/* Brand name — large decorative */}
        <span
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-black tracking-tighter leading-none pointer-events-none select-none transition-opacity duration-500 whitespace-nowrap"
          style={{
            fontSize: "clamp(3rem,8vw,6rem)",
            color: project.text,
            opacity: hovered ? 0.06 : 0.12,
          }}
        >
          {project.name}
        </span>

        {/* Bottom info */}
        <div>
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase mb-2 opacity-50" style={{ color: project.text }}>
            {project.category} · {project.year}
          </p>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight" style={{ color: project.text }}>
            {project.name}
          </h3>
          <p className="text-[12px] mt-1 opacity-50" style={{ color: project.text }}>{project.scope}</p>
        </div>

        {/* Hover CTA */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
          transition={{ duration: 0.25 }}
          className="absolute top-4 right-4 font-mono text-[10px] tracking-widest uppercase border rounded-full px-4 py-2"
          style={{ borderColor: project.text, color: project.text, opacity: 0 }}
        >
          View →
        </motion.div>
      </div>
    </motion.div>
  );
}

function Work() {
  return (
    <section id="work" className="py-20 md:py-28 px-6 md:px-10 lg:px-14" style={{ backgroundColor: BG }}>
      <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: "2.5rem" }}>
      <FadeIn className="flex items-end justify-between mb-12 md:mb-16">
        <div>
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase" style={{ color: ACCENT }}>
            Selected Work
          </span>
          <h2 className="font-black tracking-tighter mt-2 leading-[0.9]" style={{ fontSize: "clamp(2rem,5vw,4rem)", color: TEXT }}>
            Recent Projects
          </h2>
        </div>
        <span className="font-mono text-[10px] tracking-widest uppercase hidden md:block" style={{ color: MUTED }}>
          {config.work.length} Projects
        </span>
      </FadeIn>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {config.work.map((p, i) => (
          <WorkCard key={p.name} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────
function Services() {
  return (
    <section id="services" className="py-20 md:py-28 px-6 md:px-10 lg:px-14" style={{ backgroundColor: TEXT, color: BG }}>
      <FadeIn className="mb-14 md:mb-20">
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase" style={{ color: ACCENT }}>
          What We Do
        </span>
        <h2 className="font-black tracking-tighter mt-2 leading-[0.9]" style={{ fontSize: "clamp(2rem,5vw,4rem)" }}>
          Our Services
        </h2>
      </FadeIn>

      <div className="divide-y" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        {config.services.map((s, i) => (
          <FadeIn
            key={s.title}
            delay={i * 0.06}
            className="grid md:grid-cols-[80px_1fr_1fr] gap-4 md:gap-8 py-7 md:py-8 group cursor-default"
          >
            <span className="font-mono text-[11px] tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>
              {s.number}
            </span>
            <h3 className="text-[1.1rem] font-bold tracking-tight group-hover:translate-x-1 transition-transform duration-200" style={{ color: BG }}>
              {s.title}
            </h3>
            <p className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              {s.desc}
            </p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// ─── Process ──────────────────────────────────────────────────────────────────
function Process() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-10 lg:px-14" style={{ backgroundColor: BG }}>
      <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: "2.5rem" }}>
      <FadeIn className="mb-14">
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase" style={{ color: ACCENT }}>
          How We Work
        </span>
        <h2 className="font-black tracking-tighter mt-2 leading-[0.9]" style={{ fontSize: "clamp(2rem,5vw,4rem)", color: TEXT }}>
          Our Process
        </h2>
      </FadeIn>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        {config.process.map((p, i) => (
          <FadeIn key={p.step} delay={i * 0.1}>
            <div className="text-[3.5rem] font-black leading-none mb-4 tracking-tighter" style={{ color: `rgba(26,18,7,0.08)` }}>
              {p.step}
            </div>
            <h3 className="text-[1.1rem] font-bold mb-2 tracking-tight" style={{ color: TEXT }}>
              {p.title}
            </h3>
            <p className="text-[13px] leading-relaxed" style={{ color: MUTED }}>
              {p.desc}
            </p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// ─── About ─────────────────────────────────────────────────────────────────────
function About() {
  const ab = config.about;
  return (
    <section id="about" className="py-20 md:py-28 px-6 md:px-10 lg:px-14" style={{ backgroundColor: "#f0ece6" }}>
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <FadeIn className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl" style={{ backgroundColor: "#e0d8d0" }}>
            <Image
              src={ab.image}
              alt="Vantage Studio"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </div>
          {/* Stats strip */}
          <div className="mt-4 grid grid-cols-3 gap-3">
            {ab.stats.map((s) => (
              <div key={s.label} className="rounded-xl px-4 py-4 text-center" style={{ backgroundColor: BG }}>
                <p className="text-[1.8rem] font-black leading-none tracking-tighter" style={{ color: TEXT }}>{s.value}</p>
                <p className="font-mono text-[9px] tracking-widest uppercase mt-1" style={{ color: MUTED }}>{s.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <div className="space-y-5">
          <FadeIn delay={0.1}>
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase" style={{ color: ACCENT }}>
              {ab.eyebrow}
            </span>
            <h2
              className="font-black tracking-tighter mt-3 leading-[0.9] whitespace-pre-line"
              style={{ fontSize: "clamp(1.8rem,4vw,3.5rem)", color: TEXT }}
            >
              {ab.heading}
            </h2>
          </FadeIn>
          {ab.body.map((p, i) => (
            <FadeIn key={i} delay={0.15 + i * 0.08}>
              <p className="text-[15px] leading-relaxed" style={{ color: MUTED }}>{p}</p>
            </FadeIn>
          ))}
          <FadeIn delay={0.3}>
            <a
              href={ab.cta.href}
              className="inline-flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase pb-0.5 transition-colors"
              style={{ color: TEXT, borderBottom: `1px solid rgba(26,18,7,0.25)` }}
            >
              {ab.cta.label}
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path d="M2 5.5h7M6 2.5l3 3-3 3" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" />
              </svg>
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function Contact() {
  const ct = config.contact;
  return (
    <section id="contact" className="py-24 md:py-40 px-6 md:px-10 lg:px-14 relative overflow-hidden" style={{ backgroundColor: ACCENT }}>
      {/* Large decorative letter */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <span className="text-[35vw] font-black leading-none tracking-tighter" style={{ color: "rgba(0,0,0,0.06)" }}>
          V
        </span>
      </div>

      <div className="relative z-10 max-w-3xl">
        <FadeIn>
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase" style={{ color: "rgba(255,255,255,0.7)" }}>
            {ct.eyebrow}
          </span>
          <h2
            className="font-black tracking-tighter mt-3 mb-5 leading-[0.88] whitespace-pre-line"
            style={{ fontSize: "clamp(2.5rem,8vw,7.5rem)", color: "#fff" }}
          >
            {ct.heading}
          </h2>
          <p className="text-[15px] mb-10 max-w-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
            {ct.subtext}
          </p>
          <a
            href={ct.cta.href}
            className="inline-flex items-center gap-3 text-[14px] font-bold rounded-full px-8 py-4 transition-all duration-300 hover:gap-5"
            style={{ backgroundColor: "#fff", color: ACCENT }}
          >
            {ct.cta.label}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7h9M8 3.5 11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="px-6 md:px-10 lg:px-14 py-8" style={{ backgroundColor: BG, borderTop: `1px solid ${BORDER}` }}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-[13px] font-bold tracking-tight" style={{ color: TEXT }}>
            {config.studio.name}
          </span>
          <p className="font-mono text-[10px] tracking-widest uppercase mt-0.5" style={{ color: MUTED }}>
            {config.studio.location}
          </p>
        </div>
        <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: MUTED }}>
          Sample page ·{" "}
          <Link href="/" className="underline underline-offset-2 hover:opacity-70 transition-opacity" style={{ color: TEXT }}>
            Built by James Belda
          </Link>
        </span>
        <div className="flex gap-6">
          {config.footer.links.map((l) => (
            <a key={l.label} href={l.href} className="font-mono text-[10px] tracking-widest uppercase transition-opacity hover:opacity-70" style={{ color: MUTED }}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function BrandPage() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: BG, color: TEXT }}>
      <Nav />
      <Hero />
      <Work />
      <Services />
      <Process />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
