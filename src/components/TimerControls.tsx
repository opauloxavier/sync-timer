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
        className={`flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full transition-all active:scale-95 ${
          status !== "running"
            ? "bg-cinnamon-600 hover:bg-cinnamon-500 text-cinnamon-50 shadow-lg shadow-cinnamon-900/40"
            : "bg-stone-800 text-stone-500 cursor-not-allowed"
        }`}
        aria-label="Play"
      >
        <svg
          className="h-6 w-6 sm:h-7 sm:w-7 ml-0.5"
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
        className={`flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full transition-all active:scale-95 ${
          status === "running"
            ? "bg-cinnamon-600 hover:bg-cinnamon-500 text-cinnamon-50 shadow-lg shadow-cinnamon-900/40"
            : "bg-stone-800 text-stone-500 cursor-not-allowed"
        }`}
        aria-label="Pause"
      >
        <svg
          className="h-6 w-6 sm:h-7 sm:w-7"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
        </svg>
      </button>

      {/* Restart */}
      <button
        onClick={onRestart}
        className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-stone-800 hover:bg-stone-700 text-cinnamon-300 transition-all active:scale-95 shadow-lg shadow-stone-900/40"
        aria-label="Restart"
      >
        <svg
          className="h-6 w-6 sm:h-7 sm:w-7"
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
