"use client";

import { use } from "react";
import { useTimer } from "@/hooks/useTimer";
import { useTimerControls } from "@/hooks/useTimerControls";
import TimerDisplay from "@/components/TimerDisplay";
import TimerControls from "@/components/TimerControls";
import TimerIdBadge from "@/components/TimerIdBadge";
import CinnamonKitty from "@/components/CinnamonKitty";
import Link from "next/link";

export default function TimerPage({
  params,
}: {
  params: Promise<{ timerId: string }>;
}) {
  const { timerId } = use(params);
  const { timerState, displayMs, isLoading, error } = useTimer(timerId);
  const { play, pause, restart } = useTimerControls(timerId);

  if (isLoading) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-stone-950">
        <CinnamonKitty size="sm" />
        <p className="mt-4 text-stone-400 font-serif text-lg">
          Loading timer...
        </p>
      </main>
    );
  }

  if (error || !timerState) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-stone-950 px-4">
        <CinnamonKitty size="sm" />
        <h2 className="mt-4 font-serif text-2xl text-cinnamon-300">
          Timer Not Found
        </h2>
        <p className="mt-2 text-stone-400 text-center">
          This timer may have expired or doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="mt-6 rounded-lg bg-cinnamon-600 px-6 py-2 font-serif text-cinnamon-50 hover:bg-cinnamon-500 transition-all"
        >
          Create a New Timer
        </Link>
      </main>
    );
  }

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-4">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-stone-950 via-stone-900/50 to-stone-950" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(196,133,92,0.08)_0%,_transparent_70%)]" />

      <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-8">
        {/* Top bar */}
        <div className="flex w-full max-w-md items-center justify-between">
          <TimerIdBadge id={timerId} />
          <span className="rounded-full bg-stone-800/80 px-3 py-1 text-xs text-stone-400 capitalize">
            {timerState.mode}
          </span>
        </div>

        <CinnamonKitty size="sm" />

        <TimerDisplay displayMs={displayMs} status={timerState.status} />

        <TimerControls
          status={timerState.status}
          onPlay={play}
          onPause={pause}
          onRestart={restart}
        />

        <Link
          href="/"
          className="mt-4 text-sm text-stone-500 hover:text-cinnamon-400 transition-colors"
        >
          Create a new timer
        </Link>
      </div>
    </main>
  );
}
