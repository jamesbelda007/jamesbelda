"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { config } from "./config";

const ease = [0.16, 1, 0.3, 1] as const;
const BG = "#fdf9fb";
const BG2 = "#f8f3f6";
const TEXT = "#1a0814";
const PINK = "#db2777";
const PINK_LIGHT = "#fce7f3";
const MUTED = "#7a5a6a";
const BORDER = "#f0e4ec";

function FadeIn({ children, delay = 0, className = "", y = 24 }: { children: React.ReactNode; delay?: number; className?: string; y?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.85, delay, ease }} className={className}>
      {children}
    </motion.div>
  );
}

// ─── Nav ──────────────────────────────────────────────────────────────────────
function Nav() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount] = useState(0);

  React.useEffect(() => {
    const fn = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease }}
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{ backgroundColor: isScrolled ? "rgba(253,249,251,0.95)" : BG, backdropFilter: isScrolled ? "blur(12px)" : "none", borderBottom: `1px solid ${BORDER}` }}
    >
      <div className="flex items-center justify-between px-6 md:px-10 lg:px-16 py-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest uppercase" style={{ color: MUTED }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M9.5 6H2.5M5 3 2.5 6 5 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Back
          </Link>
          <span className="w-px h-4" style={{ backgroundColor: BORDER }} />
          <span className="text-[15px] font-bold tracking-tight" style={{ color: TEXT }}>{config.brand.name}</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {config.nav.links.map((l) => (
            <a key={l.label} href={l.href} className="text-[13px] font-medium transition-colors" style={{ color: MUTED }}>{l.label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href="#" className="hidden md:block text-[12px] font-semibold rounded-full px-5 py-2.5 transition-all hover:opacity-90" style={{ backgroundColor: PINK, color: "#fff" }}>
            {config.nav.cta.label}
          </a>
          {/* Cart */}
          <button className="relative p-1" aria-label="Cart">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7 17.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM16 17.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM1 1h2.5l2 10h9l2-7.5H5" stroke={TEXT} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            {cartCount > 0 && <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-[9px] flex items-center justify-center text-white" style={{ backgroundColor: PINK }}>{cartCount}</span>}
          </button>
          <button className="md:hidden p-1" onClick={() => setOpen((v) => !v)} aria-label="Menu">
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none"><path d={open ? "M1 1l18 12M1 13L19 1" : "M0 1h20M0 7h14M0 13h20"} stroke={TEXT} strokeWidth="1.5" strokeLinecap="round"/></svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6 pt-4 flex flex-col gap-4" style={{ backgroundColor: BG, borderTop: `1px solid ${BORDER}` }}>
          {config.nav.links.map((l) => (
            <a key={l.label} href={l.href} className="text-[14px] font-medium" style={{ color: MUTED }} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href={config.nav.cta.href} className="mt-2 text-center text-[12px] font-semibold rounded-full px-5 py-3" style={{ backgroundColor: PINK, color: "#fff" }} onClick={() => setOpen(false)}>
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
    <section className="relative min-h-[100svh] flex items-end overflow-hidden" style={{ backgroundColor: "#1a0814" }}>
      <div className="absolute inset-0">
        <Image src={config.hero.image} alt="Aura Store" fill className="object-cover object-center" priority sizes="100vw" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
      </div>

      <div className="relative z-10 w-full px-6 md:px-10 lg:px-16 pb-16 md:pb-24 pt-28">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-mono text-[11px] tracking-[0.3em] uppercase mb-5"
            style={{ color: "#f9a8d4" }}
          >
            {config.hero.eyebrow}
          </motion.p>

          {config.hero.headline.map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.h1
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.1 + i * 0.14, duration: 1.05, ease }}
                className="font-black tracking-tighter leading-[0.87] text-white"
                style={{ fontSize: "clamp(3.5rem,12vw,12rem)" }}
              >
                {line}
              </motion.h1>
            </div>
          ))}

          <div className="mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="max-w-sm text-[15px] leading-relaxed"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              {config.hero.subtext}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.7 }}
              className="flex flex-wrap gap-3"
            >
              <a href={config.hero.cta.primary.href} className="text-[12px] font-semibold rounded-full px-7 py-3.5 transition-all" style={{ backgroundColor: PINK, color: "#fff" }}>
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

// ─── Products ─────────────────────────────────────────────────────────────────
function ProductCard({ item, index }: { item: (typeof config.products)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.08 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.07, ease }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden aspect-[3/4] rounded-xl mb-3.5" style={{ backgroundColor: BG2 }}>
        <Image src={item.image} alt={item.name} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.05]" sizes="(max-width: 768px) 50vw, 25vw" />
        {item.tag && (
          <span className="absolute top-3 left-3 text-[10px] font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full"
            style={{ backgroundColor: item.tag === "Sale" ? "#ef4444" : item.tag === "New" ? PINK : "#1a0814", color: "#fff" }}>
            {item.tag}
          </span>
        )}
        <div className="absolute inset-x-0 bottom-0 flex justify-center pb-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <button className="text-[11px] font-semibold tracking-widest uppercase px-6 py-3 rounded-full transition-all" style={{ backgroundColor: TEXT, color: "#fff" }}>
            Add to Cart
          </button>
        </div>
      </div>
      <p className="font-mono text-[10px] tracking-widest uppercase mb-1" style={{ color: MUTED }}>{item.category}</p>
      <div className="flex items-baseline justify-between">
        <p className="text-[14px] font-semibold" style={{ color: TEXT }}>{item.name}</p>
        <div className="flex items-baseline gap-2">
          {item.originalPrice && <span className="text-[12px] line-through" style={{ color: MUTED }}>{item.originalPrice}</span>}
          <span className="font-mono text-[13px] font-bold" style={{ color: item.tag === "Sale" ? "#ef4444" : TEXT }}>{item.price}</span>
        </div>
      </div>
    </motion.div>
  );
}

function Products() {
  return (
    <section id="products" className="py-20 md:py-28 px-6 md:px-10 lg:px-16" style={{ backgroundColor: BG }}>
      <div className="max-w-7xl mx-auto">
        <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: "2.5rem" }}>
          <FadeIn className="flex items-end justify-between mb-12 md:mb-16">
            <div>
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase" style={{ color: PINK }}>New Arrivals</span>
              <h2 className="font-black tracking-tighter mt-2 leading-[0.9]" style={{ fontSize: "clamp(2rem,5vw,4rem)", color: TEXT }}>Featured picks</h2>
            </div>
            <a href="#" className="hidden md:flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase" style={{ color: MUTED }}>
              View All
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
            </a>
          </FadeIn>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-5 gap-y-10 md:gap-x-7">
          {config.products.map((p, i) => (
            <ProductCard key={p.name} item={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Categories ───────────────────────────────────────────────────────────────
function Categories() {
  return (
    <section id="categories" className="py-16 md:py-24 px-6 md:px-10 lg:px-16" style={{ backgroundColor: BG2 }}>
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-10">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase" style={{ color: PINK }}>Shop By</span>
          <h2 className="font-black tracking-tighter mt-2 leading-[0.9]" style={{ fontSize: "clamp(1.8rem,4vw,3rem)", color: TEXT }}>Collections</h2>
        </FadeIn>
        <div className="flex flex-wrap gap-3">
          {config.categories.map((cat, i) => (
            <FadeIn key={cat.name} delay={i * 0.07}>
              <button className="flex items-center gap-3 px-5 py-3 rounded-full border transition-all duration-200 hover:border-pink-300 hover:shadow-sm group" style={{ backgroundColor: BG, borderColor: BORDER }}>
                <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: cat.color }} />
                <span className="text-[13px] font-semibold" style={{ color: TEXT }}>{cat.name}</span>
                <span className="font-mono text-[10px]" style={{ color: MUTED }}>{cat.count}</span>
              </button>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Trust ────────────────────────────────────────────────────────────────────
function Trust() {
  return (
    <section className="py-14 md:py-20 px-6 md:px-10 lg:px-16" style={{ backgroundColor: BG, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {config.trust.map((t, i) => (
          <FadeIn key={t.title} delay={i * 0.08} className="text-center">
            <div className="text-2xl mb-3">{t.icon}</div>
            <p className="text-[14px] font-bold mb-1" style={{ color: TEXT }}>{t.title}</p>
            <p className="text-[12px] leading-snug" style={{ color: MUTED }}>{t.desc}</p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// ─── Newsletter ────────────────────────────────────────────────────────────────
function Newsletter() {
  const nl = config.newsletter;
  return (
    <section className="py-20 md:py-32 px-6 md:px-10 lg:px-16 relative overflow-hidden" style={{ backgroundColor: TEXT }}>
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, rgba(219,39,119,1) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
      <div className="max-w-xl mx-auto relative z-10 text-center">
        <FadeIn>
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase" style={{ color: "#f9a8d4" }}>{nl.eyebrow}</span>
          <h2 className="font-black tracking-tighter mt-3 mb-3 leading-[0.88] whitespace-pre-line text-white" style={{ fontSize: "clamp(2rem,6vw,4.5rem)" }}>
            {nl.heading}
          </h2>
          <p className="text-[14px] mb-8" style={{ color: "rgba(255,255,255,0.5)" }}>{nl.subtext}</p>
          <form className="flex" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="your@email.com" className="flex-1 border-y border-l border-r-0 px-4 py-3.5 text-[13px] focus:outline-none transition-colors" style={{ backgroundColor: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.1)", color: "#fff" }} />
            <button type="submit" className="text-[12px] font-semibold tracking-widest uppercase px-6 py-3.5 transition-all hover:opacity-90 whitespace-nowrap" style={{ backgroundColor: PINK, color: "#fff" }}>
              Subscribe
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="px-6 md:px-10 lg:px-16 py-8" style={{ backgroundColor: BG, borderTop: `1px solid ${BORDER}` }}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <span className="text-[14px] font-bold" style={{ color: TEXT }}>{config.brand.name}</span>
        <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: MUTED }}>
          Sample page · <Link href="/" className="underline underline-offset-2" style={{ color: PINK }}>Built by James Belda</Link>
        </span>
        <div className="flex gap-6">
          {config.footer.links.map((l) => (
            <a key={l.label} href={l.href} className="font-mono text-[10px] tracking-widest uppercase hover:opacity-70 transition-opacity" style={{ color: MUTED }}>{l.label}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function EcommercePage() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: BG, color: TEXT }}>
      <Nav />
      <Hero />
      <Products />
      <Categories />
      <Trust />
      <Newsletter />
      <Footer />
    </div>
  );
}
