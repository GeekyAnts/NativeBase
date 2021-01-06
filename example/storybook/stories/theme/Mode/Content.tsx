import React from 'react';

import {
  Heading,
  useColorMode,
  Button,
  HStack,
  Avatar,
  Center,
  useColorModeValue,
} from 'native-base';

export const Content = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Center
      height="100%"
      width="100%"
      bg={useColorModeValue('gray.200', 'gray.800')}
    >
      <Heading>I'm a Heading</Heading>
      <Button
        colorScheme={colorMode === 'light' ? 'blue' : 'red'}
        onPress={() => {
          toggleColorMode();
        }}
      >
        Change mode
      </Button>
      <HStack space={2} mt={3}>
        <Avatar
          name="Ankur"
          borderWidth={2}
          source={{
            uri:
              'https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg',
          }}
        />
        <Avatar
          name="Rohit"
          borderWidth={2}
          source={{
            uri:
              'https://pbs.twimg.com/profile_images/1260766060401188864/ySJfMIbZ_400x400.jpg',
          }}
        />
      </HStack>
    </Center>
  );
};
