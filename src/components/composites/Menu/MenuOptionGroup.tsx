import React, { forwardRef, memo } from 'react';
import MenuGroup from './MenuGroup';
import type { IMenuOptionGroupProps, IMenuOptionContextProps } from './types';

export const MenuOptionContext = React.createContext<IMenuOptionContextProps>({
  values: [],
  onChange: (_val) => {},
  type: 'checkbox',
});

const MenuOptionGroup = (
  { type, defaultValue, value, onChange, ...props }: IMenuOptionGroupProps,
  ref?: any
) => {
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
      <MenuGroup {...props} ref={ref} />
    </MenuOptionContext.Provider>
  );
};

export default memo(forwardRef(MenuOptionGroup));
