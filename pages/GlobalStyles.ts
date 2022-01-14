import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body {
  width: 100%;
  height: 100vh;
  background: #064663;
  font-family: 'Quicksand', sans-serif;
  font-size: 1.6rem;
  line-height: 1.7;
  text-align: justify;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: #000;
  font-family: 'Quicksand', sans-serif;
  font-weight: 400;
}

a {
  color: #fff;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #777;
    text-decoration: underline;
  }
}

ul,
ol {
  padding: 0;
  margin: 0;
  list-style: none;
}

button,
input,
optgroup,
select,
textarea {
  font-family: 'Quicksand', sans-serif;
}
`;

export default GlobalStyle;
