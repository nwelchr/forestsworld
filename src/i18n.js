// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      About: "About",
      "Past Work": "Past Work",
      Projects: "Projects",
      Contact: "Contact",
      Welcome: "Welcome to my",
      World: "world",
      Resume: "Resume",
      Blurb:
        "From a young age, my fascination with language—spoken, signed, and coded—has been unwavering: language is our most powerful bridge to understanding and connection. As a developer, I channel this passion to craft tools that amplify users' potential.",
    },
  },
  fr: {
    translation: {
      About: "À Propos",
      "Past Work": "Expériences Passées",
      Projects: "Projets",
      Contact: "Contact",
      Welcome: "Voilà mon",
      World: "univers",
      Resume: "CV",
      Blurb:
        "Depuis mon enfance, les langues et les langages—parlés, signés et codés—m'ont toujours fasciné. Ce sont les liens les plus puissants entre compréhension et connexion. En tant que développeur, je canalise cette passion pour responsabiliser les utilisateurs.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
