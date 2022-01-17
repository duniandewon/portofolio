import styled from "styled-components";

interface Props {
  readonly right?: boolean;
}

const Page = styled.div<Props>`
  height: 100%;
  width: 50%;
  position: relative;
  padding-top: 5.5rem;
  padding-bottom: 5.5rem;
  overflow: auto;

  &::after {
    content: "";
    top: 0;
    right: ${props => props.right ? "auto" : 0};
    left: ${props => props.right ? 0 : "auto"};
    position: absolute;
    width: 8rem;
    height: 100%;
    box-shadow: ${props => props.right ? "inset 30px 0 40px -20px rgb(0 0 0 / 10%)" : "inset -1px 0 0 rgb(0 0 0 / 5%), inset -30px 0 40px -20px rgb(0 0 0 / 15%)"}
  }
`;

export default Page;
