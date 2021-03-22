import React from 'react';
import Box from '../../primitives/Box';
import { useFormControlContext } from './useFormControl';
import type { IFormControlErrorMessageProps } from './types';

const FormErrorMessage = (
  { children, _disabled, ...props }: IFormControlErrorMessageProps,
  ref: any
) => {
  const formControlContext = useFormControlContext();

  React.useEffect(() => {
    formControlContext?.setHasFeedbackText(true);
    return () => {
      formControlContext?.setHasFeedbackText(false);
    };
  });

  return formControlContext?.isInvalid ? (
    <Box
      _text={{ fontSize: 'xs', color: 'red.400' }}
      nativeID={formControlContext?.helpTextId}
      {...props}
      {...(formControlContext?.isDisabled && _disabled)}
      ref={ref}
    >
      {children}
    </Box>
  ) : null;
};

export default React.memo(React.forwardRef(FormErrorMessage));
