import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  font-size: 0.688rem;
  align-items: center;
  gap: 0.5rem;

  @media (min-width: 1024px) {
    flex-direction: column;
    text-align: center;
    font-size: 1.2em;
  }
`;

export const Info = styled.div``;

export const Name = styled.h3``;

export const Role = styled.p`
  color: var(--clr-200);
`;
