import React from 'react';
import Box from '../Box';
import {
  FormControlContext,
  IFormControlContext,
} from '../../composites/FormControl';
import type { IRadioContext, IRadioGroupProps } from './types';
import { RadioGroupState, useRadioGroupState } from '@react-stately/radio';

export const RadioContext = React.createContext<IRadioContext>({
  name: '',
  state: {} as RadioGroupState,
});

const RadioGroup = ({
  size,
  colorScheme,
  name,
  ...props
}: IRadioGroupProps) => {
  const formControlContext: IFormControlContext = React.useContext(
    FormControlContext
  );

  let state = useRadioGroupState(props);

  return (
    <RadioContext.Provider
      value={{
        ...formControlContext,
        size,
        colorScheme,
        state,
        name,
      }}
    >
      <Box accessibilityRole="radiogroup" alignItems="flex-start" {...props}>
        {props.children}
      </Box>
    </RadioContext.Provider>
  );
};

export default React.memo(RadioGroup);
