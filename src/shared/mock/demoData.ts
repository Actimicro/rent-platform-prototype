import type { Role } from "@/src/shared/types/roles";

export type NavItem = {
  label: string;
  href: string;
  roles: Role[];
};

export type DashboardWidget = {
  title: string;
  value: string;
  note: string;
};

export const hotOffers = [
  "Ocean View Loft — -18% this week",
  "City Center Studio — utilities included",
  "Family House near park — instant booking",
  "Penthouse with terrace — owner direct deal",
  "Coworking-ready apartments — realtor verified",
];

export const academyTopics = [
  "How to lease safely",
  "Tenant onboarding essentials",
  "Owner revenue optimization",
  "Manager SLA playbook",
  "Community growth tactics",
];

export const communityCards = [
  {
    title: "Forum",
    description: "Discuss product flows, legal patterns, and growth hacks with peers.",
    cta: "Open discussions",
  },
  {
    title: "Roadmap",
    description: "Track upcoming RENT OS milestones and vote for features.",
    cta: "See roadmap",
  },
  {
    title: "Changelog",
    description: "Follow weekly releases, design updates, and performance improvements.",
    cta: "Read updates",
  },
];

export const navItems: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", roles: ["guest", "tenant", "owner", "realtor", "manager", "admin"] },
  { label: "Contracts", href: "#", roles: ["tenant", "owner", "manager", "admin"] },
  { label: "Listings", href: "#", roles: ["owner", "realtor", "admin"] },
  { label: "Tenants", href: "#", roles: ["owner", "manager", "admin"] },
  { label: "Sales Funnel", href: "#", roles: ["realtor", "manager", "admin"] },
  { label: "Moderation", href: "#", roles: ["admin"] },
];

export const roleWidgets: Record<Role, DashboardWidget[]> = {
  guest: [
    { title: "Explore inventory", value: "2,184", note: "Active listings available now" },
    { title: "Guides read", value: "12", note: "Academy materials for newcomers" },
    { title: "Community posts", value: "348", note: "Fresh discussions this month" },
  ],
  tenant: [
    { title: "Upcoming rent", value: "$1,480", note: "Due in 6 days" },
    { title: "Maintenance tickets", value: "2 open", note: "Average response time 3h" },
    { title: "Saved offers", value: "9", note: "3 with price drop alerts" },
  ],
  owner: [
    { title: "Occupancy", value: "94%", note: "Across 37 active units" },
    { title: "Monthly revenue", value: "$84,200", note: "+7.4% vs previous month" },
    { title: "Expiring contracts", value: "5", note: "Need renewal decisions" },
  ],
  realtor: [
    { title: "Pipeline deals", value: "28", note: "11 in negotiation stage" },
    { title: "Scheduled tours", value: "14", note: "Next 7 days" },
    { title: "Commission forecast", value: "$21,400", note: "Expected this month" },
  ],
  manager: [
    { title: "SLA compliance", value: "97%", note: "Operational target is 95%" },
    { title: "Team workload", value: "82%", note: "Balanced across 4 squads" },
    { title: "Critical incidents", value: "1", note: "Resolved within 40 min" },
  ],
  admin: [
    { title: "Platform GMV", value: "$2.4M", note: "Rolling 30-day performance" },
    { title: "KYC pending", value: "23", note: "Verification queue" },
    { title: "System health", value: "99.98%", note: "No major outages" },
  ],
};
