import React from 'react';
import { Input } from '../../primitives/Input';
import type { INumberInputContext, INumberInputFieldProps } from './types';
import { NumberInputContext } from './Context';
import { mergeRefs } from '../../../utils';

const NumberInputField = (
  { isDisabled, ...props }: INumberInputFieldProps,
  ref: any
) => {
  const {
    min,
    max,
    handleChange,
    handleChangeWithoutCheck,
    numberInputStepper,
    numberInputValue,
    isControlled,
    ref: c_ref,
    _ref,
    ...context
  }: INumberInputContext & {
    handleChange?: (value: string | number) => void;
    numberInputStepper?: any;
  } = React.useContext(NumberInputContext);

  //method for handling all the inputvalues
  const changeHandler = (inputValue: any) => {
    //index of minus existing in value
    let minusIndex = inputValue.indexOf('-');

    //index of  decimal existing in value
    let decimalIndex = inputValue.indexOf('.');

    //if plus existing in value
    let plusIndex = inputValue.indexOf('+');

    //if decimal is on 0th index, it should append 0 before it.
    if (decimalIndex === 0) {
      inputValue = '0' + inputValue;
    }
    //if '-' doesn't exist, it should replace '-' with '' and (if '+' doesn't exists, it should append '-' else replace '+' with '')
    if (minusIndex !== -1) {
      inputValue = inputValue.replace('-', '');
      if (plusIndex === -1) {
        inputValue = '-' + inputValue;
      } else {
        inputValue = inputValue.replace('+', '');
      }
    }
    let value = null;

    // if value is  NaN
    // check for minusvalue, if it is on 0th index, let it be... Otherwise, simply remove the last
    if (!isNaN(inputValue)) {
      value = inputValue;
    } else {
      if (minusIndex === 0 && inputValue.length == 1) {
        value = inputValue;
      } else {
        value = inputValue.substring(0, inputValue.length - 1);
      }
    }
    if (isControlled) handleChange && handleChange(value);
    else if (value) handleChangeWithoutCheck && handleChangeWithoutCheck(value);
    else handleChangeWithoutCheck && handleChangeWithoutCheck(value);
  };

  const blurHandler = () => {
    if (numberInputValue) handleChange && handleChange(numberInputValue);
  };
  return (
    <Input
      accessibilityValue={{
        min: min === -Infinity ? undefined : min,
        max: max === Infinity ? undefined : max,
        now: numberInputValue,
      }}
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
      ref={mergeRefs([c_ref, ref, _ref])}
    />
  );
};

export default React.memo(React.forwardRef(NumberInputField));
