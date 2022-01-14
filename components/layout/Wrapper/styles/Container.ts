import styled from "styled-components";

const Container = styled.div`
  width: 75vw;
  height: 85vh;
  margin: 0 auto;
  box-shadow: -1em 2em 4em rgb(0 0 0 / 30%), 1em -1em 3em rgb(255 255 255 / 20%);
  border-width: 0 10px;
  border-style: solid;
  border-color: #041c32;
  position: relative;

  &::before, &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 10px;
    height: 100%;
    background-image: linear-gradient(
      to right,
      #dddddd 33.33%,
      #f0f0f0 33.33%,
      #f0f0f0 66.66%,
      white 66.66%
    );
    background-size: 3px 100%;
    backface-visibility: hidden;
  }

  &::after {
    right: 0;
  }
`;

export default Container;
