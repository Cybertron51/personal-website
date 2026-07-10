export type ProjectStat = {
  value: string;
  label: string;
};

export type ProjectVisual = "screenshot" | "abstract";

export type Project = {
  slug: string;
  title: string;
  tag: string;
  year: string;
  description: string;
  tech: string[];
  stats?: ProjectStat[];
  visual: ProjectVisual;
  visualLabel: string;
  visualTheme: "product" | "research" | "security" | "infra" | "blockchain";
  links?: {
    live?: string;
    github?: string;
    paper?: string;
  };
  hasDetailPage?: boolean;
  detail?: {
    overview: string[];
    highlights: string[];
    role?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "tash-cards",
    title: "tash.cards",
    tag: "Platform",
    year: "2026",
    description:
      "Institutional-grade trading card exchange with Supabase Realtime price feeds, Stripe Connect KYC settlement, and an AI intake pipeline using Gemini Vision and PSA's API to onboard graded cards instantly.",
    tech: ["Next.js", "Supabase", "Stripe", "Gemini", "PSA API"],
    stats: [{ value: "250+", label: "Listed Cards" }],
    visual: "screenshot",
    visualLabel: "tash.cards",
    visualTheme: "product",
    links: { live: "https://tash.cards" },
    hasDetailPage: true,
    detail: {
      role: "Solo Engineer",
      overview: [
        "tash.cards is a trading card marketplace built for collectors who want institutional-grade liquidity without the friction of legacy platforms. Users list graded cards, get instant AI-assisted intake, and settle trades through compliant payment rails.",
        "I built the full stack solo — real-time pricing and order matching, KYC onboarding, seller payouts via Stripe Connect, and a Gemini Vision pipeline integrated with PSA's API that reads slab labels and populates listings in seconds.",
      ],
      highlights: [
        "250+ cards listed with Stripe Connect settlement for seller payouts",
        "Built Supabase Realtime infrastructure for live price feeds and order book updates",
        "Engineered AI intake with Gemini Vision + PSA API for graded card onboarding",
        "Designed fraud-resistant listing flows for high-value collectible inventory",
      ],
    },
  },
  {
    slug: "concept-based-masking",
    title: "Concept-Based Masking",
    tag: "Research",
    year: "2025",
    description:
      "Patch-agnostic adversarial defense using concept activation vectors to neutralize patch attacks without knowing size or location. 57.7% misclassification reduction on ImageNette vs. state-of-the-art. NeurIPS 2025 Reliable ML workshop.",
    tech: ["PyTorch", "ResNet-50", "Concept Attribution", "CAVs"],
    stats: [
      { value: "57.7%", label: "Improvement" },
      { value: "90%+", label: "Robust Acc." },
    ],
    visual: "abstract",
    visualLabel: "AI4Sec",
    visualTheme: "research",
    links: {
      paper: "https://openreview.net/forum?id=5mKXN9Dr8z",
    },
    hasDetailPage: true,
    detail: {
      role: "Research Intern — AI4Sec Lab, Prof. Nidhi Rastogi",
      overview: [
        "Adversarial patch attacks force targeted misclassifications through localized perturbations — often deployable in the physical world. Most defenses assume prior knowledge of patch size or location, which limits real-world applicability.",
        "Concept-Based Masking leverages concept activation vectors (CAVs) to identify and suppress the most influential concepts driving a model's prediction, neutralizing patch effects without explicit detection. Evaluated on ImageNette with ResNet-50.",
      ],
      highlights: [
        "57.7% reduction in ImageNette misclassification vs. PatchCleanser (SOTA)",
        "Maintains strong clean accuracy while generalizing across patch sizes and locations",
        "Accepted at NeurIPS 2025 workshop: Reliable ML from Unreliable Data",
        "Co-authored with Ayushi Mehrotra, Dipkamal Bhusal, and Prof. Nidhi Rastogi",
      ],
    },
  },
  {
    slug: "cronos-guard",
    title: "Cronos Guard",
    tag: "Security",
    year: "2025",
    description:
      "Real-time cryptocurrency wallet security agent using transaction simulation and vulnerability scanning to detect and block malicious smart contracts before they drain assets.",
    tech: ["Solidity", "Python", "Web3", "Static Analysis"],
    visual: "abstract",
    visualLabel: "CG",
    visualTheme: "security",
  },
  {
    slug: "bastion-defense",
    title: "BastionDefense",
    tag: "Competition",
    year: "2024",
    description:
      "Founded a nationwide cybersecurity competition. Kubernetes-hosted backend with weeklong red-blue team engagements, security workshops, and 50+ teams competing.",
    tech: ["Kubernetes", "Docker", "Infrastructure"],
    visual: "abstract",
    visualLabel: "BD",
    visualTheme: "infra",
  },
  {
    slug: "signal",
    title: "Signal",
    tag: "Blockchain",
    year: "2024",
    description:
      "Python auditd ingestion pipeline submitting cryptographic log fingerprints to a Hyperledger Fabric permissioned network for tamper-proof audit log validation.",
    tech: ["Python", "Hyperledger Fabric", "Cryptography"],
    visual: "abstract",
    visualLabel: "Signal",
    visualTheme: "blockchain",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getDetailProjects(): Project[] {
  return projects.filter((p) => p.hasDetailPage);
}
