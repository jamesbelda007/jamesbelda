"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { config } from "./config";

const ease = [0.16, 1, 0.3, 1] as const;
const BG = "#0d0906";
const BG2 = "#120d08";
const TEXT = "#f5f0e8";
const GOLD = "#c8841a";
const MUTED = "rgba(245,240,232,0.45)";
const BORDER = "rgba(245,240,232,0.08)";

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
      transition={{ duration: 0.9, delay, ease }}
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
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease }}
      className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: isScrolled ? "rgba(13,9,6,0.92)" : "transparent",
        backdropFilter: isScrolled ? "blur(16px)" : "none",
        borderBottom: isScrolled ? `1px solid ${BORDER}` : "none",
      }}
    >
      <div className="flex items-center justify-between px-6 md:px-10 lg:px-16 py-5">
        {/* Back */}
        <Link
          href="/"
          className="flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase transition-colors"
          style={{ color: "rgba(245,240,232,0.35)" }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M9.5 6H2.5M5 3 2.5 6 5 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back
        </Link>

        {/* Brand */}
        <span
          className="text-[15px] font-light tracking-[0.3em] uppercase"
          style={{ color: TEXT }}
        >
          {config.restaurant.name}
        </span>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {config.nav.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[12px] tracking-widest uppercase font-light transition-colors"
              style={{ color: MUTED }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = TEXT)}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = MUTED)}
            >
              {l.label}
            </a>
          ))}
          <a
            href={config.nav.cta.href}
            className="text-[11px] tracking-widest uppercase font-medium border rounded-full px-5 py-2.5 transition-all duration-300"
            style={{ borderColor: GOLD, color: GOLD }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = GOLD;
              (e.currentTarget as HTMLElement).style.color = BG;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
              (e.currentTarget as HTMLElement).style.color = GOLD;
            }}
          >
            {config.nav.cta.label}
          </a>
        </div>

        {/* Mobile */}
        <button className="md:hidden p-2" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
            <path d={open ? "M1 1l18 12M1 13L19 1" : "M0 1h20M0 7h14M0 13h20"} stroke={TEXT} strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-8 pt-4 flex flex-col gap-5" style={{ backgroundColor: BG, borderTop: `1px solid ${BORDER}` }}>
          {config.nav.links.map((l) => (
            <a key={l.label} href={l.href} className="text-[13px] tracking-widest uppercase font-light" style={{ color: MUTED }} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href={config.nav.cta.href} className="mt-2 text-center text-[11px] tracking-widest uppercase font-medium border rounded-full px-5 py-3" style={{ borderColor: GOLD, color: GOLD }} onClick={() => setOpen(false)}>
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
    <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden" style={{ backgroundColor: BG }}>
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={config.hero.image}
          alt={config.restaurant.name}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      </div>

      <div className="relative z-10 px-6 md:px-10 lg:px-16 pb-16 md:pb-24">
        {/* Label top */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute top-8 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.3em] uppercase"
          style={{ color: GOLD }}
        >
          {config.hero.label}
        </motion.p>

        {/* Name */}
        <div className="text-center mb-8 md:mb-12">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.15, duration: 1.2, ease }}
              className="font-light tracking-[0.12em] uppercase"
              style={{ fontSize: "clamp(4rem,16vw,18rem)", color: TEXT, lineHeight: 0.88 }}
            >
              {config.restaurant.name}
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.8, ease }}
            className="font-light italic text-[clamp(1rem,2.5vw,1.5rem)] mt-4 md:mt-6"
            style={{ color: MUTED }}
          >
            {config.restaurant.tagline}
          </motion.p>
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7, ease }}
          className="flex justify-center gap-4 flex-wrap"
        >
          <a
            href="#reserve"
            className="text-[11px] font-semibold tracking-widest uppercase px-8 py-3.5 rounded-full transition-all duration-300"
            style={{ backgroundColor: GOLD, color: BG }}
          >
            Reserve a Table
          </a>
          <a
            href="#menu"
            className="text-[11px] font-medium tracking-widest uppercase px-8 py-3.5 rounded-full border transition-all duration-300"
            style={{ borderColor: "rgba(245,240,232,0.25)", color: TEXT }}
          >
            View Menu
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="w-px h-8"
          style={{ background: `linear-gradient(to bottom, ${GOLD}, transparent)` }}
        />
      </motion.div>
    </section>
  );
}

// ─── Menu Highlights ──────────────────────────────────────────────────────────
function DishCard({ dish, index }: { dish: (typeof config.dishes)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.08 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay: index * 0.07, ease }}
      className="group"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3] mb-5" style={{ backgroundColor: "#1a120a" }}>
        <Image
          src={dish.image}
          alt={dish.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
        {/* Course badge */}
        <div
          className="absolute top-4 left-4 font-mono text-[9px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full"
          style={{ backgroundColor: "rgba(13,9,6,0.8)", color: GOLD, border: `1px solid ${BORDER}` }}
        >
          {dish.course}
        </div>
      </div>

      {/* Info */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-[1.05rem] font-medium mb-1.5 tracking-tight" style={{ color: TEXT }}>
            {dish.name}
          </h3>
          <p className="text-[13px] leading-relaxed" style={{ color: MUTED }}>
            {dish.desc}
          </p>
        </div>
        <span className="shrink-0 font-mono text-[13px] font-medium mt-0.5" style={{ color: GOLD }}>
          {dish.price}
        </span>
      </div>
    </motion.div>
  );
}

function Menu() {
  return (
    <section id="menu" className="py-20 md:py-32 px-6 md:px-10 lg:px-16" style={{ backgroundColor: BG }}>
      <div className="max-w-7xl mx-auto">
        <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: "2.5rem" }}>
          <FadeIn className="mb-14 md:mb-20 flex items-end justify-between">
            <div>
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase" style={{ color: GOLD }}>
                Signature Dishes
              </span>
              <h2
                className="font-light tracking-tight mt-3 leading-[0.9] italic"
                style={{ fontSize: "clamp(2rem,5vw,4rem)", color: TEXT }}
              >
                A Taste of Ember
              </h2>
            </div>
            <span className="font-mono text-[10px] tracking-widest uppercase hidden md:block" style={{ color: MUTED }}>
              Seasonal Menu
            </span>
          </FadeIn>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {config.dishes.map((dish, i) => (
            <DishCard key={dish.name} dish={dish} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Story ────────────────────────────────────────────────────────────────────
function Story() {
  const st = config.story;
  return (
    <section id="story" className="py-20 md:py-32 px-6 md:px-10 lg:px-16" style={{ backgroundColor: BG2 }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <FadeIn className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm" style={{ backgroundColor: "#1a120a" }}>
              <Image
                src={st.image}
                alt="Ember Restaurant"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
            {/* Stats strip */}
            <div
              className="absolute -bottom-5 left-0 right-0 mx-5 grid grid-cols-3 divide-x py-4"
              style={{ backgroundColor: BG, border: `1px solid ${BORDER}` }}
            >
              {st.stats.map((s) => (
                <div key={s.label} className="flex flex-col items-center py-1">
                  <span className="font-light text-[1.5rem] leading-none tracking-tight" style={{ color: TEXT }}>{s.value}</span>
                  <span className="font-mono text-[9px] tracking-widest uppercase mt-1" style={{ color: MUTED }}>{s.label}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Text */}
          <div className="space-y-6 md:pt-0 pt-8">
            <FadeIn delay={0.1}>
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase" style={{ color: GOLD }}>
                {st.eyebrow}
              </span>
              <h2
                className="font-light mt-3 leading-[0.9] whitespace-pre-line"
                style={{ fontSize: "clamp(2rem,4.5vw,3.8rem)", color: TEXT }}
              >
                {st.heading}
              </h2>
            </FadeIn>
            {st.body.map((p, i) => (
              <FadeIn key={i} delay={0.15 + i * 0.08}>
                <p className="text-[15px] leading-relaxed" style={{ color: MUTED }}>{p}</p>
              </FadeIn>
            ))}
            <FadeIn delay={0.3}>
              <a
                href={st.cta.href}
                className="inline-flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase transition-colors"
                style={{ color: GOLD, borderBottom: `1px solid rgba(200,132,26,0.3)`, paddingBottom: "2px" }}
              >
                {st.cta.label}
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                  <path d="M2 5.5h7M6 2.5l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </a>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Atmosphere ────────────────────────────────────────────────────────────────
function Atmosphere() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const atm = config.atmosphere;

  return (
    <section ref={ref} className="relative overflow-hidden" style={{ height: "60vh" }}>
      <Image src={atm.image} alt="Ember atmosphere" fill className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 flex items-center justify-center px-6 md:px-10 text-center">
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease }}
          className="max-w-2xl font-light italic leading-snug"
          style={{ fontSize: "clamp(1.4rem,3.5vw,2.6rem)", color: TEXT }}
        >
          &ldquo;{atm.quote}&rdquo;
        </motion.blockquote>
      </div>
    </section>
  );
}

// ─── Reservations ─────────────────────────────────────────────────────────────
function Reserve() {
  const rv = config.reserve;
  return (
    <section id="reserve" className="py-20 md:py-32 px-6 md:px-10 lg:px-16" style={{ backgroundColor: BG }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left: CTA */}
          <FadeIn>
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase" style={{ color: GOLD }}>
              {rv.eyebrow}
            </span>
            <h2
              className="font-light mt-3 leading-[0.9] whitespace-pre-line mb-5"
              style={{ fontSize: "clamp(2rem,5vw,4rem)", color: TEXT }}
            >
              {rv.heading}
            </h2>
            <p className="text-[15px] leading-relaxed mb-8 max-w-sm" style={{ color: MUTED }}>
              {rv.subtext}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={rv.cta.href}
                className="inline-flex items-center justify-center gap-2 text-[11px] font-semibold tracking-widest uppercase px-7 py-3.5 rounded-full transition-all duration-300"
                style={{ backgroundColor: GOLD, color: BG }}
              >
                {rv.cta.label}
              </a>
              <a
                href={`tel:${rv.phone.number}`}
                className="inline-flex items-center justify-center gap-2 text-[11px] font-medium tracking-widest uppercase px-7 py-3.5 rounded-full border transition-all duration-300"
                style={{ borderColor: BORDER, color: MUTED }}
              >
                {rv.phone.label} →
              </a>
            </div>
          </FadeIn>

          {/* Right: Hours & location */}
          <FadeIn delay={0.15}>
            <div className="space-y-8">
              {/* Hours */}
              <div>
                <p className="font-mono text-[10px] tracking-[0.3em] uppercase mb-4" style={{ color: GOLD }}>
                  Hours
                </p>
                <div className="space-y-3">
                  {config.restaurant.hours.map((h) => (
                    <div
                      key={h.days}
                      className="flex items-baseline justify-between py-3"
                      style={{ borderBottom: `1px solid ${BORDER}` }}
                    >
                      <span className="text-[14px]" style={{ color: TEXT }}>{h.days}</span>
                      <span className="font-mono text-[12px]" style={{ color: MUTED }}>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div>
                <p className="font-mono text-[10px] tracking-[0.3em] uppercase mb-3" style={{ color: GOLD }}>
                  Location
                </p>
                <p className="text-[15px] leading-relaxed" style={{ color: MUTED }}>
                  {config.restaurant.address}
                </p>
                <p className="text-[14px] mt-1" style={{ color: MUTED }}>
                  {config.restaurant.phone}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="px-6 md:px-10 lg:px-16 py-8" style={{ backgroundColor: "#080604", borderTop: `1px solid ${BORDER}` }}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-[13px] font-light tracking-[0.2em] uppercase" style={{ color: TEXT }}>
            {config.restaurant.name}
          </span>
          <p className="font-mono text-[10px] tracking-widest uppercase mt-1" style={{ color: MUTED }}>
            {config.restaurant.descriptor}
          </p>
        </div>
        <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: MUTED }}>
          Sample page ·{" "}
          <Link href="/" className="underline underline-offset-2" style={{ color: "rgba(245,240,232,0.4)" }}>
            Built by James Belda
          </Link>
        </span>
        <div className="flex gap-6">
          {config.footer.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-mono text-[10px] tracking-widest uppercase transition-opacity hover:opacity-70"
              style={{ color: MUTED }}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function RestaurantPage() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: BG, color: TEXT }}>
      <Nav />
      <Hero />
      <Menu />
      <Story />
      <Atmosphere />
      <Reserve />
      <Footer />
    </div>
  );
}
