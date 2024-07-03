import React from "react";
import { Section } from "../common";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <Section id="contact">
      <h2>{t("Contact")}</h2>
      <p>JWEOFP</p>
    </Section>
  );
};

export default Contact;
