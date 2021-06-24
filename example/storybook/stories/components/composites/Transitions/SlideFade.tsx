import React from 'react';
import { PresenceTransition, Button, Box } from 'native-base';
export const Example = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button onPress={() => setIsOpen(!isOpen)}>
        Click Me to {isOpen ? 'hide' : 'show'}
      </Button>
      <PresenceTransition
        visible={isOpen}
        initial={{ translateX: -20, opacity: 0 }}
        animate={{ translateX: 0, opacity: 1 }}
      >
        <Box
          p="40px"
          _text={{ color: 'white' }}
          mt="4"
          bg="teal.500"
          rounded="md"
        >
          PresenceTransition
        </Box>
      </PresenceTransition>
    </>
  );
};
