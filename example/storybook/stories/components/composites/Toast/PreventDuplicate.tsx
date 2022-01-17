import React from 'react';
import { Button, useToast, Center } from 'native-base';

export function Example() {
  const toast = useToast();
  const id = 'test-toast';
  return (
    <Center>
      <Button
        onPress={() => {
          if (!toast.isActive(id)) {
            toast.show({
              id,
              title: "Hey! You can't create a duplicate toast",
            });
          }
        }}
      >
        Click me!
      </Button>
    </Center>
  );
}
