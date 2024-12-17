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
      Bop: "Bop is a single-page music-streaming app that allows users to make and shuffle playlists, and follow their friends' favorite artists. Built on Rails, React, and Redux.",
      ThePowerOfFriendship:
        "The Power of Friendship is a minimalist puzzle platformer where a blocky, motley crew must work together to succeed. Made in native JavaScript, HTML, and CSS.",
      ProjectPhantom:
        "Project Phantom is a React VR component library, npx build, and file processor. Our team ventured into the budding world of VR to make it easier for you to follow suit.",
      Synergia:
        "Synergía is an international LGBT human rights organization dedicated to empowering local social movements. Built in a half-day hackathon at Github.",
      Verbling:
        "A simple note-taking app. Built with create-react-app and React context API.",
      LiveDocs:
        "LiveDocs is a real-time collaborative text editor that allows users to edit, comment, and share documents seamlessly. Built with Next.js, TypeScript, Shadcn components, Clerk for authentication, and Liveblocks for real-time features. Deployed using Vercel.",
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
      Bop: "Bop est une application de streaming musical monopage qui permet aux utilisateurs de créer et mélanger des playlists, et de suivre les artistes préférés de leurs amis. Développé avec Rails, React et Redux.",
      ThePowerOfFriendship:
        "The Power of Friendship est un jeu de puzzle et de plateforme minimaliste où une équipe hétéroclite doit travailler ensemble pour réussir. Réalisé en JavaScript natif, HTML et CSS.",
      ProjectPhantom:
        "Project Phantom est une bibliothèque de composants React VR, une construction npx et un processeur de fichiers. Notre équipe s'est aventurée dans le monde naissant de la VR pour vous faciliter la tâche.",
      Synergia:
        "Synergía est une organisation internationale de défense des droits humains LGBT dédiée à l'autonomisation des mouvements sociaux locaux. Construit lors d'un hackathon d'une demi-journée chez Github.",
      Verbling:
        "Une application simple de prise de notes. Construite avec create-react-app et React context API.",
      LiveDocs:
        "LiveDocs est un outil de rédaction collaborative en temps réel permettant aux utilisateurs d'éditer, commenter et partager des documents sans effort. Développé avec Next.js, TypeScript, les composants Shadcn, Clerk pour l'authentification, et Liveblocks pour les fonctionnalités en temps réel. Déployé via Vercel.",
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
