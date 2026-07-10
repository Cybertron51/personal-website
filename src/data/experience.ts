export type ExperienceEntry = {
  date: string;
  title: string;
  place: string;
  location?: string;
  summary?: string;
};

export const experience: ExperienceEntry[] = [
  {
    date: "May 2026 — Now",
    title: "Software Engineering Intern",
    place: "Doppel",
    location: "San Francisco, CA",
    summary:
      "Social engineering defense platform used by Robinhood, Coinbase, OpenAI, and more. Shipped alert routing interpretability to 150+ enterprises and rebuilt DNS tooling recovering ~3,500 false positives yearly.",
  },
  {
    date: "Apr — Dec 2025",
    title: "Research Intern",
    place: "AI4Sec Lab",
    location: "Rochester, NY",
    summary:
      "With Prof. Nidhi Rastogi. Concept-based masking for adversarial patch defense — accepted at NeurIPS 2025 Reliable ML workshop.",
  },
  {
    date: "Feb — May 2026",
    title: "Solo Engineer",
    place: "tash.cards",
    location: "Berkeley, CA",
    summary:
      "Built trading card exchange end-to-end: $22k+ volume, 710+ trades, Stripe Connect settlement, Gemini Vision + PSA API intake.",
  },
  {
    date: "Jan — May 2026",
    title: "Technical Consultant",
    place: "Phantom",
    location: "Berkeley, CA",
    summary:
      "Research on Gen Z adoption of Phantom's Kalshi prediction-market integration — incentive-aligned trading game and behavioral analysis.",
  },
  {
    date: "Aug — Dec 2025",
    title: "Technical Consultant",
    place: "Acorns",
    location: "Berkeley, CA",
    summary:
      "Go-to-market for service-industry micro-investing tipping feature. Surveyed 120+ barbershops; shipped Django MVP with partner shops.",
  },
  {
    date: "Aug — Dec 2024",
    title: "Research Intern",
    place: "Cal Poly Pomona Security Lab",
    location: "Pomona, CA",
    summary:
      "Lead author on IEEE paper applying vision transformers to malware classification on the Malimg dataset. Presented at MIT URTC.",
  },
  {
    date: "Jun — Aug 2024",
    title: "Engineering Intern",
    place: "Peraton — Deep Space Network",
    location: "Monrovia, CA",
    summary:
      "Cybersecurity for NASA's Deep Space Network. Built STIG/NIST-800 standards database; DevSecOps integration for 100+ engineers.",
  },
  {
    date: "May — Aug 2023",
    title: "Robotics & CS Intern",
    place: "Dasion",
    location: "Claremont, CA",
    summary:
      "Healthcare robotics startup. Market analysis, caretaker robot MVP pitch, ROS/Gazebo simulation environment.",
  },
  {
    date: "Oct 2021 — May 2025",
    title: "Founder & Team Captain",
    place: "RoboSub Competition",
    location: "Fullerton, CA",
    summary:
      "Founded school's first AUV team. ZED2 + YOLOv6 autonomous detection; grew team 70% mentoring 30+ members.",
  },
];

export const education = {
  school: "UC Berkeley",
  degree: "B.S. Electrical Engineering & Computer Science",
  graduation: "May 2028",
  gpa: "3.87",
  honors: ["Regents Scholar (top 1%)", "CyberPatriot National Finalist", "RoboSub Semi-Finalist"],
  activities: ["Venture Strategy Solutions"],
};
