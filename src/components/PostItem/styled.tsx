import Link from "next/link";

import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 1.5rem;
  border: 1px solid var(--clr-700);
  border-radius: var(--br-400);

  & + & {
    margin-top: 1.2rem;
  }
`;

export const Post = styled.div``;

export const PostTitle = styled(Link)`
  color: var(--clr-100);
  text-decoration: none;
  font-weight: var(--fw-bold);
  font-size: 1.2rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const PostDate = styled.p`
color: var(--clr-300)
`;
