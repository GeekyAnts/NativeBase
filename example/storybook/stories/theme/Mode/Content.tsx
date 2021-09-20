import React from 'react';

import {
  Heading,
  useColorMode,
  Button,
  HStack,
  Avatar,
  Center,
} from 'native-base';

export const Content = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Center
      height="100%"
      width="100%"
      _light={{ bg: 'gray.200' }}
      _dark={{ bg: 'gray.800' }}
    >
      <Heading>I'm a Heading</Heading>
      <Button
        colorScheme={colorMode === 'light' ? 'blue' : 'red'}
        onPress={toggleColorMode}
      >
        Change mode
      </Button>
      <HStack space={2} mt={3}>
        <Avatar
          source={{
            uri:
              'https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg',
          }}
        >
          Ankur
        </Avatar>
        <Avatar
          source={{
            uri:
              'https://pbs.twimg.com/profile_images/1260766060401188864/ySJfMIbZ_400x400.jpg',
          }}
        >
          Rohit
        </Avatar>
      </HStack>
    </Center>
  );
};
