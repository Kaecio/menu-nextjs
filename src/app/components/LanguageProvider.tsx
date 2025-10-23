"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { ch } from "../locales/ch";
import { en } from "../locales/en";
import { es } from "../locales/es";
import { fr } from "../locales/fr";
import { jp } from "../locales/jp";
import { pt } from "../locales/pt";

type Lang = "en" | "fr" | "pt" | "es" | "jp" | "ch";

const translations = { en, fr, pt, es, jp, ch };

type LanguageContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  language: typeof en;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  language: en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const value = {
    lang,
    setLang,
    language: translations[lang],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
