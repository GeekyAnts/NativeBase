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

const LocalWrapper = ({ children }: any) => {
  return (
    <Center
      height="100%"
      width="100%"
      bg={useColorModeValue('gray.200', 'gray.800')}
    >
      {children}
    </Center>
  );
};

export default function () {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <LocalWrapper>
      <Heading> I'm a Heading</Heading>
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
          name="Sanket Sahu"
          borderWidth={2}
          source={{
            uri:
              'https://pbs.twimg.com/profile_images/1188747996843761665/8CiUdKZW_400x400.jpg',
          }}
        />
        <Avatar
          name="Gaurav Guha"
          borderWidth={2}
          source={{
            uri:
              'https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg',
          }}
        />
      </HStack>
    </LocalWrapper>
  );
}
