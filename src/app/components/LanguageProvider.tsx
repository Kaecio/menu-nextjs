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

type DessertItem = { name: string; price: number };
type DinnerItem = { name: string; price: number };
type DrinkItem = { name: string; price: number };
type JaponeseItem = { name: string; price: number };

type LanguageType = {
  title: string;
  dessert: { title: string; items: DessertItem[] };
  dinner: {
    title: string;
    pasta: { title: string; items: DinnerItem[] };
    soup: { title: string; items: DinnerItem[] };
    risotto: { title: string; items: DinnerItem[] };
    sandwiches: { title: string; items: DinnerItem[] };
  };
  drink: { title: string; items: DrinkItem[] };
  japonese: { title: string; items: JaponeseItem[] };
};

type LanguageContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  language: LanguageType;
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
