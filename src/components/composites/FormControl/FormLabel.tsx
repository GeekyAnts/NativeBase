import React from 'react';
import Box from '../../primitives/Box';
import Text from '../../primitives/Text';
import { FormControlContext } from './FormControl';
import type { IFormControlLabelProps, IFormControlContext } from './types';
import { useThemeProps } from '../../../hooks';

const FormLabel = (
  { children, _disabled, _invalid, ...props }: IFormControlLabelProps,
  ref: any
) => {
  const {
    isInvalid,
    isRequired,
    isDisabled,
  }: IFormControlContext = React.useContext(FormControlContext);
  const { astrickColor, newProps } = useThemeProps('FormControlLabel', props);
  const requiredAsterisk = () => <Text color={astrickColor}>*</Text>;

  return (
    <Box
      flexDirection="row"
      justifyContent="flex-start"
      {...newProps}
      ref={ref}
      {...(isInvalid && _invalid)}
      {...(isDisabled && _disabled)}
    >
      {children}
      {isRequired && requiredAsterisk()}
    </Box>
  );
};
export default React.memo(React.forwardRef(FormLabel));
