import React, { memo, forwardRef } from 'react';
import Box from '../../primitives/Box';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { useFormControlContext } from './useFormControl';
import type { IFormControlHelperTextProps } from './types';

const FormControlHelperText = (
  { children, _disabled, _invalid, ...props }: IFormControlHelperTextProps,
  ref: any
) => {
  const formControlContext = useFormControlContext();

  const themedProps = usePropsResolution('FormControlHelperText', props);

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

export default memo(forwardRef(FormControlHelperText));
