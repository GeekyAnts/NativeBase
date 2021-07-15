import React from 'react';
import { Card, Avatar, VStack, Heading, Text } from 'native-base';

export function Example() {
  return (
    <Card width={64} p={6} py={8}>
      <VStack alignItems="center" space={5}>
        <Avatar
          source={{
            uri:
              'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          }}
          size="2xl"
        >
          SS
        </Avatar>
        <Heading
          mx="auto"
          size="lg"
          fontWeight={500}
          _light={{ color: 'blueGray.700' }}
          _dark={{ color: 'blueGray.100' }}
        >
          About Me
        </Heading>
        <Text
          textAlign="center"
          fontSize={12}
          _light={{ color: 'blueGray.500' }}
          _dark={{ color: 'gray.50' }}
        >
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </Text>
      </VStack>
    </Card>
  );
}
