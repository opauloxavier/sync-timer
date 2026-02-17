/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useRef } from "react";

interface CinnamonKittyProps {
  size?: "sm" | "lg";
}

export default function CinnamonKitty({ size = "lg" }: CinnamonKittyProps) {
  const dimensions =
    size === "lg"
      ? "w-36 h-36 sm:w-48 sm:h-48"
      : "w-20 h-20 sm:w-24 sm:h-24";

  const sparkleSize = size === "lg" ? "text-sm" : "text-[10px]";

  const [animation, setAnimation] = useState<"" | "wobble" | "spin">("");
  const clickTimes = useRef<number[]>([]);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  const handleClick = () => {
    const now = Date.now();
    clickTimes.current.push(now);
    // Keep only clicks within the last 800ms
    clickTimes.current = clickTimes.current.filter((t) => now - t < 800);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    if (clickTimes.current.length >= 3) {
      // Rapid clicks → spin!
      setAnimation("spin");
      clickTimes.current = [];
      timeoutRef.current = setTimeout(() => setAnimation(""), 600);
    } else {
      // Single tap → wobble
      setAnimation("wobble");
      timeoutRef.current = setTimeout(() => setAnimation(""), 400);
    }
  };

  return (
    <div className="relative">
      {/* Sparkles around the character */}
      <div
        className={`absolute -top-2 -left-3 animate-sparkle ${sparkleSize} text-sky-300/50`}
        style={{ animationDelay: "0s" }}
      >
        &#10022;
      </div>
      <div
        className={`absolute -top-1 -right-3 animate-sparkle ${sparkleSize} text-blush-300/50`}
        style={{ animationDelay: "0.8s" }}
      >
        &#10022;
      </div>
      <div
        className={`absolute -bottom-1 -left-2 animate-sparkle ${sparkleSize} text-blush-300/40`}
        style={{ animationDelay: "1.4s" }}
      >
        &#9829;
      </div>
      <div
        className={`absolute -bottom-2 -right-2 animate-sparkle ${sparkleSize} text-sky-300/40`}
        style={{ animationDelay: "0.5s" }}
      >
        &#9829;
      </div>

      <div
        onClick={handleClick}
        className={`${dimensions} animate-float drop-shadow-[0_4px_24px_rgba(91,168,245,0.2)] cursor-pointer select-none ${
          animation === "spin"
            ? "animate-kitty-spin"
            : animation === "wobble"
            ? "animate-kitty-wobble"
            : "hover:animate-kitty-wiggle"
        }`}
      >
        <img
          src="/cinnamoroll.svg"
          alt="Cinnamoroll"
          className="w-full h-full object-contain"
          draggable={false}
        />
      </div>
    </div>
  );
}
