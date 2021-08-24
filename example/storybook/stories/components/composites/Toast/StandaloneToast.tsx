import React from 'react';
import { Button, Toast } from 'native-base';

export const Example = () => {
  return (
    <Button
      onPress={() =>
        Toast.show({
          title: 'Hello world',
        })
      }
    >
      Bottom
    </Button>
  );
};
