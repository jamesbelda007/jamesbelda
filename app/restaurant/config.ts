// ─────────────────────────────────────────────────────────────────────────────
// Restaurant Landing Page — Config
// Edit this file to customize every piece of content on the page.
//
// IMAGES: Replace any URL with your own. Unsplash format:
//   https://images.unsplash.com/photo-{ID}?auto=format&fit=crop&w={W}&q=85
// ─────────────────────────────────────────────────────────────────────────────

export const config = {
  // ── Restaurant identity ─────────────────────────────────────────────────────
  restaurant: {
    name: "Ember",
    tagline: "Fire-kissed cuisine, crafted with intention.",
    descriptor: "Fine Dining · Manila",
    phone: "+63 2 8888 0000",
    email: "reservations@emberdining.ph",
    address: "12 Culinary Row, BGC, Taguig City",
    hours: [
      { days: "Tuesday – Thursday", time: "5:30 pm – 10:00 pm" },
      { days: "Friday – Saturday", time: "5:00 pm – 11:00 pm" },
      { days: "Sunday", time: "5:00 pm – 9:00 pm" },
      { days: "Monday", time: "Closed" },
    ],
  },

  // ── Navigation ──────────────────────────────────────────────────────────────
  nav: {
    links: [
      { label: "Menu", href: "#menu" },
      { label: "Story", href: "#story" },
      { label: "Reserve", href: "#reserve" },
    ],
    cta: { label: "Book a Table", href: "#reserve" },
  },

  // ── Hero ────────────────────────────────────────────────────────────────────
  hero: {
    // Dark, atmospheric restaurant interior or dramatic food shot
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=85",
    label: "Open Tuesday – Sunday",
  },

  // ── Signature dishes ────────────────────────────────────────────────────────
  dishes: [
    {
      name: "Wagyu Tenderloin",
      course: "Main",
      desc: "Grade A5 wagyu, bone marrow butter, black truffle jus, roasted root vegetables.",
      price: "₱4,200",
      image:
        "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=700&h=500&q=85",
    },
    {
      name: "Truffle Risotto",
      course: "Pasta",
      desc: "Aged Carnaroli rice, black truffle shavings, aged Parmigiano-Reggiano, chive oil.",
      price: "₱1,800",
      image:
        "https://images.pexels.com/photos/7491887/pexels-photo-7491887.jpeg?_gl=1*1905y18*_ga*MTE4OTk1MTQxOS4xNzczMzc2NjIw*_ga_8JE65Q40S6*czE3ODQxMDMzMTUkbzIkZzEkdDE3ODQxMDYzMTYkajUzJGwwJGgw",
    },
    {
      name: "Seared Scallop",
      course: "Starter",
      desc: "Hokkaido scallop, cauliflower purée, crispy capers, smoked paprika oil.",
      price: "₱1,400",
      image:
        "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=700&h=500&q=85",
    },
    {
      name: "Ember Roasted Salmon",
      course: "Main",
      desc: "Norwegian salmon, fire-roasted over bincho-tan, miso beurre blanc, pickled cucumber.",
      price: "₱2,400",
      image:
        "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=700&h=500&q=85",
    },
    {
      name: "Charred Octopus",
      course: "Starter",
      desc: "Galician octopus, smoked potato, pimentón de La Vera, preserved lemon.",
      price: "₱1,600",
      image:
        "https://images.unsplash.com/photo-1481931098730-318b6f776db0?auto=format&fit=crop&w=700&h=500&q=85",
    },
    {
      name: "Valrhona Chocolate",
      course: "Dessert",
      desc: "Dark chocolate fondant, salted caramel, Tahitian vanilla ice cream, hazelnut praline.",
      price: "₱900",
      image:
        "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=700&h=500&q=85",
    },
  ],

  // ── Story / About ────────────────────────────────────────────────────────────
  story: {
    eyebrow: "Our Story",
    heading: "Born from fire.\nInspired by craft.",
    body: [
      "Ember was founded on a single belief: that fire is the most honest way to cook. Every dish on our menu is shaped by flame — charcoal, wood, or open grill — coaxing flavor that no other technique can replicate.",
      "Our team sources exclusively from local farms, local fishers, and small producers. We change the menu with the seasons, so every visit is a different story.",
    ],
    stats: [
      { value: "2019", label: "Est." },
      { value: "12", label: "Seats" },
      { value: "100%", label: "Local Sourced" },
    ],
    cta: { label: "Meet the Chef", href: "#" },
    // Restaurant interior or chef photo
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=85",
  },

  // ── Atmosphere / full-width feature ─────────────────────────────────────────
  atmosphere: {
    quote: "Every plate is a conversation between fire and the finest ingredients.",
    // Wide, atmospheric dining room or kitchen photo
    image:
      "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&w=1600&h=700&q=85",
  },

  // ── Reservations ────────────────────────────────────────────────────────────
  reserve: {
    eyebrow: "Reservations",
    heading: "Join us for an\nunforgettable evening.",
    subtext:
      "We recommend booking at least one week in advance. For parties of 6 or more, please call us directly.",
    cta: { label: "Reserve via Email", href: "mailto:reservations@emberdining.ph" },
    phone: { label: "Or call us", number: "+63 2 8888 0000" },
  },

  // ── Footer ──────────────────────────────────────────────────────────────────
  footer: {
    links: [
      { label: "Privacy", href: "#" },
      { label: "Gift Cards", href: "#" },
      { label: "Events", href: "#" },
    ],
  },
};
