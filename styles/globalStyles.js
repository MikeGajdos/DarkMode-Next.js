import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*:after,
*:before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
html {
  box-sizing: border-box;
}
body,
body[data-theme="light"] {
  --color-text-primary: #27201a;
  --color-text-secondary: #076963;
  --color-bg-primary: #fff;
  --color-bg-toggle: #1e90ff;
}

body[data-theme="dark"] {
  --color-text-primary: #e3e3e3;
  --color-text-secondary: #ff6b00;
  --color-bg-primary: #15232d;
  --color-bg-toggle:#f1ecec;
}

body {
  background: var(--color-bg-primary);
  color: var(--color-text-primary);
  font-family: sans-serif;
  transition: background 0.25s ease-in-out;
  line-height: 1.5;
}

h1 {
  color: var(--color-text-secondary);
}

`;

export default GlobalStyle;
