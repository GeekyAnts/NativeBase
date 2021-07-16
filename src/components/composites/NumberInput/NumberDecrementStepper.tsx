import React from 'react';
import type { INumberInputContext, INumberInputStepperProps } from './types';
import { NBStepper } from './NumberInputStepper';
import { NumberInputContext } from './Context';
import { numberOfDecimals } from './utils';

const NumberDecrementStepper = (
  { children, isDisabled: pIsDisabled, ...props }: INumberInputStepperProps,
  ref?: any
) => {
  const {
    numberInputValue = '',
    step = 1,
    min = -Infinity,
    precision,
    defaultValue,
    keepWithinRange = true,
    handleChange,
    ...context
  }: INumberInputContext = React.useContext(NumberInputContext);

  const isDisabled = pIsDisabled || context.isDisabled;
  const pressHandler = () => {
    handleChange &&
      handleChange(
        (parseFloat(numberInputValue) - step).toFixed(
          precision ?? numberOfDecimals(defaultValue, step)
        )
      );
  };
  return (
    <NBStepper
      isIncrement={false}
      isDisabled={isDisabled}
      pressHandler={pressHandler}
      disablitityCheck={
        keepWithinRange ? parseFloat(numberInputValue) - step < min : false
      }
      {...props}
      ref={ref}
    >
      {children}
    </NBStepper>
  );
};

export default React.memo(React.forwardRef(NumberDecrementStepper));
