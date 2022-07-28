import { StyledForm, Total, FormTitle, FormSubtitle } from "./styles";
import { Input } from "../Input";
import { CustomSelect } from "../CustomSelect";
import { ISelectOption } from "../../types";
import { Button } from "../Button";
import { SingleValue } from "react-select";
import { FormEvent, useEffect, useState } from "react";
import { useInput } from "../../hooks/useInput";

export const Form = () => {
  const options: ISelectOption[] = [
    { value: "10", label: "10%" },
    { value: "15", label: "15%" },
    { value: "20", label: "20%" },
  ];

  const [selectOptions] = useState<ISelectOption[]>(options);
  const [selectValue, setSelectValue] = useState<ISelectOption>(
    selectOptions[0]
  );
  const bill = useInput();
  const persons = useInput();

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [total, setTotal] = useState<string>("0.00");

  const handleSelectState = (value: SingleValue<ISelectOption>): void => {
    if (value) {
      setSelectValue(value);
    }
  };

  const calculateTips = () => {
    const billValue = Number(bill.value);
    const personsValue = Number(persons.value);
    const tipsPercent = Number(selectValue.value);
    const total = ((billValue * tipsPercent) / 100) * personsValue + billValue;
    return (Math.round(total * 1000) / 1000).toFixed(2);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setTotal(calculateTips());
  };

  useEffect(() => {
    if (bill.value && persons.value) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [bill, persons]);

  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormTitle>Welcome to App</FormTitle>
      <FormSubtitle>Let’s go calculate your tips</FormSubtitle>
      <Input type={"number"} placeholder={"Enter bill"} {...bill} />
      <Input type={"number"} placeholder={"Enter persons"} {...persons} />
      <CustomSelect
        selectOptions={selectOptions}
        selectedValue={selectValue}
        setSelectValue={handleSelectState}
      />
      <Total>Total: {total}$</Total>
      <Button isDisabled={isButtonDisabled} text="Ohhhoooo🍻" type="submit" />
    </StyledForm>
  );
};
