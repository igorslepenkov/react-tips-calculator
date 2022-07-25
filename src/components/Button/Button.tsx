import { StyledButton } from "./styles";

interface IProps {
  isDisabled: boolean;
  text: string;
  onClickButton: Function;
}

export const Button = ({ isDisabled, text, onClickButton }: IProps) => {
  return (
    <StyledButton disabled={isDisabled} onClick={() => onClickButton()}>
      {text}
    </StyledButton>
  );
};
