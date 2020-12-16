import { useControllableProp } from '../../../hooks';
import React from 'react';
import type {
  ICheckboxGroupProps,
  ICheckboxValue,
  IUseCheckboxGroupReturnType,
} from './props';

export function useCheckboxGroup(
  props: ICheckboxGroupProps,
  _state: any,
  _ref?: any
): IUseCheckboxGroupReturnType {
  const { value: propValue, defaultValue, onChange: onChangeProp } = props;

  const [stateValue, setStateValue] = React.useState(defaultValue || []);

  const [isControlled, value] = useControllableProp(propValue, stateValue);

  const onChange = (checkboxValue: ICheckboxValue, isChecked: boolean) => {
    const valuesSet = new Set(value);
    if (isChecked) valuesSet.add(checkboxValue);
    else valuesSet.delete(checkboxValue);

    if (!isControlled) {
      setStateValue([...valuesSet]);
    }

    onChangeProp && onChangeProp([...valuesSet]);
  };

  return {
    checkboxGroupProps: {
      onChange,
      values: value,
      // No checkbox group role
      // https://reactnative.dev/docs/accessibility#accessibilityrole
      // accessibilityRole: 'checkboxgroup',
    },
  };
}
