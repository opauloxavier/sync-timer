"use client";

import { TimerStatus } from "@/lib/timer";

interface TimerControlsProps {
  status: TimerStatus;
  onPlay: () => void;
  onPause: () => void;
  onRestart: () => void;
}

export default function TimerControls({
  status,
  onPlay,
  onPause,
  onRestart,
}: TimerControlsProps) {
  return (
    <div className="flex items-center justify-center gap-6 sm:gap-10">
      {/* Play */}
      <button
        onClick={onPlay}
        disabled={status === "running"}
        className={`group flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full transition-all active:scale-90 ${
          status !== "running"
            ? "bg-gradient-to-br from-sky-400 to-sky-500 text-white shadow-lg shadow-sky-300/30 hover:shadow-sky-300/50 hover:scale-105"
            : "bg-sky-100 text-sky-300 cursor-not-allowed"
        }`}
        aria-label="Play"
      >
        <svg
          className="h-8 w-8 sm:h-10 sm:w-10 ml-1"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </button>

      {/* Pause */}
      <button
        onClick={onPause}
        disabled={status !== "running"}
        className={`group flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full transition-all active:scale-90 ${
          status === "running"
            ? "bg-gradient-to-br from-blush-300 to-blush-400 text-white shadow-lg shadow-blush-300/30 hover:shadow-blush-300/50 hover:scale-105"
            : "bg-blush-100 text-blush-300 cursor-not-allowed"
        }`}
        aria-label="Pause"
      >
        <svg
          className="h-8 w-8 sm:h-10 sm:w-10"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
        </svg>
      </button>

      {/* Restart */}
      <button
        onClick={onRestart}
        className="group flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-white/80 border border-sky-200/50 text-sky-400 transition-all active:scale-90 hover:bg-white hover:text-blush-400 hover:border-blush-200/50 hover:scale-105 shadow-sm"
        aria-label="Restart"
      >
        <svg
          className="h-8 w-8 sm:h-10 sm:w-10 transition-transform group-hover:rotate-[-45deg]"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      </button>
    </div>
  );
}
