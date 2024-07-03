import { useState, useEffect } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const StyledLink = styled.a`
  display: inline-block;
  padding: 3px;
  margin: 7px;
  text-decoration: none;
  font-weight: 300;

  /* Target the rendered anchor tag inside StyledLink */

  position: relative; /* Provide position context for pseudo-element */

  &::before {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    width: 0%;
    height: 1px;
    background-color: currentColor;
    transition: width 1s ease-out;
  }

  &:hover::before {
    width: 100%;
  }
`;

const LanguageToggle = ({ theme }) => {
  const { i18n } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, [i18n.language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Delay changing the language to sync with the fade out animation
  };

  const fromLanguage = i18n.language;
  const toLanguage = fromLanguage === "en" ? "fr" : "en";

  return (
    <StyledLink
      theme={theme}
      style={{ opacity: visible ? 1 : 0 }}
      onClick={() => changeLanguage(toLanguage)}
    >
      {fromLanguage.toUpperCase()}
    </StyledLink>
  );
};

export default LanguageToggle;
