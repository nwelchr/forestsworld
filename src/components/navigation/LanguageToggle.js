import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const fromLanguage = i18n.language;
  const toLanguage = fromLanguage === "en" ? "fr" : "en";

  return (
    <button onClick={() => changeLanguage(toLanguage)}>{fromLanguage}</button>
  );
};

export default LanguageToggle;
