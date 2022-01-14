import React, { forwardRef, memo } from 'react';
import MenuGroup from './MenuGroup';
import type { IMenuOptionGroupProps, IMenuOptionContextProps } from './types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

export const MenuOptionContext = React.createContext<IMenuOptionContextProps>({
  values: [],
  onChange: (_val) => {},
  type: 'checkbox',
});

const MenuOptionGroup = (
  { type, defaultValue, value, onChange, ...props }: IMenuOptionGroupProps,
  ref?: any
) => {
  const internalDefaultValue = defaultValue
    ? Array.isArray(defaultValue)
      ? defaultValue
      : [defaultValue]
    : [];

  const [internalValues, setValues] = React.useState<Array<string | number>>(
    internalDefaultValue
  );
  const _onChange = (newValue: string | number) => {
    if (type === 'checkbox') {
      const newValues = [...internalValues];
      if (internalValues.includes(newValue)) {
        newValues.splice(newValues.indexOf(newValue), 1);
        setValues(newValues);
      } else {
        newValues.push(newValue);
        setValues(newValues);
      }
      onChange && onChange(newValues);
    } else if (type === 'radio') {
      setValues([newValue]);
      onChange && onChange(newValue);
    }
  };
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return (
    <MenuOptionContext.Provider
      value={{
        values: !value
          ? internalValues
          : Array.isArray(value)
          ? value
          : [value],
        onChange: _onChange,
        type,
      }}
    >
      <MenuGroup {...props} ref={ref} />
    </MenuOptionContext.Provider>
  );
};

export default memo(forwardRef(MenuOptionGroup));
