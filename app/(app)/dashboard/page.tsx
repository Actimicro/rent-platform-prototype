import { DashboardWidgets } from "@/src/modules/dashboard/DashboardWidgets";
import { CommunityBlocks } from "@/src/shared/ui/CommunityBlocks";
import { HotTicker } from "@/src/shared/ui/HotTicker";
import { ROLES, type Role } from "@/src/shared/types/roles";

type DashboardPageProps = {
  searchParams: Promise<{ role?: string }>;
};

export default async function DashboardPage({ searchParams }: DashboardPageProps) {
  const params = await searchParams;
  const role = ROLES.includes(params.role as Role) ? (params.role as Role) : "guest";

  return (
    <main className="space-y-6">
      <div>
        <h2 className="text-3xl font-semibold text-zinc-900">Hello, {role}</h2>
        <p className="mt-2 text-zinc-600">Demo widgets are adapted to your selected role.</p>
      </div>
      <DashboardWidgets role={role} />
      <HotTicker />
      <CommunityBlocks />
    </main>
  );
}
