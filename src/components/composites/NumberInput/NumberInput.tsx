import React from 'react';
import { useThemeProps } from '../../../hooks';
import { useFormControlContext } from '../FormControl';
import type { INumberInputProps } from './types';
import { NumberInputContext } from './Context';
import Box from '../../primitives/Box';

const NumberInput = ({ children, ...props }: INumberInputProps, ref?: any) => {
  const {
    defaultValue,
    keepWithinRange,
    value,
    min,
    max,
    onChange,
    ...newProps
  } = useThemeProps('NumberInput', props);
  const formControlContext = useFormControlContext();

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

  React.useEffect(() => {
    if (value !== undefined && value != numberInputValue)
      setNumberInputValue(value);
  }, [value, numberInputValue, setNumberInputValue]);
  return (
    <Box ref={ref}>
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
          isControlled: value !== undefined,
        }}
      >
        {children}
      </NumberInputContext.Provider>
    </Box>
  );
};

export default React.memo(React.forwardRef(NumberInput));
