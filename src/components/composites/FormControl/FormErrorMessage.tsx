import React from 'react';
import Box from '../../primitives/Box';
import { FormControlContext } from './FormControl';
import type {
  IFormControlErrorMessageProps,
  IFormControlContext,
} from './types';

const FormErrorMessage = (
  { children, ...props }: IFormControlErrorMessageProps,
  ref: any
) => {
  const { isInvalid }: IFormControlContext = React.useContext(
    FormControlContext
  );

  return isInvalid ? (
    <Box {...props} _text={{ fontSize: 'xs', color: 'red.400' }} ref={ref}>
      {children}
    </Box>
  ) : null;
};

export default React.memo(React.forwardRef(FormErrorMessage));
