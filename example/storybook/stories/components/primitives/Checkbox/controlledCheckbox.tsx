import React from 'react';
import { Checkbox, Text } from 'native-base';

export default function ControlledCheckbox() {
  const [groupValues, setGroupValues] = React.useState<Array<string>>([]);

  return (
    <Checkbox.Group onChange={setGroupValues} value={groupValues}>
      <Checkbox value="one" my={1}>
        <Text mx={1}>One</Text>
      </Checkbox>
      <Checkbox value="two">
        <Text mx={1}>Two</Text>
      </Checkbox>
    </Checkbox.Group>
  );
}
