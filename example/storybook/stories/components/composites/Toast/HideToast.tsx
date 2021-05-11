import React from 'react';
import { Button, useToast } from 'native-base';

export const Example = () => {
  const toast = useToast();

  const id = 'test-id';
  return (
    <>
      <Button
        onPress={() =>
          toast.show({
            title: 'Toast check',
            id,
          })
        }
      >
        Show Toast
      </Button>

      <Button onPress={() => toast.close(id)}>Hide toast</Button>
    </>
  );
};
