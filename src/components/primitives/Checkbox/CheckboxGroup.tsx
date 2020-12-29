import React from 'react';
import {
  FormControlContext,
  IFormControlContext,
} from '../../composites/FormControl';
import Box from '../Box';
import type { ICheckboxGroupProps } from './props';
import { useCheckboxGroup } from './useCheckboxGroup';

export const CheckboxContext = React.createContext({});

const CheckboxGroup = ({
  size,
  children,
  colorScheme,
  ...props
}: ICheckboxGroupProps) => {
  const formControlContext: IFormControlContext = React.useContext(
    FormControlContext
  );

  const { checkboxGroupProps } = useCheckboxGroup(props, null, null);
  const { onChange, values, ...restCheckboxGroupProps } = checkboxGroupProps;

  return (
    <CheckboxContext.Provider
      value={{
        ...formControlContext,
        size,
        colorScheme,
        onChange,
        value: values,
      }}
    >
      <Box alignItems="flex-start" {...restCheckboxGroupProps} {...props}>
        {children}
      </Box>
    </CheckboxContext.Provider>
  );
};

export default CheckboxGroup;
