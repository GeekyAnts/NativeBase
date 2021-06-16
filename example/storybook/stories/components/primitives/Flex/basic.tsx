import React from 'react';
import { Flex, Center, Heading, Button, Box } from 'native-base';

export function Example() {
  const [direction, setDirection] = React.useState('column');
  return (
    <Center>
      <Box>
        <Heading size="md" mb={3}>
          Primary Shades
        </Heading>
      </Box>
      <Button
        my={3}
        onPress={() => setDirection(direction === 'row' ? 'column' : 'row')}
      >
        Change Flex Direction
      </Button>
      <Box>
        {/* @ts-ignore */}
        <Flex direction={direction}>
          <Center size={16} bg="primary.100" _text={{ color: 'gray.800' }}>
            100
          </Center>
          <Center size={16} bg="primary.200" _text={{ color: 'white' }}>
            200
          </Center>
          <Center bg="primary.300" size={16} _text={{ color: 'white' }}>
            300
          </Center>
          <Center size={16} bg="primary.400" _text={{ color: 'white' }}>
            400
          </Center>
        </Flex>
      </Box>
    </Center>
  );
}
