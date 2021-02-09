import React from 'react';
import { Checkbox, Text } from 'native-base';

export default function ControlledCheckbox() {
  const [groupValues, setGroupValues] = React.useState<Array<any>>([]);

  return (
    <Checkbox.Group onChange={setGroupValues} value={groupValues}>
      <Checkbox value="one">
        <Text>One</Text>
      </Checkbox>
      <Checkbox value="two">
        <Text>Two</Text>
      </Checkbox>
    </Checkbox.Group>
  );
}
