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
      Blurb:
        "From a young age, my fascination with language—spoken, signed, and coded—has been unwavering: language is our most powerful bridge to understanding and connection. As a developer, I channel this passion to craft tools that amplify users' potential and voice.",
      Synergia:
        "Synergía is an international LGBT human rights organization dedicated to empowering local social movements. Built in a half-day hackathon at Github.",
      "Moving On":
        "The Power of Friendship is a minimalist puzzle platformer where a blocky, motley crew must work together to succeed. Made in native JavaScript, HTML, and CSS.",
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
      Blurb:
        "Depuis mon plus jeune âge, les langues et les langages, qu'ils soient parlés, signés ou codés, m'ont toujours fasciné. Pour moi, ils représentent les liens les plus puissants entre compréhension et connexion. En tant que développeur, je canalise cette passion pour responsabiliser les utilisateurs et leur donner voix au chapitre.",
      Synergia:
        "Synergía est une organisation internationale des droits de l'homme LGBT dédiée à l'émancipation des mouvements sociaux locaux. Construite lors d'un hackathon d'une demi-journée chez Github.",
      "Moving On":
        "The Power of Friendship (La force de l'amitié) est un jeu de plateforme énigmatique tout mignon où une joyeuse bande de petits cubes doit s'unir pour triompher. Réalisé en JavaScript, HTML et CSS.",
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
