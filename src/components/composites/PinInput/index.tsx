import React from 'react';
import { HStack } from '../../primitives/Stack';
import { useThemeProps } from '../../../hooks';
import type {
  IPinInputProps,
  IPinInputFieldProps,
  IPinInputContext,
} from './props';
import { FormControlContext, IFormControlContext } from '../FormControl';
import { Platform } from 'react-native';
import isNil from 'lodash/isNil';
import { PinInputContext } from './Context';

const PinInput = ({ children, ...props }: IPinInputProps) => {
  const {
    manageFocus,
    defaultValue,
    value,
    space,
    onChange,
    ...newProps
  } = useThemeProps('PinInput', props);
  const formControlContext: IFormControlContext = React.useContext(
    FormControlContext
  );
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
    setPinInputValue(temp.join(''));
    onChange && onChange(temp.join(''));
    if (!isNil(newValue) && manageFocus && fieldIndex + 1 < RefList.length)
      RefList[fieldIndex + 1].current.focus();
    if (isNil(newValue) && manageFocus && fieldIndex - 1 > -1)
      RefList[fieldIndex - 1].current.focus();
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
    if (Platform.OS === 'android' && newValue) {
      const temp = pinInputValue ? [...pinInputValue] : [];
      temp[fieldIndex] = JSON.stringify(parseInt(newValue, 10) % 10);
      if (newValue && manageFocus && fieldIndex + 1 < RefList.length)
        RefList[fieldIndex + 1].current.focus();
      // Backward focus is handled by handle change function.
      setPinInputValue(temp.join(''));
      onChange && onChange(temp.join(''));
    }
  };

  const indexSetter = (allChildren: JSX.Element | JSX.Element[]) => {
    let pinInputFiledCounter = -1;
    return React.Children.map(allChildren, (child: JSX.Element) => {
      if (child.type.name !== 'PinInputFiled') return child;
      else {
        pinInputFiledCounter++;
        return React.cloneElement(
          child,
          {
            fieldIndex: pinInputFiledCounter,
          },
          child.props.children
        );
      }
    });
  };

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
        <HStack flexDirection="row" space={space}>
          {indexSetter(children)}
        </HStack>
      )}
    </PinInputContext.Provider>
  );
};

export default React.memo(PinInput);
export { default as PinInputField } from './PinInputField';
export type { IPinInputProps, IPinInputFieldProps, IPinInputContext };
