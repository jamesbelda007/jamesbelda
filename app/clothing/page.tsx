"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { config } from "./config";

const ease = [0.16, 1, 0.3, 1] as const;

// ─── Helpers ─────────────────────────────────────────────────────────────────
function FadeIn({
  children,
  delay = 0,
  className = "",
  y = 28,
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
      transition={{ duration: 0.85, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Nav ─────────────────────────────────────────────────────────────────────
function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease }}
      className="sticky top-0 z-50 bg-[#f5f3ef]/92 backdrop-blur-md border-b border-[#e0dcd6]"
    >
      <div className="flex items-center justify-between px-6 md:px-10 lg:px-14 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-[#999] hover:text-[#111] transition-colors"
        >
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d="M10.5 6.5H2.5M5.5 3 2.5 6.5 5.5 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back
        </Link>

        <span className="text-[13px] font-medium tracking-[0.25em] uppercase text-[#111]">
          {config.brand.name}
        </span>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-7">
            {config.nav.links.map((l) => (
              <a key={l.label} href={l.href} className="font-mono text-[10px] tracking-widest uppercase text-[#888] hover:text-[#111] transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
          <button aria-label="Cart (0)" className="hover:opacity-70 transition-opacity">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
              <path d="M6 15.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM13.5 15.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM1 1h2.2l1.7 9.2h7.6l1.5-6.4H4.8" stroke="#111" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="md:hidden p-1" onClick={() => setOpen((v) => !v)} aria-label="Menu">
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
              <path d={open ? "M1 1l16 10M1 11L17 1" : "M0 1h18M0 6h14M0 11h18"} stroke="#111" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 border-t border-[#e0dcd6] pt-4">
          {config.nav.links.map((l) => (
            <a key={l.label} href={l.href} className="font-mono text-[11px] tracking-widest uppercase text-[#666] hover:text-[#111] transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </motion.header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid grid-cols-2 h-[65vh] md:h-[88vh]">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3, ease }}
          className="relative overflow-hidden"
        >
          <Image src={config.hero.images.left} alt={`${config.brand.name} campaign`} fill className="object-cover object-top" priority sizes="50vw" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3, delay: 0.12, ease }}
          className="relative overflow-hidden"
        >
          <Image src={config.hero.images.right} alt={`${config.brand.name} campaign`} fill className="object-cover object-top" priority sizes="50vw" />
          <div className="absolute inset-0 bg-black/25" />
        </motion.div>
      </div>

      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-[#f5f3ef]/50 z-10" />

      <div className="absolute inset-x-0 bottom-0 px-6 md:px-10 lg:px-14 pb-7 md:pb-10 z-10 pointer-events-none">
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.25, duration: 1.1, ease }}
            className="text-[clamp(2.8rem,9vw,9.5rem)] font-extralight tracking-[0.06em] text-white leading-none"
            style={{ textShadow: "0 2px 48px rgba(0,0,0,0.4)" }}
          >
            {config.brand.name.toLowerCase()}
          </motion.h1>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7, ease }}
          className="font-mono text-[10px] tracking-[0.28em] uppercase text-white/65 mt-2"
        >
          {config.brand.season}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute top-5 right-6 md:right-10 text-right z-10 pointer-events-none"
      >
        <p className="font-mono text-[9px] tracking-[0.28em] uppercase text-white/55">New Collection</p>
      </motion.div>
    </section>
  );
}

// ─── Products ────────────────────────────────────────────────────────────────
function ProductCard({ item, delay }: { item: (typeof config.products)[0]; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease }}
      className="group cursor-pointer"
    >
      <a href={item.href} className="block">
        <div className="relative overflow-hidden aspect-[3/4] mb-3.5 bg-[#e8e4de]">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
          <div className="absolute inset-x-0 bottom-0 flex justify-center pb-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <span className="bg-white text-[#111] text-[10px] font-medium tracking-[0.2em] uppercase px-7 py-3 hover:bg-[#111] hover:text-white transition-colors duration-200">
              Quick Add
            </span>
          </div>
        </div>
        <p className="font-mono text-[10px] text-[#999] uppercase tracking-widest mb-1">{item.category}</p>
        <div className="flex items-baseline justify-between">
          <p className="text-[13px] text-[#111] font-medium">{item.name}</p>
          <p className="font-mono text-[12px] text-[#555]">{item.price}</p>
        </div>
      </a>
    </motion.div>
  );
}

function Products() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10 lg:px-14">
      <FadeIn className="flex items-end justify-between mb-10 md:mb-14">
        <div>
          <p className="font-mono text-[10px] tracking-widest uppercase text-[#999] mb-2">New Arrivals</p>
          <h2 className="text-[clamp(1.6rem,4vw,3rem)] font-light tracking-tight text-[#111] leading-none">Featured Styles</h2>
        </div>
        <a href="#" className="hidden md:flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-[#888] hover:text-[#111] transition-colors">
          View All
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>
        </a>
      </FadeIn>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 md:gap-x-6">
        {config.products.map((p, i) => (
          <ProductCard key={p.name} item={p} delay={i * 0.08} />
        ))}
      </div>
    </section>
  );
}

// ─── Editorial Banner ────────────────────────────────────────────────────────
function Editorial() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const ed = config.editorial;

  return (
    <section ref={ref} className="relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, ease }}
        className="relative h-[58vh] md:h-[72vh]"
      >
        <Image src={ed.image} alt={ed.title} fill className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-10 lg:px-14 pb-10 md:pb-14">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.35, duration: 0.7, ease }} className="font-mono text-[10px] tracking-[0.28em] uppercase text-white/60 mb-3">
            {ed.eyebrow}
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.45, duration: 0.9, ease }} className="text-[clamp(3rem,10vw,9rem)] font-extralight italic text-white tracking-[0.03em] leading-none mb-6 md:mb-8">
            {ed.title}
          </motion.h2>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6, duration: 0.7, ease }} className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <p className="text-[13px] text-white/70 max-w-xs leading-relaxed">{ed.description}</p>
            <a href={ed.cta.href} className="font-mono text-[10px] tracking-[0.25em] uppercase text-white border-b border-white/40 pb-0.5 hover:border-white transition-colors self-start md:self-auto whitespace-nowrap">
              {ed.cta.label}
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

// ─── Story ────────────────────────────────────────────────────────────────────
function Story() {
  const st = config.story;
  return (
    <section className="py-16 md:py-28 px-6 md:px-10 lg:px-14 border-t border-[#e0dcd6]">
      <div className="grid md:grid-cols-[1fr_1.1fr] gap-10 md:gap-20 items-center">
        <FadeIn className="relative aspect-[3/4] overflow-hidden bg-[#e8e4de]">
          <Image src={st.image} alt="Brand story" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 45vw" />
        </FadeIn>
        <FadeIn delay={0.15} className="space-y-5 md:space-y-6">
          <p className="font-mono text-[10px] tracking-widest uppercase text-[#999]">{st.eyebrow}</p>
          <h2 className="text-[clamp(1.6rem,3.5vw,2.8rem)] font-light text-[#111] leading-[1.12] tracking-tight">{st.heading}</h2>
          {st.body.map((p, i) => (
            <p key={i} className="text-[14px] text-[#777] leading-relaxed">{p}</p>
          ))}
          <a href={st.cta.href} className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-[#111] border-b border-[#111]/25 pb-0.5 hover:border-[#111] transition-colors">
            {st.cta.label}
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M2 5.5h7M6 2.5l3 3-3 3" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" /></svg>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── More Products ────────────────────────────────────────────────────────────
function MoreProducts() {
  return (
    <section className="pb-16 md:pb-24 px-6 md:px-10 lg:px-14">
      <FadeIn className="flex items-end justify-between mb-10">
        <div>
          <p className="font-mono text-[10px] tracking-widest uppercase text-[#999] mb-2">Also Featured</p>
          <h2 className="text-[clamp(1.3rem,3vw,2.2rem)] font-light tracking-tight text-[#111] leading-none">Complete the Look</h2>
        </div>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8 md:gap-x-6">
        {config.moreProducts.map((p, i) => (
          <ProductCard key={p.name} item={p} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
}

// ─── Newsletter ───────────────────────────────────────────────────────────────
function Newsletter() {
  const nl = config.newsletter;
  return (
    <section className="border-t border-[#e0dcd6] py-14 md:py-20 px-6 md:px-10 lg:px-14">
      <FadeIn className="max-w-lg">
        <p className="font-mono text-[10px] tracking-widest uppercase text-[#999] mb-3">{nl.eyebrow}</p>
        <h3 className="text-[1.4rem] md:text-[1.8rem] font-light text-[#111] mb-7 leading-snug whitespace-pre-line">{nl.heading}</h3>
        <form className="flex" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="your@email.com" className="flex-1 border border-[#dbd7d2] border-r-0 px-4 py-3 text-[13px] text-[#111] bg-transparent placeholder:text-[#bbb] focus:outline-none focus:border-[#111] transition-colors" />
          <button type="submit" className="bg-[#111] text-white font-mono text-[10px] tracking-widest uppercase px-6 py-3 hover:bg-[#333] transition-colors whitespace-nowrap">Subscribe</button>
        </form>
      </FadeIn>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const ft = config.footer;
  return (
    <footer className="border-t border-[#e0dcd6] px-6 md:px-10 lg:px-14 py-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
        <span className="font-mono text-[11px] text-[#bbb] tracking-widest uppercase">© {new Date().getFullYear()} {ft.brandName}</span>
        <span className="font-mono text-[10px] text-[#ccc] tracking-widest uppercase">
          Sample page · <Link href="/" className="text-[#999] hover:text-[#111] transition-colors underline underline-offset-2">Built by James Belda</Link>
        </span>
        <div className="flex gap-6">
          {ft.links.map((l) => (
            <a key={l.label} href={l.href} className="font-mono text-[10px] tracking-widest uppercase text-[#bbb] hover:text-[#666] transition-colors">{l.label}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function ClothingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: "#f5f3ef", color: "#111" }}>
      <Nav />
      <Hero />
      <Products />
      <Editorial />
      <Story />
      <MoreProducts />
      <Newsletter />
      <Footer />
    </div>
  );
}
