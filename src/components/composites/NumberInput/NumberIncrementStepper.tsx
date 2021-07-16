import React from 'react';
import type { INumberInputContext, INumberInputStepperProps } from './types';
import { NBStepper } from './NumberInputStepper';
import { NumberInputContext } from './Context';
import { numberOfDecimals } from './utils';

const NumberIncrementStepper = (
  { children, isDisabled: pIsDisabled, ...props }: INumberInputStepperProps,
  ref?: any
) => {
  const {
    numberInputValue = '',
    step = 1,
    max = +Infinity,
    precision,
    keepWithinRange = true,
    handleChange,
    ...context
  }: INumberInputContext = React.useContext(NumberInputContext);

  const isDisabled = pIsDisabled || context.isDisabled;

  const pressHandler = () => {
    //  if number is NaN for some reason ( e.g. only '-' without any digit)
    //  then send 0 as input value with precision of step and input value
    if (isNaN(numberInputValue)) {
      handleChange &&
        handleChange(
          parseFloat('0').toFixed(
            precision ?? numberOfDecimals(parseFloat(numberInputValue), step)
          )
        );
    }
    // else do calculation of step and prescision according to stepper type
    else {
      handleChange &&
        handleChange(
          (parseFloat(numberInputValue || '0') + step).toFixed(
            precision ?? numberOfDecimals(parseFloat(numberInputValue), step)
          )
        );
    }
  };
  return (
    <NBStepper
      isIncrement
      isDisabled={isDisabled}
      pressHandler={pressHandler}
      disablitityCheck={
        keepWithinRange ? parseFloat(numberInputValue) + step > max : false
      }
      {...props}
      ref={ref}
    >
      {children}
    </NBStepper>
  );
};
export default React.memo(React.forwardRef(NumberIncrementStepper));
