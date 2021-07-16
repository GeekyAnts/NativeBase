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
    defaultValue,
    max = +Infinity,
    precision,
    keepWithinRange = true,
    handleChange,
    ...context
  }: INumberInputContext = React.useContext(NumberInputContext);

  const isDisabled = pIsDisabled || context.isDisabled;
  const pressHandler = () => {
    handleChange &&
      handleChange(
        (parseFloat(numberInputValue) + step).toFixed(
          precision ?? numberOfDecimals(defaultValue, step)
        )
      );
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
