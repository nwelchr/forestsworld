import styled from "styled-components";
import ThemeProvider from "./ThemeProvider";
import GlobalStyles from "./GlobalStyles";
import { Logo, LanguageToggle, Navbar, Section } from "./components";
import { useTranslation } from "react-i18next";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

function App() {
  const { t } = useTranslation();
  return (
    <AppWrapper>
      <ThemeProvider>
        <GlobalStyles />
        <Logo />
        <LanguageToggle />
        {t("Welcome to React")}
        <Navbar />
        <Section id="about" title="About" />
        <Section id="pastwork" title="Past Work" />
        <Section id="projects" title="Projects" />
        <Section id="contact" title="Contact" />
      </ThemeProvider>
    </AppWrapper>
  );
}

export default App;
