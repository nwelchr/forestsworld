import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useTranslation } from "react-i18next";

const LanguageButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 5px 10px;
  font-size: 1em;
  font-weight: bold;

  color: ${({ theme: { mode } }) => (mode === "dark" ? "#ccc" : "#333")};
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
    <LanguageButton
      theme={theme}
      style={{ opacity: visible ? 1 : 0 }}
      onClick={() => changeLanguage(toLanguage)}
    >
      {fromLanguage.toUpperCase()}
    </LanguageButton>
  );
};

export default LanguageToggle;
