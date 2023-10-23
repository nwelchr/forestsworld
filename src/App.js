import styled from "styled-components";
import ThemeProvider from "./ThemeProvider";
import GlobalStyles from "./GlobalStyles";
import { Logo, Section } from "./components";
import { Navbar } from "./components/navigation";
import { useTranslation } from "react-i18next";
import useTheme from "./useTheme";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

function App() {
  const [theme, toggleTheme] = useTheme();
  const { t } = useTranslation();
  return (
    <AppWrapper>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Logo />
        {t("Welcome to React")}
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Section id="about" title="About" />
        <Section id="pastwork" title="Past Work" />
        <Section id="projects" title="Projects" />
        <Section id="contact" title="Contact" />
      </ThemeProvider>
    </AppWrapper>
  );
}

export default App;
