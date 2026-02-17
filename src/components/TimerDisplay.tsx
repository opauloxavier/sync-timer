"use client";

import { formatTime } from "@/lib/utils";
import { TimerStatus } from "@/lib/timer";
import { useI18n } from "@/contexts/I18nContext";

interface TimerDisplayProps {
  displayMs: number;
  status: TimerStatus;
}

export default function TimerDisplay({ displayMs, status }: TimerDisplayProps) {
  const { t } = useI18n();

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="relative">
        {/* Soft glow behind the time */}
        <div className="absolute inset-0 blur-3xl bg-sky-300/10 rounded-full scale-150" />
        <span
          className={`relative font-serif text-7xl sm:text-9xl md:text-[10rem] tracking-wider text-sky-500 tabular-nums transition-all ${
            status === "running" ? "animate-pulse-glow" : ""
          }`}
        >
          {formatTime(displayMs)}
        </span>
      </div>
      <span className="text-sm font-serif italic text-blush-300">
        {status === "running"
          ? t.tickingAway
          : status === "paused"
          ? t.takingBreak
          : t.readyWhenYouAre}
      </span>
    </div>
  );
}
