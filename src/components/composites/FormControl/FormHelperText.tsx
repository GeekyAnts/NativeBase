import React from 'react';
import Box from '../../primitives/Box';
import { useThemeProps } from '../../../hooks';
import { useFormControlContext } from './useFormControl';
import type { IFormControlHelperTextProps } from './types';

const FormHelperText = (
  { children, _disabled, _invalid, ...props }: IFormControlHelperTextProps,
  ref: any
) => {
  const formControlContext = useFormControlContext();

  const themedProps = useThemeProps('FormControlHelperText', props);

  React.useEffect(() => {
    formControlContext?.setHasHelpText(true);
    return () => {
      formControlContext?.setHasHelpText(false);
    };
  });

  return (
    <Box
      {...themedProps}
      nativeID={formControlContext?.feedbackId}
      {...props}
      ref={ref}
      {...(formControlContext?.isInvalid && _invalid)}
      {...(formControlContext?.isDisabled && _disabled)}
    >
      {children}
    </Box>
  );
};

export default React.memo(React.forwardRef(FormHelperText));
