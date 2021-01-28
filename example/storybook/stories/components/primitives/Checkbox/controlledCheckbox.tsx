import React from 'react';
import { Checkbox, CheckboxGroup, Text } from 'native-base';
import type { ICheckboxValue } from '/src/components/primitives/Checkbox/props';

export default function ControlledCheckbox() {
  const [groupValues, setGroupValues] = React.useState<Array<ICheckboxValue>>(
    []
  );

  return (
    <CheckboxGroup onChange={setGroupValues} value={groupValues}>
      <Checkbox value="one">
        <Text>One</Text>
      </Checkbox>
      <Checkbox value="two">
        <Text>Two</Text>
      </Checkbox>
    </CheckboxGroup>
  );
}
