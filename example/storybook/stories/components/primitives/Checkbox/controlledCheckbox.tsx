import React from 'react';
import { Checkbox } from 'native-base';

export const Example = () => {
  const [groupValues, setGroupValues] = React.useState([]);

  return (
    <Checkbox.Group
      onChange={setGroupValues}
      value={groupValues}
      accessibilityLabel="choose numbers"
    >
      <Checkbox value="one" my={2}>
        UX Research
      </Checkbox>
      <Checkbox value="two">Software Development</Checkbox>
    </Checkbox.Group>
  );
};
