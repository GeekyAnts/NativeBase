import React, { memo, forwardRef } from 'react';
import Box from '../Box';
import { useFormControlContext } from '../../composites/FormControl';
import type { IRadioContext, IRadioGroupProps } from './types';
import { useRadioGroupState } from '@react-stately/radio';
import { useRadioGroup } from '@react-native-aria/radio';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

export const RadioContext = React.createContext<IRadioContext>(
  {} as IRadioContext
);

const RadioGroup = (
  { size, colorScheme, ...props }: IRadioGroupProps,
  ref: any
) => {
  const formControlContext = useFormControlContext();

  const state = useRadioGroupState(props);
  const { radioGroupProps } = useRadioGroup(
    { ...formControlContext, ...props, 'aria-label': props.accessibilityLabel },
    state
  );
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps({ ...props, size, colorScheme })) {
    return null;
  }
  return (
    <Box ref={ref}>
      <RadioContext.Provider
        value={{
          ...formControlContext,
          size,
          colorScheme,
          state,
        }}
      >
        <Box alignItems="flex-start" {...radioGroupProps} {...props}>
          {props.children}
        </Box>
      </RadioContext.Provider>
    </Box>
  );
};

export default memo(forwardRef(RadioGroup));
