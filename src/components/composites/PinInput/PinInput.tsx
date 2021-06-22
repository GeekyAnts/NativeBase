import React from 'react';
import { HStack } from '../../primitives/Stack';
import { useThemeProps } from '../../../hooks';
import type { IPinInputProps } from './types';
import { useFormControlContext } from '../FormControl';
import { Platform } from 'react-native';
import { PinInputContext } from './Context';
import { themeTools } from '../../../theme';

const PinInput = ({ children, ...props }: IPinInputProps, ref?: any) => {
  let [padding, remProps] = themeTools.extractInObject(props, [
    'p',
    'px',
    'py',
    'pt',
    'pb',
    'pl',
    'pr',
  ]);
  const {
    manageFocus,
    defaultValue,
    value,
    space,
    onChange,
    ...newProps
  } = useThemeProps('PinInput', remProps);
  const formControlContext = useFormControlContext();

  const RefList: Array<any> = [];
  const setRefList = (ref: any, index: number) => {
    RefList[index] = ref;
  };
  const [pinInputValue, setPinInputValue] = React.useState(
    value || defaultValue
  );
  const handleChange = (newValue: string, fieldIndex: number) => {
    let temp = (pinInputValue && [...pinInputValue]) || [];
    temp[fieldIndex] = newValue;
    value === undefined && setPinInputValue(temp.join(''));
    onChange && onChange(temp.join(''));
    if (newValue === '' && manageFocus && fieldIndex - 1 > -1)
      RefList[fieldIndex - 1].current.focus();
    else if (newValue && manageFocus && fieldIndex + 1 < RefList.length)
      RefList[fieldIndex + 1].current.focus();
    return temp.join('');
  };
  const handleMultiValueChange = (newValue: string, fieldIndex: number) => {
    const pinFieldLength = RefList.length;
    const newValueLength = newValue.length;
    if (newValueLength >= pinFieldLength && newValueLength > 2) {
      let splicedValue = newValue ? [...newValue] : [];
      splicedValue.splice(pinFieldLength);
      RefList[pinFieldLength - 1].current.focus();
      setPinInputValue(splicedValue.join(''));
      onChange && onChange(splicedValue.join(''));
    }

    if (Platform.OS !== 'ios') {
      let temp = pinInputValue ? [...pinInputValue] : [];
      if (newValue === '') {
        // Handling Backward focus.
        temp = temp.filter((_n, i) => i !== fieldIndex);
        if (manageFocus && fieldIndex - 1 > -1)
          RefList[fieldIndex - 1].current.focus();
      } else {
        temp[fieldIndex] = JSON.stringify(parseInt(newValue, 10) % 10);
        if (manageFocus && fieldIndex + 1 < RefList.length)
          RefList[fieldIndex + 1].current.focus();
      }
      value === undefined && setPinInputValue(temp.join(''));
      onChange && onChange(temp.join(''));
    }
  };

  const indexSetter = (allChildren: JSX.Element | JSX.Element[]) => {
    let pinInputFiledCounter = -1;
    return React.Children.map(allChildren, (child: JSX.Element) => {
      pinInputFiledCounter++;
      return React.cloneElement(
        child,
        {
          fieldIndex: pinInputFiledCounter,
        },
        child.props.children
      );
    });
  };

  React.useEffect(() => {
    if (value !== undefined && value != pinInputValue) setPinInputValue(value);
  }, [value, pinInputValue, setPinInputValue]);

  return (
    <PinInputContext.Provider
      value={{
        ...formControlContext,
        ...newProps,
        setRefList,
        handleChange,
        handleMultiValueChange,
        value: pinInputValue,
      }}
    >
      {children && (
        <HStack flexDirection="row" space={space} {...padding} ref={ref}>
          {indexSetter(children)}
        </HStack>
      )}
    </PinInputContext.Provider>
  );
};

export default React.memo(React.forwardRef(PinInput));
