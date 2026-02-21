import { hotOffers } from "@/src/shared/mock/demoData";

export function HotTicker() {
  const tickerItems = [...hotOffers, ...hotOffers];

  return (
    <section className="overflow-hidden rounded-2xl border border-amber-200 bg-amber-50/70 py-3">
      <div className="ticker-track flex min-w-max gap-4 px-4 text-sm font-medium text-amber-900">
        {tickerItems.map((offer, index) => (
          <span key={`${offer}-${index}`} className="inline-flex items-center gap-4">
            <span>🔥 {offer}</span>
            <span className="text-amber-400">•</span>
          </span>
        ))}
      </div>
    </section>
  );
}
