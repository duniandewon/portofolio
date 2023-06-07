import { styled } from "styled-components";

export const Container = styled.nav`
  background-color: var(--clr-900);
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.2rem;
  box-shadow: inset 0 -1px 0 0 rgba(255, 255, 255, 20%);

  @media (min-width: 1024px) {
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    border-right: 1px solid var(--clr-700);
    box-shadow: none;
  }
`;

export const Socials = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  max-width: 7rem;
`;
