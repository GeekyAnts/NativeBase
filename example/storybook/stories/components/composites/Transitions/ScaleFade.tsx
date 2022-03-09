import React from 'react';
import { ScaleFade, Button, Center } from 'native-base';
export const Example = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Center>
      <Button onPress={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Hide' : 'Show'}
      </Button>
      <ScaleFade in={isOpen}>
        <Center w="200" h="100" mt="7" bg="teal.500" rounded="md">
          ScalableFade
        </Center>
      </ScaleFade>
    </Center>
  );
};
