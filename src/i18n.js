// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Welcome to React": "Welcome to React",
    },
  },
  fr: {
    translation: {
      "Welcome to React": "Bienvenue à React",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
