import { NextRequest } from "next/server";
import { redis } from "@/lib/redis";
import { parseTimerHash, TTL_SECONDS } from "@/lib/timer";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const data = await redis.hgetall(`timer:${id}`);

  if (!data || Object.keys(data).length === 0) {
    return Response.json({ error: "Timer not found" }, { status: 404 });
  }

  await redis.expire(`timer:${id}`, TTL_SECONDS);

  const timer = parseTimerHash(data as Record<string, string>);
  return Response.json(timer);
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const { action } = await request.json();

  const data = await redis.hgetall(`timer:${id}`);
  if (!data || Object.keys(data).length === 0) {
    return Response.json({ error: "Timer not found" }, { status: 404 });
  }

  const timer = parseTimerHash(data as Record<string, string>);
  const now = Date.now();

  switch (action) {
    case "play": {
      if (timer.status === "running") break;
      if (
        timer.mode === "countdown" &&
        timer.accumulatedMs >= timer.durationMs
      )
        break;
      timer.status = "running";
      timer.lastStartedAt = now;
      break;
    }
    case "pause": {
      if (timer.status !== "running") break;
      const segmentElapsed = timer.lastStartedAt
        ? now - timer.lastStartedAt
        : 0;
      timer.accumulatedMs += segmentElapsed;
      timer.status = "paused";
      timer.lastStartedAt = null;
      break;
    }
    case "restart": {
      timer.status = "stopped";
      timer.accumulatedMs = 0;
      timer.lastStartedAt = null;
      break;
    }
    default:
      return Response.json(
        { error: "Invalid action. Use play, pause, or restart." },
        { status: 400 }
      );
  }

  await redis.hset(`timer:${id}`, {
    status: timer.status,
    accumulatedMs: String(timer.accumulatedMs),
    lastStartedAt: String(timer.lastStartedAt),
  });
  await redis.expire(`timer:${id}`, TTL_SECONDS);

  return Response.json(timer);
}
