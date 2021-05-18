import React, { memo, forwardRef } from 'react';
import Box from '../../primitives/Box';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { useFormControlContext } from './useFormControl';
import type { IFormControlErrorMessageProps } from './types';

const FormControlErrorMessage = (
  { children, _disabled, ...props }: IFormControlErrorMessageProps,
  ref: any
) => {
  const themedProps = usePropsResolution('FormControlErrorMessage', props);

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
      {...themedProps}
      {...props}
      {...(formControlContext?.isDisabled && _disabled)}
      ref={ref}
    >
      {children}
    </Box>
  ) : null;
};

export default memo(forwardRef(FormControlErrorMessage));
