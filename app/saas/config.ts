// ─────────────────────────────────────────────────────────────────────────────
// SaaS / Tech Landing Page — Config
// ─────────────────────────────────────────────────────────────────────────────

export const config = {
  product: {
    name: "Pulse",
    descriptor: "Growth Platform",
    tagline: "Grow faster with clarity.",
    subtext:
      "Pulse gives your team real-time analytics, AI-powered insights, and workflow automation — all in one place.",
    email: "hello@pulse.io",
    url: "app.pulse.io",
  },

  nav: {
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "About", href: "#about" },
    ],
    cta: { label: "Get Started Free", href: "#pricing" },
  },

  hero: {
    badge: "Now with AI Insights →",
    headline: ["Stop guessing.", "Start growing."],
    subtext:
      "Join 12,000+ growth teams that use Pulse to track metrics, automate workflows, and make faster decisions.",
    cta: {
      primary: { label: "Start Free Trial", href: "#pricing" },
      secondary: { label: "See a Demo", href: "#features" },
    },
    note: "No credit card required · Free 14-day trial",
  },

  social: {
    label: "Trusted by teams at",
    logos: ["Shopify", "Vercel", "Linear", "Notion", "Stripe", "Figma"],
  },

  features: [
    {
      title: "Real-time Analytics",
      desc: "Track every metric that matters — from acquisition to retention — updated live, no lag.",
    },
    {
      title: "Growth Automation",
      desc: "Set triggers, build workflows, and automate the repetitive tasks that slow your team down.",
    },
    {
      title: "AI-Powered Insights",
      desc: "Surface hidden opportunities and anomalies before they impact your bottom line.",
    },
    {
      title: "Team Workspace",
      desc: "Shared dashboards, comments, and alerts so your whole team stays aligned and moves fast.",
    },
    {
      title: "100+ Integrations",
      desc: "Stripe, HubSpot, Segment, Mixpanel and more. Your stack, connected in minutes.",
    },
    {
      title: "Enterprise Security",
      desc: "SOC 2 Type II certified. GDPR compliant. SSO, RBAC, and audit logs included.",
    },
  ],

  pricing: [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      desc: "Perfect for early-stage startups.",
      features: [
        "Up to 3 team members",
        "10,000 events/month",
        "Core analytics dashboard",
        "Email alerts",
        "14-day data history",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Growth",
      price: "$79",
      period: "/month",
      desc: "For scaling teams that need more.",
      features: [
        "Up to 10 team members",
        "100,000 events/month",
        "Automation workflows",
        "AI insights",
        "90-day data history",
        "Priority support",
      ],
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      name: "Scale",
      price: "$199",
      period: "/month",
      desc: "Unlimited power for large orgs.",
      features: [
        "Unlimited team members",
        "Unlimited events",
        "Custom integrations",
        "Dedicated CSM",
        "Unlimited history",
        "SSO & RBAC",
      ],
      cta: "Talk to Sales",
      highlighted: false,
    },
  ],

  testimonials: [
    {
      quote:
        "Pulse cut the time we spend on reporting by 80%. We now spend that time actually growing.",
      name: "Mia Torres",
      role: "Head of Growth, Stackly",
      avatar: "MT",
    },
    {
      quote:
        "The AI flagged a churn spike three weeks before it showed up in our monthly report. That saved us.",
      name: "Daniel Park",
      role: "CEO, Launchpad",
      avatar: "DP",
    },
    {
      quote:
        "Every growth tool we tried before Pulse either had too much noise or not enough signal. This nails it.",
      name: "Sara Reyes",
      role: "VP Marketing, Luma",
      avatar: "SR",
    },
  ],

  cta: {
    eyebrow: "Get Started Today",
    heading: "14 days free.\nNo credit card.",
    subtext: "Set up in under 5 minutes. Cancel anytime.",
    primary: { label: "Start Free Trial", href: "#" },
    secondary: { label: "Book a Demo", href: "#" },
  },

  footer: {
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Status", href: "#" },
      { label: "Docs", href: "#" },
    ],
  },
};
