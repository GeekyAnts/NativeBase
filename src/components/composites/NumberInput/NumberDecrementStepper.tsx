import React from 'react';
import type { INumberInputContext, INumberInputStepperProps } from './types';
import { NBStepper } from './NumberInputStepper';
import { NumberInputContext } from './Context';

const NumberDecrementStepper = (
  { children, isDisabled: pIsDisabled, ...props }: INumberInputStepperProps,
  ref?: any
) => {
  const {
    numberInputValue = 0,
    step = 1,
    min = -Infinity,
    handleChange,
    ...context
  }: INumberInputContext = React.useContext(NumberInputContext);

  const isDisabled = pIsDisabled || context.isDisabled;
  const pressHandler = () => {
    handleChange && handleChange(numberInputValue - step);
  };
  return (
    <NBStepper
      isIncrement={false}
      isDisabled={isDisabled}
      pressHandler={pressHandler}
      disablitityCheck={numberInputValue - step < min}
      {...props}
      ref={ref}
    >
      {children}
    </NBStepper>
  );
};

export default React.memo(React.forwardRef(NumberDecrementStepper));
