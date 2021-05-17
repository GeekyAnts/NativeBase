import React from 'react';
import { Checkbox } from 'native-base';

export const Example = () => {
  const [groupValues, setGroupValues] = React.useState<Array<string>>([]);

  return (
    <Checkbox.Group onChange={setGroupValues} value={groupValues}>
      <Checkbox value="one" my={2}>
        One
      </Checkbox>
      <Checkbox value="two">Two</Checkbox>
    </Checkbox.Group>
  );
};
