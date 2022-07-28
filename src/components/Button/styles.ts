import styled from "styled-components";

export const StyledButton = styled.button<{ $isDisabled: boolean }>`
  height: 68px;
  background-color: rgba(46, 210, 201, 1);
  border: none;
  color: rgba(255, 255, 255, 1);
  opacity: ${(props) => (props.$isDisabled ? 0.5 : 1)};
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: rgba(46, 183, 210, 1);
  }

  &:active {
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
  }
`;
