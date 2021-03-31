import React from 'react';
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
    { ...formControlContext, ...props },
    state
  );
  return (
    <RadioContext.Provider
      value={{
        ...formControlContext,
        size,
        colorScheme,
        state,
      }}
    >
      <Box alignItems="flex-start" {...radioGroupProps} {...props} ref={ref}>
        {props.children}
      </Box>
    </RadioContext.Provider>
  );
};

export default React.memo(React.forwardRef(RadioGroup));
