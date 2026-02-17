"use client";

import { formatTime } from "@/lib/utils";
import { TimerStatus } from "@/lib/timer";

interface TimerDisplayProps {
  displayMs: number;
  status: TimerStatus;
}

export default function TimerDisplay({ displayMs, status }: TimerDisplayProps) {
  return (
    <div className="flex items-center justify-center">
      <span
        className={`font-serif text-6xl sm:text-8xl md:text-9xl tracking-wider text-cinnamon-100 tabular-nums transition-all ${
          status === "running" ? "animate-pulse-glow" : ""
        }`}
      >
        {formatTime(displayMs)}
      </span>
    </div>
  );
}
