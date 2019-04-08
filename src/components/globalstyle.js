import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  html,
  body,
  #___gatsby,
  div[role="group"][tabindex] {
    height: 100%;
    background-color: #f4f4f4
  }
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`
