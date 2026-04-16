export const SITE = {
  name: "FSZT Partners",
  tagline: "AI-First Consulting | Strategy That Ships",
  email: "hello@fszt.partners",
  url: "https://fszt.partners",
} as const;

export const HERO = {
  overline: "AI-First Consulting",
  headline: "Strategy That Ships.",
  subtitle:
    "We don\u2019t advise from the sidelines \u2014 we embed, build, and ship AI-native systems that transform how enterprises operate.",
  cta: "Get in Touch",
} as const;

export const MANIFESTO = {
  lead: "The world doesn\u2019t need another AI playbook. It needs companies that are already living it.",
  body: "Traditional consulting firms are still adopting AI. We are operating as AI. Boutique by design, but our leverage is non-linear. Small teams. Senior talent only. AI agents embedded into every workflow. Outcomes that compound.",
  highlight:
    "Where others deliver decks, we deliver working systems. Where others optimize processes, we re-architect operating models. Where others sell advice, we ship capability.",
  closing: "AI is not a tool in our stack. AI is our operating system.",
} as const;

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Diagnose",
    description:
      "We survey your AI baseline\u2014defining company-wide proficiency, gaps, and high-impact use cases. No generic assessments. Just the map you need to move.",
    color: "brand-cyan" as const,
    hex: "#3AE5FF",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We build tools and workflows that automate your business\u2014not generic playbooks, but systems that ship. Strategy that executes.",
    color: "brand-purple" as const,
    hex: "#8F6BFF",
  },
  {
    number: "03",
    title: "Deploy",
    description:
      "We train your team and help you build an AI-powered workforce. Not slide decks on AI\u2014actual practitioners who can build, prompt, and ship.",
    color: "brand-pink" as const,
    hex: "#F25CC1",
  },
  {
    number: "04",
    title: "Defend",
    description:
      "We stick around as your Chief AI Officer. Not a one-time engagement\u2014ongoing partnership to protect and compound your AI advantage.",
    color: "brand-gold" as const,
    hex: "#F3C98B",
  },
] as const;

export const OFFERINGS = [
  {
    icon: "FileText" as const,
    title: "Content",
    description:
      "Thought leadership, frameworks & tactical guides that cut through AI noise. We share what we build \u2014 not abstract theory.",
  },
  {
    icon: "GraduationCap" as const,
    title: "Foundation Courses",
    description:
      "AI Native Consultants \u2022 AI First SDLC \u2014 Frameworks, tools, community & build practitioners, not passive learners.",
  },
  {
    icon: "FlaskConical" as const,
    title: "Products \u2014 FSZT Labs",
    description:
      "AI-First Call Center \u2022 AI Sales Stack \u2022 Discovery Agents \u2022 Voice-to-Code \u2022 Omnichannel Super Agents \u2022 Pitch Agents \u2022 AI Sales Coach",
  },
  {
    icon: "Rocket" as const,
    title: "Consultancy",
    description:
      "Forward Deployed Strategists & Engineers \u2014 Strategy to implementation. We don\u2019t advise and disappear. We walk our roadmaps.",
  },
] as const;

export const LABS_PRODUCTS = [
  "AI-First Call Center",
  "AI Sales Stack",
  "Discovery Agents",
  "Voice-to-Code",
  "Omnichannel Super Agents",
  "Pitch Agents",
  "AI Sales Coach",
] as const;

export const DOMAINS = [
  "Healthcare",
  "Media & Entertainment",
  "Education",
] as const;

export const CLIENTS = [
  "Universal Music Group",
  "Remoni Health",
  "BoomerangFX",
] as const;

export const CTA_SECTION = {
  headline: "Let\u2019s build something that actually matters.",
  subtext:
    "Every company will become AI-first. The only question is whether you choose to lead \u2014 or get forced to follow.",
} as const;
