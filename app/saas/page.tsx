"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { config } from "./config";

const ease = [0.16, 1, 0.3, 1] as const;
const BG = "#06040f";
const BG2 = "#0c0a1a";
const TEXT = "#f0eeff";
const PURPLE = "#7c3aed";
const PURPLE_LIGHT = "#a78bfa";
const MUTED = "rgba(240,238,255,0.45)";
const BORDER = "rgba(240,238,255,0.08)";

function FadeIn({ children, delay = 0, className = "", y = 24, style }: { children: React.ReactNode; delay?: number; className?: string; y?: number; style?: React.CSSProperties }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.85, delay, ease }} className={className} style={style}>
      {children}
    </motion.div>
  );
}

// ─── Dashboard Mockup ────────────────────────────────────────────────────────
function DashboardMockup() {
  const bars = [55, 72, 48, 88, 65, 95, 78];
  const metrics = [
    { label: "MRR", value: "$48.2K", change: "+12.4%", up: true },
    { label: "Users", value: "12,847", change: "+8.1%", up: true },
    { label: "Churn", value: "2.3%", change: "-0.4%", up: false },
  ];
  return (
    <div className="relative rounded-xl overflow-hidden shadow-2xl" style={{ border: `1px solid ${BORDER}`, backgroundColor: "#0d0b1a" }}>
      {/* Browser bar */}
      <div className="flex items-center gap-1.5 px-4 py-3" style={{ borderBottom: `1px solid ${BORDER}` }}>
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
        <div className="flex-1 mx-4 h-5 rounded-full flex items-center px-3" style={{ backgroundColor: "rgba(255,255,255,0.04)" }}>
          <span className="font-mono text-[9px]" style={{ color: "rgba(255,255,255,0.2)" }}>app.pulse.io/dashboard</span>
        </div>
      </div>
      {/* Layout */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-11 py-4 flex flex-col gap-3 items-center" style={{ borderRight: `1px solid ${BORDER}` }}>
          {[PURPLE, "rgba(255,255,255,0.06)", "rgba(255,255,255,0.06)", "rgba(255,255,255,0.06)", "rgba(255,255,255,0.06)"].map((bg, i) => (
            <div key={i} className="w-7 h-7 rounded-lg" style={{ backgroundColor: bg }} />
          ))}
        </div>
        {/* Main content */}
        <div className="flex-1 p-4 space-y-3">
          {/* Metric row */}
          <div className="grid grid-cols-3 gap-2">
            {metrics.map((m) => (
              <div key={m.label} className="p-2.5 rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.04)" }}>
                <p className="font-mono text-[8px] uppercase tracking-wider mb-1" style={{ color: "rgba(255,255,255,0.3)" }}>{m.label}</p>
                <p className="text-[13px] font-bold" style={{ color: TEXT }}>{m.value}</p>
                <p className={`font-mono text-[8px] ${m.up ? "text-emerald-400" : "text-pink-400"}`}>{m.change}</p>
              </div>
            ))}
          </div>
          {/* Bar chart */}
          <div className="p-3 rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.04)" }}>
            <p className="font-mono text-[8px] uppercase tracking-wider mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>Revenue — Last 7 days</p>
            <div className="flex items-end gap-1.5 h-14">
              {bars.map((h, i) => (
                <div key={i} className="flex-1 rounded-sm transition-all" style={{ height: `${h}%`, backgroundColor: i === 5 ? PURPLE : `rgba(124,58,237,0.28)` }} />
              ))}
            </div>
          </div>
          {/* Table rows */}
          <div className="space-y-1.5">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-2.5 px-2 py-2 rounded" style={{ backgroundColor: "rgba(255,255,255,0.025)" }}>
                <div className="w-5 h-5 rounded" style={{ backgroundColor: `rgba(124,58,237,${0.25 + i * 0.12})` }} />
                <div className="flex-1 h-2 rounded" style={{ backgroundColor: "rgba(255,255,255,0.06)" }} />
                <div className="w-12 h-2 rounded" style={{ backgroundColor: "rgba(255,255,255,0.08)" }} />
                <div className="w-8 h-4 rounded-full text-[7px] font-mono flex items-center justify-center" style={{ backgroundColor: "rgba(124,58,237,0.2)", color: PURPLE_LIGHT }}>live</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Nav ──────────────────────────────────────────────────────────────────────
function Nav() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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
      style={{ backgroundColor: isScrolled ? "rgba(6,4,15,0.9)" : "transparent", backdropFilter: isScrolled ? "blur(16px)" : "none", borderBottom: isScrolled ? `1px solid ${BORDER}` : "none" }}
    >
      <div className="flex items-center justify-between px-6 md:px-10 lg:px-16 py-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest uppercase transition-colors" style={{ color: MUTED }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M9.5 6H2.5M5 3 2.5 6 5 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Back
          </Link>
          <span className="w-px h-4" style={{ backgroundColor: BORDER }} />
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ backgroundColor: PURPLE }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="3" fill="white"/><circle cx="6" cy="6" r="5.5" stroke="white" strokeWidth="1"/></svg>
            </div>
            <span className="text-[14px] font-bold tracking-tight" style={{ color: TEXT }}>{config.product.name}</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {config.nav.links.map((l) => (
            <a key={l.label} href={l.href} className="text-[13px] font-medium transition-colors" style={{ color: MUTED }}>{l.label}</a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-[13px]" style={{ color: MUTED }}>Log in</a>
          <a href={config.nav.cta.href} className="text-[12px] font-semibold rounded-full px-5 py-2.5 transition-all hover:opacity-90" style={{ backgroundColor: PURPLE, color: "#fff" }}>
            {config.nav.cta.label}
          </a>
        </div>

        <button className="md:hidden p-2" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none"><path d={open ? "M1 1l18 12M1 13L19 1" : "M0 1h20M0 7h14M0 13h20"} stroke={TEXT} strokeWidth="1.5" strokeLinecap="round"/></svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6 pt-4 flex flex-col gap-4" style={{ backgroundColor: BG, borderTop: `1px solid ${BORDER}` }}>
          {config.nav.links.map((l) => (
            <a key={l.label} href={l.href} className="text-[14px]" style={{ color: MUTED }} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href={config.nav.cta.href} className="mt-2 text-center text-[12px] font-semibold rounded-full px-5 py-3" style={{ backgroundColor: PURPLE, color: "#fff" }}>
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
    <section className="min-h-[100svh] flex items-center pt-24 pb-16 px-6 md:px-10 lg:px-16 overflow-hidden" style={{ backgroundColor: BG }}>
      {/* Purple glow bg */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-3xl pointer-events-none" style={{ backgroundColor: "rgba(124,58,237,0.12)" }} />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-[12px] font-medium"
              style={{ backgroundColor: "rgba(124,58,237,0.15)", border: `1px solid rgba(124,58,237,0.3)`, color: PURPLE_LIGHT }}
            >
              {config.hero.badge}
            </motion.div>

            {config.hero.headline.map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.h1
                  initial={{ y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.1 + i * 0.13, duration: 1, ease }}
                  className="font-black tracking-tighter leading-[0.88]"
                  style={{ fontSize: "clamp(3rem,8vw,7rem)", color: TEXT }}
                >
                  {line}
                </motion.h1>
              </div>
            ))}

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.7 }}
              className="text-[15px] leading-relaxed mt-6 mb-8 max-w-md"
              style={{ color: MUTED }}
            >
              {config.hero.subtext}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-wrap gap-3 mb-4"
            >
              <a href={config.hero.cta.primary.href} className="text-[13px] font-semibold rounded-full px-7 py-3.5 transition-all hover:opacity-90" style={{ backgroundColor: PURPLE, color: "#fff" }}>
                {config.hero.cta.primary.label}
              </a>
              <a href={config.hero.cta.secondary.href} className="text-[13px] font-medium rounded-full px-7 py-3.5 border transition-all" style={{ borderColor: BORDER, color: TEXT }}>
                {config.hero.cta.secondary.label}
              </a>
            </motion.div>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="text-[12px]" style={{ color: "rgba(240,238,255,0.3)" }}>
              {config.hero.note}
            </motion.p>
          </div>

          {/* Right — Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.5, duration: 1, ease }}
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Social Proof ─────────────────────────────────────────────────────────────
function SocialProof() {
  return (
    <div className="py-8 px-6 md:px-10 lg:px-16" style={{ backgroundColor: BG2, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-10">
        <p className="font-mono text-[10px] tracking-widest uppercase shrink-0" style={{ color: MUTED }}>{config.social.label}</p>
        <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-10">
          {config.social.logos.map((name) => (
            <span key={name} className="text-[13px] font-bold tracking-tight" style={{ color: "rgba(240,238,255,0.2)" }}>{name}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Features ─────────────────────────────────────────────────────────────────
function Features() {
  const icons = [
    <svg key="f1" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 14l4-4 3 3 4-5 3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/><rect x="2" y="2" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.4"/></svg>,
    <svg key="f2" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2v16M2 6l8-4 8 4M2 14l8 4 8-4M2 10h16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>,
    <svg key="f3" width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.4"/><path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.22 4.22l1.42 1.42M14.36 14.36l1.42 1.42M4.22 15.78l1.42-1.42M14.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>,
    <svg key="f4" width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="7" cy="7" r="3" stroke="currentColor" strokeWidth="1.4"/><circle cx="14" cy="13" r="3" stroke="currentColor" strokeWidth="1.4"/><path d="M10 7h1a3 3 0 0 1 0 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>,
    <svg key="f5" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M6 8l-4 2 4 2M14 8l4 2-4 2M11 5l-2 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    <svg key="f6" width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="3" y="11" width="14" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4"/><path d="M7 11V7a3 3 0 0 1 6 0v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>,
  ];

  return (
    <section id="features" className="py-20 md:py-32 px-6 md:px-10 lg:px-16" style={{ backgroundColor: BG }}>
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-14 md:mb-20 text-center max-w-2xl mx-auto">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase" style={{ color: PURPLE_LIGHT }}>Features</span>
          <h2 className="font-black tracking-tighter mt-3 leading-[0.9]" style={{ fontSize: "clamp(2rem,5vw,4rem)", color: TEXT }}>
            Everything you need to grow
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: BORDER }}>
          {config.features.map((f, i) => (
            <FadeIn key={f.title} delay={i * 0.07} className="group p-8 md:p-10 hover:bg-white/[0.02] transition-colors duration-300 bg-[#06040f]">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: "rgba(124,58,237,0.15)", color: PURPLE_LIGHT }}>
                {icons[i]}
              </div>
              <h3 className="text-[1rem] font-bold mb-2 tracking-tight" style={{ color: TEXT }}>{f.title}</h3>
              <p className="text-[13px] leading-relaxed" style={{ color: MUTED }}>{f.desc}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Pricing ──────────────────────────────────────────────────────────────────
function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 px-6 md:px-10 lg:px-16" style={{ backgroundColor: BG2 }}>
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-14 text-center">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase" style={{ color: PURPLE_LIGHT }}>Pricing</span>
          <h2 className="font-black tracking-tighter mt-3 leading-[0.9]" style={{ fontSize: "clamp(2rem,5vw,4rem)", color: TEXT }}>Simple, transparent pricing</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {config.pricing.map((plan, i) => (
            <FadeIn
              key={plan.name}
              delay={i * 0.1}
              className={`relative rounded-2xl p-7 flex flex-col ${plan.highlighted ? "bg-[#7c3aed]" : "bg-[#0c0a1a]"}`}
              style={{ border: `1px solid ${plan.highlighted ? "transparent" : BORDER}` }}>
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full" style={{ backgroundColor: PURPLE_LIGHT, color: "#1e0950" }}>
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <p className="text-[13px] font-semibold mb-1" style={{ color: plan.highlighted ? "rgba(255,255,255,0.7)" : MUTED }}>{plan.name}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-[2.5rem] font-black" style={{ color: TEXT }}>{plan.price}</span>
                  <span className="text-[13px]" style={{ color: MUTED }}>{plan.period}</span>
                </div>
                <p className="text-[13px] mt-1" style={{ color: plan.highlighted ? "rgba(255,255,255,0.55)" : MUTED }}>{plan.desc}</p>
              </div>
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[13px]" style={{ color: plan.highlighted ? "rgba(255,255,255,0.8)" : MUTED }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-0.5 shrink-0"><path d="M2.5 7l3 3 6-6" stroke={plan.highlighted ? "#c4b5fd" : PURPLE_LIGHT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#" className="text-center text-[13px] font-semibold rounded-full py-3 transition-all" style={{ backgroundColor: plan.highlighted ? "#fff" : "rgba(124,58,237,0.15)", color: plan.highlighted ? PURPLE : PURPLE_LIGHT }}>
                {plan.cta}
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
function Testimonials() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-10 lg:px-16" style={{ backgroundColor: BG }}>
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-14 text-center">
          <h2 className="font-black tracking-tighter leading-[0.9]" style={{ fontSize: "clamp(1.8rem,4vw,3rem)", color: TEXT }}>
            Loved by growth teams
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {config.testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1} className="rounded-2xl p-7 flex flex-col gap-5" style={{ backgroundColor: BG2, border: `1px solid ${BORDER}` }}>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} width="14" height="14" viewBox="0 0 14 14" fill={PURPLE_LIGHT}><path d="M7 1l1.5 4.5H14L9.5 8l1.5 4.5L7 10l-4 2.5L4.5 8 0 5.5h5.5Z"/></svg>
                ))}
              </div>
              <p className="text-[14px] leading-relaxed flex-1" style={{ color: MUTED }}>&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-bold" style={{ backgroundColor: "rgba(124,58,237,0.2)", color: PURPLE_LIGHT }}>{t.avatar}</div>
                <div>
                  <p className="text-[13px] font-semibold" style={{ color: TEXT }}>{t.name}</p>
                  <p className="text-[11px]" style={{ color: MUTED }}>{t.role}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA ──────────────────────────────────────────────────────────────────────
function CTA() {
  const ct = config.cta;
  return (
    <section className="py-24 md:py-40 px-6 md:px-10 lg:px-16 relative overflow-hidden text-center" style={{ backgroundColor: BG2 }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-3xl pointer-events-none" style={{ backgroundColor: "rgba(124,58,237,0.18)" }} />
      <div className="relative z-10 max-w-2xl mx-auto">
        <FadeIn>
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase" style={{ color: PURPLE_LIGHT }}>{ct.eyebrow}</span>
          <h2 className="font-black tracking-tighter mt-3 mb-4 leading-[0.88] whitespace-pre-line" style={{ fontSize: "clamp(2.5rem,8vw,7rem)", color: TEXT }}>
            {ct.heading}
          </h2>
          <p className="text-[15px] mb-10" style={{ color: MUTED }}>{ct.subtext}</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href={ct.primary.href} className="text-[13px] font-semibold rounded-full px-8 py-4 transition-all hover:opacity-90" style={{ backgroundColor: PURPLE, color: "#fff" }}>
              {ct.primary.label}
            </a>
            <a href={ct.secondary.href} className="text-[13px] font-medium rounded-full px-8 py-4 border transition-all" style={{ borderColor: BORDER, color: TEXT }}>
              {ct.secondary.label}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="px-6 md:px-10 lg:px-16 py-8" style={{ backgroundColor: "#040309", borderTop: `1px solid ${BORDER}` }}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <span className="text-[13px] font-bold" style={{ color: TEXT }}>{config.product.name}</span>
        <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: MUTED }}>
          Sample page · <Link href="/" className="underline underline-offset-2" style={{ color: "rgba(240,238,255,0.4)" }}>Built by James Belda</Link>
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

export default function SaasPage() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: BG, color: TEXT }}>
      <Nav />
      <Hero />
      <SocialProof />
      <Features />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
