import { styled } from "styled-components";

import TextareaAutosize from "react-textarea-autosize";

export const Container = styled.form``;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const Main = styled.main`
  width: min(60rem, 100%);
  margin-inline: auto;
`;

export const Textarea = styled(TextareaAutosize)`
  width: 100%;
`;
