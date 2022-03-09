import React from 'react';
import { SlideFade, Box, Button, Center } from 'native-base';
export const Example = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Box>
      <Button onPress={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Hide' : 'Show'}
      </Button>
      <SlideFade offsetX={-100} in={isOpen}>
        <Center>
          <Box
            position="absolute"
            top="4"
            w="200"
            h="100"
            justifyContent="center"
            _text={{ color: 'white', textAlign: 'center' }}
            mt="4"
            bg="teal.500"
            rounded="md"
          >
            SlideFade
          </Box>
        </Center>
      </SlideFade>
    </Box>
  );
};
