import React from 'react';
import Box from '../../primitives/Box';
import { FormControlContext } from './FormControl';
import type { IFormControlHelperTextProps, IFormControlContext } from './types';
import { useThemeProps } from '../../../hooks';

const FormHelperText = (
  { children, _disabled, _invalid, ...props }: IFormControlHelperTextProps,
  ref: any
) => {
  const { isInvalid, isDisabled }: IFormControlContext = React.useContext(
    FormControlContext
  );
  const newProps = useThemeProps('FormControlHelperText', props);

  return (
    <Box
      {...newProps}
      ref={ref}
      {...(isInvalid && _invalid)}
      {...(isDisabled && _disabled)}
    >
      {children}
    </Box>
  );
};

export default React.memo(React.forwardRef(FormHelperText));
