import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./locales/en/translation.json";
import translationUA from "./locales/ua/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  ua: {
    translation: translationUA,
  },
};

export const languages: string[] = Object.keys(resources);

export const removeLngPrefix = (pathName: string) => {
  for (const lang of languages) {
    if (pathName.startsWith(`/${lang}/`) || pathName === `/${lang}`) {
      return pathName.replace(`/${lang}`, "");
    }
  }
  return pathName;
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    resources,
    detection: {
      caches: ["cookie"],
    },
  });

export default i18n;
