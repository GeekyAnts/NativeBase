import React, { memo, forwardRef } from 'react';
import Box from '../Box';
import { useFormControlContext } from '../../composites/FormControl';
import type { IRadioContext, IRadioGroupProps } from './types';
import { useRadioGroupState } from '@react-stately/radio';
import { useRadioGroup } from '@react-native-aria/radio';

export let RadioContext = React.createContext<IRadioContext>(
  {} as IRadioContext
);

const RadioGroup = (
  { size, colorScheme, ...props }: IRadioGroupProps,
  ref: any
) => {
  const formControlContext = useFormControlContext();

  let state = useRadioGroupState(props);
  let { radioGroupProps } = useRadioGroup(
    { ...formControlContext, ...props, 'aria-label': props.accessibilityLabel },
    state
  );
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
