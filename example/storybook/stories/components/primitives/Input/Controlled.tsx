import React from 'react';
import { Input } from 'native-base';

export const Example = () => {
  const [value, setValue] = React.useState('');
  const handleChange = (event) => setValue(event.target.value);
  return (
    <Input
      width="100%"
      // mx={3}
      value={value}
      onChange={handleChange}
      placeholder="Value Controlled Input"
    />
  );
};
