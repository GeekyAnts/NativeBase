import React, { createContext, memo, forwardRef } from 'react';
import { useCheckboxGroupState } from '@react-stately/checkbox';
import { useCheckboxGroup } from '@react-native-aria/checkbox';
import { useFormControlContext } from '../../composites/FormControl';
import type { ICheckboxGroupProps, ICheckboxContext } from './types';
import Box from '../Box';

export let CheckboxGroupContext = createContext<ICheckboxContext | null>(null);

function CheckboxGroup(
  { size, colorScheme, ...props }: ICheckboxGroupProps,
  ref?: any
) {
  let { children } = props;
  let state = useCheckboxGroupState(props);
  let { groupProps } = useCheckboxGroup(
    { 'aria-label': props.accessibilityLabel, ...props },
    state
  );
  const formControlContext = useFormControlContext();
  return (
    <CheckboxGroupContext.Provider
      value={{
        size,
        colorScheme,
        ...formControlContext,
        state,
      }}
    >
      <Box alignItems="flex-start" {...groupProps} {...props} ref={ref}>
        {children}
      </Box>
    </CheckboxGroupContext.Provider>
  );
}

export default memo(forwardRef(CheckboxGroup));
