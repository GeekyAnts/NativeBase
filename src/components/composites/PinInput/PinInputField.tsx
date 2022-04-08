import React from 'react';
import { Input } from '../../primitives/Input';
import type { IPinInputFieldProps, IPinInputContext } from './types';
import { PinInputContext } from './Context';
import { Platform } from 'react-native';
import { mergeRefs } from '../../../utils';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const PinInputFiled = (
  {
    fieldIndex = 0,
    defaultValue: pDefaultValue,
    ...props
  }: IPinInputFieldProps,
  ref?: any
) => {
  let {
    handleChange,
    value: cValue,
    setRefList,
    defaultValue: cDefaultValue,
    handleMultiValueChange,
    ...context
  }: IPinInputContext = React.useContext(PinInputContext);
  cDefaultValue = cDefaultValue && cDefaultValue[fieldIndex];
  let defaultValue = pDefaultValue || cDefaultValue;
  let value = cValue && cValue[fieldIndex];

  const keyPressHandler = (event: any) => {
    if (Platform.OS !== 'web') {
      if (event.nativeEvent.key >= 0 && event.nativeEvent.key <= 9) {
        handleChange && handleChange(event.nativeEvent.key, fieldIndex);
      } else if (event.nativeEvent.key === 'Backspace') {
        handleChange && handleChange('', fieldIndex);
      }
    }
  };
  const textChangeHandler = (value: any) => {
    // Also used to handle change for Android.
    handleMultiValueChange && handleMultiValueChange(value, fieldIndex);
  };
  const myRef = React.useRef(null);
  React.useEffect(() => {
    setRefList && setRefList(myRef, fieldIndex);
  }, [myRef, fieldIndex, setRefList]);

  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return (
    <Input
      //@ts-ignore
      ref={mergeRefs([myRef, ref])}
      {...context}
      {...props}
      onKeyPress={(event) => keyPressHandler(event)}
      onChangeText={(value) => textChangeHandler(value)}
      keyboardType="numeric"
      defaultValue={defaultValue}
      value={value}
    />
  );
};

export default React.memo(React.forwardRef(PinInputFiled));
