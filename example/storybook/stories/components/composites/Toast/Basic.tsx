import React from 'react';
import { Button, useToast, Center } from 'native-base';

export const Example = () => {
  const toast = useToast();

  return (
    <Center>
      <Button
        onPress={() =>
          toast.show({
            description: 'Hello world',
          })
        }
      >
        Show Toast
      </Button>
    </Center>
  );
};
