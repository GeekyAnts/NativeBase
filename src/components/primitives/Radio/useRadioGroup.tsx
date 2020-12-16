import type { IRadioValue, IRadioGroupProps } from './props';
import React from 'react';
import { useControllableProp } from '../../../hooks';
import type { IUseRadioGroupReturnType } from './props';

export function useRadioGroup(
  props: IRadioGroupProps,
  _state: any
): IUseRadioGroupReturnType {
  const {
    onChange: onChangeProp,
    value: valueProp,
    defaultValue,
    name,
  } = props;

  const [valueState, setValue] = React.useState<IRadioValue>(
    defaultValue || ''
  );

  const [isControlled, value] = useControllableProp(valueProp, valueState);

  const onChange = (nextValue: IRadioValue) => {
    if (!isControlled) {
      setValue(nextValue);
    }
    onChangeProp?.(nextValue);
  };

  return {
    radioGroupProps: {
      accessibilityRole: 'radiogroup',
      onChange,
      value,
      name,
    },
  };
}
