import React from 'react';
import { Button, useToast, VStack } from 'native-base';

export default function () {
  const { setToast } = useToast();
  return (
    <>
      <VStack space={2}>
        <Button
          onPress={() => {
            setToast({
              position: 'top',
              title: 'Top Toast',
            });
          }}
        >
          Top
        </Button>
        <Button
          onPress={() => {
            setToast({
              position: 'center',
              title: 'Center',
            });
          }}
        >
          Center
        </Button>
        <Button
          mx={2}
          onPress={() => {
            setToast({
              title: 'Bottom',
            });
          }}
        >
          Bottom
        </Button>
      </VStack>
    </>
  );
}
