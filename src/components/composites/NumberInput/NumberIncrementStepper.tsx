import React from 'react';
import type { INumberInputContext, INumberInputStepperProps } from './types';
import { NBStepper } from './NumberInputStepper';
import { NumberInputContext } from './Context';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const NumberIncrementStepper = (
  { children, isDisabled: pIsDisabled, ...props }: INumberInputStepperProps,
  ref?: any
) => {
  const {
    numberInputValue = 0,
    step = 1,
    max = +Infinity,
    handleChange,
    ...context
  }: INumberInputContext = React.useContext(NumberInputContext);

  const isDisabled = pIsDisabled || context.isDisabled;
  const pressHandler = () => {
    handleChange && handleChange(numberInputValue + step);
  };
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return (
    <NBStepper
      isIncrement
      isDisabled={isDisabled}
      pressHandler={pressHandler}
      disablitityCheck={numberInputValue + step > max}
      {...props}
      ref={ref}
    >
      {children}
    </NBStepper>
  );
};
export default React.memo(React.forwardRef(NumberIncrementStepper));
