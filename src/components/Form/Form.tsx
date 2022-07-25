import { StyledForm, Total } from "./styles";
import { Input } from "../Input";
import { CustomSelect } from "../CustomSelect";
import { SelectOption } from "../../types";
import { Button } from "../Button";

interface IProps {
  selectOptions: SelectOption[];
  selectedValue: SelectOption;
  setSelectState: Function;
  billInputValue: number;
  setBillinputValue: Function;
  personsInputValue: number;
  setPersonsInputValue: Function;
  isButtonDisabled: boolean;
}

export const Form = ({
  selectOptions,
  selectedValue,
  setSelectState,
  billInputValue,
  setBillinputValue,
  personsInputValue,
  setPersonsInputValue,
  isButtonDisabled,
}: IProps) => {
  return (
    <StyledForm>
      <Input
        type={"number"}
        placeholder={"Enter bill"}
        value={billInputValue}
        valueSetter={setBillinputValue}
      />
      <Input
        type={"number"}
        placeholder={"Enter persons"}
        value={personsInputValue}
        valueSetter={setPersonsInputValue}
      />
      <CustomSelect
        selectOptions={selectOptions}
        selectedValue={selectedValue}
        setSelectState={setSelectState}
      />
      <Total>Total: </Total>
      <Button isDisabled={isButtonDisabled} />
    </StyledForm>
  );
};
