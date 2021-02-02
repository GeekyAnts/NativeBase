import React from 'react';
import Input from '../../primitives/Input';
import type { IPinInputFieldProps, IPinInputContext } from './props';
import { PinInputContext } from './Context';

const PinInputFiled = ({
  fieldIndex = 0,
  defaultValue: pDefaultValue,
  ...props
}: IPinInputFieldProps) => {
  let {
    handleChange,
    value: cValue,
    setRefList,
    defaultValue: cDefaultValue,
    handleMultiValueChange,
    ...context
  }: IPinInputContext = React.useContext(PinInputContext);
  cDefaultValue = cDefaultValue && cDefaultValue[fieldIndex];
  cValue = cValue && cValue[fieldIndex];

  const keyPressHandler = (event: any) => {
    if (event.nativeEvent.key >= 0 && event.nativeEvent.key <= 9) {
      handleChange && handleChange(event.nativeEvent.key, fieldIndex);
    } else if (event.nativeEvent.key === 'Backspace') {
      handleChange && handleChange('', fieldIndex);
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

  return (
    <Input
      ref={myRef}
      {...context}
      {...props}
      onKeyPress={(event) => keyPressHandler(event)}
      onChangeText={(value) => textChangeHandler(value)}
      keyboardType="numeric"
      defaultValue={pDefaultValue || cDefaultValue}
      value={cValue}
    />
  );
};

export default React.memo(PinInputFiled);
