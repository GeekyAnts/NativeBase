import React from 'react';
import Box from '../../primitives/Box';
import type { IFormControlProps } from './types';

export const FormControlContext = React.createContext({});

const FormControl = (
  {
    children,
    isInvalid,
    isRequired,
    isDisabled,
    isReadOnly,
    ...props
  }: IFormControlProps,
  ref: any
) => {
  return (
    <FormControlContext.Provider
      value={{
        isInvalid,
        isRequired,
        isDisabled,
        isReadOnly,
      }}
    >
      <Box width="100%" {...props} ref={ref}>
        {children}
      </Box>
    </FormControlContext.Provider>
  );
};

export default React.memo(React.forwardRef(FormControl));
