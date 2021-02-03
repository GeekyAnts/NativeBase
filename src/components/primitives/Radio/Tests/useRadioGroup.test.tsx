import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { NativeBaseProvider } from 'native-base';
import RadioGroup from '../RadioGroup';
import { Radio } from '..';
import { Text } from '../..';
import type { IRadioValue } from '../props';
function RadiosGroup() {
  const [value, setValue] = React.useState<IRadioValue>('one');
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
  it('handles defaults', () => {
    jest.useFakeTimers();
    let { getAllByRole, getByText } = render(
      <NativeBaseProvider>
        <RadiosGroup />
      </NativeBaseProvider>
    );
    // let radioGroup = getAllByRole('radiogroup');
    let radios = getAllByRole('radio');
    expect(radios.length).toBe(3);
    expect(radios[0].props.accessibilityState.checked).toBe(true);
    expect(radios[1].props.accessibilityState.checked).toBe(false);
    expect(radios[2].props.accessibilityState.checked).toBe(false);
    let second = getByText('Second');
    fireEvent.press(second);
    expect(radios[0].props.accessibilityState.checked).toBe(false);
  });
  it('can have a default value', () => {
    let { getAllByRole } = render(
      <NativeBaseProvider>
        <RadioGroup name="myRadioGroup">
          <Radio value="1">
            <Text mx={2}>First</Text>
          </Radio>
          <Radio value="2" defaultIsChecked={true}>
            <Text mx={2}>Second</Text>
          </Radio>
          <Radio value="3">
            <Text mx={2}>Third</Text>
          </Radio>
        </RadioGroup>
      </NativeBaseProvider>
    );
    // expect(getAllByRole('radio')[1].props.accessibilityState.checked).toBe(
    //   true
    // );
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
  // it('colorScheme', () => {
  //   let { getAllByRole, debug } = render(
  //     <NativeBaseProvider>
  //       <RadioGroup defaultValue="1" name="myRadioGroup">
  //         <Radio value="1" colorScheme="blue">
  //           <Text mx={2}>First</Text>
  //         </Radio>
  //         <Radio value="2" colorScheme="red">
  //           <Text mx={2}>Second</Text>
  //         </Radio>
  //         <Radio value="3">
  //           <Text mx={2}>Third</Text>
  //         </Radio>
  //       </RadioGroup>
  //     </NativeBaseProvider>
  //   );
  //   let radio = getAllByRole('radio');
  //   // debug();
  //   fireEvent.press(radio[0]);
  //   expect(radio[0].props.accessibilityState.disabled).toBe(true);
  //   expect(radio[1].props.accessibilityState.disabled).toBe(false);
  //   expect(radio[2].props.accessibilityState.disabled).toBe(false);
  // });
  // it('sizes', () => {
  //   let { getAllByRole, debug } = render(
  //     <NativeBaseProvider>
  //       <RadioGroup defaultValue="1" name="myRadioGroup">
  //         <Radio value="1" size="sm">
  //           <Text mx={2}>First</Text>
  //         </Radio>
  //         <Radio value="2" size="md">
  //           <Text mx={2}>Second</Text>
  //         </Radio>
  //         <Radio value="3" size="lg">
  //           <Text mx={2}>Third</Text>
  //         </Radio>
  //       </RadioGroup>
  //     </NativeBaseProvider>
  //   );
  //   debug();
  //   let radios = getAllByRole('radio');
  //   expect(radios[0].props.accessibilityState.disabled).toBe(false);
  //   expect(radios[1].props.accessibilityState.disabled).toBe(false);
  //   expect(radios[2].props.accessibilityState.disabled).toBe(false);
  // });
});
