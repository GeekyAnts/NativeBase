import React from 'react';
import { Button, useToast, VStack } from 'native-base';

export default function () {
  const toast = useToast();
  return (
    <>
      <VStack space={2}>
        <Button
          onPress={() => {
            toast({
              position: 'top',
              title: 'Top Toast',
            });
          }}
        >
          Top
        </Button>
        <Button
          onPress={() => {
            toast({
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
            toast({
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
