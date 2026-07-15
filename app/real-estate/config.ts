// ─────────────────────────────────────────────────────────────────────────────
// Real Estate Landing Page — Config
// Edit this file to customize every piece of content on the page.
//
// IMAGES: Replace any URL with your own. Unsplash format:
//   https://images.unsplash.com/photo-{ID}?auto=format&fit=crop&w={W}&q=85
// ─────────────────────────────────────────────────────────────────────────────

export const config = {
  // ── Company identity ────────────────────────────────────────────────────────
  company: {
    name: "Haven",
    descriptor: "Premium Properties",
    tagline: "Find the home you deserve.",
    phone: "+63 2 8888 1234",
    email: "hello@havenprop.ph",
    address: "32F One Ayala, Makati City",
  },

  // ── Navigation ──────────────────────────────────────────────────────────────
  nav: {
    links: [
      { label: "Properties", href: "#listings" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#about" },
    ],
    cta: { label: "Schedule a Tour", href: "#contact" },
  },

  // ── Hero ────────────────────────────────────────────────────────────────────
  hero: {
    eyebrow: "Premium Real Estate · Philippines",
    headline: ["Your dream", "home awaits."],
    subtext:
      "Haven curates the finest residential properties across Metro Manila and beyond — so you never have to settle.",
    cta: {
      primary: { label: "Browse Listings", href: "#listings" },
      secondary: { label: "Talk to an Agent", href: "#contact" },
    },
    // Modern luxury home exterior — wide landscape image works best
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85",
  },

  // ── Key stats ───────────────────────────────────────────────────────────────
  stats: [
    { value: "1,200+", label: "Properties Sold" },
    { value: "₱18B+", label: "Total Value" },
    { value: "15", label: "Years Active" },
    { value: "98%", label: "Client Satisfaction" },
  ],

  // ── Featured listings ───────────────────────────────────────────────────────
  listings: [
    {
      name: "The Rosewood",
      location: "Legaspi Village, Makati",
      type: "Townhouse",
      beds: 4,
      baths: 3,
      sqm: 280,
      price: "₱28,000,000",
      tag: "Featured",
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&h=560&q=85",
    },
    {
      name: "Skyline Residences",
      location: "Bonifacio Global City",
      type: "Condominium",
      beds: 3,
      baths: 2,
      sqm: 145,
      price: "₱15,500,000",
      tag: "New",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&h=560&q=85",
    },
    {
      name: "The Garden Estate",
      location: "Filinvest, Alabang",
      type: "House & Lot",
      beds: 5,
      baths: 4,
      sqm: 520,
      price: "₱45,000,000",
      tag: "Exclusive",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&h=560&q=85",
    },
    {
      name: "Marina View",
      location: "Manila Bay, Pasay",
      type: "Condominium",
      beds: 2,
      baths: 2,
      sqm: 98,
      price: "₱8,500,000",
      tag: null,
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6d349c28?auto=format&fit=crop&w=800&h=560&q=85",
    },
    {
      name: "The Grove",
      location: "Eastwood, Quezon City",
      type: "Condominium",
      beds: 3,
      baths: 2,
      sqm: 112,
      price: "₱12,000,000",
      tag: null,
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&h=560&q=85",
    },
    {
      name: "Highland Villa",
      location: "Tagaytay Ridge",
      type: "House & Lot",
      beds: 6,
      baths: 5,
      sqm: 680,
      price: "₱65,000,000",
      tag: "Luxury",
      image:
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&h=560&q=85",
    },
  ],

  // ── Services ────────────────────────────────────────────────────────────────
  services: [
    {
      title: "Buy",
      desc: "Access our exclusive portfolio of pre-selling and ready-for-occupancy properties. We guide you from viewing to turnover.",
    },
    {
      title: "Sell",
      desc: "Our agents use data-driven pricing and targeted marketing to get you the best value in the shortest time.",
    },
    {
      title: "Rent",
      desc: "Premium rental listings across Metro Manila, fully verified and managed for hassle-free leasing.",
    },
    {
      title: "Invest",
      desc: "Identify high-yield properties, analyze ROI, and build a real estate portfolio that grows with you.",
    },
  ],

  // ── About ───────────────────────────────────────────────────────────────────
  about: {
    eyebrow: "About Haven",
    heading: "Built on trust.\nDriven by results.",
    body: [
      "Founded in 2009, Haven has become one of the Philippines' most trusted premium real estate brokerages. We combine deep local market knowledge with white-glove service to deliver outcomes that exceed expectations.",
      "Our team of 40+ licensed brokers and investment consultants is dedicated to one goal: finding you a property that feels like home.",
    ],
    cta: { label: "Meet Our Team", href: "#" },
    // Professional agent or luxury property interior
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=85",
  },

  // ── Contact / CTA ────────────────────────────────────────────────────────────
  contact: {
    eyebrow: "Get in Touch",
    heading: "Ready to find\nyour next home?",
    subtext:
      "Schedule a free consultation with one of our agents. No pressure — just honest advice.",
    cta: { label: "Schedule a Consultation", href: "mailto:hello@havenprop.ph" },
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
