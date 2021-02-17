import React, { createContext } from 'react';
import { useCheckboxGroupState } from '@react-stately/checkbox';
import { useCheckboxGroup } from '@react-native-aria/checkbox';
import {
  FormControlContext,
  IFormControlContext,
} from '../../composites/FormControl';
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
  const formControlContext: IFormControlContext = React.useContext(
    FormControlContext
  );
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

export default React.memo(React.forwardRef(CheckboxGroup));
