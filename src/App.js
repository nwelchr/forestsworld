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
      <Section id="about" title="About" />
      <Section id="pastwork" title="Past Work" />
      <Section id="projects" title="Projects" />
      <Section id="contact" title="Contact" />
    </ThemeProvider>
  );
}

export default App;
