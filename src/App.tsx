import { useEffect, useState } from "react";
import { StyledApp, AppTitle, AppSubtitle } from "./styles";
import { Form } from "./components/Form/";
import { SelectOption } from "./types";

function App() {
  const options: SelectOption[] = [
    { value: "10", label: "10%" },
    { value: "15", label: "15%" },
    { value: "20", label: "20%" },
  ];

  const [selectOptions] = useState<SelectOption[]>(options);
  const [selectedValue, setSelectedValue] = useState<SelectOption>(
    selectOptions[0]
  );
  const [billInputValue, setBillInputValue] = useState<number | string>("");
  const [personsInputValue, setPersonsInputValue] = useState<number | string>(
    ""
  );
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [total, setTotal] = useState<string>("0.00");
  const handleSelectState = (value: SelectOption): void => {
    setSelectedValue(value);
  };
  const handleBillInputValue = (value: number) => {
    setBillInputValue(value);
  };
  const handlePersonsInputValue = (value: number) => {
    setPersonsInputValue(value);
  };

  useEffect(() => {
    if (selectedValue && billInputValue && personsInputValue) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [selectedValue, billInputValue, personsInputValue]);

  const calculateTips = () => {
    const bill = Number(billInputValue);
    const persons = Number(personsInputValue);
    const tipsPercent = Number(selectedValue.value);
    const total = ((bill * tipsPercent) / 100) * persons + bill;
    return (Math.round(total * 1000) / 1000).toFixed(2);
  };

  const handleButtonClick = () => {
    setTotal(calculateTips());
  };

  return (
    <StyledApp>
      <AppTitle>Welcome to App</AppTitle>
      <AppSubtitle>Let’s go calculate your tips</AppSubtitle>
      <Form
        selectOptions={selectOptions}
        selectedValue={selectedValue}
        setSelectState={handleSelectState}
        billInputValue={billInputValue}
        setBillinputValue={handleBillInputValue}
        personsInputValue={personsInputValue}
        setPersonsInputValue={handlePersonsInputValue}
        isButtonDisabled={isButtonDisabled}
        onClickButton={handleButtonClick}
        total={total}
      />
    </StyledApp>
  );
}

export default App;
