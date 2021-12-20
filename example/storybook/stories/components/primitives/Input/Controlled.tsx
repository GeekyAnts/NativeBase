import React from 'react';
import { Input } from 'native-base';

export const Example = () => {
  const [value, setValue] = React.useState('');
  const handleChange = (text: string) => setValue(text);
  return (
    <Input
      value={value}
      w={{ base: '75%', md: '25%' }}
      onChangeText={handleChange}
      placeholder="Value Controlled Input"
    />
  );
};
