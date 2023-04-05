import React from 'react';
import { Button, Center, PresenceTransition } from 'native-base';

export const Example = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Center>
      <Button onPress={() => setIsOpen(!isOpen)} mb={20}>
        {isOpen ? 'Hide' : 'Show'}
      </Button>
      <PresenceTransition
        visible={isOpen}
        initial={{ rotate: '0deg' }}
        animate={{ rotate: '180deg', transition: { duration: 250 } }}
        loop
      >
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
      </PresenceTransition>
    </Center>
  );
};
