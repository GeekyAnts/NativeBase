import React, { createContext, memo, forwardRef, useMemo } from 'react';
import { useCheckboxGroupState } from '@react-stately/checkbox';
import { useCheckboxGroup } from '@react-native-aria/checkbox';
import { useFormControlContext } from '../../composites/FormControl';
import type { ICheckboxGroupProps, ICheckboxContext } from './types';
import Box from '../Box';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { usePropsResolution } from '../../../hooks/useThemeProps';

export const CheckboxGroupContext = createContext<ICheckboxContext | null>(
  null
);

function CheckboxGroup(
  { size, _checkbox, colorScheme, ...props }: ICheckboxGroupProps,
  ref?: any
) {
  const resolvedProps = usePropsResolution('CheckboxGroup', props);
  const { children } = props;
  const state = useCheckboxGroupState(props);
  const { groupProps } = useCheckboxGroup(
    { 'aria-label': props.accessibilityLabel, ...props },
    state
  );
  const formControlContext = useFormControlContext();
  const value = useMemo(
    () => ({
      size,
      colorScheme,
      ..._checkbox,
      ...formControlContext,
      state,
    }),
    [_checkbox, colorScheme, formControlContext, size, state]
  );

  //TODO: refactor for responsive prop
  if (useHasResponsiveProps({ ...props, size, colorScheme })) {
    return null;
  }
  return (
    // @ts-ignore
    <CheckboxGroupContext.Provider value={value}>
      <Box {...resolvedProps} {...groupProps} {...props} ref={ref}>
        {children}
      </Box>
    </CheckboxGroupContext.Provider>
  );
}

export default memo(forwardRef(CheckboxGroup));
