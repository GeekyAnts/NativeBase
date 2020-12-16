import React, { forwardRef, useState } from 'react';
import { TextInput } from 'react-native';
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
import type { IInputProps } from './IInputProps';
import { InputRightAddon, InputGroup, InputLeftAddon } from './InputGroup';
import { usePropsConfig } from '../../../hooks';
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
    focusBorderColor,
    errorBorderColor,
    errorMessageColor,
    ariaLabel,
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

  const focusProps = isFocused
    ? {
        borderWidth: 1,
        borderColor: focusBorderColor ? focusBorderColor : 'default.200',
      }
    : {};

  const isInvalidProps = isInvalid
    ? {
        borderColor: errorBorderColor ? errorBorderColor : 'danger.600',
      }
    : {};

  const newProps = usePropsConfig('Input', props);

  const computedProps = {
    display: 'flex',
    flexDirection: 'row',
    ...focusProps,
    ...isInvalidProps,
    h,
    height,
  };
  let [padding, rem] = themeTools.extractInObject(newProps, [
    'p',
    'px',
    'py',
    'pt',
    'pb',
    'pl',
    'pr',
  ]);
  return (
    <Box w={isFullWidth ? '100%' : 'auto'} {...layoutProps}>
      <Box
        {...rem}
        {...(isDisabled ? newProps._isDisabledProps : {})}
        {...computedProps}
        style={style}
      >
        {InputLeftElement ? (
          <Flex justify="center" align="center" p={2} left={0}>
            {InputLeftElement}
          </Flex>
        ) : null}
        <StyledInput
          {...newProps}
          {...padding}
          flex={1}
          secureTextEntry={type === 'password'}
          accessible
          accessibilityLabel={ariaLabel}
          onKeyPress={(e: any) => {
            e.persist();
          }}
          onFocus={() => {
            handleFocus(true, onFocus ? onFocus : () => {});
          }}
          onBlur={() => {
            handleFocus(false, onBlur ? onBlur : () => {});
          }}
          placeholder={placeholder}
          editable={isDisabled || isReadOnly ? false : true}
          // borderRadius={50} //Remove variant props from StyledInput
          borderWidth={undefined}
          ref={ref}
        />
        {InputRightElement ? (
          <Flex justify="center" align="center" p={2} right={0}>
            {InputRightElement}
          </Flex>
        ) : null}
      </Box>

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
export default forwardRef<any, IInputProps>(Input);
