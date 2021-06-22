import React from 'react';
import { Input } from '../../primitives/Input';
import type { INumberInputContext, INumberInputFieldProps } from './types';
import { NumberInputContext } from './Context';

const NumberInputFiled = (
  { isDisabled, ...props }: INumberInputFieldProps,
  ref: any
) => {
  const {
    handleChange,
    handleChangeWithoutCheck,
    numberInputStepper,
    numberInputValue,
    isControlled,
    ...context
  }: INumberInputContext & {
    handleChange?: (value: string | number) => void;
    numberInputStepper?: any;
  } = React.useContext(NumberInputContext);
  const changeHandler = (inputValue: any) => {
    let minusIndex = inputValue.indexOf('-');
    if (minusIndex !== -1 && minusIndex !== 0) {
      inputValue = inputValue.replace('-', '');
      inputValue = '-' + inputValue;
    }
    const value = parseInt(inputValue, 10);
    if (isControlled) handleChange && handleChange(value);
    else if (value) handleChangeWithoutCheck && handleChangeWithoutCheck(value);
    else handleChangeWithoutCheck && handleChangeWithoutCheck(0);
  };
  const blurHandler = () => {
    if (numberInputValue) handleChange && handleChange(numberInputValue);
  };
  return (
    <Input
      p={0}
      pl={2}
      {...context}
      {...props}
      onBlur={() => blurHandler()}
      isDisabled={isDisabled || context.isDisabled}
      onChangeText={(inputValue) => changeHandler(inputValue)}
      keyboardType="numeric"
      value={`${numberInputValue}`}
      InputRightElement={numberInputStepper}
      ref={ref}
    />
  );
};

export default React.memo(React.forwardRef(NumberInputFiled));
