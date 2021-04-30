import React from 'react';
import { Button, useToast, VStack } from 'native-base';

const ToastPositions = () => {
  const toast = useToast();

  return (
    <VStack space={2}>
      <Button
        onPress={() =>
          toast.show({
            title: 'Hello world',
            position: 'bottom',
          })
        }
      >
        Bottom
      </Button>

      <Button
        onPress={() =>
          toast.show({
            title: 'Hello world',
            position: 'top',
          })
        }
      >
        Top
      </Button>

      <Button
        onPress={() =>
          toast.show({
            title: 'Hello world',
            position: 'top-left',
          })
        }
      >
        Top left
      </Button>

      <Button
        onPress={() =>
          toast.show({
            title: 'Hello world',
            position: 'top-right',
          })
        }
      >
        Top right
      </Button>

      <Button
        onPress={() =>
          toast.show({
            title: 'Hello world',
            position: 'bottom-left',
          })
        }
      >
        Bottom left
      </Button>

      <Button
        onPress={() =>
          toast.show({
            title: 'Hello world',
            position: 'bottom-right',
          })
        }
      >
        Bottom right
      </Button>
    </VStack>
  );
};

export default ToastPositions;
