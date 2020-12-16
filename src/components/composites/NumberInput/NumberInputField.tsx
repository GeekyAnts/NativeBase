import React from 'react';
import Input from '../../primitives/Input';
import type { INumberInputContext, INumberInputFieldProps } from './props';
import { NumberInputContext } from './Context';
import type { TextInput } from 'react-native';

const NumberInputFiled = (
  { isDisabled, ...props }: INumberInputFieldProps,
  ref: any
) => {
  const {
    handleChange,
    handleChangeWithoutCheck,
    numberInputStepper,
    numberInputValue,
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
    if (value) handleChangeWithoutCheck && handleChangeWithoutCheck(value);
    else handleChangeWithoutCheck && handleChangeWithoutCheck(0);
  };
  const blurHandler = () => {
    if (numberInputValue) handleChange && handleChange(numberInputValue);
  };
  return (
    <Input
      p={0}
      pl={2}
      // TODO: shouldn't provide width like this.
      width="70%"
      {...context}
      {...props}
      onBlur={() => blurHandler()}
      isDisabled={isDisabled || context.isDisabled}
      onChangeText={(inputValue) => changeHandler(inputValue)}
      keyboardType="numeric"
      value={`${numberInputValue}`}
      style={[context.style, props.style]}
      InputRightElement={numberInputStepper}
      ref={ref}
    />
  );
};

export default React.forwardRef<TextInput, INumberInputFieldProps>(
  NumberInputFiled
);
