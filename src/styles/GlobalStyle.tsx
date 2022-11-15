import { createGlobalStyle } from "styled-components";
import mainStyleColors from "./mainStyleColors";
import mainStyleFonts from "./mainStyleFonts";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}
body,
html {
  margin: 0;
  width: 100%;
  min-height: 100vh;
  font-family: ${mainStyleFonts.mainFont};
  background-color: ${mainStyleColors.secondaryGreen};
}
body {
 
}
input,
button,
textarea,
select {
  font: inherit;
}
button,
a {
  cursor: pointer;
}
a {
  text-decoration: none;
  color: inherit;
}
ul {
  list-style: none;
  list-style-position: outside;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
}
li {
  list-style-type: none;
}
legend {
  display: table;
  padding: 0;
}
fieldset {
  border: 0;
  margin: 0;
  min-width: 0;
  padding: 0.01em 0 0 0;
}
body:not(:-moz-handler-blocked) fieldset {
  display: table-cell;
}
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  font-family: ${mainStyleFonts.mainFont};
  color: ${mainStyleColors.mainWhite};
  overflow-wrap: break-word;
}
img {
  display: block;
  max-width: 100%;
}
`;

export default GlobalStyle;
