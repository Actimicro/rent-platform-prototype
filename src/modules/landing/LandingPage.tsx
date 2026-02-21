import Link from "next/link";
import { AcademyTeasers } from "@/src/shared/ui/AcademyTeasers";
import { CommunityBlocks } from "@/src/shared/ui/CommunityBlocks";
import { HotTicker } from "@/src/shared/ui/HotTicker";

export function LandingPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-8 px-6 py-10 lg:px-10">
      <section className="rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 p-10 text-white shadow-xl lg:p-14">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-300">Rent OS UI shell</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight lg:text-6xl">
          Premium control center for rental teams and communities.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-zinc-200">
          One UX surface for tenants, owners, realtors, managers and admins — clean, fast, and role-aware.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/dashboard" className="rounded-full bg-white px-6 py-3 font-semibold text-zinc-900">
            Open Demo Dashboard
          </Link>
          <a href="#community" className="rounded-full border border-white/30 px-6 py-3 font-semibold">
            Explore community
          </a>
        </div>
      </section>

      <HotTicker />
      <AcademyTeasers />

      <section id="community" className="space-y-4">
        <div>
          <h2 className="text-3xl font-semibold text-zinc-900">Community pulse</h2>
          <p className="mt-2 text-zinc-600">Stay aligned with discussions, roadmap and release notes.</p>
        </div>
        <CommunityBlocks />
      </section>
    </main>
  );
}
