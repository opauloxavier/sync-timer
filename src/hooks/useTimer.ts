"use client";

import useSWR from "swr";
import { useState, useEffect, useRef, useCallback } from "react";
import { TimerState } from "@/lib/timer";
import { getDisplayMs } from "@/lib/utils";

const fetcher = (url: string) =>
  fetch(url).then((res) => {
    if (!res.ok) throw new Error("Timer not found");
    return res.json();
  });

export function useTimer(timerId: string) {
  const {
    data: timerState,
    error,
    isLoading,
    mutate,
  } = useSWR<TimerState>(`/api/timers/${timerId}`, fetcher, {
    refreshInterval: 500,
    revalidateOnFocus: true,
    dedupingInterval: 200,
  });

  const [displayMs, setDisplayMs] = useState(0);
  const rafRef = useRef<number | null>(null);

  const tick = useCallback(() => {
    if (timerState) {
      setDisplayMs(getDisplayMs(timerState));
    }
    rafRef.current = requestAnimationFrame(tick);
  }, [timerState]);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [tick]);

  return { timerState, displayMs, isLoading, error, mutate };
}
