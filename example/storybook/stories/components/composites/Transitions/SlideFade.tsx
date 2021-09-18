import React from 'react';
import { PresenceTransition, Button, Center } from 'native-base';
export const Example = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button onPress={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Hide' : 'Show'}
      </Button>
      <PresenceTransition
        visible={isOpen}
        initial={{ translateX: -20, opacity: 0 }}
        animate={{ translateX: 0, opacity: 1 }}
      >
        <Center
          w="200"
          h="100"
          _text={{ color: 'white' }}
          mt="4"
          bg="teal.500"
          rounded="md"
        >
          SlideFade
        </Center>
      </PresenceTransition>
    </>
  );
};
