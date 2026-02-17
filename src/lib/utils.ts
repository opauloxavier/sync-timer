import { TimerState } from "./timer";

export function computeElapsedMs(timer: TimerState): number {
  if (timer.status === "running" && timer.lastStartedAt !== null) {
    return timer.accumulatedMs + (Date.now() - timer.lastStartedAt);
  }
  return timer.accumulatedMs;
}

export function getDisplayMs(timer: TimerState): number {
  const elapsed = computeElapsedMs(timer);
  if (timer.mode === "countdown") {
    return Math.max(0, timer.durationMs - elapsed);
  }
  return elapsed;
}

export function formatTime(ms: number): string {
  const totalSeconds = Math.floor(Math.max(0, ms) / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return [
    String(hours).padStart(2, "0"),
    String(minutes).padStart(2, "0"),
    String(seconds).padStart(2, "0"),
  ].join(":");
}
