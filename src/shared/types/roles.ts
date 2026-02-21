export const ROLES = ["guest", "tenant", "owner", "realtor", "manager", "admin"] as const;

export type Role = (typeof ROLES)[number];
