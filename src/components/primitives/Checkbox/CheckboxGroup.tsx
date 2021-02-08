import React, { createContext } from 'react';
import {
  CheckboxGroupState,
  useCheckboxGroupState,
} from '@react-stately/checkbox';
import { useCheckboxGroup } from '@react-native-aria/checkbox';
import { Text, View } from 'react-native';

export let CheckboxGroupContext = createContext<CheckboxGroupState | null>(
  null
);

export function CheckboxGroup(props: any) {
  let { children, label } = props;
  let state = useCheckboxGroupState(props);
  let { groupProps, labelProps } = useCheckboxGroup(props, state);

  return (
    <View {...groupProps}>
      {label && <Text {...labelProps}>{label}</Text>}
      <CheckboxGroupContext.Provider value={state}>
        {children}
      </CheckboxGroupContext.Provider>
    </View>
  );
}

export default React.memo(CheckboxGroup);
