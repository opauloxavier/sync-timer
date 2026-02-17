"use client";

import { useRouter } from "next/navigation";
import CinnamonKitty from "@/components/CinnamonKitty";
import SyncTimerPanel from "@/components/SyncTimerPanel";
import Sparkles from "@/components/Sparkles";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useI18n } from "@/contexts/I18nContext";

export default function HomePage() {
  const router = useRouter();
  const { t } = useI18n();

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
    <main className="relative flex min-h-screen flex-col items-center justify-center px-4 overflow-hidden">
      {/* Soft pastel background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-50 via-[#f0f4fa] to-blush-50" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(133,193,255,0.1)_0%,_transparent_60%)]" />

      {/* Language switcher */}
      <div className="absolute top-4 right-4 z-20">
        <LanguageSwitcher />
      </div>

      <Sparkles />

      <div className="relative z-10 flex flex-col items-center gap-5 sm:gap-7">
        <CinnamonKitty />

        <div className="text-center">
          <h1 className="font-serif text-3xl sm:text-5xl tracking-wide text-sky-500">
            {t.appName}
          </h1>
          <p className="mt-2 text-sm text-blush-400/70 font-serif italic">
            {t.tagline}
          </p>
        </div>

        <SyncTimerPanel onCreate={handleCreate} onJoin={handleJoin} />
      </div>
    </main>
  );
}
