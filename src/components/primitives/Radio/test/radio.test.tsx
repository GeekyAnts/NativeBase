import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { NativeBaseProvider } from 'native-base';
import RadioGroup from '../RadioGroup';
import { Radio } from '..';
import { Text } from '../..';
function RadiosGroup() {
  const [, setValue] = React.useState<any>('one');
  return (
    <RadioGroup
      defaultValue="1"
      name="myRadioGroup"
      onChange={(nextValue) => {
        setValue(nextValue);
      }}
    >
      <Radio value="1">
        <Text mx={2}>First</Text>
      </Radio>
      <Radio value="2">
        <Text mx={2}>Second</Text>
      </Radio>
      <Radio value="3">
        <Text mx={2}>Third</Text>
      </Radio>
    </RadioGroup>
  );
}
describe('RadioGroup', () => {
  it('onChange and default on RadioGroup', () => {
    let { getAllByRole, getByText } = render(
      <NativeBaseProvider>
        <RadiosGroup />
      </NativeBaseProvider>
    );
    let radios = getAllByRole('radio');
    expect(radios.length).toBe(3);
    expect(radios[0].props.accessibilityState.checked).toBe(true);
    expect(radios[1].props.accessibilityState.checked).toBe(false);
    expect(radios[2].props.accessibilityState.checked).toBe(false);
    let second = getByText('Second');
    fireEvent.press(second);
    expect(radios[0].props.accessibilityState.checked).toBe(false);
  });

  it('can be disabled', () => {
    let { getAllByRole } = render(
      <NativeBaseProvider>
        <RadioGroup defaultValue="1" name="myRadioGroup">
          <Radio value="1">
            <Text mx={2}>First</Text>
          </Radio>
          <Radio value="2" isDisabled>
            <Text mx={2}>Second</Text>
          </Radio>
          <Radio value="3">
            <Text mx={2}>Third</Text>
          </Radio>
        </RadioGroup>
      </NativeBaseProvider>
    );
    let second = getAllByRole('radio');
    expect(second[1].props.accessibilityState.disabled).toBe(true);
  });
});
