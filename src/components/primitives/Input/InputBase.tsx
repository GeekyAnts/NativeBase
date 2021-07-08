import React, { memo, forwardRef, useContext, useEffect } from 'react';
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
import { useToken } from '../../../hooks';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { useHover } from '@react-native-aria/interactions';
import { mergeRefs } from '../../../utils';
import { FormContext } from '../../composites/FormControl/FormContext';
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
    inputProps,
    wrapperRef,
    ...props
  }: IInputProps & {
    disableFocusHandling?: boolean;
    inputProps: any;
  },
  ref: any
) => {
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

  const {
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
    ...themedProps
  } = usePropsResolution('Input', {
    ...inputThemeProps,
    ...props,
  });

  const _ref = React.useRef(null);
  const { isHovered } = useHover({}, _ref);
  // return <input type="text" />;
  // return (
  //   <TextInput
  //     onKeyPress={(e) => {
  //       e.continuePropagation();
  //     }}
  //   />
  // );
  const FormContextValues: any = useContext(FormContext);
  useEffect(() => {
    debugger;
    if (FormContextValues) {
      FormContextValues.register(_ref, 123, 'Nahi chl ra');
      FormContextValues.setCounter(FormContextValues.counter + 1);
    }
    console.log('inside input', FormContextValues);
    // let temp: any = [];
    // console.log(FormContextValues.refs.length, 'refs Length before');
    // console.log(temp.length, 'temp length before');
    // temp = [...FormContextValues.refs, { childRef: _ref, id: 123 }];
    // console.log(temp.length, 'temp length');
    // FormContextValues.setRefs(temp);
    // console.log(FormContextValues.refs.length, 'refs Length');
  }, []);

  return (
    <>
      <StyledInput
        {...inputProps}
        secureTextEntry={type === 'password'}
        accessible
        accessibilityLabel={ariaLabel || accessibilityLabel}
        editable={isDisabled || isReadOnly ? false : true}
        w={isFullWidth ? '100%' : undefined}
        {...themedProps}
        {...(isHovered && _hover)}
        {...(isFocused && _focus)}
        {...(isDisabled && _disabled)}
        {...(isInvalid && _invalid)}
        placeholderTextColor={useToken('colors', placeholderTextColor)}
        selectionColor={useToken('colors', selectionColor)}
        underlineColorAndroid={useToken('colors', underlineColorAndroid)}
        onKeyPress={(e: any) => {
          e.persist();
          // e.continuePropagation();
          onKeyPress && onKeyPress(e);
          // if (FormContextValues.onSubmit) {
          //   FormContextValues.onSubmit();
          // }
          // console.log(e.nativeEvent);
        }}
        onSubmitEditing={(e) => {
          // console.log('onSubmitEditing = ', e.nativeEvent);
          FormContextValues.setCounter(100);
        }}
        onFocus={(e) => {
          handleFocus(true, onFocus ? () => onFocus(e) : () => {});
        }}
        onBlur={(e) => {
          handleFocus(false, onBlur ? () => onBlur(e) : () => {});
        }}
        {...(Platform.OS === 'web'
          ? {
              disabled: isDisabled,
              cursor: isDisabled ? 'not-allowed' : 'auto',
            }
          : {})}
        ref={mergeRefs([ref, _ref, wrapperRef])}
      />
      <TextInput value={`${FormContextValues.counter}`} />
    </>
  );
};

export default memo(forwardRef(InputBase));
