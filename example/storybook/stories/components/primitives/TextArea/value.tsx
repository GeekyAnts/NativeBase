import React, { useState } from 'react';
import { TextArea, Box } from 'native-base';

export const Example = () => {
  const [textAreaValue, setTextAreaValue] = useState('Value Controlled');
  return (
    <Box alignItems="center" w="100%">
      <TextArea
        value={textAreaValue}
        onChange={(e: any) => setTextAreaValue(e.currentTarget.value)} // for web
        onChangeText={(text: any) => setTextAreaValue(text)} // for android and ios
        w="75%"
        maxW="300"
      />
    </Box>
  );
};
