import React, { memo, forwardRef } from 'react';
import InputBase from './InputBase';
import Box from '../Box';
import type { IInputProps } from './types';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { extractInObject, stylingProps } from '../../../theme/tools/utils';
import { useHover } from '@react-native-aria/interactions';
import { mergeRefs } from '../../../utils';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const InputAdvance = (
  {
    InputLeftElement,
    InputRightElement,
    leftElement,
    rightElement,
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

  if (InputLeftElement) {
    leftElement = InputLeftElement;
  }
  if (InputRightElement) {
    rightElement = InputRightElement;
  }

  const [isFocused, setIsFocused] = React.useState(false);
  const handleFocus = (focusState: boolean, callback: any) => {
    setIsFocused(focusState);
    callback();
  };

  const _ref = React.useRef(null);
  const { isHovered } = useHover({}, _ref);

  const resolvedProps = usePropsResolution(
    'Input',
    {
      ...inputThemeProps,
      ...props,
    },
    {
      isDisabled: inputThemeProps.isDisabled,
      isHovered,
      isFocused,
      isInvalid: inputThemeProps.isInvalid,
      isReadOnly: inputThemeProps.isReadOnly,
    }
  );

  const [layoutProps, nonLayoutProps] = extractInObject(resolvedProps, [
    ...stylingProps.margin,
    ...stylingProps.border,
    ...stylingProps.layout,
    ...stylingProps.flexbox,
    ...stylingProps.position,
    ...stylingProps.background,
    'shadow',
    'opacity',
  ]);

  // Extracting baseInputProps from remaining props
  const [, baseInputProps] = extractInObject(nonLayoutProps, ['variant']);

  //TODO: refactor for responsive prop
  if (
    useHasResponsiveProps({
      ...props,
      InputLeftElement,
      InputRightElement,
      onFocus,
      onBlur,
      inputProps,
      wrapperRef,
    })
  ) {
    return null;
  }

  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      {...layoutProps}
      ref={mergeRefs([_ref, wrapperRef])}
    >
      {InputLeftElement || leftElement ? InputLeftElement || leftElement : null}
      <InputBase
        inputProps={inputProps}
        bg="transparent"
        {...baseInputProps}
        flex={1}
        disableFocusHandling
        ref={ref}
        variant="unstyled"
        onFocus={(e: any) => {
          handleFocus(true, onFocus ? () => onFocus(e) : () => {});
        }}
        onBlur={(e: any) => {
          handleFocus(false, onBlur ? () => onBlur(e) : () => {});
        }}
        shadow="none"
      />
      {InputRightElement || rightElement
        ? InputRightElement || rightElement
        : null}
    </Box>
  );
};

export default memo(forwardRef(InputAdvance));
