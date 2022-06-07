import React, { memo, forwardRef } from 'react';
import type { IInputProps } from './types';
import { TextInput } from 'react-native';
import { useToken } from '../../../hooks';
import { useFormControl } from '../../composites/FormControl';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { useHover } from '@react-native-aria/interactions';
import { extractInObject, stylingProps } from '../../../theme/tools/utils';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { mergeRefs } from '../../../utils';
import { Stack } from '../Stack';
import { makeStyledComponent } from '../../../utils/styled';
import { useResolvedFontFamily } from '../../../hooks/useResolvedFontFamily';

const StyledInput = makeStyledComponent(TextInput);

import { getThemeProps } from '../../../core';
import { useColorMode } from '../../../core/color-mode';

const Input = (
  {
    isHovered: isHoveredProp,
    isFocused: isFocusedProp,
    onKeyPress,
    ...props
  }: IInputProps,
  ref: any
) => {
  const inputProps = useFormControl({
    isDisabled: props.isDisabled,
    isInvalid: props.isInvalid,
    isReadOnly: props.isReadOnly,
    isRequired: props.isRequired,
    nativeID: props.nativeID,
  });

  const inputThemeProps = {
    isDisabled: inputProps.disabled,
    isInvalid: inputProps.accessibilityInvalid,
    isReadOnly: inputProps.accessibilityReadOnly,
    isRequired: inputProps.required,
  };
  const [isFocused, setIsFocused] = React.useState(false);

  const _ref = React.useRef(null);

  const { isHovered } = useHover({}, _ref);

  const state = {
    isDisabled: inputThemeProps.isDisabled,
    isHovered: isHoveredProp || isHovered,
    isFocused: isFocusedProp || isFocused,
    isInvalid: inputThemeProps.isInvalid,
    isReadOnly: inputThemeProps.isReadOnly,
  };

  const { colorMode } = useColorMode();

  const {
    style,
    unResolvedProps,
    restDefaultProps,
    styleFromProps,
  } = getThemeProps('Input', colorMode, state, props);

  const {
    style: stackStyle,
    restDefaultProps: stackRestDefaultProps,
  } = getThemeProps('Input.Stack', colorMode, state, props);

  const handleFocus = (focusState: boolean, callback: any) => {
    setIsFocused(focusState);
    callback();
  };
  /**Converting into Hash Color Code */
  //@ts-ignore
  props.focusOutlineColor = useToken('colors', props.focusOutlineColor);
  //@ts-ignore
  props.invalidOutlineColor = useToken('colors', props.invalidOutlineColor);

  const {
    ariaLabel,
    accessibilityLabel,
    type,
    isFullWidth,
    isDisabled,
    isReadOnly,
    fontFamily,
    fontWeight,
    fontStyle,
    placeholderTextColor,
    selectionColor,
    underlineColorAndroid,
    InputLeftElement,
    InputRightElement,
    leftElement,
    rightElement,
    onFocus,
    onBlur,
    wrapperRef,
    _stack,
    _input,
    ...resolvedProps
  } = {
    ...restDefaultProps,
    ...usePropsResolution(
      'Input',
      {
        ...unResolvedProps,
        ...inputThemeProps,
        ...props,
      },
      state
    ),
  };

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

  const [layoutStyle, nonLayoutStyle] = extractInObject(styleFromProps, [
    ...stylingProps.margin,
    ...stylingProps.border,
    ...stylingProps.layout,
    ...stylingProps.flexbox,
    ...stylingProps.position,
    ...stylingProps.background,
    'shadow',
    'opacity',
  ]);

  // console.log(layoutProps, nonLayoutProps, 'layout props here');
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
  if (useHasResponsiveProps(props)) {
    return null;
  }

  console.log(resolvedProps, 'props here');
  return (
    <Stack
      {..._stack}
      {...layoutProps}
      INTERNAL_themeStyle={[stackStyle, layoutStyle]}
      ref={mergeRefs([_ref, wrapperRef])}
      isFocused={isFocused}
    >
      {InputLeftElement || leftElement ? InputLeftElement || leftElement : null}
      <StyledInput
        {...inputProps}
        secureTextEntry={type === 'password'}
        accessible
        accessibilityLabel={ariaLabel || accessibilityLabel}
        editable={isDisabled || isReadOnly ? false : true}
        w={isFullWidth ? '100%' : undefined}
        {...nonLayoutProps}
        INTERNAL_themeStyle={nonLayoutStyle}
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
        {..._input}
        ref={mergeRefs([ref, _ref, wrapperRef])}
      />
      {InputRightElement || rightElement
        ? InputRightElement || rightElement
        : null}
    </Stack>
  );
};

export default memo(forwardRef(Input));
