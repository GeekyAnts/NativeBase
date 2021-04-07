import React from 'react';
import { useThemeProps, usePlatformProps } from '../../../hooks';
import type { ITextFieldProps } from './types';
import { Stack } from '../../primitives/Stack';
import { Input } from '../../primitives/Input';
import Text from '../../primitives/Text';
import { extractInObject, stylingProps } from '../../../theme/tools/utils';

const TextField = (
  {
    helperText,
    errorMessage,
    InputLeftElement,
    InputRightElement,
    ...props
  }: ITextFieldProps,
  ref?: any
) => {
  // NOTE:
  const { divider, ...themedProps } = useThemeProps('TextField', props);

  // usePlatformProps is merging Platform specific props to themedProps
  const {
    _errorMessageProps,
    _helperTextProps,
    ...platformProps
  } = usePlatformProps(themedProps);

  const [layoutProps, inputProps] = extractInObject(platformProps, [
    'space',
    'reversed',
    ...stylingProps.margin,
    ...stylingProps.layout,
    ...stylingProps.flexbox,
    ...stylingProps.position,
  ]);

  return (
    <Stack divider={divider} {...layoutProps}>
      <Input
        InputLeftElement={InputLeftElement}
        InputRightElement={InputRightElement}
        {...inputProps}
        ref={ref}
      />
      {inputProps.isInvalid && (
        <Text {..._errorMessageProps}>{errorMessage}</Text>
      )}
      {!inputProps.isInvalid && <Text {..._helperTextProps}>{helperText}</Text>}
    </Stack>
  );
};

export default React.memo(React.forwardRef(TextField));
