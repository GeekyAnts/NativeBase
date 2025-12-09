import React from 'react';
import { Button, Toast, Center } from '@bilwifi/native-base';

export const Example = () => {
  return (
    <Center>
      <Button
        onPress={() =>
          Toast.show({
            title: 'Hello world',
          })
        }
      >
        Show Toast
      </Button>
    </Center>
  );
};
