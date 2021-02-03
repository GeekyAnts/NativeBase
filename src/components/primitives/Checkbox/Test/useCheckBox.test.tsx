import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { NativeBaseProvider } from 'native-base';
import { Checkbox, CheckboxGroup } from '..';
import { Text } from '../..';

function CheckBoxGroup() {
  const [groupValue, setGroupValue] = React.useState(['Item 1 ', 'Item 3 ']);
  return (
    <CheckboxGroup
      colorScheme="green"
      defaultValue={groupValue}
      //@ts-ignore
      onChange={(values) => {
        setGroupValue(values || []);
      }}
    >
      <Checkbox value="Item 1 ">
        <Text mx={2}>Item 1</Text>
      </Checkbox>
      <Checkbox value="Item 2 ">
        <Text mx={2}>Item 2</Text>
      </Checkbox>
      <Checkbox value="Item 3 ">
        <Text mx={2}>Item 3</Text>
      </Checkbox>
      <Checkbox colorScheme="orange" value="Indeterminate Item ">
        <Text mx={2}>Indeterminate Item</Text>
      </Checkbox>
    </CheckboxGroup>
  );
}
describe('CheckBoxGroup', () => {
  it('handles defaults and onChange on checkBoxGroup', () => {
    let { getAllByRole } = render(
      <NativeBaseProvider>
        <CheckBoxGroup />
      </NativeBaseProvider>
    );
    let checkbox = getAllByRole('checkbox');
    expect(checkbox.length).toBe(4);
    expect(checkbox[0].props.accessibilityState.checked).toBe(true);
    expect(checkbox[1].props.accessibilityState.checked).toBe(false);
    expect(checkbox[2].props.accessibilityState.checked).toBe(true);
    expect(checkbox[3].props.accessibilityState.checked).toBe(false);
    fireEvent.press(checkbox[1]);
    expect(checkbox[1].props.accessibilityState.checked).toBe(true);
  });
  it('can be disabled on checkBox', () => {
    let { getAllByRole } = render(
      <NativeBaseProvider>
        <Checkbox value="Item 1 ">
          <Text mx={2}>Item 1</Text>
        </Checkbox>
        <Checkbox value="Item 2 " isDisabled>
          <Text mx={2}>Item 2</Text>
        </Checkbox>
        <Checkbox value="Item 3 ">
          <Text mx={2}>Item 3</Text>
        </Checkbox>
        <Checkbox colorScheme="orange" value="Indeterminate Item ">
          <Text mx={2}>Indeterminate Item</Text>
        </Checkbox>
      </NativeBaseProvider>
    );
    let checkbox = getAllByRole('checkbox');
    expect(checkbox.length).toBe(4);
    console.log(checkbox[0].props.accessibilityState);
    expect(checkbox[1].props.accessibilityState.disabled).toBe(true);
    // expect(checkbox[2].props.accessibilityState.checked).toBe(true);
    // expect(checkbox[3].props.accessibilityState.checked).toBe(false);
    // fireEvent.press(checkbox[1]);
    // expect(checkbox[1].props.accessibilityState.checked).toBe(true);
  });
});
