import React, { forwardRef, useState } from 'react';
import { TextInput, Animated, Platform } from 'react-native';
import { Hoverable } from './../../../utils';
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
import Text from '../Text';
import Flex from '../Flex';
import type { IInputProps } from './types';
import { InputRightAddon, InputGroup, InputLeftAddon } from './InputGroup';
import { useThemeProps } from '../../../hooks';
import { themeTools } from '../../../theme';

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
    isInvalid,
    isDisabled,
    placeholder,
    errorMessage,
    // isRequired,
    isReadOnly,
    isFullWidth,
    onFocus,
    onBlur,
    ariaLabel,
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
    label,
    ...props
  }: IInputProps,
  ref: any
) => {
  const layoutProps = {
    w,
    width,
    m,
    mr,
    ml,
    mt,
    mb,
  };
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = (focusState: boolean, callback: any) => {
    setIsFocused(focusState);
    callback();
  };

  const {
    borderColor: borderColorFromProps,
    fontSize,
    borderWidth,
    focusBorderColor,
    errorBorderColor,
    errorMessageColor,
    hoverBorderColor,
    borderBottomWidth,
    ...newProps
  } = useThemeProps('Input', props);

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

  return (
    <Box w={isFullWidth ? '100%' : 'auto'} {...layoutProps}>
      <Hoverable>
        {(isHovered: boolean) => {
          let updatedBorderColor = borderColorFromProps;
          if (isHovered) updatedBorderColor = hoverBorderColor;
          else if (isFocused) updatedBorderColor = focusBorderColor;
          else if (isInvalid) updatedBorderColor = errorBorderColor;
          const hoverStyle = {
            shadow: 3,
            shadowColor: 'blue',
          };

          return (
            <Box
              borderColor={updatedBorderColor}
              borderWidth={borderWidth}
              borderBottomWidth={borderBottomWidth}
              {...rem}
              {...(isDisabled ? newProps._isDisabledProps : {})}
              {...computedProps}
              {...(isHovered ? hoverStyle : {})}
              style={style}
            >
              {InputLeftElement ? (
                <Flex justify="center" align="center" left={0}>
                  {InputLeftElement}
                </Flex>
              ) : null}
              {isFocused && (
                <Flex position="absolute">
                  <Animated.View
                    style={{
                      transform: [{ translateY: slideAnim, translateX: 4 }],
                    }}
                  >
                    <Flex {...newProps} bg="transparent">
                      <Box
                        bg="transparent"
                        color={updatedBorderColor}
                        fontSize={fontSize}
                      >
                        <Box
                          w="120%"
                          p="2px"
                          bg="gray.50"
                          position="absolute"
                          right="-10%"
                          bottom={`${1 + Math.floor(fontSize / 2)}px`}
                        ></Box>
                        {label}
                      </Box>
                    </Flex>
                  </Animated.View>
                </Flex>
              )}
              <StyledInput
                {...newProps}
                fontSize={fontSize}
                backgroundColor="transparent"
                flex={1}
                secureTextEntry={type === 'password'}
                accessible
                accessibilityLabel={ariaLabel || accessibilityLabel}
                onKeyPress={(e: any) => {
                  e.persist();
                }}
                onFocus={() => {
                  slideOut();
                  handleFocus(true, onFocus ? onFocus : () => {});
                }}
                onBlur={(e) => {
                  // TODO: animation not happening because of component rerender
                  e.nativeEvent.text && slideIn();
                  handleFocus(false, onBlur ? onBlur : () => {});
                }}
                placeholder={isFocused && label ? '' : placeholder}
                editable={isDisabled || isReadOnly ? false : true}
                // borderRadius={50} //Remove variant props from StyledInput
                borderWidth={undefined}
                {...(Platform.OS === 'web'
                  ? {
                      disabled: isDisabled,
                      cursor: isDisabled ? 'not-allowed' : 'auto',
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
          );
        }}
      </Hoverable>

      {isInvalid && errorMessage ? (
        <Text
          ml={2}
          color={errorMessageColor ? errorMessageColor : 'danger.600'}
        >
          {errorMessage}
        </Text>
      ) : null}
    </Box>
  );
};

//-------------------------------- InputGroup and other Child components -------------------------------
export { InputRightAddon, InputGroup, InputLeftAddon };
export type { IInputProps };
export default React.memo(forwardRef<any, IInputProps>(Input));
