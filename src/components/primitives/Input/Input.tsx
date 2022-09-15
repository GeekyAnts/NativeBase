import React, { memo, forwardRef } from 'react';
import type { IInputProps } from './types';
import { Platform, TextInput } from 'react-native';
import { useToken } from '../../../hooks';
import { useFormControl } from '../../composites/FormControl';
import { useHover } from '@react-native-aria/interactions';
import { stylingProps } from '../../../theme/tools/utils';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { mergeRefs, resolveStackStyleInput } from '../../../utils';
import { Stack } from '../Stack';
import { makeStyledComponent } from '../../../utils/makeStyledComponent';
import { useResolvedFontFamily } from '../../../hooks/useResolvedFontFamily';
import { getThemeProps } from '../../../utils/styled';
import { useColorMode } from '../../../core/color-mode';
import { useNativeBase } from '../../../hooks';
import { useNativeBaseConfig } from '../../../core/NativeBaseContext';
import { extractLayoutNonLayoutPropsFromStateAndResolvedProps } from '../../../utils/extractLayoutNonLayoutProps';

const StyledInput = makeStyledComponent(TextInput);

const Input = (
  {
    isHovered: isHoveredProp,
    isFocused: isFocusedProp,
    onKeyPress,
    InputLeftElement,
    InputRightElement,
    leftElement,
    rightElement,
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
  const [isFocused, setIsFocused] = React.useState(false);
  const handleFocus = (focusState: boolean, callback: any) => {
    setIsFocused(focusState);
    callback();
  };

  const _ref = React.useRef(null);
  const { isHovered } = useHover({}, _ref);

  const inputThemeProps = {
    isDisabled: inputProps.disabled,
    isInvalid: inputProps.accessibilityInvalid,
    isReadOnly: inputProps.accessibilityReadOnly,
    isRequired: inputProps.required,
  };

  const state = {
    isDisabled: inputThemeProps.isDisabled,
    isHovered: isHoveredProp || isHovered,
    isFocused: isFocusedProp || isFocused,
    isInvalid: inputThemeProps.isInvalid,
    isReadOnly: inputThemeProps.isReadOnly,
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
    onFocus,
    onBlur,
    wrapperRef,
    _stack,
    _input,
    stateProps,
    ...resolvedProps
  } = usePropsResolution('Input', props, state);

  // console.log(
  //   nonLayoutProps.INTERNAL_themeStyle[0].backgroundColor,
  //   _input,
  //   'resolved props 222'
  // );
  const { colorMode } = useColorMode();
  const { theme } = useNativeBase();
  const providerId = useNativeBaseConfig('NativeBase').providerId;
  const { styleFromProps, stateStyleFromProps } = getThemeProps(
    theme,
    providerId,
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

  const {
    layoutStyles,
    nonLayoutStyles,
    stateLayoutStyles,
    stateNonLayoutStyles,
    layoutProps,
    nonLayoutProps,
    stateLayoutProps,
    stateNonLayoutProps,
  } = extractLayoutNonLayoutPropsFromStateAndResolvedProps(
    filterProps,
    resolvedProps,
    stateProps,
    stateStyleFromProps,
    styleFromProps
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

  /**Converting into Hash Color Code */
  //@ts-ignore
  resolvedProps.focusOutlineColor = useToken(
    'colors',
    resolvedProps.focusOutlineColor
  );
  //@ts-ignore
  resolvedProps.invalidOutlineColor = useToken(
    'colors',
    resolvedProps.invalidOutlineColor
  );

  if (resolvedProps.focusOutlineColor && isFocused) {
    layoutProps.borderColor = resolvedProps.focusOutlineColor;
    _stack.style = resolveStackStyleInput(
      props.variant,
      resolvedProps.focusOutlineColor
    );
  }

  if (resolvedProps.invalidOutlineColor && props.isInvalid) {
    layoutProps.borderColor = resolvedProps.invalidOutlineColor;
    _stack.style = resolveStackStyleInput(
      props.variant,
      resolvedProps.invalidOutlineColor
    );
  }

  return (
    <Stack
      {..._stack}
      {...layoutProps}
      INTERNAL_themeStyle={[layoutStyles, _stack?.INTERNAL_themeStyle]}
      ref={mergeRefs([_ref, wrapperRef])}
      isFocused={isFocused}
      stateProps={{
        ...stateLayoutProps,
        INTERNAL_themeStyle: [stateLayoutStyles],
      }}
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
        stateProps={{
          ...stateNonLayoutProps,
          INTERNAL_themeStyle: [stateNonLayoutStyles],
        }}
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
