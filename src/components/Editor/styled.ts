import { styled } from "styled-components";

import TextareaAutosize from "react-textarea-autosize";

export const Container = styled.div`
  padding: 0 2rem;
  display: grid;
  gap: 2rem;
  max-width: 1400px;
  margin-inline: auto;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding-block: 2rem;
`;

export const Main = styled.main`
  margin-inline: auto;
  max-width: 800px;
`;

export const Textarea = styled(TextareaAutosize)`
  width: 100%;
  resize: none;
  appearance: none;
  overflow: hidden;
  background-color: transparent;
  font-size: 3rem;
  font-weight: var(--fw-xbold);
  color: var(--clr-100);
  outline: none;
  border: 0;
`;
