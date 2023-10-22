import styled from "styled-components";
import { Logo } from "./components";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom, #0b5f62, #2d1c76);
`;

function App() {
  return (
    <AppWrapper>
      <Logo />
    </AppWrapper>
  );
}

export default App;
