import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "fr" | "en";
export type Bilingual = { fr: string; en: string };

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: (b: Bilingual) => string;
};

const I18nCtx = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "fr" || saved === "en") setLangState(saved);
    } catch {}
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("lang", l);
    } catch {}
    document.documentElement.lang = l;
  };

  const toggle = () => setLang(lang === "fr" ? "en" : "fr");
  const t = (b: Bilingual) => b[lang];

  return (
    <I18nCtx.Provider value={{ lang, setLang, toggle, t }}>{children}</I18nCtx.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

export const useT = () => useI18n().t;
