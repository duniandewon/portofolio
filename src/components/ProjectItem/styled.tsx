import { styled } from "styled-components";

import Moment from "react-moment";

export const Container = styled.div`
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  background-color: var(--clr-700);
  break-inside: avoid;
  margin-block-end: 1rem;

  * + h2 {
    margin-block-start: 1em;
  }

  p {
    margin-block-start: 0.3em;
  }
`;

export const Body = styled.div`
  padding: 1.2rem 2rem;
`;

export const Date = styled(Moment)`
  color: var(--clr-300);
`;

export const Title = styled.h2`
  font-size: 1.2rem;
`;

export const Thumbnail = styled.div`
  position: relative;
  height: 15rem;
`;
