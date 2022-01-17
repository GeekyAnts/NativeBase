import React, { useState } from 'react';
import { TextArea, Box } from 'native-base';

export const Example = () => {
  const [textAreaValue, setTextAreaValue] = useState('Value Controlled');
  const demoValueControlledTextArea = (e: any) => {
    setTextAreaValue(e.currentTarget.value);
  };
  return (
    <Box alignItems="center">
      <TextArea
        value={textAreaValue}
        onChange={demoValueControlledTextArea}
        w="75%"
        maxW="300"
      />
    </Box>
  );
};
