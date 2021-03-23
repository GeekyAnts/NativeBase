import React from 'react';
import Box from '../../primitives/Box';
import { FormControlContext } from './FormControl';
import type {
  IFormControlErrorMessageProps,
  IFormControlContext,
} from './types';
import { useThemeProps } from '../../../hooks';

const FormErrorMessage = (
  { children, _disabled, ...props }: IFormControlErrorMessageProps,
  ref: any
) => {
  const { isDisabled, isInvalid }: IFormControlContext = React.useContext(
    FormControlContext
  );
  const newProps = useThemeProps('FormControlErrorMessage', props);

  return isInvalid ? (
    <Box {...newProps} {...(isDisabled && _disabled)} ref={ref}>
      {children}
    </Box>
  ) : null;
};

export default React.memo(React.forwardRef(FormErrorMessage));
