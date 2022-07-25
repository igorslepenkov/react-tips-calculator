import styled from "styled-components";

export const StyledButton = styled.button.attrs((props) => ({
  type: "button",
  disabled: props.disabled,
}))`
  background-color: rgba(46, 210, 201, 1);
  border: none;
  color: rgba(255, 255, 255, 1);
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;
