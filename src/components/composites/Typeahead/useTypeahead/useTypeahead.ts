import { useTypeaheadReducer } from './reducer';
import React, { useEffect } from 'react';
import * as stateChangeTypes from './types';
import type { AccessibilityRole } from 'react-native';
import { Keyboard } from 'react-native';
import { dropdownDefaultStateValues, getDefaultValue } from './utils';

function isControlledProp(props: any, key: string) {
  return props[key] !== undefined;
}

import type { IUseTypeaheadProps } from './types';

export function useTypeahead(props: IUseTypeaheadProps) {
  let defaultValues = { ...dropdownDefaultStateValues };
  defaultValues.isOpen = getDefaultValue(props, 'isOpen');

  const [state, dispatch] = React.useReducer(
    useTypeaheadReducer,
    defaultValues
  );

  const dispatchWithProps = (object: any) => {
    dispatch({ ...object, props });
  };

  const { inputValue, isOpen } = state;

  const {
    items,
    onInputValueChange,
    onSelectedItemChange,
    selectedItem,
    itemToString,
  } = props;

  const isControlled = isControlledProp(props, 'selectedItem');

  useEffect(() => {
    if (isControlled) {
      dispatch({
        type: stateChangeTypes.ControlledPropUpdatedSelectedItem,
        inputValue: itemToString(selectedItem),
      });
    }
  }, [selectedItem, isControlled, itemToString]);

  const onChangeText = (text: string) => {
    onInputValueChange?.({ inputValue: text });
    dispatchWithProps({ type: stateChangeTypes.InputChange, inputValue: text });
  };

  const handleItemSelect = (item: any, index: number) => {
    onSelectedItemChange?.(item);
    dispatchWithProps({ type: stateChangeTypes.ItemClick, index });
    Keyboard.dismiss();
  };

  const getMenuItemProps = (item: any, index: number) => {
    return {
      onPress: () => handleItemSelect(item, index),
      accessible: true,
      accessiblityRole: 'menuitem' as AccessibilityRole,
    };
  };

  const getMenuProps = () => {
    return {
      accessible: true,
      accessibilityRole: 'menu' as AccessibilityRole,
      accessibilityHint: `Showing ${items.length} records`,
    };
  };

  const getToggleButtonProps = () => {
    return {
      onPress: () => {
        dispatchWithProps({ type: stateChangeTypes.ToggleButtonClick });
      },
    };
  };

  const getInputProps = (propInputVal?: any, propOnchangeText?: any) => {
    return {
      onChangeText: propInputVal ? propOnchangeText : onChangeText,
      value: propInputVal ? propInputVal : inputValue,
      accessibilityRole: 'combobox' as AccessibilityRole,
      accessibilityLabel: 'Typeahead input',
      accessibilityState: {
        expanded: isOpen,
      },
    };
  };

  return {
    getInputProps,
    getMenuItemProps,
    getMenuProps,
    getToggleButtonProps,
    isOpen,
  };
}
