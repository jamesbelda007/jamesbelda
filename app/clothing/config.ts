// ─────────────────────────────────────────────────────────────────────────────
// Clothing Brand Landing Page — Config
// Edit this file to customize every piece of content on the page.
//
// IMAGES: Replace any URL with your own. Unsplash format:
//   https://images.unsplash.com/photo-{ID}?auto=format&fit=crop&w={W}&q=85
//   Find photos at https://unsplash.com
// ─────────────────────────────────────────────────────────────────────────────

export const config = {
  // ── Brand identity ──────────────────────────────────────────────────────────
  brand: {
    name: "Forma",
    season: "Spring / Summer '26",
    email: "hello@forma.co",
  },

  // ── Navigation links ────────────────────────────────────────────────────────
  nav: {
    links: [
      { label: "Collections", href: "#" },
      { label: "New In", href: "#" },
      { label: "About", href: "#" },
    ],
  },

  // ── Hero — two side-by-side full-height images ──────────────────────────────
  hero: {
    images: {
      // Left panel — light, editorial
      left: "https://images.pexels.com/photos/6070177/pexels-photo-6070177.jpeg?_gl=1*1utbbg9*_ga*MTE4OTk1MTQxOS4xNzczMzc2NjIw*_ga_8JE65Q40S6*czE3ODQxMDMzMTUkbzIkZzEkdDE3ODQxMDMzNDAkajM1JGwwJGgw",
      // Right panel — darker, moody
      right: "https://images.pexels.com/photos/19781191/pexels-photo-19781191.jpeg?_gl=1*uo5r2*_ga*MTE4OTk1MTQxOS4xNzczMzc2NjIw*_ga_8JE65Q40S6*czE3ODQxMDMzMTUkbzIkZzEkdDE3ODQxMDM0NjAkajQxJGwwJGgw",
    },
  },

  // ── Featured products (4 cards) ─────────────────────────────────────────────
  products: [
    {
      name: "Structured Overshirt",
      category: "Shirts",
      price: "₱180",
      // Portrait-cropped product or model shot (3:4 works best)
      image:
        "https://images.pexels.com/photos/38249146/pexels-photo-38249146.jpeg?_gl=1*1rgiotl*_ga*MTE4OTk1MTQxOS4xNzczMzc2NjIw*_ga_8JE65Q40S6*czE3ODQxMDMzMTUkbzIkZzEkdDE3ODQxMDM1MzMkajU5JGwwJGgw",
      href: "#",
    },
    {
      name: "Relaxed Linen Jacket",
      category: "Outerwear",
      price: "₱245",
      image:
        "https://images.pexels.com/photos/25745245/pexels-photo-25745245.jpeg?_gl=1*17ozdx9*_ga*MTE4OTk1MTQxOS4xNzczMzc2NjIw*_ga_8JE65Q40S6*czE3ODQxMDMzMTUkbzIkZzEkdDE3ODQxMDM1OTkkajU5JGwwJGgw",
      href: "#",
    },
    {
      name: "Tapered Wool Trouser",
      category: "Bottoms",
      price: "₱190",
      image:
        "https://images.pexels.com/photos/2897539/pexels-photo-2897539.jpeg?_gl=1*g7w7ni*_ga*MTE4OTk1MTQxOS4xNzczMzc2NjIw*_ga_8JE65Q40S6*czE3ODQxMDMzMTUkbzIkZzEkdDE3ODQxMDM4MDUkajUwJGwwJGgw",
      href: "#",
    },
    {
      name: "Minimal Cotton Tee",
      category: "Essentials",
      price: "₱65",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&h=800&q=85",
      href: "#",
    },
  ],

  // ── Editorial / collaboration banner ────────────────────────────────────────
  editorial: {
    eyebrow: "New Arrivals · Featured Footwear",
    // Large italic title over the image
    title: "Paraboot.",
    description:
      "A meeting of Parisian craft and mountain-town utility. Exclusively curated for the Forma SS\u201826 season.",
    cta: { label: "Shop the Edit \u2192", href: "#" },
    // Wide/landscape image looks best here
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1600&h=900&q=85",
  },

  // ── Brand story section ──────────────────────────────────────────────────────
  story: {
    eyebrow: "About Forma",
    heading:
      "Theron Nicholson is a contemporary studio dedicated to creating editorial everyday pieces of the highest quality.",
    // Each string becomes its own paragraph
    body: [
      "Rooted in Scandinavian design principles, Forma brings a considered approach to casual dressing. Every piece is designed for a lifetime of wear — functional, refined, and quietly remarkable.",
      "The SS\u201826 collection explores the tension between structure and ease, building a wardrobe that effortlessly adapts to any environment.",
    ],
    cta: { label: "Read More", href: "#" },
    // Portrait image (3:4) works best
    image:
      "https://images.pexels.com/photos/15404590/pexels-photo-15404590.jpeg?_gl=1*j07axb*_ga*MTE4OTk1MTQxOS4xNzczMzc2NjIw*_ga_8JE65Q40S6*czE3ODQxMDMzMTUkbzIkZzEkdDE3ODQxMDM4NDQkajExJGwwJGgw",
  },

  // ── Secondary products row (3 cards) ────────────────────────────────────────
  moreProducts: [
    {
      name: "Wide-Leg Chino",
      category: "Bottoms",
      price: "₱145",
      image:
        "https://images.pexels.com/photos/29037314/pexels-photo-29037314.jpeg?_gl=1*3ykw31*_ga*MTE4OTk1MTQxOS4xNzczMzc2NjIw*_ga_8JE65Q40S6*czE3ODQxMDMzMTUkbzIkZzEkdDE3ODQxMDM5MDYkajM1JGwwJGgw",
      href: "#",
    },
    {
      name: "Brushed Wool Coat",
      category: "Outerwear",
      price: "₱395",
      image:
        "https://images.pexels.com/photos/10805455/pexels-photo-10805455.jpeg?_gl=1*rbjzu3*_ga*MTE4OTk1MTQxOS4xNzczMzc2NjIw*_ga_8JE65Q40S6*czE3ODQxMDMzMTUkbzIkZzEkdDE3ODQxMDM5MzQkajckbDAkaDA.",
      href: "#",
    },
    {
      name: "Utility Vest",
      category: "Layering",
      price: "₱110",
      image:
        "https://images.pexels.com/photos/30861468/pexels-photo-30861468.jpeg?_gl=1*19q3jmg*_ga*MTE4OTk1MTQxOS4xNzczMzc2NjIw*_ga_8JE65Q40S6*czE3ODQxMDMzMTUkbzIkZzEkdDE3ODQxMDQwMDIkajgkbDAkaDA.",
      href: "#",
    },
  ],

  // ── Newsletter ───────────────────────────────────────────────────────────────
  newsletter: {
    eyebrow: "Stay in the loop",
    heading: "Sign up for early access\nand exclusive drops.",
    // Where the form submits (replace with your email service endpoint)
    action: "#",
  },

  // ── Footer ───────────────────────────────────────────────────────────────────
  footer: {
    brandName: "Forma Studio",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Shipping", href: "#" },
    ],
  },
};
