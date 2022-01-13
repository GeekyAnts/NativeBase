import React from 'react';
import { Input, Box } from 'native-base';

export const Example = () => {
  const [value, setValue] = React.useState('');
  const handleChange = (text: string) => setValue(text);
  return (
    <Box alignItems="center">
      <Input
        value={value}
        w="75%"
        maxW="300px"
        onChangeText={handleChange}
        placeholder="Value Controlled Input"
      />
    </Box>
  );
};
