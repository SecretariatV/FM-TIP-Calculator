import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
}

body {
    background-color: #C5E4E7;
    font-family: "Space Mono", monospace;
}

#root {
    min-height: 100vh;
    display: grid;
    place-items: center;
}
`;

export default GlobalStyles;
