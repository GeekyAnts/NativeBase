import React from 'react';
import Box from '../../primitives/Box';
import { useToken } from '../../../hooks';
import { FormControlContext } from './FormControl';
import type { IFormControlHelperTextProps, IFormControlContext } from './types';

const FormHelperText = (
  {
    children,
    style,
    _disabled,
    _focus,
    _invalid,
    ...props
  }: IFormControlHelperTextProps,
  ref: any
) => {
  const { isInvalid, isDisabled }: IFormControlContext = React.useContext(
    FormControlContext
  );

  const mutedColor = useToken('colors', 'muted.200');
  return (
    <Box
      {...props}
      ref={ref}
      _text={{
        fontSize: 'xs',
        color: mutedColor,
      }}
      style={[style, isInvalid && _invalid, isDisabled && _disabled]}
    >
      {children}
    </Box>
  );
};

export default React.memo(
  React.forwardRef<any, IFormControlHelperTextProps>(FormHelperText)
);
