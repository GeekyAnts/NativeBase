import React from 'react';
import { render } from '@testing-library/react-native';
import { NativeBaseProvider } from 'native-base';

import Switch from '../index';

jest.useFakeTimers();
describe('Switch', () => {
  it('can be default checked', () => {
    let { getAllByRole } = render(
      <NativeBaseProvider>
        <Switch defaultIsChecked />
      </NativeBaseProvider>
    );
    let switches = getAllByRole('switch');
    expect(switches[0].props.value).toBe(true);
  });

  it('can be disabled', () => {
    let { getAllByRole } = render(
      <NativeBaseProvider>
        <Switch isDisabled />
      </NativeBaseProvider>
    );
    let switches = getAllByRole('switch');
    expect(switches[0].props.disabled).toBe(true);
  });
});
