import Select, { CSSObjectWithLabel } from "react-select";
import { SelectOption } from "../../types";
import { StylesConfig } from "react-select";

interface IProps {
  selectOptions: SelectOption[];
  selectedValue: SelectOption;
  setSelectState: Function;
}

export const CustomSelect = ({
  selectOptions,
  selectedValue,
  setSelectState,
}: IProps) => {
  const customStyles: StylesConfig = {
    control: (provided: CSSObjectWithLabel) => ({
      ...provided,
      height: 68,
      fontSize: 18,
      textAlign: "center",
      borderRadius: 30,
    }),
  };

  return (
    <Select
      options={selectOptions}
      classNamePrefix="react-select-container"
      components={{
        IndicatorSeparator: () => null,
      }}
      value={selectedValue}
      onChange={(newValue) => setSelectState(newValue)}
      styles={customStyles}
    />
  );
};
