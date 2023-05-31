import Link from "next/link";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

  & + & {
    margin-top: 1.2rem;
  }
`;

export const Post = styled.div``;

export const PostTitle = styled(Link)``;

export const PostDate = styled.p``;
