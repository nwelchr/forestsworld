import { Logo, Section } from "./components";
import { Navbar } from "./components/navigation";
import { useTranslation } from "react-i18next";
import { useTheme, GlobalStyles, ThemeProvider } from "./theme";

function App() {
  const [theme, toggleTheme] = useTheme();
  const { t } = useTranslation();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {/* <Logo /> */}
      {/* {t("Welcome to React")} */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Section id="about" title={t("About")} />
      <Section id="pastwork" title={t("Past Work")} />
      <Section id="projects" title={t("Projects")} />
      <Section id="contact" title={t("Contact")} />
    </ThemeProvider>
  );
}

export default App;
