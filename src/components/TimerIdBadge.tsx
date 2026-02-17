"use client";

import { useState } from "react";

interface TimerIdBadgeProps {
  id: string;
}

export default function TimerIdBadge({ id }: TimerIdBadgeProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const url = `${window.location.origin}/${id}`;
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-2 rounded-full bg-stone-800/80 px-3 py-1.5 text-xs text-cinnamon-300 transition-all hover:bg-stone-700/80 active:scale-95"
      title="Click to copy timer URL"
    >
      <svg
        className="h-3.5 w-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
        />
      </svg>
      <span className="font-mono">{id.slice(0, 8)}</span>
      {copied && (
        <span className="text-cinnamon-400 font-sans">Copied!</span>
      )}
    </button>
  );
}
