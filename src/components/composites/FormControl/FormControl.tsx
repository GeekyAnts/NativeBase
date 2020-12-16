import React from 'react';
import Box from '../../primitives/Box';
import type { IFormControlProps } from './props';

export const FormControlContext = React.createContext({});

const FormControl = ({
  children,
  isInvalid,
  isRequired,
  isDisabled,
  isReadOnly,
  ...props
}: IFormControlProps) => {
  return (
    <FormControlContext.Provider
      value={{
        isInvalid,
        isRequired,
        isDisabled,
        isReadOnly,
      }}
    >
      <Box width="100%" {...props}>
        {children}
      </Box>
    </FormControlContext.Provider>
  );
};

export default FormControl;
