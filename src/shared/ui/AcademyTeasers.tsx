import { academyTopics } from "@/src/shared/mock/demoData";

export function AcademyTeasers() {
  return (
    <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
      <h3 className="text-2xl font-semibold text-zinc-900">Academy</h3>
      <p className="mt-2 text-zinc-600">Learn fast with concise video capsules for every role.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {academyTopics.map((topic) => (
          <article key={topic} className="rounded-2xl bg-zinc-50 p-4 text-center">
            <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-200 text-zinc-600">
              ▶
            </div>
            <p className="text-sm font-medium text-zinc-700">{topic}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
