"use client";

import { useEffect, useState } from "react";
import { formatTime } from "@/lib/utils";
import { TimerMode, TimerStatus } from "@/lib/timer";
import { useI18n } from "@/contexts/I18nContext";

interface TimerDisplayProps {
  displayMs: number;
  status: TimerStatus;
  mode: TimerMode;
}

const CONFETTI_ITEMS = [
  { emoji: "🎉", x: -60, delay: 0 },
  { emoji: "✨", x: -30, delay: 0.1 },
  { emoji: "🌸", x: 0, delay: 0.05 },
  { emoji: "💖", x: 30, delay: 0.15 },
  { emoji: "🎊", x: 60, delay: 0.08 },
];

export default function TimerDisplay({
  displayMs,
  status,
  mode,
}: TimerDisplayProps) {
  const { t } = useI18n();
  const [hasFinished, setHasFinished] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const isCountdownDone = mode === "countdown" && displayMs === 0 && status !== "stopped";

  // Detect the moment countdown reaches 0
  useEffect(() => {
    if (isCountdownDone && !hasFinished) {
      setHasFinished(true);
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 2000);
      return () => clearTimeout(timer);
    }
    if (!isCountdownDone) {
      setHasFinished(false);
    }
  }, [isCountdownDone, hasFinished]);

  const getStatusText = () => {
    if (isCountdownDone) return t.timesUp;
    if (status === "running") return t.tickingAway;
    if (status === "paused") return t.takingBreak;
    return t.readyWhenYouAre;
  };

  const getTimerAnimation = () => {
    if (isCountdownDone) return "animate-celebrate";
    if (status === "running") return "animate-pulse-glow";
    return "";
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="relative">
        {/* Soft glow behind the time */}
        <div
          className={`absolute inset-0 blur-3xl rounded-full scale-150 transition-colors duration-500 ${
            isCountdownDone ? "bg-blush-300/20" : "bg-sky-300/10"
          }`}
        />

        {/* Confetti burst */}
        {showConfetti && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {CONFETTI_ITEMS.map((item, i) => (
              <span
                key={i}
                className="absolute text-2xl sm:text-3xl animate-confetti"
                style={{
                  left: `calc(50% + ${item.x}px)`,
                  animationDelay: `${item.delay}s`,
                }}
              >
                {item.emoji}
              </span>
            ))}
          </div>
        )}

        <span
          className={`relative font-serif text-7xl sm:text-9xl md:text-[10rem] tracking-wider tabular-nums transition-all ${
            isCountdownDone ? "text-blush-400" : "text-sky-500"
          } ${getTimerAnimation()}`}
        >
          {formatTime(displayMs)}
        </span>
      </div>

      <span
        className={`text-sm font-serif italic transition-all ${
          isCountdownDone
            ? "text-blush-400 text-base animate-bounce-in"
            : "text-blush-300"
        }`}
      >
        {getStatusText()}
      </span>
    </div>
  );
}
