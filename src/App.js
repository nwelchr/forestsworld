import styled from "styled-components";
import ThemeProvider from "./ThemeProvider";
import GlobalStyles from "./GlobalStyles";
import { Logo, LanguageToggle } from "./components";
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
      </ThemeProvider>
    </AppWrapper>
  );
}

export default App;
