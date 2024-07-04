import { About, Projects, Footer } from "./components/sections";
import { Navbar } from "./components/navigation";
import { useTheme, GlobalStyles, ThemeProvider } from "./theme";

function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <About />
      <Projects />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
