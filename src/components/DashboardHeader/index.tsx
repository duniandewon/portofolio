"use client";

import { ReactNode } from "react";

import { Container, Heading, Text } from "./styled";

interface Props {
  heading: string;
  text?: string;
  children?: ReactNode;
}

const DashboardHeader = ({ heading, text, children }: Props) => {
  return (
    <Container>
      <div>
        <Heading>{heading}</Heading>
        {text ?? <Text>{text}</Text>}
      </div>
      {children}
    </Container>
  );
};

export default DashboardHeader;
