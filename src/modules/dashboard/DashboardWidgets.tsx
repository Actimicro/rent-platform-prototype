import { roleWidgets } from "@/src/shared/mock/demoData";
import type { Role } from "@/src/shared/types/roles";

type DashboardWidgetsProps = {
  role: Role;
};

export function DashboardWidgets({ role }: DashboardWidgetsProps) {
  const widgets = roleWidgets[role];

  return (
    <section className="grid gap-4 md:grid-cols-3">
      {widgets.map((widget) => (
        <article key={widget.title} className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-zinc-500">{widget.title}</p>
          <p className="mt-3 text-3xl font-semibold text-zinc-900">{widget.value}</p>
          <p className="mt-2 text-sm text-zinc-600">{widget.note}</p>
        </article>
      ))}
    </section>
  );
}
