// ─────────────────────────────────────────────────────────────────────────────
// E-commerce Landing Page — Config
// ─────────────────────────────────────────────────────────────────────────────

export const config = {
  brand: {
    name: "Aura",
    descriptor: "Curated Lifestyle Store",
    tagline: "Curated lifestyle, delivered.",
    email: "hello@aurastore.ph",
    phone: "+63 917 000 0000",
  },

  nav: {
    links: [
      { label: "Shop", href: "#products" },
      { label: "Collections", href: "#categories" },
      { label: "About", href: "#about" },
    ],
    cta: { label: "Shop Now", href: "#products" },
  },

  hero: {
    eyebrow: "New Arrivals · SS'26",
    headline: ["Style that", "speaks for itself."],
    subtext:
      "Discover hand-picked pieces across fashion, beauty, and home — all crafted for a life lived beautifully.",
    cta: {
      primary: { label: "Shop New Arrivals", href: "#products" },
      secondary: { label: "View Collections", href: "#categories" },
    },
    // Lifestyle / fashion editorial hero image
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=85",
  },

  products: [
    {
      name: "Silk Slip Dress",
      category: "Apparel",
      price: "₱3,200",
      originalPrice: null,
      tag: "New",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&h=800&q=85",
    },
    {
      name: "Structured Tote",
      category: "Accessories",
      price: "₱5,800",
      originalPrice: null,
      tag: "Best Seller",
      image:
        "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&h=800&q=85",
    },
    {
      name: "Rose Facial Serum",
      category: "Beauty",
      price: "₱2,400",
      originalPrice: "₱2,900",
      tag: "Sale",
      image:
        "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=600&h=800&q=85",
    },
    {
      name: "Linen Overshirt",
      category: "Apparel",
      price: "₱1,800",
      originalPrice: null,
      tag: "New",
      image:
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=600&h=800&q=85",
    },
    {
      name: "Soy Candle Set",
      category: "Home & Living",
      price: "₱1,400",
      originalPrice: null,
      tag: null,
      image:
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&h=800&q=85",
    },
    {
      name: "Gold Hoop Earrings",
      category: "Accessories",
      price: "₱980",
      originalPrice: null,
      tag: null,
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&h=800&q=85",
    },
  ],

  categories: [
    { name: "New Arrivals", count: "24 items", color: "#f9a8d4" },
    { name: "Apparel", count: "58 items", color: "#fca5a5" },
    { name: "Accessories", count: "34 items", color: "#fdba74" },
    { name: "Beauty & Wellness", count: "21 items", color: "#86efac" },
    { name: "Home & Living", count: "19 items", color: "#93c5fd" },
  ],

  trust: [
    { icon: "🚚", title: "Free Shipping", desc: "On all orders over ₱2,500." },
    { icon: "↩️", title: "Easy Returns", desc: "30-day hassle-free returns." },
    { icon: "✓", title: "Curated Quality", desc: "Every item personally vetted." },
    { icon: "🔒", title: "Secure Checkout", desc: "SSL encrypted payments." },
  ],

  newsletter: {
    eyebrow: "Stay in the loop",
    heading: "Get early access\nto new arrivals.",
    subtext: "Plus 10% off your first order when you subscribe.",
  },

  footer: {
    links: [
      { label: "About", href: "#" },
      { label: "Shipping", href: "#" },
      { label: "Returns", href: "#" },
      { label: "Privacy", href: "#" },
    ],
  },
};
