import React from 'react';
import InputBase from './InputBase';
import Box from '../Box';
import type { IInputProps } from './types';
import { useThemeProps, usePlatformProps } from '../../../hooks';
import { extractInObject, stylingProps } from '../../../theme/tools/utils';
import { useHover } from '@react-native-aria/interactions';

const InputAdvance = (
  {
    InputLeftElement,
    InputRightElement,
    onFocus,
    onBlur,
    inputProps,
    ...props
  }: IInputProps & {
    inputProps: any;
  },
  ref: any
) => {
  const inputThemeProps = {
    isDisabled: inputProps.disabled,
    isInvalid: inputProps.accessibilityInvalid,
    isReadOnly: inputProps.accessibilityReadOnly,
    isRequired: inputProps.required,
  };

  const themedProps = useThemeProps('Input', {
    ...inputThemeProps,
    ...props,
  });

  const {
    isInvalid,
    isDisabled,
    _hover,
    _disabled,
    _invalid,
    _focus,
    ...platformProps
  } = usePlatformProps(themedProps);
  const [isFocused, setIsFocused] = React.useState(false);
  const handleFocus = (focusState: boolean, callback: any) => {
    setIsFocused(focusState);
    callback();
  };

  const [layoutProps, nonLayoutProps] = extractInObject(platformProps, [
    ...stylingProps.margin,
    ...stylingProps.border,
    ...stylingProps.layout,
    ...stylingProps.flexbox,
    ...stylingProps.position,
    ...stylingProps.background,
  ]);

  // Extracting baseInputProps from remaining props
  const [, baseInputProps] = extractInObject(nonLayoutProps, ['variant']);

  const _ref = React.useRef(null);
  const { isHovered } = useHover({}, _ref);

  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      overflow="hidden"
      {...layoutProps}
      {...(isHovered && _hover)}
      {...(isFocused && _focus)}
      {...(isDisabled && _disabled)}
      {...(isInvalid && _invalid)}
      ref={_ref}
    >
      {InputLeftElement ? InputLeftElement : null}
      <InputBase
        inputProps={inputProps}
        {...baseInputProps}
        flex={1}
        disableFocusHandling
        ref={ref}
        variant="unstyled"
        onFocus={(e) => {
          handleFocus(true, onFocus ? () => onFocus(e) : () => {});
        }}
        onBlur={(e) => {
          handleFocus(false, onBlur ? () => onBlur(e) : () => {});
        }}
      />
      {InputRightElement ? InputRightElement : null}
    </Box>
  );
};

export default React.memo(React.forwardRef(InputAdvance));
