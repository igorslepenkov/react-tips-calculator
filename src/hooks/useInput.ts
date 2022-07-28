import { ChangeEventHandler, useState } from "react";

export const useInput = (initialValue: string = "") => {
  const [value, setValue] = useState<string>(initialValue);

  const onChange: ChangeEventHandler<HTMLInputElement> = (event): void => {
    if (event) {
      setValue(event.target.value);
    }
  };

  return {
    value,
    onChange,
  };
};
