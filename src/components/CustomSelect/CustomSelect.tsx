import Select, { CSSObjectWithLabel, SingleValue } from "react-select";
import { ISelectOption } from "../../types";
import { StylesConfig } from "react-select";

interface IProps {
  selectOptions: ISelectOption[];
  selectedValue: ISelectOption;
  setSelectValue: (value: SingleValue<ISelectOption>) => void;
}

export const CustomSelect = ({
  selectOptions,
  selectedValue,
  setSelectValue,
}: IProps) => {
  const customStyles: StylesConfig<ISelectOption> = {
    control: (provided: CSSObjectWithLabel) => ({
      ...provided,
      height: 68,
      fontSize: 18,
      textAlign: "center",
      borderRadius: 30,
      paddingLeft: 50,
    }),

    indicatorsContainer: (provided) => ({
      ...provided,

      svg: {
        height: 50,
        width: 50,
      },
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
      onChange={setSelectValue}
      styles={customStyles}
      isMulti={false}
    />
  );
};
