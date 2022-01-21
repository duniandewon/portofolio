import styled from "styled-components";

interface LinkProps {
  readonly active: boolean;
}

const NavItem = styled.a<LinkProps>`
  text-transform: capitalize;
  display: inline-block;
  color: ${(props) => (props.active ? "#315584" : "#333")};

  &::after {
    content: "";
    display: block;
    width: ${(props) => (props.active ? "100%" : "0")};
    height: 2px;
    background: #315584;
    transition: width 0.3s;
    margin-top: 2px;
  }

  &:hover::after {
    width: 100%;
  }
`;

export default NavItem;
