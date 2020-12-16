import type {
  ICheckboxProps,
  ICheckboxContext,
  IUseCheckboxReturnType,
} from './props';
import React from 'react';
import { useControllableProp } from '../../../hooks';

export function useCheckbox(
  props: ICheckboxProps,
  state: ICheckboxContext,
  _ref?: any
): IUseCheckboxReturnType {
  let {
    isChecked: isCheckedProp,
    value,
    defaultIsChecked,
    onChange: onChangeProp,
    isIndeterminate,
    isDisabled,
    children,
    accessibilityLabel,
    accessibilityHint,
  } = props;

  let { value: checkboxGroupValue, onChange } = state;

  let hasChildren = children != null;
  let hasAccessibilityLabel = accessibilityLabel != null;

  if (!hasChildren && !hasAccessibilityLabel) {
    console.warn(
      'If you do not provide children, you must specify an accessibilityLabel for accessibility'
    );
  }

  const isControlledByGroup = checkboxGroupValue !== undefined;
  const isControlledByProp = isCheckedProp !== undefined;

  let derivedIsChecked;

  if (isControlledByGroup) {
    // @ts-ignore - Already checking for undefined in isControlledByGroup
    derivedIsChecked = checkboxGroupValue.includes(value);
  }

  if (isControlledByProp) {
    derivedIsChecked = isCheckedProp;
  }

  const [checkedState, setCheckedState] = React.useState(
    defaultIsChecked || false
  );

  const [isControlled, isChecked] = useControllableProp(
    derivedIsChecked,
    checkedState
  );

  const pressHandler = () => {
    let nextIsChecked = !isChecked;
    if (!isControlled) {
      setCheckedState(nextIsChecked);
    }

    if (!isIndeterminate) {
      onChange && onChange(value, nextIsChecked);
      onChangeProp && onChangeProp(value, nextIsChecked);
    }
  };

  return {
    inputProps: {
      checked: isChecked,
      onPress: pressHandler,
      disabled: isDisabled,
      accessibilityLabel,
      accessibilityRole: 'checkbox',
      accessible: true,
      accessibilityHint,
      accessibilityState: {
        disabled: isDisabled,
        checked: isChecked,
      },
    },
  };
}
