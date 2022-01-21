import Aside from "../Aside";

import { Container, Main } from "./styles";

interface Props {
  children: React.ReactNode;
}

const Wrapper = ({ children }: Props) => {
  return (
    <Container>
      <Aside />
      <Main>{children}</Main>
    </Container>
  );
};

export default Wrapper;
