import React from 'react';
import Box from '../../primitives/Box';
import { useColorModeValue } from '../../../core/color-mode/hooks';
import { useFormControlContext } from './useFormControl';
import type { IFormControlHelperTextProps } from './types';

const FormHelperText = (
  {
    children,
    _disabled,
    _invalid,
    color,
    ...props
  }: IFormControlHelperTextProps,
  ref: any
) => {
  const formControlContext = useFormControlContext();

  React.useEffect(() => {
    formControlContext?.setHasHelpText(true);
    return () => {
      formControlContext?.setHasHelpText(false);
    };
  });

  const mutedColor = useColorModeValue('gray.400', 'gray.500');

  return (
    <Box
      _text={{
        fontSize: 'xs',
        color: color ?? mutedColor,
      }}
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
