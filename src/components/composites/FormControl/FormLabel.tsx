import React from 'react';
import Box from '../../primitives/Box';
import Text from '../../primitives/Text';
import { useToken } from '../../../hooks';
import { FormControlContext } from './FormControl';
import type { IFormControlLabelProps, IFormControlContext } from './types';

const FormLabel = (
  {
    children,
    style,
    _disabled,
    _focus,
    _invalid,
    ...props
  }: IFormControlLabelProps,
  ref: any
) => {
  const {
    isInvalid,
    isRequired,
    isDisabled,
  }: IFormControlContext = React.useContext(FormControlContext);
  const textColor = useToken('colors', 'red.300');
  const requiredAsterisk = () => <Text color={textColor}>*</Text>;

  return (
    <Box
      flexDirection="row"
      justifyContent="flex-start"
      {...props}
      ref={ref}
      _text={{ fontSize: 'md' }}
      style={[style, isInvalid && _invalid, isDisabled && _disabled]}
    >
      {children}
      {isRequired && requiredAsterisk()}
    </Box>
  );
};
export default React.memo(React.forwardRef(FormLabel));
