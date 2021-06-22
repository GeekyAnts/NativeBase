import React, { useState } from 'react';
import { TextArea, Stack } from 'native-base';

export const Example = () => {
  const [textAreaValue, setTextAreaValue] = useState('Value Controlled');
  const demoValueControlledTextArea = (e: any) => {
    setTextAreaValue(e.currentTarget.value);
  };
  return (
    <Stack space={4} w="90%">
      <TextArea value={textAreaValue} onChange={demoValueControlledTextArea} />
    </Stack>
  );
};
