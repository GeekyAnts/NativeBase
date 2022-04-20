import React, { memo, forwardRef } from 'react';
import { TextInput, Platform } from 'react-native';
import type { IInputProps } from './types';
import { useToken } from '../../../hooks';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { useHover } from '@react-native-aria/interactions';
import { mergeRefs } from '../../../utils';
import { makeStyledComponent } from '../../../utils/styled';
import { useResolvedFontFamily } from '../../../hooks/useResolvedFontFamily';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const StyledInput = makeStyledComponent(TextInput);

const InputBase = (
  {
    onKeyPress,
    onFocus,
    onBlur,
    disableFocusHandling,
    inputProps,
    wrapperRef,
    InputLeftElement,
    InputRightElement,
    leftElement,
    rightElement,
    isHovered: isHoveredProp,
    isFocused: isFocusedProp,
    ...props
  }: IInputProps & {
    disableFocusHandling?: boolean;
    inputProps: any;
  },
  ref: any
) => {
  let passUnresolvedProps;
  if (InputLeftElement || InputRightElement || leftElement || rightElement) {
    passUnresolvedProps = true;
  }

  const [isFocused, setIsFocused] = React.useState(false);
  const handleFocus = (focusState: boolean, callback: any) => {
    !disableFocusHandling && setIsFocused(focusState);
    callback();
  };

  const inputThemeProps = {
    isDisabled: inputProps.disabled,
    isInvalid: inputProps.accessibilityInvalid,
    isReadOnly: inputProps.accessibilityReadOnly,
    isRequired: inputProps.required,
  };

  const _ref = React.useRef(null);
  const { isHovered } = useHover({}, _ref);

  const {
    isFullWidth,
    isDisabled,
    isReadOnly,
    ariaLabel,
    accessibilityLabel,
    placeholderTextColor,
    selectionColor,
    underlineColorAndroid,
    type,
    fontFamily,
    fontWeight,
    fontStyle,
    _webInputBase,
    ...resolvedProps
  } = usePropsResolution(
    'Input',
    {
      ...inputThemeProps,
      ...props,
    },
    {
      isDisabled: inputThemeProps.isDisabled,
      isHovered: isHoveredProp || isHovered,
      isFocused: isFocusedProp || isFocused,
      isInvalid: inputThemeProps.isInvalid,
      isReadOnly: inputThemeProps.isReadOnly,
    }
  );

  const resolvedFontFamily = useResolvedFontFamily({
    fontFamily,
    fontWeight: fontWeight ?? 400,
    fontStyle: fontStyle ?? 'normal',
  });
  const resolvedPlaceholderTextColor = useToken('colors', placeholderTextColor);
  const resolvedSelectionColor = useToken('colors', selectionColor);
  const resolvedUnderlineColorAndroid = useToken(
    'colors',
    underlineColorAndroid
  );
  //TODO: refactor for responsive prop
  if (
    useHasResponsiveProps({
      ...props,
      onKeyPress,
      onFocus,
      onBlur,
      disableFocusHandling,
      inputProps,
    })
  ) {
    return null;
  }

  return (
    <StyledInput
      {...inputProps}
      secureTextEntry={type === 'password'}
      accessible
      accessibilityLabel={ariaLabel || accessibilityLabel}
      editable={isDisabled || isReadOnly ? false : true}
      w={isFullWidth ? '100%' : undefined}
      {...(passUnresolvedProps ? props : resolvedProps)}
      {...resolvedFontFamily}
      placeholderTextColor={resolvedPlaceholderTextColor}
      selectionColor={resolvedSelectionColor}
      underlineColorAndroid={resolvedUnderlineColorAndroid}
      onKeyPress={(e: any) => {
        e.persist();
        onKeyPress && onKeyPress(e);
      }}
      onFocus={(e: any) => {
        handleFocus(true, onFocus ? () => onFocus(e) : () => {});
      }}
      onBlur={(e: any) => {
        handleFocus(false, onBlur ? () => onBlur(e) : () => {});
      }}
      // TODO: this can be moved to baseStyle using _web
      {...(Platform.OS === 'web'
        ? {
            disabled: isDisabled,
            cursor: isDisabled ? 'not-allowed' : 'auto',
          }
        : {})}
      ref={mergeRefs([ref, _ref, wrapperRef])}
      style={Platform.OS === 'web' ? _webInputBase : {}}
    />
  );
};

export default memo(forwardRef(InputBase));
