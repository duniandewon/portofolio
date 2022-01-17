import React from "react";
import Navbar from "../../elements/Navbar";
import { Book, Container } from "./styles";

interface Props {
  children: React.ReactNode;
}

const Wrapper = ({ children }: Props) => {
  return (
    <Container>
      <Navbar />
      <Book>{children}</Book>
    </Container>
  );
};

export default Wrapper;
