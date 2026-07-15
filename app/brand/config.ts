// ─────────────────────────────────────────────────────────────────────────────
// Brand Identity Landing Page — Config
// Edit this file to customize every piece of content on the page.
//
// IMAGES: Replace any URL with your own. Unsplash format:
//   https://images.unsplash.com/photo-{ID}?auto=format&fit=crop&w={W}&q=85
// ─────────────────────────────────────────────────────────────────────────────

export const config = {
  // ── Studio identity ─────────────────────────────────────────────────────────
  studio: {
    name: "Vantage",
    descriptor: "Brand Identity Studio",
    founded: "Est. 2018",
    email: "hello@vantagestudio.co",
    location: "Manila · Tokyo · New York",
  },

  // ── Navigation ──────────────────────────────────────────────────────────────
  nav: {
    links: [
      { label: "Work", href: "#work" },
      { label: "Services", href: "#services" },
      { label: "Studio", href: "#about" },
    ],
    cta: { label: "Start a Project", href: "#contact" },
  },

  // ── Hero ────────────────────────────────────────────────────────────────────
  hero: {
    // Each string is a new line of the headline
    headline: ["We shape brands", "that define", "culture."],
    subtext:
      "Vantage is a brand identity studio crafting visual systems for companies that want to be truly unforgettable.",
    cta: { label: "See Our Work", href: "#work" },
    // Creative workspace or brand mockup photo
    image:
      "https://images.pexels.com/photos/37468393/pexels-photo-37468393.jpeg?_gl=1*xohzho*_ga*MTE4OTk1MTQxOS4xNzczMzc2NjIw*_ga_8JE65Q40S6*czE3ODQxMDMzMTUkbzIkZzEkdDE3ODQxMDYwNjAkajM4JGwwJGgw",
  },

  // ── Portfolio / Work ────────────────────────────────────────────────────────
  // Each project uses a CSS color pair (bg + text) — no images required.
  // Swap with actual project image URLs if you have them.
  work: [
    {
      name: "Oasis",
      category: "Beverage Brand",
      year: "2025",
      scope: "Identity · Packaging · Digital",
      bg: "#1a4a3a",
      text: "#a8e6cf",
    },
    {
      name: "Bloom",
      category: "Wellness Studio",
      year: "2025",
      scope: "Identity · Collateral · Web",
      bg: "#f5e6e0",
      text: "#b86052",
    },
    {
      name: "Forge",
      category: "Architecture Firm",
      year: "2024",
      scope: "Identity · Brand Guidelines",
      bg: "#222220",
      text: "#c8c4bc",
    },
    {
      name: "Tide",
      category: "Surf Brand",
      year: "2024",
      scope: "Identity · Apparel · Campaigns",
      bg: "#0a2a4a",
      text: "#60a4d4",
    },
    {
      name: "Ceru",
      category: "Restaurant Chain",
      year: "2024",
      scope: "Identity · Packaging · Signage",
      bg: "#8c3a1a",
      text: "#f4c49a",
    },
    {
      name: "Nox",
      category: "Nightlife Venue",
      year: "2023",
      scope: "Identity · Environmental",
      bg: "#1a0a2e",
      text: "#9060c8",
    },
  ],

  // ── Services ────────────────────────────────────────────────────────────────
  services: [
    {
      number: "01",
      title: "Brand Strategy",
      desc: "Positioning, audience research, messaging architecture, and competitive mapping — the foundation everything builds on.",
    },
    {
      number: "02",
      title: "Visual Identity",
      desc: "Logo design, color systems, typography, iconography, and the full visual language of your brand.",
    },
    {
      number: "03",
      title: "Art Direction",
      desc: "Campaign concepting, photography direction, and creative production that puts your brand in motion.",
    },
    {
      number: "04",
      title: "Brand Guidelines",
      desc: "Comprehensive brand manuals — digital and print — so your team always shows up consistently.",
    },
    {
      number: "05",
      title: "Packaging Design",
      desc: "Product packaging and retail environments that command attention at the point of purchase.",
    },
    {
      number: "06",
      title: "Digital Experience",
      desc: "Websites, social media templates, and digital touchpoints that extend your brand into every screen.",
    },
  ],

  // ── Process ─────────────────────────────────────────────────────────────────
  process: [
    {
      step: "01",
      title: "Discover",
      desc: "We immerse in your world — your goals, audience, competitors, and culture.",
    },
    {
      step: "02",
      title: "Strategize",
      desc: "We define your positioning and build the strategic foundation for the brand.",
    },
    {
      step: "03",
      title: "Design",
      desc: "We create the visual identity and all supporting systems and collateral.",
    },
    {
      step: "04",
      title: "Launch",
      desc: "We deliver everything packaged for handoff, and support your brand rollout.",
    },
  ],

  // ── About / Studio ──────────────────────────────────────────────────────────
  about: {
    eyebrow: "The Studio",
    heading: "Craft-driven.\nCulture-obsessed.\nResults-focused.",
    body: [
      "Founded in 2018, Vantage has helped over 80 brands across consumer goods, hospitality, tech, and fashion build identities that last.",
      "We're a small, senior team. Every project gets our full attention — no junior handoffs, no templates, no shortcuts.",
    ],
    stats: [
      { value: "80+", label: "Brands Built" },
      { value: "6", label: "Years Active" },
      { value: "12", label: "Industries" },
    ],
    cta: { label: "Meet the Team", href: "#" },
    // Studio workspace, team photo, or editorial shot
    image:
      "https://images.pexels.com/photos/37468393/pexels-photo-37468393.jpeg?_gl=1*xohzho*_ga*MTE4OTk1MTQxOS4xNzczMzc2NjIw*_ga_8JE65Q40S6*czE3ODQxMDMzMTUkbzIkZzEkdDE3ODQxMDYwNjAkajM4JGwwJGgw",
  },

  // ── Contact CTA ─────────────────────────────────────────────────────────────
  contact: {
    eyebrow: "New Projects",
    heading: "Ready to build something\nunforgettable?",
    subtext:
      "Tell us about your brand challenge. We take on a limited number of projects each quarter.",
    cta: { label: "hello@vantagestudio.co", href: "mailto:hello@vantagestudio.co" },
  },

  // ── Footer ──────────────────────────────────────────────────────────────────
  footer: {
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
};
