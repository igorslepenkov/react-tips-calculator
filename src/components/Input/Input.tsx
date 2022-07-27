import { ChangeEventHandler } from "react";
import { StyledInput } from "./styles";

interface IProps {
  type: "text" | "number";
  placeholder: string;
  value: number | string;
  valueSetter: ChangeEventHandler<HTMLInputElement>;
}

export const Input = ({ type, placeholder, value, valueSetter }: IProps) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={valueSetter}
    />
  );
};
