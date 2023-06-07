import { styled } from "styled-components";

export const Container = styled.div`
  display: grid;
  height: 100%;

  /* @media (min-width: 1248px) { */
  @media (min-width: 1024px) {
    grid-template-columns: 20rem 1fr;
  }
`;
