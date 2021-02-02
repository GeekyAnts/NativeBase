import React from 'react';
import {
  FormControlContext,
  IFormControlContext,
} from '../../composites/FormControl';
import Box from '../Box';
import type { ICheckboxGroupProps } from './props';
import { useCheckboxGroupState } from '@react-stately/checkbox';
// import type { ICheckboxContext } from './props';
import { useCheckboxGroup } from 'react-native-aria';
// import { useCheckboxGroup } from './useCheckboxGroup';

export const CheckboxContext = React.createContext<any>(null);

const CheckboxGroup = ({
  size,
  children,
  colorScheme,
  ...props
}: ICheckboxGroupProps) => {
  const formControlContext: IFormControlContext = React.useContext(
    FormControlContext
  );

  let state = useCheckboxGroupState(props);
  let { groupProps } = useCheckboxGroup(props, state);

  return (
    <Box {...groupProps}>
      <CheckboxContext.Provider
        value={{
          ...formControlContext,
          size,
          colorScheme,
          state,
        }}
      >
        <Box alignItems="flex-start" accessibilityRole="checkbox" {...props}>
          {children}
        </Box>
      </CheckboxContext.Provider>
    </Box>
  );
};

export default React.memo(CheckboxGroup);
