"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { config } from "./config";

const ease = [0.16, 1, 0.3, 1] as const;

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
  const inView = useInView(ref, { once: true, amount: 0.12 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Nav ─────────────────────────────────────────────────────────────────────
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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-10 lg:px-16 py-4">
        {/* Back + Logo */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest uppercase text-slate-400 hover:text-slate-700 transition-colors"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M9.5 6H2.5M5 3 2.5 6 5 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back
          </Link>
          <span className="w-px h-4 bg-slate-200" />
          <span className="text-[14px] font-semibold tracking-tight text-slate-900">
            {config.company.name}
            <span className="text-blue-600">{config.company.suffix}</span>
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {config.nav.links.map((l) => (
            <a key={l.label} href={l.href} className="text-[13px] text-slate-500 hover:text-slate-900 transition-colors font-medium">
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={config.nav.cta.href}
            className="text-[13px] font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors px-5 py-2.5 rounded-full"
          >
            {config.nav.cta.label}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
            <path d={open ? "M1 1l18 12M1 13L19 1" : "M0 1h20M0 7h14M0 13h20"} stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 pb-6 pt-4 flex flex-col gap-4">
          {config.nav.links.map((l) => (
            <a key={l.label} href={l.href} className="text-[14px] text-slate-600 hover:text-slate-900 font-medium transition-colors">
              {l.label}
            </a>
          ))}
          <a href={config.nav.cta.href} className="mt-2 text-center text-[13px] font-semibold text-white bg-blue-600 px-5 py-3 rounded-full">
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
    <section className="relative min-h-[100svh] flex items-end overflow-hidden bg-[#0a0f1e]">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={config.hero.image}
          alt="Meridian Group"
          fill
          className="object-cover object-center opacity-25"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1e] via-[#0a0f1e]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-transparent to-[#0a0f1e]/40" />
      </div>

      {/* Blue accent line */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-60" />

      <div className="relative z-10 w-full px-6 md:px-10 lg:px-16 pb-16 md:pb-24 pt-32">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease }}
            className="font-mono text-[11px] tracking-[0.3em] uppercase text-blue-400 mb-6"
          >
            {config.company.descriptor}
          </motion.p>

          <div className="overflow-hidden mb-8">
            {config.hero.headline.split("\n").map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.h1
                  initial={{ y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.1 + i * 0.12, duration: 1, ease }}
                  className="text-[clamp(3.2rem,10vw,10rem)] font-black tracking-tighter text-white leading-[0.88]"
                >
                  {line}
                </motion.h1>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7, ease }}
              className="max-w-md text-[15px] text-slate-300 leading-relaxed"
            >
              {config.hero.subtext}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.7, ease }}
              className="flex flex-wrap gap-3"
            >
              <a
                href={config.hero.cta.primary.href}
                className="text-[13px] font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors px-7 py-3.5 rounded-full"
              >
                {config.hero.cta.primary.label}
              </a>
              <a
                href={config.hero.cta.secondary.href}
                className="text-[13px] font-semibold text-white/80 border border-white/20 hover:border-white/50 hover:text-white transition-all px-7 py-3.5 rounded-full"
              >
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
    <section className="bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-slate-100">
          {config.stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.08} className="px-6 md:px-10 py-10 md:py-12">
              <p className="text-[clamp(2rem,5vw,3.5rem)] font-black text-slate-900 leading-none tracking-tighter mb-1">
                {stat.value}
              </p>
              <p className="text-[12px] font-mono tracking-widest uppercase text-slate-400">
                {stat.label}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────
// Simple SVG icons for each service
const SERVICE_ICONS = [
  // Strategy
  <svg key="s1" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2L2 7v6l8 5 8-5V7L10 2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/><path d="M2 7l8 5 8-5" stroke="currentColor" strokeWidth="1.4"/></svg>,
  // Digital
  <svg key="s2" width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="3" width="16" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.4"/><path d="M7 18h6M10 14v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>,
  // Technology
  <svg key="s3" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M6 8l-4 2 4 2M14 8l4 2-4 2M11 5l-2 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  // Data
  <svg key="s4" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 14l4-4 3 3 4-5 3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/><rect x="2" y="2" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.4"/></svg>,
  // Operations
  <svg key="s5" width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.4"/><path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.22 4.22l1.42 1.42M14.36 14.36l1.42 1.42M4.22 15.78l1.42-1.42M14.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>,
  // Change
  <svg key="s6" width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="7" cy="7" r="3" stroke="currentColor" strokeWidth="1.4"/><circle cx="14" cy="13" r="3" stroke="currentColor" strokeWidth="1.4"/><path d="M10 7h2a2 2 0 0 1 2 2v1M10 13H8a2 2 0 0 1-2-2v-1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>,
];

function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <FadeIn className="mb-14 md:mb-20">
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-blue-600">
            What We Do
          </span>
          <h2 className="text-[clamp(2rem,5vw,4rem)] font-black tracking-tighter text-slate-900 mt-3 leading-[0.9]">
            Our Services
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200">
          {config.services.map((service, i) => (
            <FadeIn
              key={service.title}
              delay={i * 0.07}
              className="bg-slate-50 p-8 md:p-10 group hover:bg-white transition-colors duration-300 cursor-default"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {SERVICE_ICONS[i]}
              </div>
              <h3 className="text-[1rem] font-bold text-slate-900 mb-2 tracking-tight">
                {service.title}
              </h3>
              <p className="text-[13px] text-slate-500 leading-relaxed">{service.desc}</p>
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
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <FadeIn className="relative">
            <div className="relative aspect-[4/3] md:aspect-[3/4] overflow-hidden rounded-2xl bg-slate-100">
              <Image
                src={ab.image}
                alt="About Meridian"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-5 -right-5 md:-right-8 bg-blue-600 text-white rounded-2xl px-6 py-4 shadow-xl">
              <p className="text-[2rem] font-black leading-none">20+</p>
              <p className="text-[11px] font-mono tracking-widest uppercase text-blue-200 mt-0.5">Years of impact</p>
            </div>
          </FadeIn>

          <div className="space-y-6">
            <FadeIn delay={0.1}>
              <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-blue-600">
                {ab.eyebrow}
              </span>
              <h2 className="text-[clamp(1.8rem,4vw,3.5rem)] font-black tracking-tighter text-slate-900 mt-3 leading-[0.9] whitespace-pre-line">
                {ab.heading}
              </h2>
            </FadeIn>

            {ab.body.map((p, i) => (
              <FadeIn key={i} delay={0.15 + i * 0.07}>
                <p className="text-[15px] text-slate-500 leading-relaxed">{p}</p>
              </FadeIn>
            ))}

            <FadeIn delay={0.3}>
              <a
                href={ab.cta.href}
                className="inline-flex items-center gap-2 text-[13px] font-semibold text-blue-600 hover:text-blue-800 transition-colors"
              >
                {ab.cta.label}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7h9M8 3.5 11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Clients ─────────────────────────────────────────────────────────────────
function Clients() {
  return (
    <section className="py-14 md:py-20 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <FadeIn className="text-center mb-10">
          <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-slate-400">
            Trusted By
          </p>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {config.clients.map((name, i) => (
            <FadeIn
              key={name}
              delay={i * 0.06}
              className="bg-white rounded-xl px-4 py-5 flex items-center justify-center border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all duration-200"
            >
              <span className="text-[12px] font-bold text-slate-300 tracking-wide uppercase">
                {name}
              </span>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact CTA ──────────────────────────────────────────────────────────────
function Contact() {
  const ct = config.contact;
  return (
    <section id="contact" className="relative py-24 md:py-40 bg-[#0a0f1e] overflow-hidden">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Blue glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <FadeIn className="max-w-3xl">
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-blue-400">
            {ct.eyebrow}
          </span>
          <h2 className="text-[clamp(2.5rem,8vw,7rem)] font-black tracking-tighter text-white mt-3 mb-5 leading-[0.88] whitespace-pre-line">
            {ct.heading}
          </h2>
          <p className="text-[15px] text-slate-400 mb-10 max-w-md leading-relaxed">
            {ct.subtext}
          </p>
          <a
            href={ct.cta.href}
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white text-[13px] font-semibold rounded-full px-8 py-4 transition-colors duration-300"
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
    <footer className="bg-[#070b14] border-t border-white/[0.06] px-6 md:px-10 lg:px-16 py-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-[13px] font-semibold text-white/60">
            {config.company.name}
            <span className="text-blue-500">{config.company.suffix}</span>
          </span>
          <p className="font-mono text-[10px] text-white/20 tracking-widest uppercase mt-1">
            {config.company.location}
          </p>
        </div>
        <span className="font-mono text-[10px] text-white/20 tracking-widest uppercase">
          Sample page ·{" "}
          <Link href="/" className="text-white/40 hover:text-white/70 transition-colors underline underline-offset-2">
            Built by James Belda
          </Link>
        </span>
        <div className="flex gap-6">
          {config.footer.links.map((l) => (
            <a key={l.label} href={l.href} className="font-mono text-[10px] tracking-widest uppercase text-white/25 hover:text-white/50 transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function CorporatePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Nav />
      <Hero />
      <Stats />
      <Services />
      <About />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}
