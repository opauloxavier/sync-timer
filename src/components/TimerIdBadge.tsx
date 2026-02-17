"use client";

import { useState } from "react";
import { useI18n } from "@/contexts/I18nContext";

interface TimerIdBadgeProps {
  id: string;
}

export default function TimerIdBadge({ id }: TimerIdBadgeProps) {
  const [copied, setCopied] = useState(false);
  const { t } = useI18n();

  const handleCopy = async () => {
    const url = `${window.location.origin}/${id}`;
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-2 rounded-full bg-white/70 border border-sky-200/50 px-3 py-1.5 text-xs text-sky-500 transition-all hover:bg-white hover:border-blush-200/50 active:scale-95 shadow-sm"
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
      <span className="font-mono">{id}</span>
      {copied ? (
        <span className="text-blush-400 font-serif italic">{t.copied}</span>
      ) : (
        <span className="text-sky-300 font-serif italic">{t.tapToShare}</span>
      )}
    </button>
  );
}
