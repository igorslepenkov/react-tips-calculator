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

    #root::before {
        content: '';
        position: absolute;
        left: -90px;
        top: -55px;
        display: block;
        width: 250px;
        height: 250px;
        border-radius: 50%;
        background-color: rgba(133, 211, 202, 0.31);
    }
    
    #root::after {
        content: '';
        position: absolute;
        top: -100px;
        display: block;
        width: 250px;
        height: 250px;
        border-radius: 50%;
        background-color: rgba(133, 211, 202, 0.31);
    }
`;
