import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        height: 100vh;
        margin: 0;
        font-family: 'Noto Sans', sans-serif;
        background-color: rgba(46, 210, 201, 1);
    }

    #root {
        position: relative;
        height: 100%;
        width: 100%;
        margin: auto;
        max-width: 1512px;
    }
`;
