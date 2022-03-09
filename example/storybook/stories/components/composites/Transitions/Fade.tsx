import React from 'react';
import { Button, Center, Fade } from 'native-base';

export const Example = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Center>
      <Button onPress={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Hide' : 'Show'}
      </Button>
      <Fade in={isOpen}>
        <Center
          mt="7"
          bg="teal.500"
          rounded="md"
          w="200"
          h="100"
          _text={{ color: 'white' }}
        >
          Fade
        </Center>
      </Fade>
    </Center>
  );
};
