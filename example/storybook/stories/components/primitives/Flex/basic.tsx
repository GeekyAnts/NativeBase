import React from 'react';
import { Flex, Center, Heading, Button } from 'native-base';

export default function () {
  const [direction, setDirection]: any = React.useState('column');
  return (
    <Center flex={1}>
      <Heading mb={3}>Primary Shades</Heading>
      <Button
        my={3}
        onPress={() => setDirection(direction === 'row' ? 'column' : 'row')}
      >
        Change Flex Direction
      </Button>
      <Flex flexDirection={direction}>
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
    </Center>
  );
}
