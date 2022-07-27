import { StyledButton } from "./styles";

interface IProps {
  isDisabled: boolean;
  text: string;
  type: "button" | "submit" | "reset";
}

export const Button = ({ isDisabled, text, type }: IProps) => {
  return (
    <StyledButton disabled={isDisabled} $isDisabled={isDisabled} type={type}>
      {text}
    </StyledButton>
  );
};
