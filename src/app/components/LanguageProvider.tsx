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
type Appetizers = { name: string; price: number };
type Cigars = { name: string; price: number };

type LanguageType = {
  title: string;
  dessert: {
    title: string;
    iceCreams: { title: string; items: DessertItem[] };
    cakes: { title: string; items: DessertItem[] };
  };
  dinner: {
    title: string;
    pasta: { title: string; items: DinnerItem[] };
    soup: { title: string; items: DinnerItem[] };
    risotto: { title: string; items: DinnerItem[] };
    sandwiches: { title: string; items: DinnerItem[] };
  };
  appetizers: {
    title: string;
    appetizers: { title: string; items: Appetizers[] };
  };
  drink: {
    title: string;
    softDrinks: { title: string; items: DrinkItem[] };
    juices: { title: string; items: DrinkItem[] };
    alcoholic: { title: string; items: DrinkItem[] };
  };
  japonese: {
    title: string;
    sushi: { title: string; items: JaponeseItem[] };
    sashimi: { title: string; items: JaponeseItem[] };
    hotDishes: { title: string; items: JaponeseItem[] };
  };
  cigars: {
    title: string;
    cigars: { title: string; items: Cigars[] };
  };
};

type LanguageContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  language: LanguageType;
};

const LanguageContext = createContext<LanguageContextType>({
  // lang: "en",
  lang: "pt",
  setLang: () => {},
  language: translations.en as LanguageType,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt");

  const value = {
    lang,
    setLang,
    language: translations[lang] as LanguageType,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
