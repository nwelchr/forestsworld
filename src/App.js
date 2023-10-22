import styled from "styled-components";
import { Logo } from "./components";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <AppWrapper>
      <Logo />
    </AppWrapper>
  );
}

export default App;
