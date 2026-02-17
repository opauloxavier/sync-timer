"use client";

import { useRouter } from "next/navigation";
import CinnamonKitty from "@/components/CinnamonKitty";
import SyncTimerPanel from "@/components/SyncTimerPanel";

export default function HomePage() {
  const router = useRouter();

  const handleCreate = async (
    mode: "stopwatch" | "countdown",
    durationMs?: number
  ) => {
    const res = await fetch("/api/timers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mode, durationMs: durationMs ?? 0 }),
    });
    const timer = await res.json();
    router.push(`/${timer.id}`);
  };

  const handleJoin = (timerId: string) => {
    if (timerId.trim()) {
      router.push(`/${timerId.trim()}`);
    }
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-4">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-stone-950 via-stone-900/50 to-stone-950" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(196,133,92,0.08)_0%,_transparent_70%)]" />

      <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-8">
        <CinnamonKitty />

        <h1 className="font-serif text-3xl sm:text-4xl tracking-wide text-cinnamon-200">
          Cinnamon Roll Timer
        </h1>

        <p className="text-sm text-stone-400 text-center max-w-xs">
          Create a synced timer and share it with anyone. Everyone sees the same
          time.
        </p>

        <SyncTimerPanel onCreate={handleCreate} onJoin={handleJoin} />
      </div>
    </main>
  );
}
