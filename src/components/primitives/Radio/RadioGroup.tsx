import React from 'react';
import Box from '../Box';
import {
  FormControlContext,
  IFormControlContext,
} from '../../composites/FormControl';
import type { IRadioContext, IRadioGroupProps, IRadioValue } from './props';
import { useRadioGroup } from './useRadioGroup';

export const RadioContext = React.createContext<IRadioContext>({
  onChange: (_value: IRadioValue) => {},
  name: '',
});

const RadioGroup = ({ size, colorScheme, ...props }: IRadioGroupProps) => {
  const formControlContext: IFormControlContext = React.useContext(
    FormControlContext
  );
  const { radioGroupProps } = useRadioGroup(props, null);
  const { onChange, value, name, ...restRadioGroupProps } = radioGroupProps;

  return (
    <RadioContext.Provider
      value={{
        ...formControlContext,
        onChange,
        size,
        colorScheme,
        value,
        name,
      }}
    >
      <Box alignItems="flex-start" {...restRadioGroupProps} {...props}>
        {props.children}
      </Box>
    </RadioContext.Provider>
  );
};

export default RadioGroup;
