// ─────────────────────────────────────────────────────────────────────────────
// Corporate Landing Page — Config
// Edit this file to customize every piece of content on the page.
//
// IMAGES: Replace any URL with your own. Unsplash format:
//   https://images.unsplash.com/photo-{ID}?auto=format&fit=crop&w={W}&q=85
// ─────────────────────────────────────────────────────────────────────────────

export const config = {
  // ── Company identity ────────────────────────────────────────────────────────
  company: {
    name: "Meridian",
    suffix: "Group",
    descriptor: "Strategy & Technology Consulting",
    email: "hello@meridiangroup.co",
    phone: "+1 (555) 000-0000",
    location: "San Francisco · New York · Singapore",
  },

  // ── Navigation ──────────────────────────────────────────────────────────────
  nav: {
    links: [
      { label: "Services", href: "#services" },
      { label: "About", href: "#about" },
      { label: "Case Studies", href: "#" },
      { label: "Insights", href: "#" },
    ],
    cta: { label: "Get in Touch", href: "#contact" },
  },

  // ── Hero ────────────────────────────────────────────────────────────────────
  hero: {
    // Use \n for line breaks in the headline
    headline: "We Build\nTomorrow's\nEnterprises.",
    subtext:
      "Meridian partners with ambitious organizations to design bold strategies, deliver technology at scale, and create lasting competitive advantage.",
    cta: {
      primary: { label: "Start a Project", href: "#contact" },
      secondary: { label: "View Case Studies", href: "#" },
    },
    // Wide landscape image — office, skyline, or abstract architecture works well
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85",
  },

  // ── Key statistics ──────────────────────────────────────────────────────────
  stats: [
    { value: "150+", label: "Clients Served" },
    { value: "20", label: "Years of Excellence" },
    { value: "500+", label: "Projects Delivered" },
    { value: "18", label: "Countries" },
  ],

  // ── Services (up to 6) ──────────────────────────────────────────────────────
  services: [
    {
      title: "Strategy & Advisory",
      desc: "Long-range growth strategies, market entry playbooks, and executive alignment workshops.",
    },
    {
      title: "Digital Transformation",
      desc: "End-to-end digital initiatives that modernize operations and unlock new revenue streams.",
    },
    {
      title: "Technology Solutions",
      desc: "Custom enterprise software, cloud architecture, and system integrations built to scale.",
    },
    {
      title: "Data & Analytics",
      desc: "Turn raw data into actionable intelligence with dashboards, ML models, and data platforms.",
    },
    {
      title: "Operations Excellence",
      desc: "Process redesign, automation, and lean methodologies that reduce cost and increase speed.",
    },
    {
      title: "Organizational Change",
      desc: "People-first transformation programs that ensure adoption, alignment, and lasting impact.",
    },
  ],

  // ── About / Mission section ─────────────────────────────────────────────────
  about: {
    eyebrow: "Our Approach",
    heading: "Rigorous thinking.\nBold execution.\nMeasurable results.",
    body: [
      "Founded in 2004, Meridian has grown from a boutique advisory shop into a global consultancy trusted by Fortune 500 companies and fast-scaling startups alike.",
      "We believe the best outcomes happen at the intersection of deep industry expertise and cutting-edge technology. Every engagement is built around your specific context — no off-the-shelf playbooks.",
    ],
    cta: { label: "Our Story", href: "#" },
    // Portrait or square image — team, office, or professional setting
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=85",
  },

  // ── Client logos (names only — swap with real logo images if available) ─────
  clients: [
    "Acme Corp",
    "Horizon Bank",
    "NovaTech",
    "Paragon Health",
    "Atlas Logistics",
    "Vertex Capital",
  ],

  // ── Contact / CTA section ───────────────────────────────────────────────────
  contact: {
    eyebrow: "Let's Talk",
    heading: "Ready to transform\nyour business?",
    subtext:
      "Tell us about your challenge. We'll respond within one business day.",
    cta: { label: "Send a Message", href: "mailto:hello@meridiangroup.co" },
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
