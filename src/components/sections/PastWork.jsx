import React from "react";
import { Section } from "../common";
import { useTranslation } from "react-i18next";

const PastWork = () => {
  const { t } = useTranslation();
  return (
    <Section id="pastwork">
      <h2>{t("Past Work")}</h2>
      <p>JWOEPFJ</p>
    </Section>
  );
};

export default PastWork;
