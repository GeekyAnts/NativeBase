import React from 'react';
import { Factory, Button } from 'native-base';
import { TextInput } from 'react-native';

export default function () {
  const NBInput = Factory(TextInput);
  const inputRef = React.useRef(null);
  return (
    <>
      <NBInput
        ref={inputRef}
        height={10}
        width={100}
        border={1}
        borderColor="cyan.400"
      />
      <Button
        onPress={() => {
          // @ts-ignore
          inputRef?.current?.focus();
        }}
      >
        Set Focus
      </Button>
    </>
  );
}
