import { Suspense } from "react";
import { AppShell } from "@/src/modules/app-shell/AppShell";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<div className="p-6 text-zinc-500">Loading shell...</div>}>
      <AppShell>{children}</AppShell>
    </Suspense>
  );
}
