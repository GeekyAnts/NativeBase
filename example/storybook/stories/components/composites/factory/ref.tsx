import React from 'react';
import { Stack, Factory, Button } from 'native-base';
import { TextInput } from 'react-native';

export const Example = () => {
  const NBInput = Factory(TextInput);
  const inputRef: any = React.useRef(null);
  return (
    <Stack space={4}>
      <NBInput
        placeholder="Click on the button"
        ref={inputRef}
        p={2}
        border={1}
        borderColor="cyan.400"
        borderRadius="md"
      />
      <Button
        colorScheme="emerald"
        onPress={() => {
          inputRef?.current?.focus();
        }}
      >
        Set Focus
      </Button>
    </Stack>
  );
};
