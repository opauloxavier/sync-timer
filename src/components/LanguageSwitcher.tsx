"use client";

import { useI18n } from "@/contexts/I18nContext";
import { Locale } from "@/lib/i18n";

const languages: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "pt-BR", label: "PT" },
  { code: "es", label: "ES" },
];

export default function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  return (
    <div className="flex items-center gap-1 rounded-full bg-white/60 border border-sky-200/40 p-0.5 shadow-sm">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLocale(lang.code)}
          className={`rounded-full px-2.5 py-1 text-[11px] font-sans font-medium transition-all ${
            locale === lang.code
              ? "bg-sky-400 text-white shadow-sm"
              : "text-sky-400/60 hover:text-sky-500"
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
