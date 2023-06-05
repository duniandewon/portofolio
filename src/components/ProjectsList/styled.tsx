import { styled } from "styled-components";

export const Container = styled.main`
  height: calc(100% - 5.78rem);
  width: 100%;
  overflow-y: auto;
  padding: 2rem 1.2rem;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-auto-rows: minmax(34rem, auto);
  align-items: start;

  gap: 2rem;

  @media (min-width: 1024px) {
    height: 100%;
  }
`;

