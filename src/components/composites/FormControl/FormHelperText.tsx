import React from 'react';
import Box from '../../primitives/Box';
import { useColorModeValue } from '../../../core/color-mode/hooks';
import { FormControlContext } from './FormControl';
import type { IFormControlHelperTextProps, IFormControlContext } from './types';

const FormHelperText = (
  {
    children,
    style,
    _disabled,
    _focus,
    _invalid,
    color,
    ...props
  }: IFormControlHelperTextProps,
  ref: any
) => {
  const { isInvalid, isDisabled }: IFormControlContext = React.useContext(
    FormControlContext
  );
  const mutedColor = useColorModeValue('gray.400', 'gray.500');

  return (
    <Box
      {...props}
      ref={ref}
      _text={{
        fontSize: 'xs',
        color: color ?? mutedColor,
      }}
      style={[style, isInvalid && _invalid, isDisabled && _disabled]}
    >
      {children}
    </Box>
  );
};

export default React.memo(React.forwardRef(FormHelperText));
