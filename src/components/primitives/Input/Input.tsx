import React, { memo, forwardRef } from 'react';
import type { IInputProps } from './types';
import { Platform, TextInput } from 'react-native';
import { useToken } from '../../../hooks';
import { useFormControl } from '../../composites/FormControl';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { useHover } from '@react-native-aria/interactions';
import { extractInObject, stylingProps } from '../../../theme/tools/utils';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { mergeRefs } from '../../../utils';
import { Stack } from '../Stack';
import { makeStyledComponent } from '../../../utils/makeStyledComponent';
import { useResolvedFontFamily } from '../../../hooks/useResolvedFontFamily';
import { getThemeProps } from '../../../core/ResolvedStyleMap';
import { useColorMode } from '../../../core/color-mode';
import { useNativeBase } from '../../../hooks';

const StyledInput = makeStyledComponent(TextInput);

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
  } = usePropsResolution('Input', props, state);

  // console.log(
  //   nonLayoutProps.INTERNAL_themeStyle[0].backgroundColor,
  //   _input,
  //   'resolved props 222'
  // );
  const { colorMode } = useColorMode();
  const { theme } = useNativeBase();

  const { styleFromProps } = getThemeProps(
    theme,
    'Input',
    { colorMode, platform: Platform.OS },
    state,
    props
  );

  const filterProps = [
    ...stylingProps.margin,
    ...stylingProps.border,
    ...stylingProps.layout,
    ...stylingProps.flexbox,
    ...stylingProps.position,
    ...stylingProps.background,
    'shadow',
    'opacity',
  ];
  const [layoutStyles, nonLayoutStyles] = extractInObject(
    styleFromProps,
    filterProps
  );

  const [layoutProps, nonLayoutProps] = extractInObject(
    resolvedProps,
    filterProps
  );

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

  // console.log('INTERNAL_themeStyle', resolvedProps, layoutProps);
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }

  // console.log(
  //   nonLayoutProps.INTERNAL_themeStyle,
  //   INTERNAL_themeStyle,
  //   'layout styles'
  // );
  return (
    <Stack
      {..._stack}
      {...layoutProps}
      INTERNAL_themeStyle={[layoutStyles, _stack?.INTERNAL_themeStyle]}
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
        {...resolvedFontFamily}
        INTERNAL_themeStyle={[nonLayoutStyles]}
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
