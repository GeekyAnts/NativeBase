import React from 'react';
import { Fade, Button, Box } from 'native-base';
export default function () {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button onPress={() => setIsOpen(!isOpen)}>
        Click Me to {isOpen ? 'hide' : 'show'}
      </Button>
      <Fade in={isOpen}>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="teal.500"
          rounded="md"
          _text={{ color: 'white' }}
        >
          Fade
        </Box>
      </Fade>
    </>
  );
}
