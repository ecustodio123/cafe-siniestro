/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import en from "./en.json";
import es from "./es.json";

const STORAGE_KEY = "site_language";
const DEFAULT_LANGUAGE = "es";

const dictionaries = {
  en,
  es,
};

const I18nContext = createContext(null);

function getValueByPath(object, path) {
  return path.split(".").reduce((acc, key) => {
    if (acc && typeof acc === "object" && key in acc) {
      return acc[key];
    }

    return undefined;
  }, object);
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved && saved in dictionaries ? saved : DEFAULT_LANGUAGE;
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const value = useMemo(() => {
    const t = (path, options = {}) => {
      const activeValue = getValueByPath(dictionaries[language], path);
      const fallbackValue = getValueByPath(dictionaries[DEFAULT_LANGUAGE], path);
      const result = activeValue ?? fallbackValue;

      if (options.returnObjects) {
        return result ?? [];
      }

      return typeof result === "string" ? result : path;
    };

    return {
      language,
      setLanguage,
      t,
    };
  }, [language]);

  useEffect(() => {
    document.title = value.t("meta.title");
    document.documentElement.lang = language;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", value.t("meta.description"));
    }
  }, [language, value]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useI18n must be used within LanguageProvider");
  }

  return context;
}
