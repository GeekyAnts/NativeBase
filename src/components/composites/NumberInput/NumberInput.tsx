import React from 'react';
import { useThemeProps } from '../../../hooks';
import { FormControlContext, IFormControlContext } from '../FormControl';
import type { INumberInputProps } from './types';
import { NumberInputContext } from './Context';

const NumberInput = ({ children, ...props }: INumberInputProps) => {
  const {
    defaultValue,
    keepWithinRange,
    value,
    min,
    max,
    onChange,
    ...newProps
  } = useThemeProps('NumberInput', props);
  const formControlContext: IFormControlContext = React.useContext(
    FormControlContext
  );
  const [numberInputValue, setNumberInputValue] = React.useState(
    parseInt(value || defaultValue, 10)
  );
  const [numberInputStepper, setNumberInputStepper] = React.useState(null);
  const handleChange = (newValue: number) => {
    const temp = newValue;
    setNumberInputValue(temp);
    if (keepWithinRange) {
      if (newValue < min) setNumberInputValue(min);
      else if (newValue > max) setNumberInputValue(max);
    }
    //NOTE: only calling onChange on stepper click or blur event of input.
    onChange && onChange(temp);
  };
  const handleChangeWithoutCheck = (newValue: number) => {
    const temp = newValue;
    setNumberInputValue(temp);
  };
  return (
    <NumberInputContext.Provider
      value={{
        ...formControlContext,
        ...newProps,
        min,
        max,
        handleChange,
        handleChangeWithoutCheck,
        numberInputValue,
        numberInputStepper,
        setNumberInputStepper,
      }}
    >
      {children}
    </NumberInputContext.Provider>
  );
};

export default React.memo(NumberInput);
