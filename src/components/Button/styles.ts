import styled from "styled-components";

export const StyledButton = styled.button<{ $isDisabled: boolean }>`
  height: 68px;
  background-color: rgba(46, 210, 201, 1);
  border: none;
  color: rgba(255, 255, 255, 1);
  opacity: ${(props) => (props.$isDisabled ? 0.5 : 1)};
  font-size: 18px;
`;
