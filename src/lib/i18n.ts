import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "@/localization/en";
import ar from "@/localization/ar";

const resources = { en, ar };

export const AvailableLanguages = [
  { code: "en", nativeName: "English" },
  { code: "ar", nativeName: "العربية" },
];

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init(
    {
      debug: false,
      returnNull: false,
      fallbackLng: "en",
      defaultNS: "common",
      resources,
    },
    (err) => {
      if (err)
        return console.log("something went wrong loading namespaces", err);
      document.body.dir = i18n.dir();
    }
  );

i18n.on("languageChanged", () => {
  document.body.dir = i18n.dir();
});

/** Changes application language, only when {@link lang} differs from i18n.resolvedLanguage
 *  @param {string} lang the selected language */

export const changeLanguage = (lang: string) => {
  if (i18n.resolvedLanguage !== lang) i18n.changeLanguage(lang);
};

export default i18n;
