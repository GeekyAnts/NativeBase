import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { Radio } from '..';
import { Text } from '../..';
import { NativeBaseProvider } from '../../../../core/NativeBaseProvider';
function RadiosGroup() {
  const [, setValue] = React.useState<any>('one');
  return (
    <Radio.Group
      defaultValue="1"
      name="myRadioGroup"
      onChange={(nextValue: any) => {
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
    </Radio.Group>
  );
}
describe('RadioGroup', () => {
  it('onChange and default on RadioGroup', () => {
    let { getAllByRole, getByText } = render(
      <NativeBaseProvider
        initialWindowMetrics={{
          frame: { x: 0, y: 0, width: 0, height: 0 },
          insets: { top: 0, left: 0, right: 0, bottom: 0 },
        }}
      >
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
      <NativeBaseProvider
        initialWindowMetrics={{
          frame: { x: 0, y: 0, width: 0, height: 0 },
          insets: { top: 0, left: 0, right: 0, bottom: 0 },
        }}
      >
        <Radio.Group defaultValue="1" name="myRadioGroup">
          <Radio value="1">
            <Text mx={2}>First</Text>
          </Radio>
          <Radio value="2" isDisabled>
            <Text mx={2}>Second</Text>
          </Radio>
          <Radio value="3">
            <Text mx={2}>Third</Text>
          </Radio>
        </Radio.Group>
      </NativeBaseProvider>
    );
    let second = getAllByRole('radio');
    expect(second[1].props.accessibilityState.disabled).toBe(true);
  });
});
