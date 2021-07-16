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
    numberInputValue = '',
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
    let value = null;
    if (Math.floor(inputValue)) {
      if (inputValue === 0) {
        console.log('hee');
      }
      value = inputValue;
    } else {
      value = inputValue.substring(0, inputValue.length - 1);
    }
    if (isControlled) handleChange && handleChange(value);
    else if (value) handleChangeWithoutCheck && handleChangeWithoutCheck(value);
    else handleChangeWithoutCheck && handleChangeWithoutCheck('');
  };

  const blurHandler = () => {
    if (numberInputValue) handleChange && handleChange(numberInputValue);
  };

  return (
    <Input
      {...context}
      {...props}
      onBlur={() => blurHandler()}
      isDisabled={isDisabled || context.isDisabled}
      onChangeText={(inputValue) => {
        changeHandler(inputValue);
      }}
      keyboardType="numeric"
      value={`${numberInputValue}`}
      InputRightElement={numberInputStepper}
      ref={ref}
    />
  );
};

export default React.memo(React.forwardRef(NumberInputFiled));
