import React from 'react';
import Box from '../../primitives/Box';
import { FormControlContext } from './FormControl';
import type {
  IFormControlErrorMessageProps,
  IFormControlContext,
} from './types';

const FormErrorMessage = ({
  children,
  ...props
}: IFormControlErrorMessageProps) => {
  const { isInvalid }: IFormControlContext = React.useContext(
    FormControlContext
  );

  return isInvalid ? (
    <Box {...props} _text={{ fontSize: 'xs', color: 'red.400' }}>
      {children}
    </Box>
  ) : null;
};

export default React.memo(FormErrorMessage);
