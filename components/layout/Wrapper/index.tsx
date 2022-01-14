import React from "react";
import { Book, Container } from "./styles";

interface Props {
  children: React.ReactNode;
}

const Wrapper = ({ children }: Props) => {
  return (
    <Container>
      <Book>{children}</Book>
    </Container>
  );
};

export default Wrapper;
