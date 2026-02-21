import { communityCards } from "@/src/shared/mock/demoData";

export function CommunityBlocks() {
  return (
    <section className="grid gap-4 md:grid-cols-3">
      {communityCards.map((card) => (
        <article key={card.title} className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-zinc-900">{card.title}</h3>
          <p className="mt-3 text-sm leading-6 text-zinc-600">{card.description}</p>
          <button className="mt-6 rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white">
            {card.cta}
          </button>
        </article>
      ))}
    </section>
  );
}
