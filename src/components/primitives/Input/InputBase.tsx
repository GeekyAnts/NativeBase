import React from 'react';
import { TextInput, Platform } from 'react-native';
import styled from 'styled-components/native';
import {
  border,
  flex,
  space,
  color,
  flexbox,
  layout,
  typography,
} from 'styled-system';
import {
  customBorder,
  customBackground,
  customOutline,
  customLayout,
  customExtra,
  customShadow,
  customTypography,
} from '../../../utils/customProps';
import type { IInputProps } from './types';
import { usePlatformProps, useThemeProps, useToken } from '../../../hooks';
import { useHover } from '@react-native-aria/interactions';
import {
  FormControlContext,
  IFormControlContext,
} from '../../composites/FormControl';
import { mergeRefs } from '../../../utils';

const StyledInput = styled(TextInput)<IInputProps>(
  flex,
  color,
  space,
  layout,
  flexbox,
  border,
  typography,
  customBorder,
  customBackground,
  customOutline,
  customShadow,
  customExtra,
  customTypography,
  customLayout
);

const InputBase = (
  {
    onKeyPress,
    onFocus,
    onBlur,
    disableFocusHandling,
    ...props
  }: IInputProps & {
    disableFocusHandling?: boolean;
  },
  ref: any
) => {
  const formControlContext: IFormControlContext = React.useContext(
    FormControlContext
  );
  const [isFocused, setIsFocused] = React.useState(false);
  const handleFocus = (focusState: boolean, callback: any) => {
    !disableFocusHandling && setIsFocused(focusState);
    callback();
  };

  const themedProps = useThemeProps('Input', {
    ...formControlContext,
    ...props,
  });
  // usePlatformProps is merging Platform specific props to themedProps
  const {
    style,
    isFullWidth,
    isDisabled,
    isInvalid,
    isReadOnly,
    ariaLabel,
    accessibilityLabel,
    placeholderTextColor,
    selectionColor,
    underlineColorAndroid,
    type,
    _hover,
    _focus,
    _disabled,
    _invalid,
    ...platformProps
  } = usePlatformProps(themedProps);

  const _ref = React.useRef(null);
  const { isHovered } = useHover({}, _ref);

  return (
    <StyledInput
      secureTextEntry={type === 'password'}
      accessible
      accessibilityLabel={ariaLabel || accessibilityLabel}
      editable={isDisabled || isReadOnly ? false : true}
      w={isFullWidth ? '100%' : undefined}
      {...platformProps}
      {...(isHovered && _hover)}
      {...(isFocused && _focus)}
      {...(isDisabled && _disabled)}
      {...(isInvalid && _invalid)}
      placeholderTextColor={useToken('colors', placeholderTextColor)}
      selectionColor={useToken('colors', selectionColor)}
      underlineColorAndroid={useToken('colors', underlineColorAndroid)}
      onKeyPress={(e: any) => {
        e.persist();
        onKeyPress && onKeyPress(e);
      }}
      onFocus={(e) => {
        handleFocus(true, onFocus ? () => onFocus(e) : () => {});
      }}
      onBlur={(e) => {
        handleFocus(false, onBlur ? () => onBlur(e) : () => {});
      }}
      style={[
        Platform.OS === 'web' && {
          // @ts-ignore
          // NOTE: setting outline to none as it'll be handled manually
          outline: 'none',
        },
        style,
      ]}
      {...(Platform.OS === 'web'
        ? {
            disabled: isDisabled,
            cursor: isDisabled ? 'not-allowed' : 'pointer',
          }
        : {})}
      ref={mergeRefs([ref, _ref])}
    />
  );
};

export default React.memo(React.forwardRef(InputBase));
