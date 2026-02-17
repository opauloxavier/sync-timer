import { NextRequest } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { redis } from "@/lib/redis";
import { TimerState, TTL_SECONDS, timerToHash } from "@/lib/timer";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { mode, durationMs } = body;

  if (mode !== "stopwatch" && mode !== "countdown") {
    return Response.json({ error: "Invalid mode" }, { status: 400 });
  }
  if (mode === "countdown" && (!durationMs || durationMs <= 0)) {
    return Response.json(
      { error: "Countdown requires positive durationMs" },
      { status: 400 }
    );
  }

  const id = uuidv4();
  const now = Date.now();

  const timer: TimerState = {
    id,
    mode,
    status: "stopped",
    durationMs: mode === "countdown" ? durationMs : 0,
    accumulatedMs: 0,
    lastStartedAt: null,
    createdAt: now,
  };

  await redis.hset(`timer:${id}`, timerToHash(timer));
  await redis.expire(`timer:${id}`, TTL_SECONDS);

  return Response.json(timer, { status: 201 });
}
