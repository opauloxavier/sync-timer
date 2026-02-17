export type TimerMode = "stopwatch" | "countdown";
export type TimerStatus = "running" | "paused" | "stopped";

export interface TimerState {
  id: string;
  mode: TimerMode;
  status: TimerStatus;
  durationMs: number;
  accumulatedMs: number;
  lastStartedAt: number | null;
  createdAt: number;
}

export const TTL_SECONDS = 43200; // 12 hours

export function parseTimerHash(
  data: Record<string, string>
): TimerState {
  return {
    id: data.id,
    mode: data.mode as TimerMode,
    status: data.status as TimerStatus,
    durationMs: Number(data.durationMs),
    accumulatedMs: Number(data.accumulatedMs),
    lastStartedAt:
      data.lastStartedAt === "null" ? null : Number(data.lastStartedAt),
    createdAt: Number(data.createdAt),
  };
}

export function timerToHash(timer: TimerState): Record<string, string> {
  return {
    id: timer.id,
    mode: timer.mode,
    status: timer.status,
    durationMs: String(timer.durationMs),
    accumulatedMs: String(timer.accumulatedMs),
    lastStartedAt: String(timer.lastStartedAt),
    createdAt: String(timer.createdAt),
  };
}
