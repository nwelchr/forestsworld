import styled from "styled-components";
import ThemeProvider from "./ThemeProvider";
import GlobalStyles from "./GlobalStyles";
import { Logo } from "./components";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <AppWrapper>
      <ThemeProvider>
        <GlobalStyles />
        <Logo />
        What is goin on my children!!!!
      </ThemeProvider>
    </AppWrapper>
  );
}

export default App;
