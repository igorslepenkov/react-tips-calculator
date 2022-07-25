import { StyledInput } from "./styles";

interface IProps {
  type: "text" | "number";
  placeholder: string;
  value: number | string;
  valueSetter: Function;
}

export const Input = ({ type, placeholder, value, valueSetter }: IProps) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={({ target }) => valueSetter(target.value)}
    />
  );
};
