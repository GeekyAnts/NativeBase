import React from 'react';
import Box from '../../primitives/Box';
import { FormControlContext } from './FormControl';
import type {
  IFormControlErrorMessageProps,
  IFormControlContext,
} from './types';

const FormErrorMessage = (
  { children, _disabled, ...props }: IFormControlErrorMessageProps,
  ref: any
) => {
  const { isDisabled, isInvalid }: IFormControlContext = React.useContext(
    FormControlContext
  );

  return isInvalid ? (
    <Box
      _text={{ fontSize: 'xs', color: 'red.400' }}
      {...props}
      {...(isDisabled && _disabled)}
      ref={ref}
    >
      {children}
    </Box>
  ) : null;
};

export default React.memo(React.forwardRef(FormErrorMessage));
