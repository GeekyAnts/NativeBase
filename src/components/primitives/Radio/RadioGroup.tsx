import React from 'react';
import { useRadioGroupState } from '@react-stately/radio';
import { useRadioGroup } from '@react-native-aria/radio';
import type { IFormControlContext } from 'native-base';
import { FormControlContext } from '../../composites/FormControl/FormControl';
import { Box } from '..';

export let RadioContext = React.createContext({});

const RadioGroup = ({ size, colorScheme, ...props }: any) => {
  const formControlContext: IFormControlContext = React.useContext(
    FormControlContext
  );
  let { children } = props;
  let state = useRadioGroupState(props);
  let { radioGroupProps } = useRadioGroup(props, state);
  return (
    <RadioContext.Provider
      value={{
        ...formControlContext,

        size,
        colorScheme,

        name,
      }}
    >
      <Box alignItems="flex-start" {...radioGroupProps} {...props}>
        {children}
      </Box>
    </RadioContext.Provider>
  );
};

export default React.memo(RadioGroup);
