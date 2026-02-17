"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useI18n } from "@/contexts/I18nContext";
import { getFunFacts } from "@/lib/funFacts";

const CYCLE_INTERVAL = 8000; // 8 seconds

export default function FunFacts() {
  const { locale } = useI18n();
  const facts = getFunFacts(locale);

  const [index, setIndex] = useState(() =>
    Math.floor(Math.random() * facts.length)
  );
  const [fading, setFading] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval>>(null);

  const goTo = useCallback(
    (next: number) => {
      setFading(true);
      setTimeout(() => {
        setIndex(((next % facts.length) + facts.length) % facts.length);
        setFading(false);
      }, 250); // match fade-out duration
    },
    [facts.length]
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  // Auto-cycle
  useEffect(() => {
    timerRef.current = setInterval(() => {
      goTo(index + 1);
    }, CYCLE_INTERVAL);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [index, goTo]);

  // Reset index when locale changes (different array)
  useEffect(() => {
    setIndex(Math.floor(Math.random() * facts.length));
  }, [locale, facts.length]);

  const fact = facts[index];

  return (
    <div className="flex items-center gap-2 max-w-xs sm:max-w-sm w-full">
      {/* Prev button */}
      <button
        onClick={prev}
        aria-label="Previous fact"
        className="shrink-0 flex items-center justify-center h-7 w-7 rounded-full text-sky-300/50 hover:text-sky-400 hover:bg-white/60 transition-all active:scale-90"
      >
        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Fact card */}
      <div
        className={`flex-1 rounded-2xl bg-white/50 border border-sky-100/60 px-4 py-3 backdrop-blur-sm shadow-sm transition-opacity duration-250 ${
          fading ? "opacity-0" : "opacity-100"
        }`}
      >
        <p className="text-center text-xs sm:text-sm text-sky-500/80 font-serif leading-relaxed">
          <span className="mr-1.5">{fact.emoji}</span>
          {fact.text}
        </p>
      </div>

      {/* Next button */}
      <button
        onClick={next}
        aria-label="Next fact"
        className="shrink-0 flex items-center justify-center h-7 w-7 rounded-full text-sky-300/50 hover:text-sky-400 hover:bg-white/60 transition-all active:scale-90"
      >
        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
