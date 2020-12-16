import React, { useState } from 'react';
import { TextArea, Heading, Center, Text, Stack } from 'native-base';

export default function () {
  const [textAreaValue, setTextAreaValue] = useState('Value Controlled');
  const demoValueControlledTextArea = (e: any) => {
    setTextAreaValue(e.currentTarget.value);
  };
  return (
    <Stack space={4}>
      <Center>
        <Heading>TextArea</Heading>
      </Center>
      <Center>
        <Text>Value Controlled TextArea</Text>
      </Center>
      <TextArea
        w="90%"
        value={textAreaValue}
        onChange={demoValueControlledTextArea}
      />
    </Stack>
  );
}
