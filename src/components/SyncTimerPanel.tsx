"use client";

import { useState } from "react";

interface SyncTimerPanelProps {
  onCreate: (mode: "stopwatch" | "countdown", durationMs?: number) => void;
  onJoin: (timerId: string) => void;
}

export default function SyncTimerPanel({
  onCreate,
  onJoin,
}: SyncTimerPanelProps) {
  const [timerId, setTimerId] = useState("");
  const [showCountdown, setShowCountdown] = useState(false);
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);
  const [isCreating, setIsCreating] = useState(false);

  const handleJoin = () => {
    if (timerId.trim()) {
      onJoin(timerId.trim());
    }
  };

  const handleCreateStopwatch = async () => {
    setIsCreating(true);
    onCreate("stopwatch");
  };

  const handleCreateCountdown = async () => {
    const durationMs = (minutes * 60 + seconds) * 1000;
    if (durationMs <= 0) return;
    setIsCreating(true);
    onCreate("countdown", durationMs);
  };

  return (
    <div className="w-full max-w-sm space-y-6">
      {/* Join section */}
      <div className="space-y-3">
        <input
          type="text"
          value={timerId}
          onChange={(e) => setTimerId(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleJoin()}
          placeholder="Enter Timer ID"
          className="w-full rounded-lg border border-stone-700 bg-stone-900/80 px-4 py-3 text-center text-amber-100 placeholder-stone-500 outline-none transition-all focus:border-cinnamon-500 focus:ring-1 focus:ring-cinnamon-500"
        />
        <button
          onClick={handleJoin}
          disabled={!timerId.trim()}
          className="w-full rounded-lg bg-stone-800 px-4 py-3 font-serif text-lg text-cinnamon-200 transition-all hover:bg-stone-700 disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.98]"
        >
          Join Timer
        </button>
      </div>

      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-stone-700" />
        <span className="text-sm text-stone-500">or</span>
        <div className="h-px flex-1 bg-stone-700" />
      </div>

      {/* Create section */}
      <div className="space-y-3">
        <button
          onClick={handleCreateStopwatch}
          disabled={isCreating}
          className="w-full rounded-lg bg-cinnamon-600 px-4 py-3 font-serif text-lg text-cinnamon-50 transition-all hover:bg-cinnamon-500 disabled:opacity-60 active:scale-[0.98] shadow-lg shadow-cinnamon-900/30"
        >
          {isCreating ? "Creating..." : "Create Stopwatch"}
        </button>

        {!showCountdown ? (
          <button
            onClick={() => setShowCountdown(true)}
            className="w-full rounded-lg bg-stone-800 px-4 py-3 font-serif text-lg text-cinnamon-200 transition-all hover:bg-stone-700 active:scale-[0.98]"
          >
            Create Countdown
          </button>
        ) : (
          <div className="space-y-3 rounded-xl bg-stone-900/60 p-4 border border-stone-800">
            <div className="flex items-center justify-center gap-2">
              <div className="flex flex-col items-center">
                <label className="text-xs text-stone-400 mb-1">Minutes</label>
                <input
                  type="number"
                  min={0}
                  max={999}
                  value={minutes}
                  onChange={(e) =>
                    setMinutes(Math.max(0, parseInt(e.target.value) || 0))
                  }
                  className="w-20 rounded-lg border border-stone-700 bg-stone-800 px-2 py-2 text-center text-xl text-amber-100 outline-none focus:border-cinnamon-500"
                />
              </div>
              <span className="text-2xl text-stone-500 mt-4">:</span>
              <div className="flex flex-col items-center">
                <label className="text-xs text-stone-400 mb-1">Seconds</label>
                <input
                  type="number"
                  min={0}
                  max={59}
                  value={seconds}
                  onChange={(e) =>
                    setSeconds(
                      Math.min(59, Math.max(0, parseInt(e.target.value) || 0))
                    )
                  }
                  className="w-20 rounded-lg border border-stone-700 bg-stone-800 px-2 py-2 text-center text-xl text-amber-100 outline-none focus:border-cinnamon-500"
                />
              </div>
            </div>
            <button
              onClick={handleCreateCountdown}
              disabled={isCreating || (minutes === 0 && seconds === 0)}
              className="w-full rounded-lg bg-cinnamon-600 px-4 py-3 font-serif text-lg text-cinnamon-50 transition-all hover:bg-cinnamon-500 disabled:opacity-60 active:scale-[0.98] shadow-lg shadow-cinnamon-900/30"
            >
              {isCreating ? "Creating..." : "Start Countdown"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
