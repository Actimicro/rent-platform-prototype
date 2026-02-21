"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { navItems } from "@/src/shared/mock/demoData";
import { RoleSwitcher } from "@/src/shared/ui/RoleSwitcher";
import { ROLES, type Role } from "@/src/shared/types/roles";

type AppShellProps = {
  children: React.ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  const searchParams = useSearchParams();
  const roleParam = searchParams.get("role");
  const role = ROLES.includes(roleParam as Role) ? (roleParam as Role) : "guest";
  const visibleItems = navItems.filter((item) => item.roles.includes(role));

  return (
    <div className="min-h-screen bg-zinc-100">
      <div className="mx-auto grid min-h-screen max-w-7xl gap-6 p-6 lg:grid-cols-[260px_1fr]">
        <aside className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Rent OS</p>
          <p className="mt-2 text-2xl font-semibold text-zinc-900">Control shell</p>
          <nav className="mt-8 space-y-2">
            {visibleItems.map((item) => (
              <Link key={item.label} href={item.href} className="block rounded-xl px-3 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100">
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        <div className="space-y-6">
          <header className="flex flex-wrap items-center justify-between gap-3 rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">
            <div>
              <p className="text-sm text-zinc-500">Internal app zone</p>
              <h1 className="text-2xl font-semibold text-zinc-900">Role dashboard</h1>
            </div>
            <RoleSwitcher value={role} />
          </header>
          {children}
        </div>
      </div>
    </div>
  );
}
