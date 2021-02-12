import React from 'react';
import Box from '../Box';
import {
  FormControlContext,
  IFormControlContext,
} from '../../composites/FormControl';
import type { IRadioContext, IRadioGroupProps } from './types';
import { useRadioGroupState } from '@react-stately/radio';
import { useRadioGroup } from '@react-native-aria/radio';

export let RadioContext = React.createContext<IRadioContext>(
  {} as IRadioContext
);

const RadioGroup = ({ size, colorScheme, ...props }: IRadioGroupProps) => {
  const formControlContext: IFormControlContext = React.useContext(
    FormControlContext
  );

  let state = useRadioGroupState(props);
  let { radioGroupProps } = useRadioGroup(props, state);
  return (
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
  );
};

export default React.memo(RadioGroup);
