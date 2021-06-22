import React, { memo, forwardRef } from 'react';
import InputBase from './InputBase';
import Box from '../Box';
import type { IInputProps } from './types';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { extractInObject, stylingProps } from '../../../theme/tools/utils';
import { useHover } from '@react-native-aria/interactions';
import { mergeRefs } from '../../../utils';

const InputAdvance = (
  {
    InputLeftElement,
    InputRightElement,
    onFocus,
    onBlur,
    inputProps,
    wrapperRef,
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

  const {
    isInvalid,
    isDisabled,
    _hover,
    _disabled,
    _invalid,
    _focus,
    ...themedProps
  } = usePropsResolution('Input', {
    ...inputThemeProps,
    ...props,
  });

  const [isFocused, setIsFocused] = React.useState(false);
  const handleFocus = (focusState: boolean, callback: any) => {
    setIsFocused(focusState);
    callback();
  };

  const [layoutProps, nonLayoutProps] = extractInObject(themedProps, [
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
      ref={mergeRefs([_ref, wrapperRef])}
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

export default memo(forwardRef(InputAdvance));
