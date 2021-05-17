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
  let { groupProps } = useCheckboxGroup(props, state);
  const formControlContext = useFormControlContext();
  return (
    <Box ref={ref}>
      <CheckboxGroupContext.Provider
        value={{
          size,
          colorScheme,
          ...formControlContext,
          state,
        }}
      >
        <Box alignItems="flex-start" {...groupProps} {...props}>
          {children}
        </Box>
      </CheckboxGroupContext.Provider>
    </Box>
  );
}

export default memo(forwardRef(CheckboxGroup));
