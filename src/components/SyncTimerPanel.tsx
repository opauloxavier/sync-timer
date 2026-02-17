"use client";

import { useState } from "react";
import { useI18n } from "@/contexts/I18nContext";

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
  const { t } = useI18n();

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
    <div className="w-full max-w-sm space-y-5">
      {/* Join section */}
      <div className="space-y-2.5 rounded-2xl bg-white/60 border border-sky-200/40 p-4 backdrop-blur-sm shadow-sm">
        <p className="text-center text-xs font-serif italic text-sky-400/70">
          {t.joinFriendTimer}
        </p>
        <input
          type="text"
          value={timerId}
          onChange={(e) => setTimerId(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleJoin()}
          placeholder={t.pasteTimerId}
          className="w-full rounded-xl border border-sky-200/50 bg-white/80 px-4 py-3 text-center text-sky-600 placeholder-sky-300/50 outline-none transition-all focus:border-sky-400/60 focus:ring-1 focus:ring-sky-300/30 text-sm"
        />
        <button
          onClick={handleJoin}
          disabled={!timerId.trim()}
          className="w-full rounded-xl bg-white/80 border border-sky-200/50 px-4 py-2.5 font-serif text-base text-sky-500 transition-all hover:bg-sky-50 hover:border-sky-300/50 disabled:opacity-30 disabled:cursor-not-allowed active:scale-[0.98]"
        >
          {t.joinTimer}
        </button>
      </div>

      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-sky-200/40 to-transparent" />
        <span className="text-xs text-blush-300 font-serif italic">
          {t.orCreateNew}
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blush-200/40 to-transparent" />
      </div>

      {/* Create section */}
      <div className="space-y-2.5">
        <button
          onClick={handleCreateStopwatch}
          disabled={isCreating}
          className="w-full rounded-2xl bg-gradient-to-r from-sky-400 to-sky-500 px-4 py-3.5 font-serif text-lg text-white transition-all hover:shadow-lg hover:shadow-sky-300/30 disabled:opacity-60 active:scale-[0.98] shadow-md shadow-sky-200/40"
        >
          {isCreating ? t.creating : t.createStopwatch}
        </button>

        {!showCountdown ? (
          <button
            onClick={() => setShowCountdown(true)}
            className="w-full rounded-2xl bg-white/60 border border-blush-200/40 px-4 py-3 font-serif text-base text-blush-400 transition-all hover:bg-blush-50/60 hover:border-blush-300/40 active:scale-[0.98] shadow-sm"
          >
            {t.createCountdown}
          </button>
        ) : (
          <div className="space-y-3 rounded-2xl bg-white/60 border border-blush-200/40 p-4 backdrop-blur-sm shadow-sm">
            <p className="text-center text-xs font-serif italic text-blush-300">
              {t.setYourTimer}
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="flex flex-col items-center">
                <label className="text-[10px] text-sky-400/60 mb-1 font-serif">
                  {t.min}
                </label>
                <input
                  type="number"
                  min={0}
                  max={999}
                  value={minutes}
                  onChange={(e) =>
                    setMinutes(Math.max(0, parseInt(e.target.value) || 0))
                  }
                  className="w-20 rounded-xl border border-sky-200/50 bg-white/80 px-2 py-2.5 text-center text-2xl font-serif text-sky-500 outline-none focus:border-sky-400/60"
                />
              </div>
              <span className="text-2xl text-blush-300/50 mt-4 font-serif">
                :
              </span>
              <div className="flex flex-col items-center">
                <label className="text-[10px] text-sky-400/60 mb-1 font-serif">
                  {t.sec}
                </label>
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
                  className="w-20 rounded-xl border border-sky-200/50 bg-white/80 px-2 py-2.5 text-center text-2xl font-serif text-sky-500 outline-none focus:border-sky-400/60"
                />
              </div>
            </div>
            <button
              onClick={handleCreateCountdown}
              disabled={isCreating || (minutes === 0 && seconds === 0)}
              className="w-full rounded-2xl bg-gradient-to-r from-blush-300 to-blush-400 px-4 py-3 font-serif text-base text-white transition-all hover:shadow-lg hover:shadow-blush-300/30 disabled:opacity-40 active:scale-[0.98] shadow-md shadow-blush-200/40"
            >
              {isCreating ? t.creating : t.startCountdown}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
