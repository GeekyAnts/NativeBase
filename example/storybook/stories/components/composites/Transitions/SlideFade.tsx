import React from 'react';
import { PresenceTransition, Box, Button, Center } from 'native-base';
export const Example = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Box>
      <Button onPress={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Hide' : 'Show'}
      </Button>
      <PresenceTransition
        visible={isOpen}
        initial={{ translateX: -200, opacity: 0 }}
        animate={{ translateX: -75, opacity: 1 }}
      >
        <Center
          position="absolute"
          top="4"
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
    </Box>
  );
};
