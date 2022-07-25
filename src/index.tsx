import React from "react";
import ReactDOM from "react-dom/client";
import StyledApp from "./App";
import { GlobalStyle } from "./GlobalStyles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <StyledApp />
  </React.StrictMode>
);
