import React from 'react';
import { Hidden, Button, Image, useColorMode, Center } from 'native-base';

export const Example = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <Center>
      <Button
        colorScheme="coolGray"
        _light={{ _text: { color: 'white' } }}
        onPress={() => {
          toggleColorMode();
        }}
      >
        Change mode
      </Button>
      <Hidden colorMode="dark">
        <Center mt="5">
          <Image
            w="150"
            h="150"
            source={{
              uri:
                'https://images.unsplash.com/photo-1561566482-5fa7e82d88b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
            }}
            alt="image"
          />
        </Center>
      </Hidden>
      <Hidden colorMode="light">
        <Center mt="5">
          <Image
            w="150"
            h="150"
            source={{
              uri:
                'https://images.unsplash.com/photo-1590083948603-b270aff24cc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
            }}
            alt="image"
          />
        </Center>
      </Hidden>
    </Center>
  );
};
