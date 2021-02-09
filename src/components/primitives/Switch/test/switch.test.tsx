import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { NativeBaseProvider } from 'native-base';

import { Switch } from '../..';
jest.useFakeTimers();
describe('Switch', () => {
  it('onToggle on Switch', () => {
    let { getAllByRole } = render(
      <NativeBaseProvider>
        <Switch />
      </NativeBaseProvider>
    );
    let switches = getAllByRole('switch');
    expect(switches[0].props.accessibilityState.checked).toBe(false);
    fireEvent.press(switches[0]);
    expect(switches[0].props.accessibilityState.checked).toBe(true);
  });

  it('can be default checked', () => {
    let { getAllByRole } = render(
      <NativeBaseProvider>
        <Switch defaultIsChecked />
      </NativeBaseProvider>
    );
    let switches = getAllByRole('switch');
    expect(switches[0].props.accessibilityState.checked).toBe(true);
  });

  it('can be disabled', () => {
    let { getAllByRole } = render(
      <NativeBaseProvider>
        <Switch isDisabled />
      </NativeBaseProvider>
    );
    let switches = getAllByRole('switch');
    expect(switches[0].props.accessibilityState.disabled).toBe(true);
  });
});
