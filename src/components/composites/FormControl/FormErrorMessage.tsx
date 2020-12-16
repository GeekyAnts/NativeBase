import React from 'react';
import Box from '../../primitives/Box';
import { FormControlContext } from './FormControl';
import type { IFormErrorMessageProps, IFormControlContext } from './props';

const FormErrorMessage = ({ children, ...props }: IFormErrorMessageProps) => {
  const { isInvalid }: IFormControlContext = React.useContext(
    FormControlContext
  );

  return isInvalid ? (
    <Box {...props} fontSize="xs" color="red.400">
      {children}
    </Box>
  ) : null;
};

export default FormErrorMessage;
