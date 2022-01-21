import Aside from "../Aside";
import Navigation from "../Navigation";

import { Container, Main } from "./styles";

interface Props {
  children: React.ReactNode;
}

const Wrapper = ({ children }: Props) => {
  return (
    <Container>
      <Aside />
      <Main>
        <Navigation />
        {children}
      </Main>
    </Container>
  );
};

export default Wrapper;
