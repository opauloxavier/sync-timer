"use client";

import { use } from "react";
import { useTimer } from "@/hooks/useTimer";
import { useTimerControls } from "@/hooks/useTimerControls";
import TimerDisplay from "@/components/TimerDisplay";
import TimerControls from "@/components/TimerControls";
import TimerIdBadge from "@/components/TimerIdBadge";
import CinnamonKitty from "@/components/CinnamonKitty";
import Sparkles from "@/components/Sparkles";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Link from "next/link";
import { useI18n } from "@/contexts/I18nContext";

export default function TimerPage({
  params,
}: {
  params: Promise<{ timerId: string }>;
}) {
  const { timerId } = use(params);
  const { timerState, displayMs, isLoading, error } = useTimer(timerId);
  const { play, pause, restart } = useTimerControls(timerId);
  const { t } = useI18n();

  if (isLoading) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#f0f4fa]">
        <CinnamonKitty size="sm" />
        <p className="mt-4 text-sky-400/70 font-serif text-lg italic">
          {t.warmingUp}
        </p>
      </main>
    );
  }

  if (error || !timerState) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#f0f4fa] px-4">
        <CinnamonKitty size="sm" />
        <h2 className="mt-4 font-serif text-2xl text-sky-500">
          {t.timerNotFound}
        </h2>
        <p className="mt-2 text-sky-400/60 text-center text-sm">
          {t.timerExpired}
        </p>
        <Link
          href="/"
          className="mt-6 rounded-2xl bg-gradient-to-r from-sky-400 to-blush-400 px-6 py-2.5 font-serif text-white shadow-lg shadow-sky-300/25 hover:shadow-sky-300/40 transition-all active:scale-95"
        >
          {t.createNewTimer}
        </Link>
      </main>
    );
  }

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-4 overflow-hidden">
      {/* Soft pastel background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-50 via-[#f0f4fa] to-blush-50" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(133,193,255,0.08)_0%,_transparent_60%)]" />

      {/* Language switcher */}
      <div className="absolute top-4 right-4 z-20">
        <LanguageSwitcher />
      </div>

      <Sparkles />

      <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-10">
        {/* Top bar */}
        <div className="flex w-full max-w-lg items-center justify-between">
          <TimerIdBadge id={timerId} />
          <span className="rounded-full bg-white/70 border border-sky-200/50 px-4 py-1.5 text-sm text-sky-500 capitalize font-serif shadow-sm">
            {timerState.mode === "stopwatch" ? t.stopwatch : t.countdown}
          </span>
        </div>

        <CinnamonKitty />

        <TimerDisplay displayMs={displayMs} status={timerState.status} />

        <TimerControls
          status={timerState.status}
          onPlay={play}
          onPause={pause}
          onRestart={restart}
        />

        <Link
          href="/"
          className="mt-2 text-sm text-sky-400/50 hover:text-blush-400 transition-colors font-serif"
        >
          {t.createNewTimerLink}
        </Link>
      </div>
    </main>
  );
}
