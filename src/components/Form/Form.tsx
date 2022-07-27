import { StyledForm, Total, FormTitle, FormSubtitle } from "./styles";
import { Input } from "../Input";
import { CustomSelect } from "../CustomSelect";
import { ISelectOption } from "../../types";
import { Button } from "../Button";
import { SingleValue } from "react-select";
import { ChangeEventHandler, FormEvent, useEffect, useState } from "react";

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
  const [billInputValue, setBillInputValue] = useState<string>("");
  const [personsInputValue, setPersonsInputValue] = useState<string>("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [total, setTotal] = useState<string>("0.00");
  const handleSelectState = (value: SingleValue<ISelectOption>): void => {
    if (value) {
      setSelectValue(value);
    }
  };

  const handleBillInputValue: ChangeEventHandler<HTMLInputElement> = (
    event
  ): void => {
    if (event) {
      setBillInputValue(event.target.value);
    }
  };
  const handlePersonsInputValue: ChangeEventHandler<HTMLInputElement> = (
    event
  ): void => {
    if (event) {
      setPersonsInputValue(event.target.value);
    }
  };

  const calculateTips = () => {
    const bill = Number(billInputValue);
    const persons = Number(personsInputValue);
    const tipsPercent = Number(selectValue.value);
    const total = ((bill * tipsPercent) / 100) * persons + bill;
    return (Math.round(total * 1000) / 1000).toFixed(2);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setTotal(calculateTips());
  };

  useEffect(() => {
    if (billInputValue && personsInputValue) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [billInputValue, personsInputValue]);

  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormTitle>Welcome to App</FormTitle>
      <FormSubtitle>Let’s go calculate your tips</FormSubtitle>
      <Input
        type={"number"}
        placeholder={"Enter bill"}
        value={billInputValue}
        valueSetter={handleBillInputValue}
      />
      <Input
        type={"number"}
        placeholder={"Enter persons"}
        value={personsInputValue}
        valueSetter={handlePersonsInputValue}
      />
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
