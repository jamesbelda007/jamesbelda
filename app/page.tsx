"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ease = [0.16, 1, 0.3, 1] as const;

// ─── Utility: scroll-triggered fade-up ──────────────────────────────────────
function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Navigation ─────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = ["Work", "About", "Contact"] as const;

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease }}
        className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-12 lg:px-16 py-5 transition-all duration-500 ${
          scrolled
            ? "bg-black/75 backdrop-blur-xl border-b border-white/[0.06]"
            : ""
        }`}
      >
        <a
          href="#"
          className="font-mono text-[11px] tracking-[0.25em] uppercase text-white/40 hover:text-white/70 transition-colors"
        >
          JB
        </a>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-[13px] text-white/70 hover:text-white transition-colors tracking-wide"
            >
              {l}
            </a>
          ))}
          <a
            href="#contact"
            className="text-[13px] text-white/80 border border-white/15 rounded-full px-5 py-2.5 hover:bg-white hover:text-black transition-all duration-300 tracking-wide"
          >
            Let&apos;s Talk
          </a>
        </nav>

        {/* Hamburger */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 flex flex-col justify-center gap-[5px] z-50 relative"
        >
          <motion.span
            animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }}
            transition={{ duration: 0.3 }}
            className="block w-6 h-[1.5px] bg-white origin-center"
          />
          <motion.span
            animate={{ opacity: open ? 0 : 1 }}
            transition={{ duration: 0.2 }}
            className="block w-4 h-[1.5px] bg-white/60"
          />
          <motion.span
            animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }}
            transition={{ duration: 0.3 }}
            className="block w-6 h-[1.5px] bg-white origin-center"
          />
        </button>
      </motion.header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black flex flex-col items-start justify-end px-6 pb-20"
          >
            {links.map((l, i) => (
              <motion.a
                key={l}
                href={`#${l.toLowerCase()}`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.08, ease }}
                onClick={() => setOpen(false)}
                className="text-[clamp(2.5rem,12vw,5rem)] font-black tracking-tighter text-white leading-none py-2 hover:text-white/50 transition-colors"
              >
                {l}
              </motion.a>
            ))}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.42 }}
              className="mt-10 font-mono text-sm text-white/30 tracking-widest"
            >
              jsa.beldaa@gmail.com
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden bg-black">
      {/* Background photo + overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/jamesbelda2.png"
          alt="James Belda"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
      </div>

      <div className="relative z-10 px-6 md:px-12 lg:px-16 pb-14 md:pb-24 pt-28">
        <div className="max-w-7xl mx-auto">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7, ease }}
            className="font-mono text-[11px] tracking-[0.3em] text-white/55 uppercase mb-5 md:mb-7"
          >
            Web Developer · Designer · Builder
          </motion.p>

          {/* Split name reveal */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.1, duration: 1.1, ease }}
              className="text-[clamp(4.5rem,16vw,18rem)] font-black leading-[0.82] tracking-[-0.03em] text-white"
            >
              James
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.26, duration: 1.1, ease }}
              className="text-[clamp(4.5rem,16vw,18rem)] font-black leading-[0.82] tracking-[-0.03em] text-transparent"
              style={{ WebkitTextStroke: "2px rgba(255,255,255,0.22)" }}
            >
              Belda
            </motion.h1>
          </div>

          {/* Bottom row */}
          <div className="mt-8 md:mt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8, ease }}
              className="max-w-[400px] text-[15px] md:text-base text-white/75 leading-relaxed"
            >
              I craft digital experiences that are as functional as they are
              beautiful — for every industry, every audience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8, ease }}
              className="flex flex-wrap gap-2"
            >
              <RolePill href="https://kulay.io/">CTO @ Kulay</RolePill>
              <RolePill href="https://www.kblink.ph/jfyeBEtSYQXhByAMOfWa">Co-founder @ kblink.ph</RolePill>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9, duration: 1.2 }}
        className="absolute bottom-8 right-6 md:right-16 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-white/25 to-transparent"
        />
        <span className="font-mono text-[9px] tracking-[0.3em] text-white/20 uppercase">
          scroll
        </span>
      </motion.div>
    </section>
  );
}

function RolePill({ children, href }: { children: React.ReactNode; href?: string }) {
  const cls = "font-mono text-[10px] tracking-widest uppercase text-white/55 border border-white/20 rounded-full px-4 py-2 hover:text-white/90 hover:border-white/40 transition-colors";
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return <span className={cls}>{children}</span>;
}

// ─── Ticker ──────────────────────────────────────────────────────────────────
function Ticker() {
  const words = [
    "Web Design",
    "Creative Direction",
    "Full Stack Dev",
    "UI · UX",
    "Brand Identity",
    "Mobile First",
    "Performance",
    "Accessibility",
  ];
  const repeated = [...words, ...words, ...words];

  return (
    <div className="overflow-hidden border-y border-white/[0.06] bg-white/[0.015] py-4">
      <motion.div
        animate={{ x: ["0%", "-33.33%"] }}
        transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
        className="flex whitespace-nowrap"
      >
        {repeated.map((w, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-white/45 px-7">
              {w}
            </span>
            <span className="text-white/10 text-[7px]">◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// ─── Work Categories ─────────────────────────────────────────────────────────
type Category = {
  label: string;
  title: string;
  desc: string;
  colorFrom: string;
  colorTo: string;
  accent: string;
  colSpan: string;
  href?: string;
  image?: string;
  browserUrl?: string;
};

const CATEGORIES: Category[] = [
  {
    label: "Corporate",
    title: "Professional Presence",
    desc: "Clean, authoritative websites for enterprise and B2B clients.",
    colorFrom: "#0f172a",
    colorTo: "#1e3a5f",
    accent: "#60a5fa",
    colSpan: "md:col-span-2",
    href: "/corporate",
    browserUrl: "jamesbelda.com/corporate",
    image: "/corporate.png",
  },
  {
    label: "Brand Website",
    title: "Brand Identity",
    desc: "Visual storytelling sites that amplify brand values.",
    colorFrom: "#1a0800",
    colorTo: "#7c2d12",
    accent: "#fb923c",
    colSpan: "",
    href: "/brand",
    browserUrl: "jamesbelda.com/brand",
    image: "/brand.png",
  },
  {
    label: "Restaurant",
    title: "Culinary Experience",
    desc: "Appetizing digital spaces that drive reservations.",
    colorFrom: "#150600",
    colorTo: "#92400e",
    accent: "#fcd34d",
    colSpan: "",
  },
  {
    label: "Clothing Brand",
    title: "Fashion Forward",
    desc: "Minimal, editorial aesthetics for fashion labels.",
    colorFrom: "#0a0a0a",
    colorTo: "#27272a",
    accent: "#e4e4e7",
    colSpan: "",
    href: "/clothing",
    image: "/clothing.png",
    browserUrl: "jamesbelda.com/clothing",
  },
  {
    label: "Real Estate",
    title: "Property Showcase",
    desc: "Sophisticated listings that close deals faster.",
    colorFrom: "#071207",
    colorTo: "#14532d",
    accent: "#4ade80",
    colSpan: "",
  },
  {
    label: "SaaS / Tech",
    title: "Growth Platform",
    desc: "High-converting pages for digital products and tools.",
    colorFrom: "#0c0020",
    colorTo: "#2e1065",
    accent: "#a78bfa",
    colSpan: "md:col-span-2",
  },
  {
    label: "E-commerce",
    title: "Shop Experience",
    desc: "Conversion-focused storefronts built for revenue.",
    colorFrom: "#0a0010",
    colorTo: "#500724",
    accent: "#f472b6",
    colSpan: "",
  },
];

function CategoryCard({ cat, index }: { cat: Category; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.08 });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 56 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay: index * 0.07, ease }}
      className={`group relative rounded-2xl overflow-hidden cursor-pointer ${cat.colSpan}`}
    >
      {cat.href && (
        <Link href={cat.href} className="absolute inset-0 z-20" aria-label={`View ${cat.title}`} />
      )}
      <div
        className="relative h-64 md:h-72 overflow-hidden transition-transform duration-700 group-hover:scale-[1.015]"
        style={{
          background: `linear-gradient(135deg, ${cat.colorFrom}, ${cat.colorTo})`,
        }}
      >
        {/* Thumbnail image */}
        {cat.image && (
          <Image
            src={cat.image}
            alt={cat.title}
            fill
            className="object-cover object-top opacity-70 group-hover:opacity-80 transition-opacity duration-500"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        )}
        {/* Faux browser bar */}
        <div className="absolute top-0 inset-x-0 flex items-center gap-1.5 px-4 py-3 bg-black/20 border-b border-white/[0.07]">
          <span className="block w-2.5 h-2.5 rounded-full bg-[#ff5f57]/60" />
          <span className="block w-2.5 h-2.5 rounded-full bg-[#febc2e]/60" />
          <span className="block w-2.5 h-2.5 rounded-full bg-[#28c840]/60" />
          <div className="flex-1 mx-3 h-[18px] rounded bg-black/20 flex items-center px-3">
            <span className="font-mono text-[9px] text-white/20 truncate">
              {cat.browserUrl ?? "coming soon · placeholder"}
            </span>
          </div>
        </div>

        {/* Ambient glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"
          style={{ backgroundColor: cat.accent }}
        />

        {/* Card content */}
        <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
          <p
            className="font-mono text-[10px] tracking-[0.22em] uppercase mb-1.5"
            style={{ color: cat.accent }}
          >
            {cat.label}
          </p>
          <h3 className="text-[1.1rem] md:text-xl font-bold text-white tracking-tight leading-snug">
            {cat.title}
          </h3>
          <p className="text-[13px] text-white/65 mt-1 leading-snug">{cat.desc}</p>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300 text-[13px] font-medium text-white border border-white/25 rounded-full px-6 py-3 hover:bg-white hover:text-black">
            {cat.href ? "View Project →" : "Coming Soon"}
          </span>
        </div>
      </div>
    </motion.article>
  );
}

function Works() {
  return (
    <section id="work" className="py-24 md:py-36 px-6 md:px-12 lg:px-16 bg-black">
      <div className="max-w-7xl mx-auto">
        <FadeUp className="mb-16 md:mb-20">
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-white/55">
            Selected Work
          </span>
          <h2 className="text-[clamp(2.5rem,7vw,6.5rem)] font-black tracking-tighter text-white mt-3 leading-[0.88]">
            Crafted for
            <br />
            every industry.
          </h2>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {CATEGORIES.map((cat, i) => (
            <CategoryCard key={cat.label} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── About ───────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="py-24 md:py-36 px-6 md:px-12 lg:px-16 bg-[#040404]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[1fr_1.15fr] gap-14 md:gap-28 items-center">
          {/* Photo */}
          <FadeUp className="relative">
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-white/[0.04]">
              <Image
                src="/self.png"
                alt="James Belda"
                fill
                className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-1000"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5, ease }}
              className="absolute -bottom-4 -right-3 md:-right-6 bg-white text-black rounded-full px-5 py-3 text-[11px] font-mono tracking-widest uppercase shadow-2xl"
            >
              Open to projects
            </motion.div>
          </FadeUp>

          {/* Text */}
          <div className="space-y-5">
            <FadeUp delay={0.1}>
              <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-white/55">
                About
              </span>
              <h2 className="text-[clamp(2rem,4.5vw,4rem)] font-black tracking-tighter text-white mt-3 leading-[0.9]">
                I turn ideas into
                <br />
                digital realities.
              </h2>
            </FadeUp>

            <FadeUp delay={0.15}>
              <p className="text-[15px] text-white/75 leading-relaxed">
                I&apos;m James Belda — a tech builder, designer, and creative
                engineer passionate about crafting web experiences that actually
                make people feel something. With roots in both engineering and
                design, I thrive at the intersection of code and creativity.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="text-[15px] text-white/75 leading-relaxed">
                From enterprise platforms to boutique brand sites, I bring the
                same obsessive attention to craft and bias for elegance to every
                engagement.
              </p>
            </FadeUp>

            <FadeUp delay={0.28}>
              <div className="pt-4 space-y-0 divide-y divide-white/[0.06]">
                {[
                  { role: "Chief Technology Officer", org: "Kulay", dot: "#60a5fa", href: "https://kulay.io/" },
                  { role: "Co-Founder", org: "kblink.ph", dot: "#a78bfa", href: "https://www.kblink.ph/jfyeBEtSYQXhByAMOfWa" },
                ].map(({ role, org, dot, href }) => (
                  <a
                    key={org}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 py-4 group/role"
                  >
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: dot }}
                    />
                    <div>
                      <p className="text-[14px] font-semibold text-white leading-tight">
                        {role}
                      </p>
                      <p className="text-[11px] font-mono text-white/55 group-hover/role:text-white/90 transition-colors tracking-wide mt-0.5">
                        {org} ↗
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Contact ─────────────────────────────────────────────────────────────────
function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 md:py-52 px-6 md:px-12 lg:px-16 bg-black overflow-hidden"
    >
      {/* Background watermark */}
      <div
        aria-hidden
        className="pointer-events-none select-none absolute inset-0 flex items-center justify-center overflow-hidden"
      >
        <span className="text-[22vw] font-black text-white/[0.018] tracking-tighter whitespace-nowrap leading-none">
          HELLO
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <FadeUp>
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-white/55">
            Contact
          </span>
          <h2 className="text-[clamp(2.5rem,8vw,8.5rem)] font-black tracking-tighter text-white mt-3 mb-4 leading-[0.87]">
            Let&apos;s build something
            <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "2px rgba(255,255,255,0.2)" }}
            >
              remarkable.
            </span>
          </h2>
          <p className="text-[15px] text-white/70 max-w-sm mx-auto mb-10 leading-relaxed">
            Have a project in mind? I&apos;d love to hear about it. Let&apos;s
            create something that makes people stop and stare.
          </p>
          <a
            href="mailto:jsa.beldaa@gmail.com"
            className="inline-flex items-center gap-3 bg-white text-black text-sm font-semibold rounded-full px-8 py-4 hover:scale-[1.04] active:scale-[0.97] transition-transform duration-300"
          >
            jsa.beldaa@gmail.com
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path
                d="M2.5 7h9M8 3.5 11.5 7 8 10.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </FadeUp>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-16 py-6 bg-black border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-white/20 tracking-widest uppercase">
        <span>© {new Date().getFullYear()} James Belda</span>
        <span>CTO @ Kulay · Co-founder @ kblink.ph</span>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Nav />
      <Hero />
      <Ticker />
      <Works />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

