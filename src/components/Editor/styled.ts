import { styled } from "styled-components";

import TextareaAutosize from "react-textarea-autosize";

export const Container = styled.form`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 20%;
  grid-template-rows: 4.5rem;
`;

export const Header = styled.header`
  grid-column: 1 / -1;
  padding-inline: 2rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--clr-700);
`;

export const EditorButtons = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: space-between;
`;

export const Aside = styled.aside`
  border-left: 1px solid var(--clr-700);
  padding-block: 1.2rem;
`;

export const Main = styled.main`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 2rem;
`;

export const EditorWrapper = styled.div`
  max-width: 41.875rem;
  margin-inline: auto;
  height: 100%;
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
