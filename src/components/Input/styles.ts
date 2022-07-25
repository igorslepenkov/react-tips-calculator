import styled from "styled-components";

interface IProps {
  type: "text" | "number";
  placeholder: string;
}

export const StyledInput = styled.input.attrs<IProps>((props) => ({
  type: props.type,
  placeholder: props.placeholder,
}))`
  font-size: 18px;
  font-family: "Noto Sans", sans-serif;
  text-align: center;
  border: none;
  border-radius: 30px;
`;
