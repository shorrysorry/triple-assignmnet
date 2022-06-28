import { createGlobalStyle } from "styled-components";
import styledReset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${styledReset}

  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
  }

`;

export default GlobalStyle;
