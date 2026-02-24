"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import type { Lang } from "@/lib/homepage-translations";

interface LanguageContextValue {
  language: Lang;
  setLanguage: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  language: "en",
  setLanguage: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Lang>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("cf-lang") as Lang | null;
    if (stored && ["en", "fr", "es", "ar"].includes(stored)) {
      setLanguageState(stored);
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Lang) => {
    setLanguageState(lang);
    localStorage.setItem("cf-lang", lang);
  };

  // Avoid hydration mismatch — render children immediately but with default lang
  // until mounted. The flash is negligible since localStorage read is synchronous in useEffect.
  return (
    <LanguageContext.Provider value={{ language: mounted ? language : "en", setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
