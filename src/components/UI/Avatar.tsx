"use client";

import { styled } from "styled-components";

interface IAvatarProps {
  src: string;
  alt: string;
}

const Container = styled.div`
  background-color: var(--clr-300);
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 50%;
  grid-row: span 2;
  overflow: hidden;
  margin-inline: auto;

  @media (min-width: 1024px) {
    width: 10rem;
    height: 10rem;
  }
`;

const Picture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Avatar = ({ src, alt }: IAvatarProps) => (
  <Container>
    <Picture src={src} alt={alt} />
  </Container>
);

export default Avatar;
