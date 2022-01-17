import styled from "styled-components";

const NavLink = styled.a`
  display: block;
  color: #04293a;
  font-size: 1.4rem;
  padding: 2rem 1.5rem;
  gap: 1rem;

  &:hover {
    text-decoration: none;
    color: #04293a;
  }

  & + & {
    border-top: 1px solid rgba(0, 0, 0, 0.2);
  }
`;

export default NavLink;
