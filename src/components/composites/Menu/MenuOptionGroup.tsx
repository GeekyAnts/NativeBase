import React from 'react';
import { MenuGroup } from './MenuGroup';
import type { IMenuOptionGroupProps, IMenuOptionContextProps } from './props';

export const MenuOptionContext = React.createContext<IMenuOptionContextProps>({
  values: [],
  onChange: (_val) => {},
  type: 'checkbox',
});

export const MenuOptionGroup = ({
  type,
  defaultValue,
  value,
  onChange,
  ...props
}: IMenuOptionGroupProps) => {
  let internalDefaultValue = defaultValue
    ? Array.isArray(defaultValue)
      ? defaultValue
      : [defaultValue]
    : [];

  let [internalValues, setValues] = React.useState<Array<string | number>>(
    internalDefaultValue
  );
  onChange = (newValue: string | number) => {
    if (type === 'checkbox') {
      let newValues = [...internalValues];
      if (internalValues.includes(newValue)) {
        newValues.splice(newValues.indexOf(newValue), 1);
        setValues(newValues);
      } else {
        newValues.push(newValue);
        setValues(newValues);
      }
    } else if (type === 'radio') {
      setValues([newValue]);
    }
  };
  return (
    <MenuOptionContext.Provider
      value={{
        values: !value
          ? internalValues
          : Array.isArray(value)
          ? value
          : [value],
        onChange,
        type,
      }}
    >
      <MenuGroup {...props} />
    </MenuOptionContext.Provider>
  );
};
