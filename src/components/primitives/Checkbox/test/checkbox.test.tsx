import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { NativeBaseProvider } from '../../../../core/NativeBaseProvider';
import { Checkbox } from '..';
import { Text } from '../..';

function CheckBoxGroup() {
  const [groupValue, setGroupValue] = React.useState(['Item 1 ', 'Item 3 ']);
  return (
    <Checkbox.Group
      colorScheme="green"
      defaultValue={groupValue}
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
    </Checkbox.Group>
  );
}

function CheckBox(group: any) {
  const [groupValues, setGroupValues] = React.useState<Array<any>>([]);
  return group ? (
    <Checkbox.Group onChange={setGroupValues} value={groupValues}>
      <Checkbox value="one">
        <Text>One</Text>
      </Checkbox>
      <Checkbox
        value="two"
        isIndeterminate
        onChange={() => setGroupValues([...groupValues, 'two'])}
      >
        <Text>Two</Text>
      </Checkbox>
    </Checkbox.Group>
  ) : (
    <>
      <Checkbox
        value="one"
        onChange={() => {
          setGroupValues([...groupValues, 'one']);
        }}
      >
        <Text>One</Text>
      </Checkbox>
      <Checkbox
        value="two"
        isIndeterminate
        onChange={() => setGroupValues([...groupValues, 'two'])}
      >
        <Text>Two</Text>
      </Checkbox>
    </>
  );
}

describe('CheckBoxGroup', () => {
  it('handles defaults and onChange on checkBoxGroup', () => {
    const { getAllByRole } = render(
      <NativeBaseProvider
        initialWindowMetrics={{
          frame: { x: 0, y: 0, width: 0, height: 0 },
          insets: { top: 0, left: 0, right: 0, bottom: 0 },
        }}
      >
        <CheckBoxGroup />
      </NativeBaseProvider>
    );
    const checkbox = getAllByRole('checkbox');
    expect(checkbox.length).toBe(4);
    expect(checkbox[0].props.accessibilityState.checked).toBe(true);
    expect(checkbox[1].props.accessibilityState.checked).toBe(false);
    expect(checkbox[2].props.accessibilityState.checked).toBe(true);
    expect(checkbox[3].props.accessibilityState.checked).toBe(false);
    fireEvent.press(checkbox[1]);
    expect(checkbox[1].props.accessibilityState.checked).toBe(true);
  });
  it('can be disabled on checkBox', () => {
    const { getAllByRole } = render(
      <NativeBaseProvider
        initialWindowMetrics={{
          frame: { x: 0, y: 0, width: 0, height: 0 },
          insets: { top: 0, left: 0, right: 0, bottom: 0 },
        }}
      >
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
    const checkbox = getAllByRole('checkbox');
    expect(checkbox.length).toBe(4);
    expect(checkbox[1].props.accessibilityState.disabled).toBe(true);
  });
  it('is checked on checkBox', () => {
    const { getAllByRole } = render(
      <NativeBaseProvider
        initialWindowMetrics={{
          frame: { x: 0, y: 0, width: 0, height: 0 },
          insets: { top: 0, left: 0, right: 0, bottom: 0 },
        }}
      >
        <Checkbox value="Item 1 " isChecked>
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
    const checkbox = getAllByRole('checkbox');
    expect(checkbox.length).toBe(4);
    expect(checkbox[0].props.accessibilityState.checked).toBe(true);
  });

  /****   inDeterminant is not yet implemented in checkbox ****/

  // it('inDeterminant on checkBoxGroup', () => {
  //   const { getAllByRole } = render(
  //     <NativeBaseProvider
  //       initialWindowMetrics={{
  //         frame: { x: 0, y: 0, width: 0, height: 0 },
  //         insets: { top: 0, left: 0, right: 0, bottom: 0 },
  //       }}
  //     >
  //       <CheckBox group={true} />
  //     </NativeBaseProvider>
  //   );
  //   const checkbox = getAllByRole('checkbox');
  //   expect(checkbox.length).toBe(2);
  //   expect(checkbox[1].props.accessibilityState.checked).toBe('mixed');
  // });

  // it('inDeterminant on checkBox', () => {
  //   const { getAllByRole } = render(
  //     <NativeBaseProvider
  //       initialWindowMetrics={{
  //         frame: { x: 0, y: 0, width: 0, height: 0 },
  //         insets: { top: 0, left: 0, right: 0, bottom: 0 },
  //       }}
  //     >
  //       <CheckBox group={false} />
  //     </NativeBaseProvider>
  //   );
  //   const checkbox = getAllByRole('checkbox');
  //   expect(checkbox.length).toBe(2);
  //   fireEvent.press(checkbox[1]);
  //   expect(checkbox[1].props.accessibilityState.checked).toBe('mixed');
  // });

  it('onChange on checkBox', () => {
    const { getAllByRole } = render(
      <NativeBaseProvider
        initialWindowMetrics={{
          frame: { x: 0, y: 0, width: 0, height: 0 },
          insets: { top: 0, left: 0, right: 0, bottom: 0 },
        }}
      >
        <CheckBox />
      </NativeBaseProvider>
    );
    const checkbox = getAllByRole('checkbox');
    expect(checkbox.length).toBe(2);
    fireEvent.press(checkbox[0]);
    expect(checkbox[0].props.accessibilityState.checked).toBe(true);
  });
});
