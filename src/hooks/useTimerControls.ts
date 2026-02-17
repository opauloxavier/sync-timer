"use client";

import { useCallback } from "react";
import { mutate } from "swr";

export function useTimerControls(timerId: string) {
  const sendAction = useCallback(
    async (action: "play" | "pause" | "restart") => {
      const res = await fetch(`/api/timers/${timerId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action }),
      });
      const updatedTimer = await res.json();
      mutate(`/api/timers/${timerId}`, updatedTimer, false);
      return updatedTimer;
    },
    [timerId]
  );

  return {
    play: () => sendAction("play"),
    pause: () => sendAction("pause"),
    restart: () => sendAction("restart"),
  };
}
