// import I18n from "i18n-js";
import en from "./en/translate.json";
import ar from "./ar/translate.json";
// export default I18n;
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// don't want to use this?

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  debug: false,
  resources: {
    en: {
      translations: en,
    },
    ar: {
      translations: ar,
    },
  },
  defaultNS: "translations",
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  preload: ["en", "ar"],
  lng: ["en", "ar"],
  lngWhitelist: ["en", "ar"],
  ns: "translations",
  supportedLngs: ["en", "ar"],
  load: "all",
  cleanCode: true,
  saveMissingTo: "all",
});
export default i18n;
