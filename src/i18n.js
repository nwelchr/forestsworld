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
      Welcome: "Welcome to my world.",
      Blurb:
        "From creating my own languages as a child and in college to learning to develop my first app, I've always believed that language is the most powerful tool we humans have. Now, I'm creating full-stack applications and games with the user in mind.",
    },
  },
  fr: {
    translation: {
      About: "À Propos",
      "Past Work": "Expériences Passées",
      Projects: "Projets",
      Contact: "Contact",
      Welcome: "Voilà mon univers.",
      Blurb:
        "Depuis que j'ai inventé mes propres langages enfant et pendant mes études, jusqu'à la réalisation de ma première application, j'ai toujours pensé que le langage était notre plus grand atout. Aujourd'hui, je développe des applications complètes et des jeux en plaçant l'utilisateur au centre de tout.",
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
