import { styled } from "styled-components";

const Sidebar = styled.ul`
  list-style: none;
  padding: 0;
`;

const Item = styled.li`
  padding-inline: 2rem;
`;

const Title = styled.h3`
  color: var(--clr-200);
`;

const Content = styled.div``;

const exports = { Sidebar, Item, Title, Content };

export default exports;
