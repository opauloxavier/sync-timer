"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Locale, Translations, getTranslations, detectLocale } from "@/lib/i18n";

interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  // Detect locale after hydration to avoid server/client mismatch
  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved && ["en", "pt-BR", "es"].includes(saved)) {
      setLocale(saved);
    } else {
      setLocale(detectLocale());
    }
  }, []);

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  const t = getTranslations(locale);

  return (
    <I18nContext.Provider value={{ locale, setLocale: handleSetLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
