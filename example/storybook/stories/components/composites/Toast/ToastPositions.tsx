import React from 'react';
import { Button, useToast, VStack, Center } from 'native-base';

export const Example = () => {
  const toast = useToast();

  return (
    <Center>
      <VStack space={2}>
        <Button
          onPress={() =>
            toast.show({
              title: 'Hello world',
              placement: 'bottom',
            })
          }
        >
          Bottom
        </Button>

        <Button
          onPress={() =>
            toast.show({
              title: 'Hello world',
              placement: 'top',
            })
          }
        >
          Top
        </Button>

        <Button
          onPress={() =>
            toast.show({
              title: 'Hello world',
              placement: 'top-left',
            })
          }
        >
          Top left
        </Button>

        <Button
          onPress={() =>
            toast.show({
              title: 'Hello world',
              placement: 'top-right',
              backgroundColor: 'pink.400',
            })
          }
        >
          Top right
        </Button>

        <Button
          onPress={() =>
            toast.show({
              title: 'Hello world',
              placement: 'bottom-left',
            })
          }
        >
          Bottom left
        </Button>

        <Button
          onPress={() =>
            toast.show({
              title: 'Hello world',
              placement: 'bottom-right',
            })
          }
        >
          Bottom right
        </Button>
      </VStack>
    </Center>
  );
};
