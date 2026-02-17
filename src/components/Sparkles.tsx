"use client";

export default function Sparkles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute animate-sparkle"
        style={{ top: "10%", left: "12%", animationDelay: "0s" }}
      >
        <span className="text-sky-300/40 text-sm">&#10022;</span>
      </div>
      <div
        className="absolute animate-sparkle"
        style={{ top: "7%", right: "18%", animationDelay: "0.7s" }}
      >
        <span className="text-blush-300/35 text-xs">&#10022;</span>
      </div>
      <div
        className="absolute animate-sparkle"
        style={{ top: "22%", right: "8%", animationDelay: "1.2s" }}
      >
        <span className="text-sky-200/30 text-xs">&#9829;</span>
      </div>
      <div
        className="absolute animate-sparkle"
        style={{ bottom: "18%", left: "8%", animationDelay: "0.4s" }}
      >
        <span className="text-blush-200/30 text-sm">&#10022;</span>
      </div>
      <div
        className="absolute animate-sparkle"
        style={{ bottom: "12%", right: "12%", animationDelay: "1.8s" }}
      >
        <span className="text-sky-300/30 text-xs">&#9829;</span>
      </div>
      <div
        className="absolute animate-sparkle"
        style={{ top: "42%", left: "4%", animationDelay: "2.2s" }}
      >
        <span className="text-blush-300/20 text-xs">&#10022;</span>
      </div>
      <div
        className="absolute animate-sparkle"
        style={{ top: "48%", right: "6%", animationDelay: "1.5s" }}
      >
        <span className="text-sky-200/25 text-xs">&#10022;</span>
      </div>
    </div>
  );
}
