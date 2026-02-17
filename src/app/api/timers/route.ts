import { NextRequest } from "next/server";
import { redis } from "@/lib/redis";
import { TimerState, TTL_SECONDS, timerToHash } from "@/lib/timer";
import { generateFriendlyId } from "@/lib/names";

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

  // Generate a friendly ID and ensure it's unique
  let id = generateFriendlyId();
  let attempts = 0;
  while (attempts < 5) {
    const existing = await redis.exists(`timer:${id}`);
    if (!existing) break;
    id = generateFriendlyId();
    attempts++;
  }

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
