import { Logo } from "./components";
import { About, Contact, PastWork, Projects } from "./components/sections";
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
      <About />
      <PastWork />
      <Projects />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
