import React, { createContext } from 'react';
import { useCheckboxGroupState } from '@react-stately/checkbox';
import { useCheckboxGroup } from '@react-native-aria/checkbox';
import { View } from 'react-native';
import {
  FormControlContext,
  IFormControlContext,
} from '../../composites/FormControl';
import type { ICheckboxGroupProps } from './props';
import type { ICheckboxContext } from 'lib/typescript/components/primitives/Checkbox/props';

export let CheckboxGroupContext = createContext<ICheckboxContext | null>(null);

export function CheckboxGroup({
  size,
  colorScheme,
  ...props
}: ICheckboxGroupProps) {
  let { children } = props;
  let state = useCheckboxGroupState(props);
  let { groupProps } = useCheckboxGroup(props, state);
  const formControlContext: IFormControlContext = React.useContext(
    FormControlContext
  );
  return (
    <View {...groupProps}>
      <CheckboxGroupContext.Provider
        value={{
          size,
          colorScheme,
          ...formControlContext,
          state,
        }}
      >
        {children}
      </CheckboxGroupContext.Provider>
    </View>
  );
}

export default React.memo(CheckboxGroup);
