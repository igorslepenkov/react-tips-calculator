import { useEffect, useState } from "react";
import { StyledApp } from "./styles";
import { Form } from "./components/Form/";
import { ISelectOption } from "./types";
import { SingleValue } from "react-select";

function App() {
  return (
    <StyledApp>
      <Form />
    </StyledApp>
  );
}

export default App;
