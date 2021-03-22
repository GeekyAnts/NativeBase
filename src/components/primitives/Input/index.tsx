import React from 'react';
import { TextInput, Animated, Platform } from 'react-native';
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
import Box from '../Box';
import Flex from '../Flex';
import type { IInputProps } from './types';
import { InputRightAddon, InputGroup, InputLeftAddon } from './InputGroup';
import { useThemeProps, useToken } from '../../../hooks';
import { themeTools } from '../../../theme';
import { useHover } from '@react-native-aria/interactions';
import {
  useFormControl,
  useFormControlContext,
} from '../../composites/FormControl';

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

const Input = (
  {
    style,
    placeholder,
    // isRequired,
    isFullWidth,
    onFocus,
    onBlur,
    accessibilityLabel,
    InputLeftElement,
    InputRightElement,
    type,
    w,
    width,
    h,
    height,
    m,
    mr,
    ml,
    mt,
    mb,
    mx,
    my,
    label,
    _label,
    placeholderTextColor,
    ...props
  }: IInputProps,
  ref: any
) => {
  const formControlContext = useFormControlContext();

  const inputProps = useFormControl({
    isDisabled: props.isDisabled,
    isInvalid: props.isInvalid,
    isReadOnly: props.isReadOnly,
    isRequired: props.isRequired,
    nativeID: props.nativeID,
  });

  const layoutProps = {
    w,
    width,
    m,
    mr,
    ml,
    mt,
    mb,
    mx,
    my,
  };
  const [isFocused, setIsFocused] = React.useState(false);
  const handleFocus = (focusState: boolean, callback: any) => {
    setIsFocused(focusState);
    callback();
  };

  let placeholderColor = useToken(
    'colors',
    (placeholderTextColor as string) ?? 'gray.400'
  );

  if (typeof placeholderColor !== 'string') {
    placeholderColor = placeholderTextColor;
  }
  const {
    borderColor: borderColorFromProps,
    fontSize,
    borderWidth,
    focusBorderColor,
    errorBorderColor,
    hoverBorderColor,
    borderBottomWidth,
    ...newProps
  } = useThemeProps('Input', { ...formControlContext, ...props });

  const computedProps = {
    display: 'flex',
    flexDirection: 'row',
    h,
    height,
  };
  let [, rem] = themeTools.extractInObject(newProps, [
    'p',
    'px',
    'py',
    'pt',
    'pb',
    'pl',
    'pr',
    'nativeID',
  ]);

  const slideAnim = React.useRef(new Animated.Value(0)).current;
  const slideIn = () => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: Platform.OS !== 'web',
    }).start();
  };

  const slideOut = () => {
    Animated.timing(slideAnim, {
      // NOTE: Below 3 value are (padding + half of font + buffer)
      toValue: -(12 + Math.floor(fontSize / 2) + 2),
      duration: 200,
      useNativeDriver: Platform.OS !== 'web',
    }).start();
  };

  const _ref = React.useRef(null);
  const { isHovered } = useHover({ isDisabled: inputProps.disabled }, _ref);

  let updatedBorderColor = borderColorFromProps;
  if (isHovered) updatedBorderColor = hoverBorderColor;
  else if (isFocused) updatedBorderColor = focusBorderColor;
  else if (inputProps['aria-invalid']) updatedBorderColor = errorBorderColor;
  const focusStyle = {
    shadow: 3,
    shadowColor: '#2563EB',
  };

  return (
    <Box w={isFullWidth ? '100%' : 'auto'} {...layoutProps}>
      <Box
        ref={_ref}
        borderColor={updatedBorderColor}
        borderWidth={borderWidth}
        borderBottomWidth={borderBottomWidth}
        {...rem}
        {...(inputProps.disabled && newProps._isDisabledProps)}
        {...computedProps}
        {...(isFocused && Platform.OS === 'web' && focusStyle)}
        style={style}
      >
        {InputLeftElement ? (
          <Flex justify="center" align="center" left={0}>
            {InputLeftElement}
          </Flex>
        ) : null}
        {isFocused && label && (
          <Flex position="absolute">
            <Animated.View
              style={{
                transform: [{ translateY: slideAnim, translateX: 4 }],
              }}
            >
              <Flex {...newProps} nativeID={undefined} bg="transparent">
                <Box
                  bg="transparent"
                  color={updatedBorderColor}
                  fontSize={fontSize}
                  _text={_label}
                >
                  {label}
                  <Box
                    w="120%"
                    p="1px"
                    // bg="gray.50" // Todo: Get Background color and set it here to hide input border
                    position="absolute"
                    right="-10%"
                    bottom={`${
                      Math.floor(fontSize / 2) + (Platform.OS === 'ios' ? 1 : 0)
                    }px`}
                    zIndex={-1}
                  />
                </Box>
              </Flex>
            </Animated.View>
          </Flex>
        )}
        <StyledInput
          {...inputProps}
          {...newProps}
          accessibilityLabel={accessibilityLabel}
          fontSize={fontSize}
          backgroundColor="transparent"
          flex={1}
          secureTextEntry={type === 'password'}
          onKeyPress={(e: any) => {
            e.persist();
            props.onKeyPress && props.onKeyPress(e);
          }}
          onFocus={(e) => {
            slideOut();
            handleFocus(true, onFocus ? () => onFocus(e) : () => {});
          }}
          onBlur={(e) => {
            // TODO: animation not happening because of component rerender
            e.nativeEvent.text && slideIn();
            handleFocus(false, onBlur ? () => onBlur(e) : () => {});
          }}
          placeholder={isFocused && label ? '' : placeholder}
          placeholderTextColor={placeholderColor}
          editable={inputProps.disabled || inputProps.readOnly ? false : true}
          // borderRadius={50} //Remove variant props from StyledInput
          borderWidth={undefined}
          {...(Platform.OS === 'web'
            ? {
                cursor: inputProps.disabled ? 'not-allowed' : 'auto',
              }
            : {})}
          style={[
            Platform.OS === 'web' && {
              // @ts-ignore
              outline: 'none',
            },
          ]}
          ref={ref}
        />
        {InputRightElement ? (
          <Flex justify="center" align="center" right={0}>
            {InputRightElement}
          </Flex>
        ) : null}
      </Box>
    </Box>
  );
};

//-------------------------------- InputGroup and other Child components -------------------------------
export { InputRightAddon, InputGroup, InputLeftAddon };
export type { IInputProps };
export default React.memo(React.forwardRef(Input));
