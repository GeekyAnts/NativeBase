import React from 'react';
import { Button, Box, PresenceTransition } from 'native-base';

export const Example = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button onPress={() => setIsOpen(!isOpen)}>
        Click Me to {isOpen ? 'hide' : 'show'}
      </Button>
      <PresenceTransition
        visible={isOpen}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 250 } }}
      >
        <Box
          p="40px"
          mt="4"
          bg="teal.500"
          rounded="md"
          _text={{ color: 'white' }}
        >
          Fade
        </Box>
      </PresenceTransition>
    </>
  );
};
