import React, { createContext } from 'react';
import { useCheckboxGroupState } from '@react-stately/checkbox';
import { useCheckboxGroup } from '@react-native-aria/checkbox';
import { View } from 'react-native';
import {
  FormControlContext,
  IFormControlContext,
} from '../../composites/FormControl';
import type { ICheckboxGroupProps, ICheckboxContext } from './types';
import { Box } from '..';

export let CheckboxGroupContext = createContext<ICheckboxContext | null>(null);

export function CheckboxGroup({
  size,
  colorScheme,
  ...props
}: ICheckboxGroupProps) {
  let { children } = props;
  let state = useCheckboxGroupState(props);
  let { groupProps } = useCheckboxGroup(props, state);
  const formControlContext: IFormControlContext = React.useContext(
    FormControlContext
  );
  return (
    <Box {...groupProps}>
      <CheckboxGroupContext.Provider
        value={{
          size,
          colorScheme,
          ...formControlContext,
          state,
        }}
      >
        {children}
      </CheckboxGroupContext.Provider>
    </Box>
  );
}

export default React.memo(CheckboxGroup);
