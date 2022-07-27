import styled from "styled-components";
import circles from "./assets/circles.svg";

export const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
  background: no-repeat url(${circles}) rgba(234, 242, 242, 1);
`;
