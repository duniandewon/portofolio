"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle<{ $whiteColor?: boolean }>`
/*
  0. Set up custom properties.
*/
:root {
  --clr-900: #000;
  --clr-700: #333;
  --clr-300: #888;
  --clr-200: #eaeaea;
  --clr-100: #fff;

  --br-900: 50%;
  --br-400: 10px;
  --br-200: 5px;

  --fw-reqular: 400;
  --fw-bold: 500;
  --fw-xbold: 700;
}
/*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}
/*
  2. Remove default margin
*/
* {
  margin: 0;
}
/*
  3. Allow percentage-based heights in the application
*/
html, body {
  height: 100%;
}
/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
/*
  6. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
/*
  7. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
/*
  8. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

/*
  9. Custom styles
*/
body {
  position: relative;
  background-color: var(--clr-900);
  color: var(--clr-100);
  font-size: 0.875rem;
}

a {
  color: #e5e5e5;
}

a:visited {
  color: #afafaf;
}
`;

export default GlobalStyle;
